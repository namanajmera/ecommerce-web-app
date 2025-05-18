'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type Section = {
  title: string;
  content: string;
};

const sections: Section[] = [
  {
    title: 'DESCRIPTION',
    content:
      'A reliable bodyguard for your skin, with secret uses. This lightweight, long lasting SPF50 sunscreen lotion will save you from the harshest midday sun, while also protecting dry skin, discoloured tattoos, darker scars, gel manicure UV exposures and more.',
  },
  {
    title: 'FIT & FEATURES',
    content:
      'Tailored fit. Lightweight feel. Designed for flexibility and movement.',
  },
  {
    title: 'FABRIC',
    content:
      '100% Organic Cotton. Breathable and eco-friendly.',
  },
  {
    title: 'MATERIALS & CARE',
    content:
      'Machine wash cold with like colors. Do not bleach. Tumble dry low.',
  },
  {
    title: 'FREE SHIPPING & EXCHANGES',
    content:
      'Free shipping on all orders over $50. 30-day hassle-free returns.',
  },
];
const ProductDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
    <div className="bg-white p-6 shadow-sm rounded-md text-sm w-full">
      {sections.map((section, index) => (
        <div key={section.title} className="border-b py-4">
          <button
            onClick={() => toggleSection(index)}
            className="flex justify-between w-full tracking-wide text-left cursor-pointer"
          >
            <span className={`${activeIndex === index ? 'font-extrabold' : ''}`}>{section.title}</span>
            <span className="text-xs mt-1">
              {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
            </span>
          </button>

          {activeIndex === index && (
            <p className="mt-3 text-gray-700 leading-relaxed transition">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProductDetails