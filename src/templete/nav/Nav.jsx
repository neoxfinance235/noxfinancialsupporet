import React from 'react'
import './nav.css'
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';
const Nav = () => {

  const handelCloseMenu = () =>{
    document.getElementById('nav').style.display='none'
  }
  const profilepic = localStorage.getItem("profilepic")
  return (
    <div>
      <nav id='nav'>
        <div className="user-box">
          <div className="user-value">
            <img src={profilepic} alt="profile pic" />
            <h3>{localStorage.getItem('name')}</h3>
          </div>
          <ImCross className='c-r' onClick={handelCloseMenu} id='cross-btn'/>
        </div>
        <ul>
          <NavLink to={'/user/api/dashbord/api/v4'} > <li>DASHBORD</li> </NavLink>
          <NavLink to={'/add/connector/api/v4'}> <li>ADD CONNECTOR</li> </NavLink>
          <NavLink to={'/add/employee/api/v4'} > <li>ADD EMPLOYEE</li> </NavLink>
          <NavLink to={'/add/open/account/lead/api/v4'}> <li>OPEN ACCOUNT</li> </NavLink>
          <NavLink to={'/our/partners/api/v4'}> <li>OUR PARTNERS</li> </NavLink>
          <NavLink to={'/cheack/buero/api/v4'}> <li>CHEACK CREDIT SCORE</li> </NavLink>
          <NavLink to={'/report'}><li>REPORT</li></NavLink>
          <NavLink to={'/setting'}><li>SETTING</li></NavLink>
          
        </ul>
      </nav>
    </div>
  )
}

export default Nav
