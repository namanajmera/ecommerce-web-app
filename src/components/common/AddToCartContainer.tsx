import React from 'react'
import Button from './Button';
import { BiMinus, BiPlus } from 'react-icons/bi';

type Props = {
    quantity: number,
    setQuantity: (val: number) => void;
}

const AddToCartContainer = ({ quantity, setQuantity }: Props) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex justify-between items-center bg-[#f0f0f0] rounded-[3.88rem] px-5 py-4 xl:w-[10.62rem] h-[3.25rem]">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <BiMinus size={16} className="cursor-pointer" />
                </button>
                <span className="px-4">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                    <BiPlus size={16} className="cursor-pointer" />
                </button>
            </div>
            <Button text="Add to Cart" className="h-12 text-white xl:w-80" />
        </div>
    )
}

export default AddToCartContainer;