import { Product } from "@/types/items";
import CardContainer from "../common/CardContainer";

const TopSelling = () => {
    const topSelling: Product[] = [
        {
            id: 1,
            name: "Vertical Striped Shirt",
            image: "/items/shirt-4.png",
            price: 212,
            originalPrice: 232,
            discount: "20%",
            rating: 5.0
        },
        {
            id: 2,
            name: "Courage Graphic T-shirt",
            image: "/items/shirt-5.png",
            price: 145,
            rating: 4.0,
            originalPrice: null,
            discount: null,
        },
        {
            id: 3,
            name: "Loose Fit Bermuda Shorts",
            image: "/items/shorts-1.png",
            price: 80,
            rating: 3.0,
            originalPrice: null,
            discount: null,
        },
        {
            id: 4,
            name: "Faded Skinny Jeans",
            image: "/items/jense-1.png",
            price: 210,
            rating: 4.5,
            originalPrice: null,
            discount: null,
        }
    ]
    return (
        <>
            <CardContainer items={topSelling} title={"Top Selling"} />
        </>
    )
}

export default TopSelling;