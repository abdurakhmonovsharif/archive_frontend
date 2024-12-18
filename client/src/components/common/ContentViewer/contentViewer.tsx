import {  Image, } from "antd";
import { INews } from "../../../types/ITypes.ts";
import { useContext } from "react";
import { LanguageContext } from "../../../context/language_context.tsx";
import { NextButton, PrevButton } from "../carousel/buttons.tsx";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import { formatDate } from "../../../constants/global.ts";
import htmr from "htmr";
import { htmrOptions } from "../../../constants/htmrOptions.ts";
import Slider from "react-slick";
const ContentViewer = (article: INews) => {
    const { lang } = useContext(LanguageContext);

    const settings = {
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        dots: false,
        infinite: false,
        autoplay: true,
        fade: true,
        arrows: true,
    };
    return (
        <div className="container flex flex-col items-center !max-w-6xl">
            {/* md:h-[400px] h-[250px] xl:h-[415px] */}
            <Slider
                {...settings}
                className="w-full max-w-6xl"
            >
                {article.images.map((image: string, index: number) => (
                    <div className="md:h-[400px] h-[250px] xl:!h-[415px]">
                        <Image className="!w-full !h-full" title={article.title[lang]} key={index} src={image} />
                    </div>
                ))}
            </Slider>
            <div className="flex mt-4 items-center justify-start gap-x-4 w-full">
                <div className="flex gap-x-1 items-center">
                    <CiCalendar />
                    <span>{formatDate(article.created_at).date}</span>
                </div>
                <div className="flex gap-x-1 items-center">
                    <AiOutlineEye />
                    <span>{article.views_count}</span>
                </div>
            </div>

            <div className="w-full text-justify py-4">
                {htmr(article?.content[lang] || "", htmrOptions)}
            </div>
        </div>
    );
};

export default ContentViewer;
