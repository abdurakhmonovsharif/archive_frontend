import { useContext } from "react"
import { ThemeContext } from "../context/theme.context"
import { DarkSearchIcon, SearchIcon } from "../assets/icons/icons"

type SearchInputProps = {
    searchInputVisible: boolean,
    toogleSearchInput: () => void
}
export const SearchInput = ({ searchInputVisible, toogleSearchInput }: SearchInputProps) => {
    const { isDarkMode } = useContext(ThemeContext)

    return <div className={`flex items-center justify-end gap-x-3 border  border-transparent ${searchInputVisible ? "py-0.5 px-1 border dark:bg-inherit bg-gray-50 rounded-md max-w-[700px] p-2.5 ml-3 search--input--width--animation" : ""}`}>
        {searchInputVisible ?<div className="w-full"> 
            <input type="text" placeholder="Search ... " className={`w-full inline-block bg-transparent border-gray-300 outline-none text-gray-900 text-base rounded-lg pl-2  dark:bg-inherit dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`} />
            </div> : null
        }
        <div className="">
            <button onClick={toogleSearchInput} className="p-1.5 dark:bg-white bg-archive_primary rounded-md">
                {isDarkMode ? <DarkSearchIcon /> : <SearchIcon />}
            </button>
        </div>
    </div>
}