
type Props = {
    toogleSearch: () => void
}

import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Search = ({ toogleSearch }: Props) => {
    return (
        <div className="rounded-[3.88rem] px-4 py-1 w-96 h-10 border flex justify-center items-center space-x-3 bg-[#f0f0f0]">
            <FiSearch size={20} className="cursor-pointer" />
            <input type="text" className="w-full h-full outline-none" placeholder="Search for products..." />
            <IoCloseSharp size={20} onClick={toogleSearch} className="cursor-pointer" />
        </div>
    )
}

export default Search;