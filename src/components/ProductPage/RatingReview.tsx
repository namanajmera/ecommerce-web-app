import { Review } from "@/types/items";
import { Button, TestimonialCard } from "../common"
import { FaSlidersH } from "react-icons/fa";

const testimonials: Review[] = [
    {
        name: "Sarah M.",
        message:
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
        rating: 5
    },
    {
        name: "Alex K.",
        message:
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        rating: 3.5
    },
    {
        name: "James L.",
        message:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 4.5
    },
    {
        name: "James L.",
        message:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 4.8
    },
    {
        name: "James L.",
        message:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 4.8
    },
    {
        name: "James L.",
        message:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 4.8
    },
    {
        name: "James L.",
        message:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 4.8
    },
    {
        name: "James L.",
        message:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 4.8
    },
];
const RatingReview = () => {
    return (
        <div className="p-6 bg-white rounded-md shadow space-y-4 flex flex-col">
            <div className="flex justify-between items-center flex-wrap gap-4">

                <h2 className="text-lg font-semibold">
                    All Reviews <span className="text-gray-400 text-sm">({testimonials.length})</span>
                </h2>

                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer">
                        <FaSlidersH className="text-sm" />
                    </button>

                    <div className="relative">
                        <select className="appearance-none bg-gray-100 text-sm font-medium py-2 px-4 rounded-full focus:outline-none pr-6 cursor-pointer">
                            <option selected>Latest</option>
                            <option>Oldest</option>
                            <option>Top Rated</option>
                        </select>
                    </div>
                    <Button text="Write a Review" className="text-white text-sm font-medium" />
                </div>

            </div>
            <div className="flex flex-wrap gap-2">
                {testimonials.map((t, index) => (
                    <TestimonialCard key={index} {...t} />
                ))}
            </div>
            <Button text="Load More Review" className="bg-white border w-2xs" />
        </div>
    )
}

export default RatingReview