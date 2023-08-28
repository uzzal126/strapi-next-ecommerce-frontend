import Link from "next/link";

import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Hero = () => {
    SwiperCore.use([Navigation]);

    const settings = {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
    };
    return (
        <div className="hero-slider mt-10">
            <div className="container">
                <div className="relative group-hover:opacity-100 group">
                    <Swiper {...settings}>
                        <SwiperSlide>
                            <div
                                className="bg-cover bg-center bg-no-repeat h-[500px] flex justify-center items-center"
                                style={{
                                    backgroundImage: `url('/images/slider/slide3.jpg')`,
                                }}
                            >
                                <div className="text-center">
                                    <h2 className="text-white text-[40px] font-bold">
                                        Fresh organic food
                                    </h2>
                                    <h6 className="text-white text-normal font-normal">
                                        We deliver organic fruits and vegetables
                                        fresh from our fields to your doorstep
                                    </h6>
                                    <Link
                                        href="/shop"
                                        className="bg-primary text-white uppercase font-medium px-8 py-3 rounded-md inline-block mt-5 hover:bg-secondary"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="bg-cover bg-center bg-no-repeat h-[500px] flex justify-center items-center"
                                style={{
                                    backgroundImage: `url('/images/slider/slide3.jpg')`,
                                }}
                            >
                                <div className="text-center">
                                    <h2 className="text-white text-[40px] font-bold">
                                        Fresh organic food
                                    </h2>
                                    <h6 className="text-white text-normal font-normal">
                                        We deliver organic fruits and vegetables
                                        fresh from our fields to your doorstep
                                    </h6>
                                    <Link
                                        href="/shop"
                                        className="bg-primary text-white uppercase font-medium px-8 py-3 rounded-md inline-block mt-5 hover:bg-secondary"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="bg-cover bg-center bg-no-repeat h-[500px] flex justify-center items-center"
                                style={{
                                    backgroundImage: `url('/images/slider/slide3.jpg')`,
                                }}
                            >
                                <div className="text-center">
                                    <h2 className="text-white text-[40px] font-bold">
                                        Fresh organic food
                                    </h2>
                                    <h6 className="text-white text-normal font-normal">
                                        We deliver organic fruits and vegetables
                                        fresh from our fields to your doorstep
                                    </h6>
                                    <Link
                                        href="/shop"
                                        className="bg-primary text-white uppercase font-medium px-8 py-3 rounded-md inline-block mt-5 hover:bg-secondary"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <button
                        type="button"
                        className="swiper-button-prev w-15 h-15 bg-white text-primary rounded-full absolute left-0 top-1/2 -translate-y-1/2 text-2xl hover:bg-primary hover:text-white z-10 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    >
                        <BsArrowLeft className="inline-block" />
                    </button>
                    <button
                        type="button"
                        className="swiper-button-next w-15 h-15 bg-white text-primary rounded-full absolute right-0 top-1/2 -translate-y-1/2 text-2xl hover:bg-primary hover:text-white z-10 transition-all opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    >
                        <BsArrowRight className="inline-block" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
