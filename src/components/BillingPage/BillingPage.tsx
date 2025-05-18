"use client"
import { useState } from "react";
import { Button } from "../common";
import Image from "next/image";
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
const BillingPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        companyName: '',
        address: '',
        apartment: '',
        city: '',
        phone: '',
        email: '',
        saveInfo: true,
    });

    const [paymentMethod, setPaymentMethod] = useState('cod');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const [cartItems] = useState(initialCartItems);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Billing Form */}
            <div>
                <h2 className="text-2xl font-semibold mb-6 font-secondry">Billing Details</h2>
                <div className="space-y-4">
                    <input name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                    <input name="phone" placeholder="Phone Number*" value={formData.phone} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                    <input name="email" placeholder="Email Address*" value={formData.email} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                    <input name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                    <input name="address" placeholder="Street Address*" value={formData.address} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                    <input name="apartment" placeholder="Apartment, floor, etc. (optional)" value={formData.apartment} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />
                    <input name="city" placeholder="Town/City*" value={formData.city} onChange={handleChange} className="w-full border rounded-md px-4 py-2" />

                    <label className="flex items-center space-x-2 mt-4">
                        <input type="checkbox" name="saveInfo" checked={formData.saveInfo} onChange={handleChange} className="accent-red-500" />
                        <span className="text-sm">Save this information for faster check-out next time</span>
                    </label>
                </div>
            </div>

            {/* Right: Summary */}
            <div className="border-l pl-8">
                <div className="space-y-4">
                    <div className="w-full max-w-lg mx-auto p-4 space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b pb-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <Image src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" width={96} height={96} />
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500">
                                            Size: {item.size} | Color: {item.color}
                                        </p>
                                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="text-right font-semibold">${item.price}</div>
                            </div>
                        ))}

                        <div className="flex justify-between text-lg font-semibold pt-4 border-t">
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </div>
                    </div>

                    <hr />
                    <div className="space-y-2 mt-4">

                        <label className="flex items-center space-x-2">
                            <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                            <span>Cash on delivery</span>
                        </label>
                    </div>
                    <Link href={'/thankyou'}>
                        <Button text="Place Order" className="text-white" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BillingPage;