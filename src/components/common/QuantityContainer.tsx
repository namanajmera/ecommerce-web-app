import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi';

type Props = {
    quantity: number,
    setQuantity: (val: number) => void;
}

const QuantityContainer = ({ quantity, setQuantity }: Props) => {
    return (
        <div className="flex justify-between items-center bg-[#f0f0f0] rounded-full p-2">
            <button onClick={() => setQuantity(-1)}>
                <BiMinus size={16} className="cursor-pointer" />
            </button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => setQuantity(1)}>
                <BiPlus size={16} className="cursor-pointer" />
            </button>
        </div>
    )
}

export default QuantityContainer;