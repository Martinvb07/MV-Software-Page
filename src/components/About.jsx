import React from 'react'
import { Calendar, Shield, Cloud, TrendingUp, Target, Eye, Gem, Rocket } from 'lucide-react'
import '../styles/About.css'

const About = () => {
  return (
    <section className="section white">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">Sobre Velcore Systems</h2>
            <p className="about-text">Somos una empresa colombiana especializada en el desarrollo de software a medida. Nos apasiona crear soluciones tecnológicas que realmente resuelven problemas y generan valor para nuestros clientes.</p>
            <p className="about-text">Nuestro enfoque se centra en entender profundamente las necesidades de cada negocio para diseñar y desarrollar sistemas que no solo cumplan con los requisitos técnicos, sino que además sean intuitivos, escalables y fáciles de mantener.</p>
            <div className="about-highlights">
              <div className="highlight-box">
                <Calendar size={32} style={{ margin: '0 auto 0.5rem', color: 'var(--primary-blue)' }} />
                <span className="highlight-number">2024</span>
                <span className="highlight-text">Fundación</span>
              </div>
              <div className="highlight-box">
                <Shield size={32} style={{ margin: '0 auto 0.5rem', color: 'var(--primary-blue)' }} />
                <span className="highlight-number">24/7</span>
                <span className="highlight-text">Soporte</span>
              </div>
              <div className="highlight-box">
                <Cloud size={32} style={{ margin: '0 auto 0.5rem', color: 'var(--primary-blue)' }} />
                <span className="highlight-number">100%</span>
                <span className="highlight-text">Cloud</span>
              </div>
              <div className="highlight-box">
                <TrendingUp size={32} style={{ margin: '0 auto 0.5rem', color: 'var(--primary-blue)' }} />
                <span className="highlight-number">∞</span>
                <span className="highlight-text">Innovación</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card">
              <div className="visual-icon"><Target size={32} /></div>
              <h4>Nuestra Misión</h4>
              <p>Transformar ideas en soluciones tecnológicas de alto impacto</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon"><Eye size={32} /></div>
              <h4>Nuestra Visión</h4>
              <p>Ser líderes en innovación de software en Colombia</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon"><Gem size={32} /></div>
              <h4>Nuestros Valores</h4>
              <p>Calidad, Innovación, Compromiso y Excelencia</p>
            </div>
            <div className="visual-card">
              <div className="visual-icon"><Rocket size={32} /></div>
              <h4>Tecnología</h4>
              <p>Usamos las últimas tecnologías del mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
