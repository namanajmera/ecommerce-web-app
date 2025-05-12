import StarRating from "./StarRating";

type TestimonialCardProps = {
    name: string;
    message: string;
    rating: number;
};

const TestimonialCard = ({ name, message, rating }: TestimonialCardProps) => {
    return (
        <div className="bg-white shadow-sm rounded-xl p-6 border text-sm w-full max-w-sm flex flex-col space-y-1">
            <StarRating rating={rating} />
            <div className="flex mb-4">
                <h3 className="font-semibold text-gray-800 mr-2">{name}</h3>
                <span className="text-green-500">✔️</span>
            </div>
            <p className="text-gray-600 leading-relaxed">{message}</p>
        </div>
    );
};

export default TestimonialCard;
