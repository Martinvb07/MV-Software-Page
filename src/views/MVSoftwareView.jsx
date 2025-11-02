import React from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Products from '../components/Products/Products.jsx'
import About from '../components/About.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

const MVSoftwareView = ({ scrolled, activeSection, onNavigate, stats, services, products }) => {
  return (
    <div className="app">
      <Header scrolled={scrolled} activeSection={activeSection} onNavigate={onNavigate} />

      <div id="inicio">
        <Hero onNavigate={onNavigate} stats={stats} />
      </div>

      <div id="servicios">
        <Services services={services} />
      </div>

      <div id="productos">
        <Products products={products} />
      </div>

      <div id="nosotros">
        <About />
      </div>

      <CTA />

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default MVSoftwareView
