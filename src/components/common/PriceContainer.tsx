import React from 'react'

type Props = {
    price: number,
    originalPrice: number | null,
    discount: string | null,
}

const PriceContainer = ({ discount, originalPrice, price }: Props) => {
    return (
        <div className="flex items-center space-x-3">
            <span className="text-xl font-semibold text-black">${price}</span>
            {originalPrice && (
                <span className="text-xl font-semibold text-gray-400 line-through">
                    ${originalPrice}
                </span>
            )}
            {discount && (
                <span className="text-sm font-medium bg-red-100 text-red-500 rounded-full px-3 py-0.5">
                    -{discount}
                </span>
            )}
        </div>
    )
}

export default PriceContainer;