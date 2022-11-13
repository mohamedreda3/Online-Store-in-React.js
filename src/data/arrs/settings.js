import Nextarrow from "../../components/nextarrow";
import Prevarrow from "../../components/prevarrow";

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <Nextarrow />,
    prevArrow: <Prevarrow />,
    responsive: [
        {
            breakpoint: 100024,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 740,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

export const settingsT = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};