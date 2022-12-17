import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation} from 'swiper';
import "./DealsStyle.css";
import CategoryCard from '../../../components/CardsCollection/CategoryCard';

const catergories = [1,2,3,4,5]

function CategoriesSlider() {



  return (
    <div>
      <Swiper

        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        
        breakpoints={{
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 0,
              },
          }}
        modules={[Navigation]}
        className="mySwiperCategories"
      >
        {
          catergories.map((category, idx)=> {
            return (
                <SwiperSlide key={idx}>
                    <CategoryCard />
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default CategoriesSlider
