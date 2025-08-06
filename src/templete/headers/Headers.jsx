import React from 'react'
import './headers.css'
import {NavLink} from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import icons from './icons.png'
const Headers = () => {
    const handelOpenMenu = () =>{
        document.getElementById('nav').style.display='block'
    }
    return (
        <>
            <header>
                <div className="icon-value">
                    <img src={icons} alt="ICON" />
                    <span className='c-r'>NEOX</span>
                    <span className="c-b">FINANCIAL</span>
                    <span className="c-dp">SUPPORET</span>
                </div>                
                <ul>
                    <NavLink to={'/'}><li>HOME</li></NavLink>
                    {/* <NavLink to={'/api/product/all/data/v4'}><li>PROUDCT</li></NavLink> */}
                    <NavLink to={'/about/us/api/v4'}><li>ABOUT</li></NavLink>
                    <NavLink to={'/contact/us/api/v4'}><li>CONTACT</li></NavLink>
                    <li onClick={handelOpenMenu} id='menu-btn'><TiThMenu/></li>
                </ul>
            </header>
        </>
    )
}

export default Headers