"use client"

import { useState } from "react";
import { Button, PriceRangeSlider, SizesContainer } from "../common"
import { Sizes } from "@/types/items";

const Filters = () => {
    const [selectedSize, setSelectedSize] = useState("l");

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
    }, {
        id: 6,
        label: "XXXL",
        value: "xxxl"
    }];
    return (
        <aside className="w-full md:w-1/4 p-4 space-y-6 bg-white rounded-md shadow-sm hidden lg:flex lg:flex-col gap-3">
            <h2 className="font-semibold text-lg">Filters</h2>

            <div>
                <h3 className="font-medium mb-1">Category</h3>
                <ul className="space-y-1">
                    {["T-Shirts", "Shirts", "Jeans", "Jackets", "Hoodies"].map(item => (
                        <li key={item}>
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="accent-black" />
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-medium mb-1">Price</h3>
                <PriceRangeSlider />
            </div>

            <div>
                <h3 className="font-medium mb-1">Colors</h3>
                <div className="flex gap-2 flex-wrap">
                    {["#000", "#fff", "#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff"].map(color => (
                        <span key={color} className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }}></span>
                    ))}
                </div>
            </div>

            <div>
                <SizesContainer sizes={sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
            </div>

            <div>
                <h3 className="font-medium mb-1">Dress Style</h3>
                <ul className="space-y-1">
                    {["Casual", "Party", "Gym", "Formal"].map(style => (
                        <li key={style}>
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="accent-black" />
                                {style}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <Button text="Apply Filter" className="text-white w-full" />
        </aside>
    )
}

export default Filters