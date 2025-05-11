export type BrandNames = {
    name: string;
    imagePath: string;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    originalPrice: number | null;
    discount: string | null;
    rating: number;
    image: string;
}