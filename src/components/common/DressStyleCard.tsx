import React from 'react'

type Props = {
    title: string,
    imageUrl: string,
    customClass: string,
}

const DressStyleCard = ({ title, imageUrl, customClass }: Props) => {
    return (
        <div className={`rounded-lg shadow-lg overflow-hidden h-60 bg-white relative ${customClass}`}>
            <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="p-4 text-center absolute top-0 left-0">
                <h3 className="text-4xl font-bold">{title}</h3>
            </div>
        </div>
    )
}

export default DressStyleCard;