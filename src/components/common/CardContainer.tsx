import { Product } from "@/types/items";
import Button from "./Button";
import ItemCard from "./ItemCard";

type Props = {
    items: Product[],
    title: string,
}

const CardContainer = ({ items, title }: Props) => {
    return (
        <div className="flex justify-center items-center flex-col pb-10 mb-10 space-y-10">
            <h1 className="font-secondry font-bold text-5xl">{title}</h1>
            <div className="flex justify-center items-center flex-wrap space-x-10">
                {items && items.map((ele, index) => (
                    <ItemCard key={index} product={ele} />
                ))}
            </div>
            <Button text="View All" className="bg-white text-black border border-black w-60" />
        </div>
    )
}

export default CardContainer;