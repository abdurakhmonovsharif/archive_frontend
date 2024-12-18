import React, {RefObject} from "react";
import {Breadcrumb, Typography} from "antd";
import {HiOutlineHome} from "react-icons/hi2";
import BgImage from "../../../assets/img/pages/bg-page-title.png"
import {Link} from "react-router-dom";
import {IoPrintOutline} from "react-icons/io5";
const {Title} = Typography;

interface PageTitleProps {
    title: string;
    breadcrumbs: Array<{ title: string; link?: string, maxWidth?: string }>;
    printElement?: RefObject<HTMLDivElement>
}

const PageTitle: React.FC<PageTitleProps> = ({title, breadcrumbs}) => {
    const print=()=>{
        window.print()
    }
    return (

        <div style={{backgroundImage: `url(${BgImage})`}}
             className={`bg-center bg-archive_primary dark:bg-archive_bg_dark  md:pt-[80px] pt-[50px] xl:pt-[110px] pb-4`}>
         <div className={"container"}>
             <Title style={{marginTop: "8px", color: "white"}} className="print:!text-black xl:!text-[38px] md:!text-[32px] !text-[18px]">
                 {title}
             </Title>
             <div className={"flex md:items-center xl:items-center md:flex-row xl:flex-row flex-col  justify-between"}>
                 <Breadcrumb separator=">">
                     {breadcrumbs.map((crumb, index) => (
                         <Breadcrumb.Item key={index} className={"text-white text-base cursor-pointer"}>
                             {crumb.link ? <Link className={"!flex gap-x-1.5"} to={crumb.link}>
                                     {crumb.link === "/" && <HiOutlineHome className={"mt-1"} color={"#FFF"}/>}
                                     <span className={"text-white print:text-black text-nowrap"}>{crumb.title}</span>
                                 </Link> :
                                 <span style={{maxWidth: crumb.maxWidth}}
                                       className={"text-white print:text-black line-clamp-1"}>{crumb.title}</span>}
                         </Breadcrumb.Item>
                     ))}
                 </Breadcrumb>
                 <button onClick={print} className={" flex items-center print:text-black text-nowrap gap-x-2 py-3 bg-transparent text-white cursor-pointer md:text-base text-sm xl:text-xl"}>
                     <IoPrintOutline/>
                     Chop etish
                 </button>
             </div>
         </div>
        </div>
    );
};

export default PageTitle;
