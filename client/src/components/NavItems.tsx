import { useContext, useState } from "react"
import { categories } from "../data/categories"
import { ThemeContext } from "../context/theme.context"
import { DarkVektorIcon, VektorIcon2 } from "../assets/icons/icons"
import React from "react"
import { Link } from "react-router-dom"

export const NavItems = () => {
    const { isDarkMode } = useContext(ThemeContext)
    return <React.Fragment>
        <ul className="hidden lg:flex items-center justify-end gap-5 lg:mx-auto lg:w-[783px] lg:justify-between z-20">
            {categories.map((item, i) => (
                <li className="group relative cursor-pointer flex" key={i}>
                    <Link to={item.url}
                        className={`dark:text-[#FFFFFFC2] text-archive_primary text-base font-medium font-secondary relative
                        ${item.children.length - 1 === i ? "" : "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-archive_primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"}`}>{item.title}</Link>
                    <button className={`ml-3 ${item.children.length === 0 ? "hidden" : "block"}`}>
                        {isDarkMode ? <DarkVektorIcon /> : <VektorIcon2 />}
                    </button>
                    <div className="absolute top-full left-0 hidden group-hover:block bg-white dark:bg-[#535A70] shadow-lg rounded w-52 transition-all duration-75 ease-out">
                        <ul>
                            {item.children.map((el, i) => (
                                <React.Fragment key={i}>
                                    <li className="px-4 py-2"><Link
                                        to="#"
                                        className="hover:text-archive_primary text-black dark:text-[#FFFFFFC2] dark:hover:text-white">
                                        {el}</Link>
                                    </li>{item.children.length - 1 === i ? null : <hr className="w-[90%] mx-auto" />}</React.Fragment>))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    </React.Fragment>
}

export const MobileDropNavItems = () => {
    const { isDarkMode } = useContext(ThemeContext)
    const [openedDropDownIndex, setOpenedDropDownIndex] = useState<null | number>(null)
    const onDropDownOpen = (index: number) => setOpenedDropDownIndex(prev => index === prev ? null : index)

    return <React.Fragment>
        <ul className={` lg:grid-cols-1 items-centergap-2 lg:mx-auto lg:w-auto p-5 `}>
            {categories.map((item, i) => (
                <li className="items center p-3 flex items-center justify-between group relative cursor-pointer" key={i}>
                    <Link to={item.url} className={`dark:text-[#FFFFFFC2] text-archive_primary text-base font-medium font-secondary`}>
                        {item.title}
                    </Link>
                    <button className={`p-2 ${item.children.length === 0 ? "hidden" : "block"}`} onClick={() => onDropDownOpen(i)}>
                        {isDarkMode ? <DarkVektorIcon /> : <VektorIcon2 />}
                    </button>
                    <div className={`absolute top-full left-0 ${i === openedDropDownIndex ? "block" : "hidden"}   bg-white dark:bg-[#535A70] shadow-lg rounded w-full z-10 transition-all duration-75 ease-out`}>
                        <ul>
                            {
                                item.children.map((el, i) => <React.Fragment key={i}>
                                    <li className="px-4 py-2">
                                        <Link to={"#"} className="hover:text-archive_primary text-black dark:text-[#FFFFFFC2] dark:hover:text-white">{el}</Link>
                                    </li>
                                    <hr className="w-[100%] mx-auto" />
                                </React.Fragment>)
                            }
                        </ul>
                    </div>
                </li>))}
        </ul>
    </React.Fragment>
}