import { Product } from "@/types/items";
import Button from "./Button";
import ItemCard from "./ItemCard";

type Props = {
    items: Product[],
    title: string,
}

const CardContainer = ({ items, title }: Props) => {
    return (
        <div className="flex justify-center items-center flex-col pb-10 space-y-10">
            <h1 className="font-secondry font-bold text-5xl text-center">{title}</h1>
            <div className="flex flex-col md:flex-row justify-center items-center flex-wrap space-y-5 md:space-x-10 md:space-y-0">
                {items && items.map((ele, index) => (
                    <ItemCard key={index} product={ele} />
                ))}
            </div>
            <Button text="View All" className="bg-white text-black border border-black w-60" />
            <hr className="border border-black/10 lg:w-[77.5rem] w-full h-0" />
        </div>
    )
}

export default CardContainer;