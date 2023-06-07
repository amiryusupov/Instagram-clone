import React from 'react'
import storySlides from "../../helpers/json/navbarSlide.json"
import NavbarSlider from '../NavbarSlider';
function NavbarStories() {
  return (
    <div className='story'>
        <div className="swiper">
            <NavbarSlider slides={storySlides}/>
        </div>
    </div>
  )
}

export default NavbarStories;