import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const NavbarComponent = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    AOS.init();
    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk menangani scroll
  const handleScroll = () => {
    if (window.innerWidth <= 768) {
      // Perubahan perilaku saat tampilan mobile (lebar layar <= 768px)
      if (window.scrollY > 800) {
        // Lakukan sesuatu saat scroll mencapai 500px pada tampilan mobile
        // Misalnya, ganti latar belakang navbar
        setIsFixed(true);
      } else {
        // Kembali ke tampilan awal saat scroll kurang dari 500px pada tampilan mobile
        // Misalnya, kembalikan latar belakang navbar ke semula
        setIsFixed(false);
      }
    } else {
      // Perilaku scroll untuk tampilan desktop
      if (window.scrollY > 1010) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  // Fungsi untuk menangani klik logo dan menggulir ke posisi tertentu (misalnya, 2000)
  const handleLogoClick = () => {
    window.scrollTo({ top: 1, behavior: 'smooth' });
  };

  const handlePortofolioClick = () => {
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    window.scrollTo({ top: 2500, behavior: 'smooth' });
  };

  const handleProficiencyClick = () => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  return (
    <div
      className={`navbar ${isFixed ? 'fixed-navbar' : ''}`}
      data-aos={isFixed ? 'zoom-out-up' : ''}
      data-aos-duration="500"
    >
      <div className="logo">
        {/* Ganti <a> dengan fungsi handleLogoClick */}
          <h1 onClick={handleLogoClick}>Malfrzkyh</h1>
      </div>
      <div className="menu">
        <ul>
          <li onClick={handlePortofolioClick}>Portofolio</li>
          <li onClick={handleContactClick}>Comission</li>
          <li onClick={handleProficiencyClick}>Proficiency</li>
        </ul>
      </div>
      <div className="contact">
        <h1 onClick={handleContactClick}>Contact</h1>
      </div>
    </div>
  );
};

export default NavbarComponent;
