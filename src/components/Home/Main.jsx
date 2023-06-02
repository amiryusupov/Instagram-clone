import React from 'react'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'
import "../../assets/style/main.scss"
import NavbarStories from './NavbarStories'

function Main() {
  return (
    <div className="main">
      <SidebarLeft/>
      <NavbarStories/>
      <SidebarRight/>
    </div>
  )
}

export default Main;