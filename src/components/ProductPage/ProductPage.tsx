"use client"

import Image from "next/image";
import { useState } from "react";
import { Sizes } from "@/types/items";
import { AddToCartContainer, PriceContainer, SizesContainer, StarRating } from "../common";
import Tabs from "./Tabs";

export default function ProductPage() {
    const [selectedColor, setSelectedColor] = useState("#4b4b2f");
    const [selectedSize, setSelectedSize] = useState("l");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('Product Details');

    const tabs = ['Product Details', 'Rating & Reviews', 'FAQs'];
    const colors = ["#4b4b2f", "#2b3d41", "#343f59"];
    const sizes: Sizes[] = [{
        id: 1,
        label: "S",
        value: "s"
    },
    {
        id: 2,
        label: "M",
        value: "m"
    }, {
        id: 3,
        label: "L",
        value: "l"
    }, {
        id: 4,
        label: "XL",
        value: "xl"
    }, {
        id: 5,
        label: "XXL",
        value: "xxl"
    }];

    const handleQuantity = (val: number) => {
        setQuantity((prev) => Math.max(1, prev + val))
    }

    return (
        <>
            <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto">
                {/* Left side images */}
                <div className="flex gap-4 h-full">
                    <div className="flex flex-col gap-3 justify-between">
                        {["/items/shirt-1.png", "/items/shirt-1.png", "/items/shirt-1.png"].map((src, i) => (
                            <div key={i} className="border rounded-md overflow-hidden h-1/3">
                                <Image src={src} alt="Thumbnail" width={80} height={80} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                    <div className="w-80 h-96 rounded-md overflow-hidden">
                        <Image src="/items/shirt-1.png" alt="Main Shirt" width={320} height={384} className="object-cover w-full h-full" />
                    </div>
                </div>

                {/* Right side content */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-2xl font-bold font-secondry">ONE LIFE GRAPHIC T-SHIRT</h1>
                    <div className="flex items-center gap-1">
                        <StarRating rating={4.5} />
                        <span className="text-sm text-gray-500 ml-2">4.5/5</span>
                    </div>

                    <PriceContainer discount={'40%'} originalPrice={300} price={260} />

                    <p className="text-gray-600">
                        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                    </p>
                    <hr className="opacity-10" />
                    <div>
                        <p className="text-sm font-medium mb-1">Select Colors</p>
                        <div className="flex gap-2">
                            {colors.map((color, idx) => (
                                <button
                                    key={idx}
                                    className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300 cursor-pointer"}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <hr className="opacity-10" />

                    <SizesContainer sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                    <hr className="opacity-10" />
                    <AddToCartContainer quantity={quantity} setQuantity={handleQuantity} />
                </div>

            </div>
            <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
    );
}
