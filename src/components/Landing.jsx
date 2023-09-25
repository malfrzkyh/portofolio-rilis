import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Landing = () => {
    useEffect(()=>{
        AOS.init()
       }, [])  
  return (
    <div className="fullLanding" id='fullLanding'>
      <div className="background-video-container">
        <video className="background-video" autoPlay muted loop>
          <source src="./public/landing.mp4" type="video/mp4" />
          {/* Tambahkan sumber video lain jika diperlukan */}
        </video>
      </div>

      <div className="fullinfo" data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="info">
          <div className="profile">
            <img src="./public/gua.jpg" alt="" width={200} />
          </div>

          <div className="description">
            <h1>Malfrzkyh</h1>
            <p>I am Malfrzkyh, a freelance editor, designer , junior</p>
            <p>frontend developer, and open-source enthusiast</p>
            <p>Welcome to my web page!</p>
          </div>

          <div className="tombol">
            <a href="">Commision Info</a>
          </div>

          <div className="social-icons">
            {/* Ikon Instagram */}
            <a
              href="https://www.instagram.com/mallfrzkyh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Ikon GitHub */}
            <a 
              href="https://github.com/malfrzkyh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            {/* Ikon YouTube */}
            <a
              href="https://www.youtube.com/channel/UCiHgMyFIf04LNCggRytk7IA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>

            {/* Ikon TikTok */}
            <a
              href="https://www.tiktok.com/@malfrzkyh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
