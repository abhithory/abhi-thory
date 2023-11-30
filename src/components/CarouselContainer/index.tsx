import React, { ReactNode } from 'react'
import Slider from 'react-slick';

type Props = {
    children: ReactNode;
    settings?: {};
}

export default function CarouselContainer({ children, settings }: Props) {

    const config = {
        dots: true,
        className: "center",
        infinite: true,
        speed: 500,
        autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 2,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: "40px",
        // cssEase: "linear",
        nextArrow: <></>,
        prevArrow: <></>,
        responsive: [
            {
                breakpoint: 1444,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "20px",


                }
            }
        ],
        ...settings
    };



    return (
        <Slider {...config}  >
            {children}
        </Slider>
    )
}
