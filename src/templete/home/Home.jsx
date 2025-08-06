import React from 'react'
import './home.css'
// import { FcLike } from "react-icons/fc";
import icons from './icons.png'
import photo from './phot.png'
// import { FcDislike } from "react-icons/fc";

const Home = () => {
  const now = new Date()
  return (
    <main className="main-div home-div">
      <img src={icons} alt="" />
      <div className="card">
        <h1><span className='c-r'>NEOX</span> <span className="c-b">FINANCIAL</span> <span className="dp">SUPPORET</span></h1>
        <h2>OUR GOAL </h2>
        <h3>Empowering the Unemployed: A Mission to Financial Freedom</h3>        
        <p>In a world where financial insecurity is a constant challenge, my mission is simple yet deeply impactful — to provide financial freedom to unemployed individuals. I believe that no one should be defined by their current job status, and everyone deserves the opportunity to live with dignity, independence, and purpose</p>
        <p>Unemployment is not just a lack of income; it often leads to loss of confidence, stress, and hopelessness. My goal is to break that cycle. I aim to create sustainable solutions that open up earning opportunities for those who have been left behind by traditional systems. Whether it’s through financial literacy training, digital skill development, freelancing guidance, or access to online earning platforms, I am committed to building a clear and accessible path toward economic independence.</p>
        <img src={photo} alt="" />
        <p>This journey is not about handing out temporary help, but about empowering people to help themselves. It’s about unlocking potential, nurturing ambition, and building a mindset of resilience and growth. By equipping individuals with the right tools and support, I want to help them discover new possibilities—regardless of their background or experience.</p>
        <p>Financial freedom means having choices. It means the ability to support one’s family, to invest in personal growth, and to live without constant financial pressure. Through mentorship, training, and community-driven programs, I strive to be a bridge between unemployment and opportunity.</p>
        <p>My goal is not just a vision—it’s a movement. A movement to uplift lives, one person at a time. Together, we can redefine what’s possible and build a future where financial freedom is not a privilege, but a right.</p>
      </div>
      {/* <div className="contrenar">
        <div className="post-card">
          <div className="post-value">
            <img src="" alt="" />
            <div className="value">
              <h2>HEADING</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse consequuntur nostrum blanditiis. Minus quam possimus, ratione eius veniam voluptas impedit soluta totam incidunt perspiciatis, atque quibusdam tempore rerum cumque sed repellendus nesciunt accusantium laborum mollitia adipisci voluptate animi. Eos perferendis harum, tenetur autem adipisci exercitationem? Quod labore modi iure non voluptate blanditiis praesentium rem dignissimos! Quo vitae quibusdam omnis veritatis aut totam quod minus ipsam esse libero quisquam, magni necessitatibus dolorum voluptatibus! Sed laborum aut perferendis error aliquid molestias libero recusandae accusantium? Repellat vitae qui, porro harum, illo, aspernatur ea minus praesentium iste nobis fugiat aliquid necessitatibus quo beatae officia architecto sit? Modi dolore est, exercitationem consectetur velit adipisci quidem incidunt id repudiandae obcaecati corrupti esse ad provident magni delectus doloremque accusantium tempore libero tempora architecto dolores aperiam illum nemo. Dolore harum eum eveniet voluptate rem facilis a reiciendis dicta aut pariatur, corporis ex, ad, voluptatibus vel esse consectetur distinctio!</p>
            </div>
          </div>
          <div className="emotion-box">
            <div className="g">
              <span><FcLike/></span>
              <span>9879</span>
            </div>
            <div className="g">
              <span><FcDislike/></span>
              <span>8475</span>
            </div>
            <span>{now.getDate()}:{now.getMonth()}:{now.getFullYear()}</span>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////// */}
        {/*{/*<div className="post-card">
          <div className="post-value">
            <img src="" alt="" />
            <div className="value">
              <h2>HEADING</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse consequuntur nostrum blanditiis. Minus quam possimus, ratione eius veniam voluptas impedit soluta totam incidunt perspiciatis, atque quibusdam tempore rerum cumque sed repellendus nesciunt accusantium laborum mollitia adipisci voluptate animi. Eos perferendis harum, tenetur autem adipisci exercitationem? Quod labore modi iure non voluptate blanditiis praesentium rem dignissimos! Quo vitae quibusdam omnis veritatis aut totam quod minus ipsam esse libero quisquam, magni necessitatibus dolorum voluptatibus! Sed laborum aut perferendis error aliquid molestias libero recusandae accusantium? Repellat vitae qui, porro harum, illo, aspernatur ea minus praesentium iste nobis fugiat aliquid necessitatibus quo beatae officia architecto sit? Modi dolore est, exercitationem consectetur velit adipisci quidem incidunt id repudiandae obcaecati corrupti esse ad provident magni delectus doloremque accusantium tempore libero tempora architecto dolores aperiam illum nemo. Dolore harum eum eveniet voluptate rem facilis a reiciendis dicta aut pariatur, corporis ex, ad, voluptatibus vel esse consectetur distinctio!</p>
            </div>
          </div>
          <div className="emotion-box">
            <div className="g">
              <span><FcLike/></span>
              <span>9879</span>
            </div>
            <div className="g">
              <span><FcDislike/></span>
              <span>8475</span>
            </div>
            <span>{now.getDate()}:{now.getMonth()}:{now.getFullYear()}</span>
          </div>
        </div>
        <div className="post-card">
          <div className="post-value">
            <img src="" alt="" />
            <div className="value">
              <h2>HEADING</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse consequuntur nostrum blanditiis. Minus quam possimus, ratione eius veniam voluptas impedit soluta totam incidunt perspiciatis, atque quibusdam tempore rerum cumque sed repellendus nesciunt accusantium laborum mollitia adipisci voluptate animi. Eos perferendis harum, tenetur autem adipisci exercitationem? Quod labore modi iure non voluptate blanditiis praesentium rem dignissimos! Quo vitae quibusdam omnis veritatis aut totam quod minus ipsam esse libero quisquam, magni necessitatibus dolorum voluptatibus! Sed laborum aut perferendis error aliquid molestias libero recusandae accusantium? Repellat vitae qui, porro harum, illo, aspernatur ea minus praesentium iste nobis fugiat aliquid necessitatibus quo beatae officia architecto sit? Modi dolore est, exercitationem consectetur velit adipisci quidem incidunt id repudiandae obcaecati corrupti esse ad provident magni delectus doloremque accusantium tempore libero tempora architecto dolores aperiam illum nemo. Dolore harum eum eveniet voluptate rem facilis a reiciendis dicta aut pariatur, corporis ex, ad, voluptatibus vel esse consectetur distinctio!</p>
            </div>
          </div>
          <div className="emotion-box">
            <div className="g">
              <span><FcLike/></span>
              <span>9879</span>
            </div>
            <div className="g">
              <span><FcDislike/></span>
              <span>8475</span>
            </div>
            <span>{now.getDate()}:{now.getMonth()}:{now.getFullYear()}</span>
          </div>
        </div>
        <div className="post-card">
          <div className="post-value">
            <img src="" alt="" />
            <div className="value">
              <h2>HEADING</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse consequuntur nostrum blanditiis. Minus quam possimus, ratione eius veniam voluptas impedit soluta totam incidunt perspiciatis, atque quibusdam tempore rerum cumque sed repellendus nesciunt accusantium laborum mollitia adipisci voluptate animi. Eos perferendis harum, tenetur autem adipisci exercitationem? Quod labore modi iure non voluptate blanditiis praesentium rem dignissimos! Quo vitae quibusdam omnis veritatis aut totam quod minus ipsam esse libero quisquam, magni necessitatibus dolorum voluptatibus! Sed laborum aut perferendis error aliquid molestias libero recusandae accusantium? Repellat vitae qui, porro harum, illo, aspernatur ea minus praesentium iste nobis fugiat aliquid necessitatibus quo beatae officia architecto sit? Modi dolore est, exercitationem consectetur velit adipisci quidem incidunt id repudiandae obcaecati corrupti esse ad provident magni delectus doloremque accusantium tempore libero tempora architecto dolores aperiam illum nemo. Dolore harum eum eveniet voluptate rem facilis a reiciendis dicta aut pariatur, corporis ex, ad, voluptatibus vel esse consectetur distinctio!</p>
            </div>
          </div>
          <div className="emotion-box">
            <div className="g">
              <span><FcLike/></span>
              <span>9879</span>
            </div>
            <div className="g">
              <span><FcDislike/></span>
              <span>8475</span>
            </div>
            <span>{now.getDate()}:{now.getMonth()}:{now.getFullYear()}</span>
          </div>
        </div>
        <div className="post-card">
          <div className="post-value">
            <img src="" alt="" />
            <div className="value">
              <h2>HEADING</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse consequuntur nostrum blanditiis. Minus quam possimus, ratione eius veniam voluptas impedit soluta totam incidunt perspiciatis, atque quibusdam tempore rerum cumque sed repellendus nesciunt accusantium laborum mollitia adipisci voluptate animi. Eos perferendis harum, tenetur autem adipisci exercitationem? Quod labore modi iure non voluptate blanditiis praesentium rem dignissimos! Quo vitae quibusdam omnis veritatis aut totam quod minus ipsam esse libero quisquam, magni necessitatibus dolorum voluptatibus! Sed laborum aut perferendis error aliquid molestias libero recusandae accusantium? Repellat vitae qui, porro harum, illo, aspernatur ea minus praesentium iste nobis fugiat aliquid necessitatibus quo beatae officia architecto sit? Modi dolore est, exercitationem consectetur velit adipisci quidem incidunt id repudiandae obcaecati corrupti esse ad provident magni delectus doloremque accusantium tempore libero tempora architecto dolores aperiam illum nemo. Dolore harum eum eveniet voluptate rem facilis a reiciendis dicta aut pariatur, corporis ex, ad, voluptatibus vel esse consectetur distinctio!</p>
            </div>
          </div>
          <div className="emotion-box">
            <div className="g">
              <span><FcLike/></span>
              <span>9879</span>
            </div>
            <div className="g">
              <span><FcDislike/></span>
              <span>8475</span>
            </div>
            <span>{now.getDate()}:{now.getMonth()}:{now.getFullYear()}</span>
          </div>
        </div>
        <div className="post-card">
          <div className="post-value">
            <img src="" alt="" />
            <div className="value">
              <h2>HEADING</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse consequuntur nostrum blanditiis. Minus quam possimus, ratione eius veniam voluptas impedit soluta totam incidunt perspiciatis, atque quibusdam tempore rerum cumque sed repellendus nesciunt accusantium laborum mollitia adipisci voluptate animi. Eos perferendis harum, tenetur autem adipisci exercitationem? Quod labore modi iure non voluptate blanditiis praesentium rem dignissimos! Quo vitae quibusdam omnis veritatis aut totam quod minus ipsam esse libero quisquam, magni necessitatibus dolorum voluptatibus! Sed laborum aut perferendis error aliquid molestias libero recusandae accusantium? Repellat vitae qui, porro harum, illo, aspernatur ea minus praesentium iste nobis fugiat aliquid necessitatibus quo beatae officia architecto sit? Modi dolore est, exercitationem consectetur velit adipisci quidem incidunt id repudiandae obcaecati corrupti esse ad provident magni delectus doloremque accusantium tempore libero tempora architecto dolores aperiam illum nemo. Dolore harum eum eveniet voluptate rem facilis a reiciendis dicta aut pariatur, corporis ex, ad, voluptatibus vel esse consectetur distinctio!</p>
            </div>
          </div>
          <div className="emotion-box">
            <div className="g">
              <span><FcLike/></span>
              <span>9879</span>
            </div>
            <div className="g">
              <span><FcDislike/></span>
              <span>8475</span>
            </div>
            <span>{now.getDate()}:{now.getMonth()}:{now.getFullYear()}</span>
          </div>
        </div>
        <div className="post-card">
          <div className="post-value">
            <img src="" alt="" />
            <div className="value">
              <h2>HEADING</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse consequuntur nostrum blanditiis. Minus quam possimus, ratione eius veniam voluptas impedit soluta totam incidunt perspiciatis, atque quibusdam tempore rerum cumque sed repellendus nesciunt accusantium laborum mollitia adipisci voluptate animi. Eos perferendis harum, tenetur autem adipisci exercitationem? Quod labore modi iure non voluptate blanditiis praesentium rem dignissimos! Quo vitae quibusdam omnis veritatis aut totam quod minus ipsam esse libero quisquam, magni necessitatibus dolorum voluptatibus! Sed laborum aut perferendis error aliquid molestias libero recusandae accusantium? Repellat vitae qui, porro harum, illo, aspernatur ea minus praesentium iste nobis fugiat aliquid necessitatibus quo beatae officia architecto sit? Modi dolore est, exercitationem consectetur velit adipisci quidem incidunt id repudiandae obcaecati corrupti esse ad provident magni delectus doloremque accusantium tempore libero tempora architecto dolores aperiam illum nemo. Dolore harum eum eveniet voluptate rem facilis a reiciendis dicta aut pariatur, corporis ex, ad, voluptatibus vel esse consectetur distinctio!</p>
            </div>
          </div>
          <div className="emotion-box">
            <div className="g">
              <span><FcLike/></span>
              <span>9879</span>
            </div>
            <div className="g">
              <span><FcDislike/></span>
              <span>8475</span>
            </div>
            <span>{now.getDate()}:{now.getMonth()}:{now.getFullYear()}</span>
          </div>
        </div> */}
        
      {/* </div> */}
      <footer>
        <h3>&copy; ALL RIGHTS RESERVED BY <span className="c-r">NEOX </span> <span className="c-b">FINANCIAL </span> <span className="c-dp">SUPPORET</span></h3>
      </footer>
    </main>
  )
}

export default Home
