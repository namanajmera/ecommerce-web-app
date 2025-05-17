import { Review } from "@/types/items";
import { TestimonialCard } from "../common"

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
            <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
            <div className="flex flex-wrap gap-2">
                {testimonials.map((t, index) => (
                    <TestimonialCard key={index} {...t} />
                ))}
            </div>
        </div>
    )
}

export default RatingReview