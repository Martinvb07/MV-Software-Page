import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

// Footer con navegación por rutas (no scroll interno)
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link className="logo" to="/">
            <span className="logo-text">VELCORE</span>
            <span className="logo-subtitle">SYSTEMS</span>
          </Link>
          <p className="footer-description">Desarrollamos soluciones tecnológicas innovadoras para empresas que buscan crecer y optimizar sus procesos. Transformamos ideas en software profesional.</p>
        </div>
        <div className="footer-column">
          <h4>Servicios</h4>
          <>
            <Link to="/servicios">Desarrollo Web</Link>
            <Link to="/servicios">Apps Móviles</Link>
            <Link to="/servicios">Sistemas SaaS</Link>
            <Link to="/servicios">Consultoría</Link>
          </>
        </div>
        <div className="footer-column">
          <h4>Productos</h4>
          <>
            <Link to="/productos/mesoft">Mesoft</Link>
            <Link to="/productos">Próximamente</Link>
          </>
          <Link to="/contacto">Desarrollo a Medida</Link>
        </div>
        <div className="footer-column">
          <h4>Empresa</h4>
          <Link to="/nosotros">Sobre Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/portafolio">Portafolio</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
      <div className="footer-bottom"><p>© 2025 Velcore Systems - Desarrollado por Martin Velásquez | Colombia</p></div>
    </footer>
  )
}

export default Footer
