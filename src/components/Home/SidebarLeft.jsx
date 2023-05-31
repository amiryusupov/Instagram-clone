import React from 'react'
import instagram_logo from "../../assets/img/instagram_logo.png"
import data from '../../helpers/data';
import icons from '../../helpers/icons';
import { Link } from 'react-router-dom';

function SidebarLeft() {
  return (
    <div className="sidebar__left">
      <div className="sidebar__left-box">
        <Link to="/"><icons.BsInstagram className="sidebar__left-iconlogo" size="42px"/><img src={instagram_logo} className="sidebar__left-logo" alt="instagram_logo" /></Link>
        <div className="sidebar__left-section">
          <div className="sidebar__left-section-flex">
            {
              data.map(item => {
                return (
                  <Link to={item.link} className="sidebar__left-item" title={item.title} key={item.id}>
                    <div className="sidebar__left-icon">{item.icon}</div>
                    <span className="sidebar__left-item-text">{item.title}</span>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <div className="sidebar__left-footer">
          <div className="sidebar__left-footer-row">
            <icons.HiBars3 size="2em"/>
            <span className="sidebar__left-footer-text">More</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarLeft;