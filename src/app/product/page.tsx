import ProductPage from "@/components/ProductPage/ProductPage";
import Tabs from "@/components/ProductPage/Tabs";


const Product = () => {
    return (
        <div className="px-2 xl:px-30 min-h-screen">
            <ProductPage />
            <Tabs />
        </div>
    )
}

export default Product;