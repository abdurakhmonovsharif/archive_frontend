import Drawer from "react-modern-drawer";
import { IoCloseSharp } from "react-icons/io5";
import LogoImg from "../assets/img/logo.png";
import LogoImg2 from "../assets/img/photo_2024-10-05_16-52-36.jpg";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { MobileDropNavItems } from "./NavItems.tsx";

type MobileNavbarListProps = {
    isOpen: boolean;
    toggleDrawer: () => void;
};
export const MobileNavbarList = ({ isOpen, toggleDrawer }: MobileNavbarListProps) => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <>
            <div className={`${isOpen ? "block" : "hidden"} `}>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="right"
                    className={` !w-[100vw] dark:!bg-archive_bg_dark `}>
                    <div className="flex items-start p-5 border-b border-gray-100">
                        <div className="flex items-center gap-5">
                            <div>
                                {isDarkMode ? (<img src={LogoImg} alt="logo_img" className="w-[128px]" />) : (<img src={LogoImg2} alt="logo_img" className="w-[128px]" />)}
                            </div>
                            <h3 className="hidden lg:block md:block dark:text-[#FFFFFFC2] text-archive_primary font-normal font-secondary text-lg">
                                O‘zbekiston Milliy arxivi
                            </h3>
                        </div>
                        <div className="ml-auto mt-0">
                            <button onClick={toggleDrawer} type="button" className="bg-white rounded-md p-3 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 border border-archive_border hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-inherit dark:border dark:border-[#FFFFFFC2] dark:text-[#FFFFFFC2]">
                                <span className="sr-only">Close menu</span>
                                <IoCloseSharp />
                            </button>
                        </div>
                    </div>
                    <MobileDropNavItems />
                </Drawer>
            </div>
        </>
    );
};
