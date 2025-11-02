import React from 'react'
import '../styles/CTA.css'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2 className="cta-title">¿Tienes un proyecto en mente?</h2>
        <p className="cta-description">Conversemos sobre cómo podemos ayudarte a materializar tu idea y llevar tu negocio al siguiente nivel con tecnología de vanguardia</p>
        <Link className="cta-button" to="/contacto">Iniciar Conversación</Link>
      </div>
    </section>
  )
}

export default CTA
