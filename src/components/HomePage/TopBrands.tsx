import { BrandNames } from "@/types/items";
import Image from "next/image";


const TopBrands = () => {
    const topBrandsNames: BrandNames[] = [
        {
            name: 'versace',
            imagePath: '/brandsNames/versace.svg',
        },
        {
            name: 'zara',
            imagePath: '/brandsNames/zara.svg',
        },
        {
            name: 'gucci',
            imagePath: '/brandsNames/gucci.svg',
        },
        {
            name: 'prada',
            imagePath: '/brandsNames/prada.svg',
        },
        {
            name: 'calvin-klein',
            imagePath: '/brandsNames/calvin-klein.svg',
        }
    ]
    return (
        <div className="bg-black w-full h-auto p-10 mb-10 flex flex-col xl:flex-row justify-center xl:justify-evenly items-center space-y-10 xl:space-y-0">
            {
                topBrandsNames && topBrandsNames.map((brand: BrandNames) => (
                    <Image src={brand.imagePath} alt={brand.name} key={brand.name} width={150} height={40} />
                ))
            }
        </div>
    )
}

export default TopBrands;