import {Carousel, Image} from "antd";
import {INews} from "../../../types/ITypes.ts";
import React, {useContext} from "react";
import {LanguageContext} from "../../../context/language_context.tsx";
import {NextButton, PrevButton} from "../carousel/buttons.tsx";
import {CiCalendar, CiClock1} from "react-icons/ci";
import {AiOutlineEye} from "react-icons/ai";

const DocumentView = (article: INews) => {
    const contentStyle: React.CSSProperties = {}
    const {lang} = useContext(LanguageContext);
    return <div className={"container flex flex-col items-center"}>
        {/*<Carousel fade={true} arrows={true} dots={false}*/}
        {/*          className={"w-[1280px] bg-archive_primary p-3 max-w-7xl h-[300px]"}>*/}
        {/*    {article.images.map((item) =>*/}
        {/*        <div className={"w-full h-full"}>*/}
        {/*            <img src={item} alt={article.title[lang]} className={"!h-[300px] w-full"}/>*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*</Carousel>*/}
        <Image.PreviewGroup>
            <Carousel prevArrow={<PrevButton/>} nextArrow={<NextButton/>} dots={false} infinite={false}
                      autoplay={true}
                      fade={true}
                      arrows={true}
                      className={"w-[1152px]  p-3 max-w-6xl "}
            >
                {article.images.map(
                    (image: string, index: number) =>
                        <Image key={index} src={image} preview={{getContainer: '#root'}}/>
                )}
            </Carousel>
        </Image.PreviewGroup>
        <div className='flex items-center justify-start gap-x-4 w-full '>
            <div className='flex gap-x-1 items-center'>
                <CiCalendar/>
                <span>{created_at}</span>
            </div>
            <div className='flex gap-x-1 items-center'>
                <CiClock1/>
                <span>{created_at}</span>
            </div>
            <div className='flex gap-x-1 items-center'>
                <AiOutlineEye/>
                <span>{views_count}</span>
            </div>
        </div>
    </div>
}
export default DocumentView;