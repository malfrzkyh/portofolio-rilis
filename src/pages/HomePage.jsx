import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Landing from '../components/Landing'
import Prof from '../components/Prof'
import Portofolio from '../components/Portofolio'
import FooterComponent from '../components/FooterComponent'
import ContactComponent from '../components/ContactComponent'







function HomePage() {
  return (
    <div>
        <Landing/>
        <NavbarComponent/>
        <Prof/>
        <Portofolio/>
        <ContactComponent/>
        <FooterComponent/>
    </div>
  )
}

export default HomePage