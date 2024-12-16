import {Card} from "antd";
import {services} from "./constans.tsx";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/theme.context.tsx";

const Services = () => {
    const {isDarkMode} =useContext(ThemeContext);
    return <div className={"grid grid-cols-2 grid-rows-3 gap-4 w-full h-full"}>
        {services.map((service) => <Link to={"#"} key={service.label}>
                <Card
                    className={"border-archive_primary grid grid-cols-1 duration-500 ease-in-out transition-all   dark:bg-archive_bg_dark hover:border-archive_primary/50 shadow-archive_primary  items-center justify-center"}
                    hoverable
                >
                    <div className={"flex items-center gap-x-2 text-center px-3 w-full h-full"}>
                        <div className={"w-1/2"}>
                            <div className={"xl:h-20 xl:w-20 md:w-16 md:h-16 w-10 h-10"}>
                                {isDarkMode?service.darkIcon:service.icon}
                            </div>
                        </div>
                        <h5 className={"text-center dark:text-white font-bold xl:text-base md:text-sm text-xs"}>{service.label}</h5>
                    </div>
                </Card>
            </Link>
        )}
    </div>
}
export default Services;