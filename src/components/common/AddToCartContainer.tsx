import React from 'react'
import Button from './Button';
import QuantityContainer from './QuantityContainer';

type Props = {
    quantity: number,
    setQuantity: (val: number) => void;
}

const AddToCartContainer = ({ quantity, setQuantity }: Props) => {
    return (
        <div className="flex items-center gap-4">
            <QuantityContainer quantity={quantity} setQuantity={setQuantity} />
            <Button text="Add to Cart" className="h-12 text-white xl:w-80" />
        </div>
    )
}

export default AddToCartContainer;