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
        <SwiperSlide><img src='https://cdn2.justwineapp.com/assets/article/2019/08/different-types-of-beer-styles-guide-1800x946.jpg' /></SwiperSlide>
        <SwiperSlide><img src='https://www.health.com/thmb/TY-NJLhjd098WbIh8nYix-Z0p4A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/How-to-Wash-Fruits-and-Vegetables-According-to-a-Nutritionist-GettyImages-88307658-2000-5f47f95a0fc04e97b782efab5ea843b6.jpg'/></SwiperSlide>
        <SwiperSlide><img src="https://www.thespruceeats.com/thmb/9I4Bp0z-sH05WJ2MdZ5NNCfzRCM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-honey-white-bread-recipe-428160-hero-01-22ed0bda55f643318b4c658a2c020647.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://kavala.citypedia.gr/wp-content/uploads/2021/05/coffee-kavala-citypedia.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default DealsSlider
