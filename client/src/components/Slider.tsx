
import Slider from "react-slick";
import "../style/slider.css"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import BgImg from "../assets/img/11.jpg"
import { AiOutlineEye } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
export function SliderComponent(): JSX.Element {

    const settings: import("react-slick").Settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="w-full relative py-5">
            <div className="relative">
                <div className="w-full">
                    <img src={BgImg} alt="img" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end  text-white text-xl font-bold space-y-2 bg-gradient-to-b from-transparent to-black/30 p-4">
                    <h3 className="text-xl font-medium">
                        O‘zbekiston Milliy arxivida “O‘zarxiv” agentligi tomonidan <br />21-oktabr – O‘zbek tili bayrami kuni munosabati bilan maʼnaviy tadbir o‘tkazildi.
                    </h3>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2 mt-2">
                            <CiCalendar className="text-white" />
                            <p className="text-xs">21.10.2024</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <AiOutlineEye className="text-white" />
                            <p className="text-xs">233</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-2 relative">
                <div>
                    <img className="w-full" src={BgImg} alt="img" />
                </div>
                <div className="absolute insert-0 justify-center text-white text-xl font-bold bg-black bg-opacity-50">
                    <h3 className="text-xl font-medium text-black">O‘zbekiston Milliy arxivida “O‘zarxiv” agentligi tomonidan 21 oktyabr – O‘zbek tili bayrami kuni munosabati bilan maʼnaviy tadbir o‘tkazildi.</h3>
                    <div className="flex items-center gap-2 ">
                        <CiCalendar className="text-white" />
                        <p className="text-sm ">21.10.2024</p>
                    </div>
                    <div className="flex items-cente gap-2">
                        <AiOutlineEye className="text-white" />
                        <p className="text-sm">233</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
}
