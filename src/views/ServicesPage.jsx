import React from 'react'
import Header from '../components/Header.jsx'
import Services from '../components/Services.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import { services } from '../models/data.js'

const ServicesPage = ({ scrolled }) => {
  return (
    <div className="app">
      <Header scrolled={scrolled} activeSection="servicios" />
      <main>
        <Services services={services} />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

export default ServicesPage
