import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import LogoImg from "../../assets/img/logo.png";
import LogoImg2 from "../../assets/img/photo_2024-10-05_16-52-36.jpg";
import { DarkSearchIcon, DarkVektorIcon, SearchIcon, VektorIcon2 } from "../../assets/icons/icons";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";

export const HeaderBottom = () => {
    const { isDarkMode } = useContext(ThemeContext)

    return <div className="py-[15px] flex items-center border-b border-gray-200 justify-between ">
        <div className="flex items-center gap-5">
            <div className="w-[128px]">
                {isDarkMode ? <img src={LogoImg} alt="logo_img" className="w-[128px]" /> : <img src={LogoImg2} alt="logo_img" className="w-[128px]" />}
            </div>
            <h2 className={`hidden xl:block dark:text-white text-archive_primary font-normal font-secondary text-2xl `} >O‘zbekiston Milliy arxivi</h2>
        </div>
        <ul className="hidden lg:flex items-center justify-end gap-5 lg:mx-auto lg:w-[783px] lg:justify-between ">
            {categories.map((item, i) => <li className="items center" key={i}><Link to={item.url} className={`dark:text-white text-archive_primary text-base font-medium font-secondary`} >{item.title}</Link><button className={`ml-3`}>
                {isDarkMode ? <DarkVektorIcon /> : <VektorIcon2 />}
            </button></li>)}
        </ul>
        <div className="">
            <button className="p-1.5 dark:bg-white bg-archive_primary rounded-md">
                {isDarkMode ? <DarkSearchIcon /> : <SearchIcon />}
            </button>
        </div>
    </div>
}