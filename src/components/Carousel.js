import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper';

const Carousel = () => {
    const images = [
        "/path-to-image1.jpg",
        "/path-to-image2.jpg",
        "/path-to-image3.jpg",
        // Add more image paths here
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            loop
            className="mySwiper"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
