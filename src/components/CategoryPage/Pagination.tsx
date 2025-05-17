import React from 'react'
import { Button } from '../common';

type Props = {
    currentPage: number;
    totalPages: number;
}

const Pagination = ({ currentPage = 1, totalPages = 5 }: Props) => {
    return (
        <div className="flex justify-between items-center mt-6">
            <Button text='Previous' className={`bg-white border w-44 ${currentPage === 1 ? 'opacity-30' : ''}`} />
            <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`px-3 py-1 rounded-md ${i + 1 === currentPage ? 'bg-black text-white' : 'border'}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            <Button text='Next' className='bg-white border w-44' />
        </div>
    )
}

export default Pagination