import {Card, Image} from "antd";

interface MediaCardProps {
    title: string;
    imageUrl: string;
    id?: string,
    type: "IMAGE" | "VIDEO",
    handleClick: (url: string) => void;
}

import {IoPlayCircleOutline} from "react-icons/io5";
export const MediaCard = ({title, imageUrl, type, handleClick}: MediaCardProps) => {
    return <Card
        onClick={() => handleClick(imageUrl)}
        hoverable
        className="overflow-hidden bg-transparent w-full  h-[297px]"
        cover={
            <div className="relative md:w-[320px] xl:w-[436px] h-[327px]">
                <Image
                    alt={title}
                    preview={true}
                    src={imageUrl}
                    height={"100%"}
                    width={"100%"}
                />
                <div
                    className={`absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center ${type === "IMAGE" ? "hidden" : "block"}`}>
                    <IoPlayCircleOutline className="text-white text-5xl"/>
                </div>l
            </div>
        }
    >
    </Card>
}