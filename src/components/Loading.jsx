import React from 'react'
import "../assets/style/loading.scss"
import instagramLogo from "../assets/img/instagram_logo-rgb.png"

function Loading() {
  return (
    <div className="loading">
        <img src={instagramLogo} className="loading_logo" alt="instagram_logo" />
        <div className="loading_dot">
          <div id="spinner-container">
            <div id="loading-spinner"></div>
          </div>
        </div>
        <div className="loading_flex">
            <span className='loading_text'>from</span>
            <span className='loading_author'>Amir</span>
        </div>
    </div>
  )
}

export default Loading;