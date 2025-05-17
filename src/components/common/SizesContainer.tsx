import { Sizes } from '@/types/items'
import React from 'react'

type Props = {
    sizes: Sizes[],
    setSelectedSize: (val: string) => void;
    selectedSize: string
}

const SizesContainer = ({ sizes, setSelectedSize, selectedSize }: Props) => {
    return (
        <div>
            <p className="text-sm font-medium mb-1">Choose Sizes</p>
            <div className="flex gap-2">
                {sizes.map((size) => (
                    <button
                        key={size.id}
                        className={`px-6 py-3 rounded-full text-sm ${selectedSize === size.value ? "bg-black text-white" : "bg-[#f0f0f0] text-black cursor-pointer"}`}
                        onClick={() => setSelectedSize(size.value)}
                    >
                        {size.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SizesContainer;