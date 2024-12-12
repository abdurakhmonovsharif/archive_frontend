import {Card} from "antd";
import {services} from "./constans.tsx";
import {Link} from "react-router-dom";

const Services = () => {

    return <div className={"grid grid-cols-2 grid-rows-3 gap-4 w-1/2 h-full"}>
        {services.map((service) => <Link to={"#"} key={service.label}>
                <Card
                    className={"border-archive_primary dark:text-white hover:border-archive_primary/50 shadow-archive_primary flex items-center justify-center"}
                    hoverable
                >
                    <div className={"flex items-center text-center px-3 w-[295px] h-full"}>
                        <div className={"w-1/2"}>
                            <div className={"h-20 w-20 "}>
                                <img className={"mx-auto"} src={service.icon || ""} alt={service.label}/>
                            </div>
                        </div>

                        <h5 className={"text-center font-bold text-base"}>{service.label}</h5>
                    </div>
                </Card>
            </Link>
        )}
    </div>
}
export default Services;