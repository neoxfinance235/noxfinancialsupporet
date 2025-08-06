import React from 'react'
import './partners.css'
import {NavLink} from 'react-router-dom'
import gromo from '../../photos/gromo.png'
import zet from '../../photos/unnamed.png'
import turtelmint from '../../photos/turtelmint.jpg'
import andro from '../../photos/andro.png'
import IDFC from '../../photos/idfc.png'
const Partners = () => {
  return (
    <main className="main-div partners-div">
      <div className="gromo">
        <div className="prtners">
          <img src={gromo} alt="" />
          <h2>GROMO</h2>
        </div>
        <p>Gromo offers a wide range of financial products including life insurance, health insurance, personal loans, business loans, credit cards, savings accounts, and digital gold. Users can choose from trusted banks and insurers to sell these products</p>
        <p><NavLink about='' to={"https://sales.gromo.in/gp-website/g/LObqrzmNx8oGV07D9Do1a"}>TAKE A GROMO OVERVIEW</NavLink></p>
      </div>
      <div className="gromo">
        <div className="prtners">
          <img src={zet} alt="" />
          <h2>ZET</h2>
        </div>
        <p>As a Zet advisor, I help people access trusted financial products like loans, insurance, and credit cards from top banks. I earn commissions by sharing these services digitally — no office, no investment. It’s simple, flexible, and rewarding. Want to start earning too? Join Zet with me today!</p>
        <p><NavLink to={'https://neoxfinancialsupport.banksupport.in'}>TAKE A ZET OVERVIEW</NavLink></p>
      </div>
      <div className="gromo">
        <div className="prtners">
          <img src={turtelmint} alt="" />
          <h2>TURTELMINT</h2>
        </div>
        <p>As a certified Turtlemint advisor, I help individuals choose the best insurance plans — from health and life to motor insurance — all from trusted companies. I earn commission by guiding people digitally. It’s easy, flexible, and risk-free. Join me on Turtlemint and start your income journey today!</p>
       <p> <NavLink to={'https://advisor.turtlemintinsurance.com/profile/3946348/NEOX_FINANCIAL_SUPPORET'}>TAKE A TURTELMINT OVERVIEW </NavLink></p>
      </div>
      <div className="gromo">
        <div className="prtners">
          <img src={andro} alt="" />
          <h2>ANDROMEDA</h2>
        </div>
        <p>As an Andromeda loan advisor, I help people get the best personal, business, and home loan deals from top banks and NBFCs. With zero investment, I earn by connecting customers to the right lenders. It’s simple, digital, and rewarding. Start your loan advisor journey with Andromeda today!</p>
      </div>
      <div className="gromo">
        <div className="prtners">
          <img src={IDFC} alt="" />
          <h2>IDFC FIRST BANK</h2>
        </div>
        <p>I help customers get Business Loans, Personal Loans, and Loans Against Property from IDFC FIRST Bank — with fast approvals, minimal documents, and great interest rates. It’s 100% digital.</p>
      </div>
    </main>
  )
}

export default Partners
