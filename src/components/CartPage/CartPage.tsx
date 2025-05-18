"use client";

import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Button, QuantityContainer } from "../common";
import Image from "next/image";
import { PiTagLight } from "react-icons/pi";
import EmptyCart from "./EmptyCart";
import Link from "next/link";

const initialCartItems = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        size: "Large",
        color: "White",
        price: 145,
        quantity: 1,
        image: "/items/shirt-3.png"
    },
    {
        id: 2,
        name: "Checkered Shirt",
        size: "Medium",
        color: "Red",
        price: 180,
        quantity: 1,
        image: "/items/shirt-2.png"
    },
    {
        id: 3,
        name: "Skinny Fit Jeans",
        size: "Large",
        color: "Blue",
        price: 240,
        quantity: 1,
        image: "/items/jense-1.png"
    },
];
const CartPage = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [promoCode, setPromoCode] = useState("");

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [deliveryFee, setDeliveryFee] = useState(15);
    const discount = subtotal * 0.2;
    const total = subtotal - discount + deliveryFee;

    const updateQuantity = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((prev) => {
            const updatedItems = prev.filter((item) => item.id !== id);

            if (updatedItems.length === 0) {
                setDeliveryFee(0);
            }
            return updatedItems;
        });
    };
    return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
                <h1 className="text-2xl font-bold font-secondry">Your Cart</h1>
                {cartItems && cartItems.length > 0 ? <div className="flex flex-col space-y-3 border border-gray-300 rounded-lg px-4">
                    {cartItems.map((item, index) => (
                        <>
                            <div key={item.id} className="flex justify-between items-center gap-4 p-4 rounded-lg">
                                <div className="flex space-x-3">
                                    <Image src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" width={96} height={96} />
                                    <div className="flex-1">
                                        <h2 className="font-semibold">{item.name}</h2>
                                        <p className="text-sm text-gray-600">Size: {item.size}</p>
                                        <p className="text-sm text-gray-600">Color: {item.color}</p>
                                        <p className="mt-1 font-medium">${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between items-end space-y-6">
                                    <button onClick={() => removeItem(item.id)} className="text-red-500 ml-4 cursor-pointer">
                                        <FaTrashAlt />
                                    </button>
                                    <QuantityContainer
                                        quantity={item.quantity}
                                        setQuantity={(delta) => updateQuantity(item.id, delta)}
                                    />
                                </div>
                            </div>
                            <hr className={`opacity-10 ${cartItems.length - 1 === index ? 'hidden' : ''}`} />
                        </>
                    ))}
                </div> :
                    <EmptyCart />
                }
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm space-y-3">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-red-500">
                    <span>Discount (-20%)</span>
                    <span>-${discount.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(0)}</span>
                </div>
                <div className="mt-4 flex gap-2">
                    <label htmlFor="" className="flex items-center rounded-full px-4 py-3 h-12 bg-[#f0f0f0] outline-none">
                        <PiTagLight />
                        <input
                            type="text"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            placeholder="Add promo code"
                            className="rounded-full px-2 outline-none w-full"
                        />
                    </label>
                    <Button text="Apply" className="text-white" />
                </div>
                <Link href={'/billing'}>
                    <Button text="Go to Checkout →" className="text-white w-full" />
                </Link>
            </div>
        </div>
    )
}

export default CartPage;