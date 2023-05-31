import React from 'react'
import example_img from "../../assets/img/img_example.jpg"
import { Link } from 'react-router-dom'

function SidebarRight() {
  const data = [
    {
      id: 1,
      nick: "amir",
      name: "amir",
    },
    {
      id: 2,
      nick: "amir",
      name: "amir",
    },
    {
      id: 3,
      nick: "amir",
      name: "amir",
    },
    {
      id: 4,
      nick: "amir",
      name: "amir",
    },
    {
      id: 5,
      nick: "amir",
      name: "amir",
    },
  ]
  return (
    <div className="sidebar__right">
      <div className="sidebar__right-box">
        <div className="sidebar__right-profile">
          <img className="profile-img" src={example_img} alt="img" />
          <div className="profile-text">
            <div className="profile-nick">amiryusupov.070</div>
            <div className="profile-name">Amir Yusupov</div>
          </div>
        </div>
        <div className="sidebar__right-section">
          <span className="sidebar__right-text">Suggestions For You</span>
          <div className="sidebar__right-users">
            {data.map(item => {
              return (
                <div className="sidebar__right-item" key={item.id}>
                  <Link to={`/${item.nick}`}>
                    <img src={example_img} alt="img" />
                    <div className="sidebar__right-name">
                      <span>{item.nick}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                  <button className="sidebar__right-follow">Follow</button>
                </div>
              )
            })}
          </div>
        </div> 
        <span className="sidebar__right-footer">
        © 2023 INSTAGRAM FROM AMIR
        </span>
      </div>
    </div>
  )
}

export default SidebarRight;