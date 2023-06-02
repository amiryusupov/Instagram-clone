import React from 'react'
import storySlides from "../../helpers/navbarSlide.json"
import NavbarSlider from '../NavbarSlider';
import { useSwiper } from 'swiper/react';
function NavbarStories() {
  const swiper = useSwiper();
  return (
    <div className='story'>
        <div className="swiper">
          <button onClick={() => swiper.slidePrev}/>
            <NavbarSlider slides={storySlides}/>
          <button onClick={() => swiper.slideNext}/>
        </div>
    </div>
  )
}

export default NavbarStories;