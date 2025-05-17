import { DressStyleCard } from "../common";


const BrowseByDressStyle = () => {
    const dressStyles = [
        {
            title: 'Casual',
            imageUrl: '/category/casual.png',
            classNames: "w-full xl:w-xs"
        },
        {
            title: 'Formal',
            imageUrl: '/category/formal.png',
            classNames: "w-full xl:w-2xl"
        },
        {
            title: 'Party',
            imageUrl: '/category/party.png',
            classNames: "w-full xl:w-xs"
        },
        {
            title: 'Gym',
            imageUrl: '/category/gym.png',
            classNames: "w-full xl:w-2xl"
        },
    ];
    return (
        <div className="flex justify-center items-center flex-row xl:flex-col space-y-10 mb-20 xl:w-6xl mx-auto">
            <div className="bg-[#f0f0f0] space-y-10 p-10 rounded-2xl">
                <h1 className="font-secondry font-bold text-5xl text-center">{"Browse by Dress Style"}</h1>
                <div className="flex flex-col xl:flex-row xl:flex-wrap xl:space-x-4 justify-center items-center space-y-4 xl:space-y-0 gap-3">
                    {dressStyles.map((style, index) => (
                        <DressStyleCard key={index} title={style.title} imageUrl={style.imageUrl} customClass={style.classNames} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrowseByDressStyle;
{/* <div className="container mx-auto px-4 py-8 mb-10">
    <h2 className="text-3xl font-bold text-center mb-6">Browse by Dress Style</h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dressStyles.map((style, index) => (
            <DressStyleCard key={index} title={style.title} imageUrl={style.imageUrl} />
        ))}
    </div>
</div> */}