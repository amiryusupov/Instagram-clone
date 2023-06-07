import React from 'react'
import SidebarLeft from '../components/Home/SidebarLeft'
import SidebarRight from '../components/Home/SidebarRight'
import "../assets/style/main.scss"
import NavbarStories from '../components/Home/NavbarStories'

function Main() {
  return (
    <div className="main">
      <SidebarLeft/>
      <div className="main__column">
        <NavbarStories/>
      </div>
      <SidebarRight/>
    </div>
  )
}

export default Main;