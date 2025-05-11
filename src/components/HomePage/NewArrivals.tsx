import { Product } from "@/types/items";
import CardContainer from "../common/CardContainer";

const NewArrivals = () => {
    const newArrivals: Product[] = [
        {
            "id": 1,
            "name": "T-shirt with Tape Details",
            "price": 120,
            "originalPrice": null,
            "discount": null,
            "rating": 4.5,
            "image": "/items/shirt-1.png"
        },
        {
            "id": 2,
            "name": "Skinny Fit Jeans",
            "price": 240,
            "originalPrice": 260,
            "discount": "20%",
            "rating": 3.5,
            "image": "/items/jense-1.png"
        },
        {
            "id": 3,
            "name": "Checkered Shirt",
            "price": 180,
            "originalPrice": null,
            "discount": null,
            "rating": 4.5,
            "image": "/items/shirt-2.png"
        },
        {
            "id": 4,
            "name": "Sleeve Striped T-shirt",
            "price": 130,
            "originalPrice": 160,
            "discount": "30%",
            "rating": 4.5,
            "image": "/items/shirt-3.png"
        }
    ]
    return (
        <>
            <CardContainer items={newArrivals} title={"New Arrivals"} />
        </>
    )
}

export default NewArrivals;