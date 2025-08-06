import React from 'react'
import './dashbord.css'
const Dashbord = () => {
  return (
    <main className="main-div dashbord-div">
      <div className="welcome">
        <h2>HI , {localStorage.getItem('fname')} ITS YOUR DASHBORD</h2>
      </div>
      <div className="bord-box">
        <div className="box">
          <span>Total Connector</span>
          <span>0</span>
        </div>
        <div className="box">
          <span>TOTAL EARNING</span>
          <span>0</span>
        </div>
      </div>
      <div className="bord-box">
        <div className="box">
          <span>TOTAL ACCOUNT OPENNING</span>
          <span>0</span>
        </div>
        <div className="box">
          <span>TOTAL DISBURSMENT</span>
          <span>0</span>
        </div>
      </div>
    </main>
  )
}

export default Dashbord
