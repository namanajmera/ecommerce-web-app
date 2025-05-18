import ProductDetails from './ProductDetails';
import RatingReview from './RatingReview';
import Faq from './Faq';

type props = {
    tabs: string[],
    activeTab: string,
    setActiveTab: (val: string) => void;
}

export default function Tabs({ tabs, activeTab, setActiveTab }: props) {

    return (
        <div className="w-full mx-auto">
            <div className="flex justify-around border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-2 text-sm md:text-base transition-colors ${activeTab === tab
                            ? 'text-black font-semibold'
                            : 'text-gray-400 cursor-pointer'
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"></span>
                        )}
                    </button>
                ))}
            </div>

            <div className="mt-6 text-gray-600">
                {activeTab === 'Product Details' && <ProductDetails />}
                {activeTab === 'Rating & Reviews' && <RatingReview />}
                {activeTab === 'FAQs' && <Faq />}
            </div>
        </div>
    );
}
