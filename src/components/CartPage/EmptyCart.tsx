import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import { Button } from "../common"

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4">
            <FaShoppingCart size={60} className="text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven’t added anything to your cart yet.</p>
            <Link
                href="/"
            >
                <Button text="Continue Shopping" className="text-white" />
            </Link>
        </div>
    )
}

export default EmptyCart;