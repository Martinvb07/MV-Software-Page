import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

// Header siempre navega por rutas (multipágina profesional)
const Header = ({ scrolled, activeSection }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <Link className="logo" to="/">
          <span className="logo-text">VELCORE</span>
          <span className="logo-subtitle">SYSTEMS</span>
        </Link>
        <div className="nav-menu">
          <Link className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`} to="/">Inicio</Link>
          <Link className={`nav-link ${activeSection === 'servicios' ? 'active' : ''}`} to="/servicios">Servicios</Link>
          <Link className={`nav-link ${activeSection === 'productos' ? 'active' : ''}`} to="/productos">Productos</Link>
          <Link className={`nav-link ${activeSection === 'nosotros' ? 'active' : ''}`} to="/nosotros">Nosotros</Link>
        </div>
        <Link className="btn btn-primary" to="/contacto">Contactar</Link>
      </div>
    </header>
  )
}

export default Header
