import React from 'react'
import { Navigation } from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/swiper.min.css"

function NavbarSlider({slides}) {
  return (
    <Swiper
    modules={[Navigation]}
        grabCursor={true}   
        slidesPerView={8}
        spaceBetween={20}
        navigation={true}
        onSlideChange={() =>  console.log("slide changed")}
        // breakpoints={{
        //     // when window width is >= 768px
        //     1: {
        //         slidesPerView: 1,
        //     },
        //     625 :{
        //         slidesPerView: 2,
        //     },
        //     1230: {
        //         slidesPerView: 3,
        //     }
        // }}
    >
        {
            slides.map((item) => {
                return (
                    <SwiperSlide key={item.id} className="swiper_slide">
                        <img src="https://picsum.photos/200/300" className="swiper_img" alt="swiper_img"/>
                        <p className="swiper_name">{item.nick}</p>
                    </SwiperSlide>
                )
            } )
        }
    </Swiper>
  )
}

export default NavbarSlider;