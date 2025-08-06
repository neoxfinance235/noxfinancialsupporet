import React from 'react'
import './about.css'
import creative from '../../photos/creative.png'
const About = () => {
  return (
    <main className="main-div about-main-div">
      <div className="about-us">
        <h2>About Us - <span className='c-r'> Neox</span><span className='c-b'> Financial</span><span className='c-dp'> Supporet</span></h2>
        <h4>Your Trusted Partner in Loans, Insurance , Financial Services , Sales</h4>
        <p><b>At Noex Financial Supporet,</b> we are committed to delivering reliable and efficient financial solutions to individuals, professionals, and growing businesses across India. As a dedicated financial service provider, we offer a wide range of services including loans, insurance plans, and customized financial products to meet every need</p>
      </div>
      <ul className='about-us'>
        <h3>Our Core Services</h3>
        <p><li><b>Loan Assistance</b> – Personal, Business, LAP (LOAN AGAINST PROPERTY)</li></p>
        <p><li><b>Insurance Plans</b> – Life, Health, Vehicle & Term Insurance</li></p>
        <p><li><b>Digital Solutions</b>- Social Media Marketing , App Development , Web Development , Graphics & Animations</li></p>
        <p><li><b>Sales Sarvice</b> - B2B Sarvice providor</li></p>
      </ul>
      <div className="about-us">
        <img src={creative} alt="" id='creative' />        
        <p>We are a team of creative thinkers, sales strategy experts, and funnel creators focused on turning ambition into measurable growth. Combining imaginative positioning with data-backed sales frameworks, we design customer journeys that attract, nurture, and convert—consistently. Our approach blends storytelling, strategic targeting, and optimized funnels to reduce friction, increase engagement, and maximize return on every marketing rupee.</p>
        <p>We work with businesses at every stage: launching new offers, scaling existing revenue streams, or revitalizing underperforming campaigns. From audience research and value proposition refinement to multi-step funnel buildouts and performance tuning, we deliver end-to-end solutions tailored to your goals</p>
        <p>What sets us apart is our commitment to results—no vanity metrics, just clear KPIs, transparent reporting, and continuous iteration. Partner with us to transform your leads into loyal customers and your strategy into sustainable growth.</p>
        <p><b>With Noex Financial Supporet,</b> you don’t just get marketing — you get a partner committed to your success.</p>
      </div>
      <p className='terf c-b'>THANK YOU</p>
      <footer>
        <h3>&copy; ALL RIGHTS RESERVED BY <span className="c-r">NEOX </span> <span className="c-b">FINANCIAL </span> <span className="c-dp">SUPPORET</span></h3>
      </footer>
    </main>
  )
}

export default About
