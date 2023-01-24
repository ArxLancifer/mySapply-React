import React, {useContext} from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Navigation} from 'swiper';
import "./DealsStyle.css";
import CategoryCard from '../../../components/CardsCollection/CategoryCard';
import HomeContext from "../../../components/store/home-context";
import {IProductCategory} from "../../../interfaces/ICategory";

function CategoriesSlider() {

    const categoriesCtx = useContext(HomeContext) as IProductCategory[];

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: false,
                }}

                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        width: 250
                    },
                    "@0.75": {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                    },
                }}
                modules={[Navigation]}
                className="mySwiperCategories"
            >
                {
                    categoriesCtx.map((category) => {
                        return (
                            <SwiperSlide key={category._id}>
                                <CategoryCard category={category}/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default CategoriesSlider
