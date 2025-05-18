import { Product } from "@/types/items";
import Image from "next/image";
import StarRating from "./StarRating";
import PriceContainer from "./PriceContainer";
import Link from "next/link";

type Props = {
    product: Product,
}
const ItemCard = ({ product }: Props) => {
    return (
        <div className="w-[295px] rounded-3xl overflow-hidden border border-gray-200 bg-white">
            <div className="w-full h-[298px]">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={295}
                    height={298}
                    className="w-full h-full object-contain bg-card-bg"
                />
            </div>
            <div className="flex flex-col p-4 space-y-2">
                <h6 className="font-semibold text-base leading-snug"><Link href={'/product'} className="hover:underline">{product.name}</Link></h6>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <StarRating rating={product.rating} />
                    <span className="font-medium text-black">{product.rating}</span>
                </div>
                <PriceContainer discount={product.discount} originalPrice={product.originalPrice} price={product.price} />
            </div>
        </div>
    );
};

export default ItemCard;
