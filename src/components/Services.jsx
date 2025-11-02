import React from 'react'
import * as Icons from 'lucide-react'
import '../styles/Services.css'

const Services = ({ services }) => {
  return (
    <section className="section white">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Ofrecemos soluciones integrales de desarrollo de software para empresas de todos los tamaños</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = Icons[service.icon] || Icons.Code
            return (
              <div key={service.id || index} className="service-card">
                <div className="service-icon"><Icon size={32} /></div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, idx) => <span key={idx} className="tag">{tag}</span>)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
