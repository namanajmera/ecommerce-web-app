import { BaseButtonProps } from "@/types/formItems"

const BaseButton = ({ text, className, onClick }: BaseButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`bg-black px-6 py-3 rounded-full font-semibold transition cursor-pointer ${className}`}
        >
            {text}
        </button>
    )
}

export default BaseButton;