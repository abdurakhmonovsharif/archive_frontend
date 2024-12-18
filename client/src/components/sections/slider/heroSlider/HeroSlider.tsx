import Slider from "react-slick";
// import { AiOutlineEye } from "react-icons/ai";
// import { CiCalendar } from "react-icons/ci";
import { sliderItems } from "./constants";
import {NextButton, PrevButton} from "../../../common/carousel/buttons.tsx";

export const HeroSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        autoplay: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />
    }
        ;

    return (
        <Slider {...settings} className="w-full relative">
            {
                sliderItems.map((item, index) => <div key={index} className="relative md:h-[400px] h-[250px] xl:h-[415px] rounded">
                    <div className="w-full rounded h-full">
                        <img src={item.image} alt="img" className={"rounded object-cover h-full w-full"} />
                    </div>
                    <div
                        className="absolute inset-0 flex flex-col justify-end  text-white text-xl font-bold space-y-2 bg-gradient-to-b from-transparent to-black/30 p-4">
                        {/* <h3 className="text-xl font-medium line-clamp-2">
                            {item.title}
                        </h3> */}
                        {/* <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2 mt-2">
                                <CiCalendar className="text-white" />
                                <p className="text-xs">21.10.2024</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <AiOutlineEye className="text-white" />
                                <p className="text-xs">233</p>
                            </div>
                        </div> */}
                    </div>
                </div>)
            }

        </Slider>
    );
}
