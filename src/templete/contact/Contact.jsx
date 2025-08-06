import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <main className="main-div contact-div">
      <div className="content-box">
        <h2><span className='c-r'>NEOX</span><span className='c-b'> FINANCIAL</span><span className='c-dp'> SUPPORET</span></h2>
        <p>At our core, we are a dedicated service provider committed to delivering high-quality, reliable, and customized solutions that empower businesses and individuals alike. Whether you're a startup, small business, or enterprise, we bring expertise, innovation, and efficiency to help you achieve your goals faster and more effectively.</p>
        <p>Our services are built around understanding your unique needs and offering tailored solutions that add real value. From digital transformation and marketing to IT support, web development, financial consultancy, and customer care, we strive to be your one-stop partner for growth and success. We prioritize transparency, responsiveness, and long-term relationships, ensuring that every interaction with us is smooth, productive, and beneficial.</p>
        <p>What sets us apart is our passion for excellence, our customer-first approach, and our ability to adapt in a fast-changing world. We don’t just provide a service—we provide a solution, a partnership, and a promise to deliver results that matter. With skilled professionals, cutting-edge technology, and a relentless focus on improvement, we’re here to help you save time, reduce costs, and scale efficiently.</p>
        <p>Choose us as your trusted service provider—and experience the difference that dedication, expertise, and integrity can make.</p>
      </div>
      <div className="authorization">
        <div className="card">
          <img src="" alt="" />
          <div className="auth-value">
            <h2>MOSTAFA ALI</h2>
            <h3>CEO</h3>
            <h4>+91 96417 68240</h4>
            <h4>mostafaali49867@gmail.com</h4>
          </div>
        </div>
        <div className="card">
          <div className="auth-value">
            <h2>SK MANIK</h2>
            <h3>MANEGER</h3>
            <h4>+91 91236 20300</h4>
          </div>
          <img src="" alt="" />
        </div>
        <div className="card">
          <div className="auth-value">
            <h2>MD SAMIM HOSSAIN</h2>
            <h3>ASISTENT MANEGER</h3>
            <h4>+91 76798 05865</h4>
          </div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="location">
        <address>
          <span>SONDALI SONDALIA SHASAN 743423 NORTH 24 PARGANAS WEST BENGAL INDIA</span>
          <p>LANDMARK SONDALIA RAILWAY STATION</p>
        </address>
      </div>
      <footer>
        <h3>&copy; ALL RIGHTS RESERVED BY <span className="c-r">NEOX </span> <span className="c-b">FINANCIAL </span> <span className="c-dp">SUPPORET</span></h3>
      </footer>
    </main>
  )
}

export default Contact
