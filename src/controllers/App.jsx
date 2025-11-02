import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import MVSoftwareView from '../views/MVSoftwareView.jsx'
import ServicesPage from '../views/ServicesPage.jsx'
import ProductsPage from '../views/ProductsPage.jsx'
import AboutPage from '../views/AboutPage.jsx'
import ContactPage from '../views/ContactPage.jsx'
import BlogPage from '../views/BlogPage.jsx'
import PortafolioPage from '../views/PortafolioPage.jsx'
import MesoftDetail from '../components/Products/Mesoft.jsx'
import { stats, services, products } from '../models/data.js'

// Controller: handles state, scroll and navigation logic and passes data/handlers to the view
const App = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  // Scroll spy
  useEffect(() => {
    const sections = ['inicio', 'servicios', 'productos', 'nosotros']
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 150
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScrollSpy)
    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <MVSoftwareView
            scrolled={scrolled}
            activeSection={activeSection}
            onNavigate={scrollToSection}
            stats={stats}
            services={services}
            products={products}
          />
        }
      />
      <Route path="/servicios" element={<ServicesPage scrolled={scrolled} />} />
  <Route path="/productos" element={<ProductsPage scrolled={scrolled} />} />
  <Route path="/productos/mesoft" element={<MesoftRoute />} />
      <Route path="/nosotros" element={<AboutPage scrolled={scrolled} />} />
      <Route path="/contacto" element={<ContactPage scrolled={scrolled} />} />
      <Route path="/portafolio" element={<PortafolioPage scrolled={scrolled} />} />
      <Route path="/blog" element={<BlogPage scrolled={scrolled} />} />
      </Routes>
    </>
  )
}

export default App

// Inline route wrapper that opens the Mesoft modal and navigates back on close
function MesoftRoute() {
  const navigate = useNavigate()
  return (
    <MesoftDetail
      isOpen={true}
      onClose={() => {
        // Return to products page when closing the modal
        navigate('/productos')
      }}
    />
  )
}

// Scroll to top on route change so the user doesn't land at the footer
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}
