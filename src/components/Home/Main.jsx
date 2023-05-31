import React from 'react'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'
import "../../assets/style/main.scss"

function Main() {
  return (
    <div className="main">
      <SidebarLeft/>
      <SidebarRight/>
    </div>
  )
}

export default Main;