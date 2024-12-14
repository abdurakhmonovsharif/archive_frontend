// Example components where contacts might be used
import {contacts} from "../../../data/contact.ts";
import {Link} from "react-router-dom";
import {
    ActiveLightIcon,
    ActiveNightIcon,
    GlassIcon,
    LightIcon,
    NightIcon,
    PhoneIcon,
} from "../../../assets/icons/icons.tsx";
import "../../../style/language.scss";
import {LanguageSelectBox} from "./LanguageSelectBox.tsx";
import React from "react";
import {ThemeContext} from "../../../context/theme.context.tsx";

export const TopHeader = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
    const onHoverIcon = (index: number) => {
        setHoveredIndex(index);
    };
    const {isDarkMode, changeDarkMode} = React.useContext(ThemeContext);
    const toogleDarkMode = (value: boolean) => {
        changeDarkMode(value);
    };
    const openMobileWindow = () => {
        const width = 375;
        const height = window.outerHeight - 100;
        const left = window.screen.width / 2 - width / 2;
        const top = window.screen.height / 2 - height / 2;

        window.open(
            "http://localhost:5173",
            "_blank",
            `width=${width},height=${height},top=${top},left=${left}`
        );
    };
    return (
        <div className="header_top_content flex justify-around lg:justify-between">
            <div className="flex justify-between">
                <div className="space-x-1 flex">
                    {contacts.icons.map((el, i) => (
                        <Link
                            key={i}
                            to={"/"}
                            onMouseMove={() => onHoverIcon(i)}
                            onMouseLeave={() => onHoverIcon(contacts.icons.length)}
                        >
                            <div
                                className={`
                                ${hoveredIndex === i ? "bg-[#252c3f]" : isDarkMode?"bg-archive_bg_dark":"bg-[#4465BA]"}
                                w-[28px] h-[24px] rounded-md p-0.5 flex justify-center items-center duration-300`}>
                                <img src={el.icon} alt="svg"/>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="w-[198px] hidden sm:block ml-8">
                    <Link
                        to={"mailto:" + contacts.email}

                        className="font-normal text-white dark:text-[#FFFFFFC2] text-sm inline-block"
                    >
                        Elektron pochta: {contacts.email}
                    </Link>
                </div>
                {/* backenddan kelgan data demo data bn solishtirib img topiladi va CHIZILADII */}
            </div>
            <div className="flex">
                <div className="flex space-x-6">
                    <div className="hidden lg:block">
                        <Link
                            to={"/"}
                            className="font-normal text-white dark:text-[#FFFFFFC2] text-sm border-r-2 pr-6"
                        >
                            Davlat ramzlari
                        </Link>
                    </div>
                    <div className="hidden lg:block">
                        <Link to={"/"} className="font-normal text-white dark:text-[#FFFFFFC2] text-sm">
                            Sayt xaritasi
                        </Link>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                        <div
                            className={`${isDarkMode ? "bg-[#252c3f]" : "bg-[#4465BA]"
                            } rounded-full flex p-0.5`}>
                            <button
                                className={`p-1 rounded-full  mr-1 ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}
                                onClick={() => {
                                    toogleDarkMode(false)
                                }}>
                                {isDarkMode ? <ActiveLightIcon/> : <LightIcon/>}
                            </button>
                            <button
                                onClick={() => {
                                    toogleDarkMode(true)
                                }}
                                className={`p-1.5 space-x-2 rounded-full ${isDarkMode ? 'bg-[#FFFFFFC2] ' : 'bg-transparent'}`}>
                                {isDarkMode ? <ActiveNightIcon/> : <NightIcon/>}
                            </button>
                        </div>
                        <button onClick={openMobileWindow} className="w-5 pl-1 pt-1 hidden md:block">
                            <PhoneIcon/>
                        </button>
                        <button>
                            <GlassIcon/>
                        </button>
                    </div>
                </div>
                <LanguageSelectBox/>
            </div>
        </div>
    );
};
