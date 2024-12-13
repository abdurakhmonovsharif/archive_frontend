import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BgImg from "../../../../assets/img/11.jpg"
import {AiOutlineEye} from "react-icons/ai";
import {CiCalendar} from "react-icons/ci";

export const HeroSlider = () => {
    const PrevButton = ({onClick}: { onClick?: () => void }) => <button onClick={onClick} type="button"
                                                                        className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group  focus-within:!outline-none focus:!outline-none"
    >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>;
    const NextButton = ({onClick}: { onClick?: () => void }) => <button onClick={onClick} type="button"
                                                                        className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus-within:!outline-none focus:!outline-none"
    >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
    const settings = {
            dots: false,
            infinite: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextButton/>,
            prevArrow: <PrevButton/>
        }
    ;

    return (
        <Slider {...settings} className="w-full relative">
            {
                Array.from({length: 10}).map(() => <div className="relative h-[415px] rounded">
                    <div className="w-full rounded h-full">
                        <img src={BgImg} alt="img" className={"rounded object-cover h-full w-full"}/>
                    </div>
                    <div
                        className="absolute inset-0 flex flex-col justify-end  text-white text-xl font-bold space-y-2 bg-gradient-to-b from-transparent to-black/30 p-4">
                        <h3 className="text-xl font-medium">
                            O‘zbekiston Milliy arxivida “O‘zarxiv” agentligi tomonidan <br/>21-oktabr – O‘zbek tili
                            bayrami
                            kuni munosabati bilan maʼnaviy tadbir o‘tkazildi.
                        </h3>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2 mt-2">
                                <CiCalendar className="text-white"/>
                                <p className="text-xs">21.10.2024</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <AiOutlineEye className="text-white"/>
                                <p className="text-xs">233</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </Slider>
    );
}
