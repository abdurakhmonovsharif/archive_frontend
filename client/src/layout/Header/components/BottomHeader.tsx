import { Link } from "react-router-dom";
import LogoImg from "../../../assets/img/logo.png";
import LogoImg2 from "../../../assets/img/photo_2024-10-05_16-52-36.jpg";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme.context.tsx";
import { MobileNavbarList } from "../../../components/MobileNavbar.tsx";
import { RxHamburgerMenu } from "react-icons/rx";
import { SearchInput } from "../../../components/SearchInput.tsx";
import {NavItems} from "../../../components/NavItems.tsx";

export const HeaderBottom = () => {
    const { isDarkMode } = useContext(ThemeContext)
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [searchInputVisible, setSearchInputVisible] = React.useState(false);
    const toogleSearchInput = () => setSearchInputVisible(!searchInputVisible)

    return <div className="container">
        <div className="py-[15px] flex items-center border-b border-gray-200 justify-between">
            <div className="flex items-center gap-5 ">
                <div className="md:w-24 w-[71px] xl:w-[128px] lg:w-[128px]">
                    {isDarkMode ? <Link to={"/"}><img src={LogoImg} alt="logo_img" className="w-[128px]" /></Link> : <Link to={"/"}><img src={LogoImg2} alt="logo_img" className="w-[128px]" /></Link>}
                </div><h2 className={`hidden sm:block w-full md:block ${searchInputVisible ? "!hidden xl:!block" : ""} lg:hidden xl:block dark:text-[#FFFFFFC2] text-archive_primary font-normal font-secondary text-lg lg:text-2xl `} >O‘zbekiston Milliy arxivi</h2>
            </div>
            {searchInputVisible ? null : <NavItems />}
            <div className={`flex justify-end gap-x-2 items-center max-w-[700px] ${searchInputVisible ? 'w-full' : 'w-auto'} `}>
                <SearchInput toogleSearchInput={toogleSearchInput} searchInputVisible={searchInputVisible} />
                <div className="lg:hidden  p-2.5 border-2 border-archive_border dark:border dark:border-[#FFFFFFC2] rounded-md max-w-[40px] flex items-center justify-center">
                    <button onClick={toggleDrawer}><RxHamburgerMenu /></button>
                </div>
            </div>
            {/* mobile navbar list  */}
            <MobileNavbarList isOpen={isOpen} toggleDrawer={toggleDrawer} />
        </div>


    </div>
}