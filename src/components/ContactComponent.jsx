import React from 'react'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function ContactComponent() {
    useEffect(()=>{
        AOS.init()
       }, [])
  return (
    <div className='fullContact' data-aos="fade-up" data-aos-duration="3000">
            <div className="contactt">
                <div className="contactMenu">
                    <h1>Get in Touch</h1>
                    <p>You can contact me via my social media below:</p>
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
  )
}

export default ContactComponent