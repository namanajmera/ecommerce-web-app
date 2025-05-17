'use client';
import { useState } from 'react';

const tabs = ['Product Details', 'Rating & Reviews', 'FAQs'];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('Rating & Reviews');

    return (
        <div className="w-full mx-auto">
            <div className="flex justify-around border-b border-gray-200">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-2 text-sm md:text-base transition-colors cursor-pointer ${activeTab === tab
                                ? 'text-black font-semibold'
                                : 'text-gray-400'
                            }`}
                    >
                        {tab}
                        {activeTab === tab && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full"></span>
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 text-gray-600">
                {activeTab === 'Product Details' && <div>Details about the product...</div>}
                {activeTab === 'Rating & Reviews' && <div>⭐️ User reviews and ratings go here...</div>}
                {activeTab === 'FAQs' && <div>Frequently Asked Questions...</div>}
            </div>
        </div>
    );
}
