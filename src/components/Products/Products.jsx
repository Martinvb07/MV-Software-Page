import React from 'react'
import * as Icons from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import '../../styles/Products/Products.css'

const Products = ({ products }) => {
  const navigate = useNavigate()
  return (
    <section className="section light">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-subtitle">Soluciones SaaS desarrolladas por MV Software para diferentes industrias</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id || index} className="product-card">
              <div className="product-header">
                <span className="product-badge">{product.badge}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-tagline">{product.tagline}</p>
              </div>
              <div className="product-body">
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, idx) => {
                    const Icon = Icons[feature.icon] || Icons.ShoppingCart
                    return (
                      <li key={idx} className="product-feature">
                        <span className="check-icon"><Icon size={18} /></span>
                        <span>{feature.text}</span>
                      </li>
                    )
                  })}
                </ul>
                <div className="product-price">
                  <p className="price-label">Desde</p>
                  <div>
                    <span className="price-amount">${product.priceBasic}</span>
                    <span className="price-period"> COP/mes</span>
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => {
                    if (product.id === 'mesoft') {
                      navigate('/productos/mesoft')
                    } else {
                      alert(`Conocer más sobre ${product.name}`)
                    }
                  }}
                >
                  Conocer Más
                </button>
              </div>
            </div>
          ))}

          {/* Próximamente card (static) */}
          <div className="product-card" style={{ opacity: 0.7 }}>
            <div className="product-header" style={{ background: 'linear-gradient(135deg, #666 0%, #444 100%)' }}>
              <span className="product-badge">Próximamente</span>
              <h3 className="product-name">Más Productos</h3>
              <p className="product-tagline">Nuevas soluciones en desarrollo</p>
            </div>
            <div className="product-body">
              <p className="product-description">Estamos trabajando en nuevas soluciones innovadoras para diferentes industrias. ¿Tienes una idea? ¡Contáctanos y la hacemos realidad!</p>
              <button className="btn btn-secondary" style={{ width: '100%', marginTop: '2rem' }} onClick={() => alert('Proponer Proyecto')}>Proponer Proyecto</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
