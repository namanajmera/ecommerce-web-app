import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "../common";


const ThankyouPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Order Placed Successfully!
                </h1>
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been confirmed and is being processed.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/"
                    >
                        <Button text="Go to Home" className="text-white" />
                    </Link>
                    <Link
                        href="/orders"
                    >
                        <Button text="View Orders" className="bg-white border" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ThankyouPage;