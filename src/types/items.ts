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

export type Review = {
    name: string;
    message: string;
    rating: number;
};

export type PriceContainerType = {
    price: number;
    originalPrice: number | null;
    discount: string | null;
}
export type Sizes = {
    id: number;
    label: string;
    value: string,
}