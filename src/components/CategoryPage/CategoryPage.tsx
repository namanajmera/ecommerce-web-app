import { Product } from "@/types/items";
import Filters from "./Filters";
import Pagination from "./Pagination";
import { ItemCard } from "../common";

const products: Product[] = [
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
    },
    {
        "id": 5,
        "name": "Sleeve Striped T-shirt",
        "price": 130,
        "originalPrice": 160,
        "discount": "30%",
        "rating": 4.5,
        "image": "/items/shirt-3.png"
    },
    {
        "id": 6,
        "name": "Sleeve Striped T-shirt",
        "price": 180,
        "originalPrice": null,
        "discount": null,
        "rating": 4.5,
        "image": "/items/shirt-2.png"
    },
    {
        "id": 7,
        "name": "Skinny Fit Jeans",
        "price": 240,
        "originalPrice": 260,
        "discount": "20%",
        "rating": 3.5,
        "image": "/items/jense-1.png"
    },
    {
        "id": 8,
        "name": "Sleeve Striped T-shirt",
        "price": 130,
        "originalPrice": 160,
        "discount": "30%",
        "rating": 4.5,
        "image": "/items/shirt-3.png"
    },
    {
        "id": 9,
        "name": "Sleeve Striped T-shirt",
        "price": 130,
        "originalPrice": 160,
        "discount": "30%",
        "rating": 4.5,
        "image": "/items/shirt-3.png"
    },
    {
        "id": 10,
        "name": "Sleeve Striped T-shirt",
        "price": 180,
        "originalPrice": null,
        "discount": null,
        "rating": 4.5,
        "image": "/items/shirt-2.png"
    },
    {
        "id": 11,
        "name": "Skinny Fit Jeans",
        "price": 240,
        "originalPrice": 260,
        "discount": "20%",
        "rating": 3.5,
        "image": "/items/jense-1.png"
    },
]
const CategoryPage = () => {
    return (
        <main className="p-3">
            <h1 className="text-2xl font-bold mb-6 font-secondry">Casual</h1>

            <div className="flex flex-col md:flex-row gap-3">
                <Filters />

                <section className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {products && products.map((ele, index) => (
                            <ItemCard key={index} product={ele} />
                        ))}
                    </div>

                    <Pagination currentPage={1} totalPages={3} />
                </section>
            </div>
        </main>
    )
}

export default CategoryPage;