import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./DealsStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



function DealsSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='/slide1.jpg' /></SwiperSlide>
        <SwiperSlide><img src='/slide2.jpg'/></SwiperSlide>
        <SwiperSlide><img src="/slide3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/slide4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/slide5.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default DealsSlider
