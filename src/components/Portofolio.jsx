import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Portofolio() {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolioData = [
    {
      imageSrc: './public/1.png',
      link: 'https://malfrzkyh.github.io/Game17an/',
    },
    {
      imageSrc: './public/2.png',
      link: 'https://malfrzkyh.github.io/Weather-App/',
    },
    {
      imageSrc: './public/3.png',
      link: 'https://malfrzkyh.github.io/FoodDash/',
    },
    {
      imageSrc: './public/4.png',
      link: 'https://vt.tiktok.com/ZSNJHyPmc/',
    },
    // bates
    {
        imageSrc: './public/5.png',
        link: 'https://vt.tiktok.com/ZSNJ9Qp1p/',
      },
      {
        imageSrc: './public/6.png',
        link: 'https://vt.tiktok.com/ZSNJ9DtRH/',
      },
      {
        imageSrc: './public/7.png',
        link: '#',
      },
      {
        imageSrc: './public/8.png',
        link: 'https://drive.google.com/drive/folders/1x_ba53PffCVJsG1BufKlECxAGncPNZfR?usp=sharing',
      },

    // Tambahkan data portofolio lainnya
  ];

  return (
    <div className='fullPortofolio'>
        <div className="portofolioTitle">
            <h1 data-aos="flip-up">Portofolio</h1>
        </div>
      <div className='portfolio-grid'>
        {portfolioData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className='portfolio-item'
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img src={item.imageSrc} alt={`Portfolio ${index + 1}`} width={600} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Portofolio;
