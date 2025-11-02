import React from 'react'
import Header from '../components/Header.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

const ContactPage = ({ scrolled }) => {
  return (
    <div className="app">
      <Header scrolled={scrolled} activeSection="contacto" />
      <main>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
