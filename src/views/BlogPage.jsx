import React, { useEffect, useMemo, useState } from 'react'
import { Star } from 'lucide-react'
import Header from '../components/Header.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

const BlogPage = ({ scrolled }) => {
  // Feedback state
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [opinion, setOpinion] = useState('')
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [feedback, setFeedback] = useState([])

  const storageKey = 'mv_software_feedback_v1'

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) setFeedback(JSON.parse(raw))
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(feedback))
    } catch {}
  }, [feedback])

  const estrellas = useMemo(() => [1,2,3,4,5], [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim() || !opinion.trim()) return
    const item = {
      id: Date.now(),
      nombre: nombre.trim(),
      email: email.trim(),
      opinion: opinion.trim(),
      rating,
      fecha: new Date().toISOString()
    }
    setFeedback((prev) => [item, ...prev])
    setNombre('')
    setEmail('')
    setOpinion('')
    setRating(5)
  }

  const borrarTodo = () => {
    if (confirm('¿Borrar todas las opiniones guardadas en este dispositivo?')) {
      setFeedback([])
    }
  }

  return (
    <div className="app">
      <Header scrolled={scrolled} activeSection="" />
      <main>
        <section className="section light">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Opiniones</h2>
              <p className="section-subtitle">Cuéntanos tu experiencia con MV Software y nuestros productos. ¡Tu feedback nos ayuda a mejorar!</p>
            </div>

            <div className="products-grid">
              {/* Formulario */}
              <article className="product-card" style={{padding: 0}}>
                <div className="product-header">
                  <span className="product-badge">Feedback</span>
                  <h3 className="product-name">Deja tu opinión</h3>
                  <p className="product-tagline">Tu comentario será guardado en este dispositivo.</p>
                </div>
                <div className="product-body">
                  <form onSubmit={onSubmit} className="feedback-form" style={{display:'grid', gap:'1rem'}}>
                    <div style={{display:'grid', gap:'0.5rem'}}>
                      <label htmlFor="nombre">Nombre</label>
                      <input id="nombre" type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} placeholder="Tu nombre" required style={{padding:'0.85rem 1rem', border:'2px solid #f0f0f0', borderRadius:12}} />
                    </div>
                    <div style={{display:'grid', gap:'0.5rem'}}>
                      <label htmlFor="email">Email (opcional)</label>
                      <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="tu@email.com" style={{padding:'0.85rem 1rem', border:'2px solid #f0f0f0', borderRadius:12}} />
                    </div>
                    <div style={{display:'grid', gap:'0.5rem'}}>
                      <label>Calificación</label>
                      <div style={{display:'flex', gap:'0.5rem'}}>
                        {estrellas.map((n)=>{
                          const filled = (hoverRating || rating) >= n
                          return (
                            <button
                              type="button"
                              key={n}
                              onMouseEnter={()=>setHoverRating(n)}
                              onMouseLeave={()=>setHoverRating(0)}
                              onClick={()=>setRating(n)}
                              aria-label={`Calificar ${n} estrellas`}
                              style={{background:'transparent', border:'none', cursor:'pointer'}}
                            >
                              <Star size={28} color={filled ? '#1E66D6' : '#bbb'} fill={filled ? '#1E66D6' : 'none'} />
                            </button>
                          )
                        })}
                      </div>
                    </div>
                    <div style={{display:'grid', gap:'0.5rem'}}>
                      <label htmlFor="opinion">Opinión</label>
                      <textarea id="opinion" value={opinion} onChange={(e)=>setOpinion(e.target.value)} placeholder="¿Qué te pareció nuestro servicio o producto?" rows={5} required style={{padding:'0.85rem 1rem', border:'2px solid #f0f0f0', borderRadius:12, resize:'vertical'}} />
                    </div>
                    <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
                      <button type="submit" className="btn btn-primary">Enviar opinión</button>
                      <button type="button" className="btn btn-secondary" onClick={borrarTodo}>Borrar todo</button>
                    </div>
                  </form>
                </div>
              </article>

              {/* Lista de opiniones */}
              <article className="product-card" style={{padding: 0}}>
                <div className="product-header">
                  <span className="product-badge">Clientes</span>
                  <h3 className="product-name">Lo que dicen</h3>
                  <p className="product-tagline">Opiniones guardadas en este navegador</p>
                </div>
                <div className="product-body">
                  {feedback.length === 0 ? (
                    <p className="product-description">Aún no hay opiniones. ¡Sé el primero en dejar la tuya!</p>
                  ) : (
                    <ul style={{listStyle:'none', padding:0, display:'grid', gap:'1.25rem'}}>
                      {feedback.map(item => (
                        <li key={item.id} style={{border:'2px solid #f0f0f0', borderRadius:16, padding:'1rem 1.25rem'}}>
                          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', flexWrap:'wrap'}}>
                            <strong>{item.nombre}</strong>
                            <span style={{color:'#666', fontSize:'0.9rem'}}>{new Date(item.fecha).toLocaleDateString()}</span>
                          </div>
                          <div style={{margin:'0.5rem 0'}}>
                            {estrellas.map(n => (
                              <Star key={n} size={18} color={(item.rating)>=n ? '#1E66D6' : '#ddd'} fill={(item.rating)>=n ? '#1E66D6' : 'none'} />
                            ))}
                          </div>
                          <p style={{color:'#444'}}>{item.opinion}</p>
                          {item.email && (
                            <p style={{color:'#666', fontSize:'0.9rem', marginTop:'0.25rem'}}>Email: {item.email}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  )
}

export default BlogPage
