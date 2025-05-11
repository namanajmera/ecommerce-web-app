import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
    rating: number;
};

const StarRating = ({ rating }: Props) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500" />);
        }
    }

    return (
        <div className="flex items-center space-x-1">
            {stars}
            <span className="ml-1 text-sm text-gray-500">{rating}/5</span>
        </div>
    );
};

export default StarRating;
