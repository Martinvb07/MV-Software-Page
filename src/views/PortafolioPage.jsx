import React from 'react'
import Header from '../components/Header.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

const PortafolioPage = ({ scrolled }) => {
  const proyectos = [
    { id: 1, titulo: 'Mesoft', desc: 'Sistema SaaS para gestión de restaurantes', etiqueta: 'SaaS' },
    { id: 2, titulo: 'TiendaSoft', desc: 'POS en la nube para retail', etiqueta: 'Retail' },
    { id: 3, titulo: 'Proyecto Web', desc: 'Sitio corporativo moderno y responsive', etiqueta: 'Web' }
  ]
  return (
    <div className="app">
      <Header scrolled={scrolled} activeSection="" />
      <main>
        <section className="section white">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Portafolio</h2>
              <p className="section-subtitle">Algunos proyectos y productos destacados desarrollados por nuestro equipo.</p>
            </div>

            <div className="products-grid">
              {proyectos.map((p) => (
                <div key={p.id} className="product-card">
                  <div className="product-header">
                    <span className="product-badge">{p.etiqueta}</span>
                    <h3 className="product-name">{p.titulo}</h3>
                    <p className="product-tagline">{p.desc}</p>
                  </div>
                  <div className="product-body">
                    <p className="product-description">Descripción breve del proyecto. Podemos añadir capturas, stack técnico y resultados cuando lo tengas.</p>
                    <button className="btn btn-secondary">Ver detalles</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

export default PortafolioPage
