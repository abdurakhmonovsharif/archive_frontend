import {partners} from "./constants.tsx";
import {Card, Image} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SectionTitle} from "../sectionTitle/sectionTitle.tsx"; // Ensure slick CSS is imported

const PartnersList = () => {
    const settings = {
        className: "center",
        infinite: true,
        swipeToSlide: true,
        arrows: false,
        autoplaySpeed: 1000,
        autoplay: true,
        speed: 3000,
        slidesToShow: 5,

        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768, // tablet
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="py-3">
            <SectionTitle title={"Bizning hamkorlarimiz"}/>
            <Slider {...settings}>
                {partners.map((partner, index) => (
                    <div key={index} title={partner.label} className="px-2"> {/* Add spacing here */}
                        <Card>
                            <div>
                                <Image
                                    preview={false}
                                    src={partner.image}
                                    className="aspect-[6/5] object-contain"
                                />
                            </div>
                            <Card.Meta className={"!text-sm"}  title={partner.label}/>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PartnersList;
