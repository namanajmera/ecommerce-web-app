import Button from "../common/Button";


const Banner = () => {
    return (
        <section className="w-full bg-[#f2f0f1] md:bg-[url('/hero-bg.png')] md:bg-no-repeat md:bg-contain md:bg-right mb-10">
            <div className="relative container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center bg-transparent">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-5xl font-extrabold leading-tight text-black mb-6 font-secondry">
                        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                    </h1>
                    <p className="text-gray-600 mb-6 max-w-md">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Button text="Show Now" className="text-white" />
                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md">
                        <div>
                            <p className="text-2xl font-bold">200+</p>
                            <p className="text-sm text-gray-600">International Brands</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">2,000+</p>
                            <p className="text-sm text-gray-600">High-Quality Products</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">30,000+</p>
                            <p className="text-sm text-gray-600">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner