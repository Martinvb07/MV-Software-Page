import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, Zap, Calendar, Lock, Check, MapPin } from 'lucide-react'
import '../../styles/Products/Mesoft.css'

const EnviaGODetail = ({ isOpen, onClose }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const navigate = useNavigate()

	// TODO: Reemplazar estas imágenes por capturas reales de EnviaGO
	const productImages = [
		{
			url: new URL('./Image-Mesoft/MesoftAdmin.png', import.meta.url).href,
			alt: 'Mapa de entregas EnviaGO',
			caption: 'Visualiza tus envíos en un mapa en tiempo real'
		},
		{
			url: new URL('./Image-Mesoft/MesoftMeseroPedido.png', import.meta.url).href,
			alt: 'Rutas y pedidos',
			caption: 'Organiza rutas y pedidos por repartidor'
		}
	]

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % productImages.length)
	}

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length)
	}

	useEffect(() => {
		if (isOpen) {
			const interval = setInterval(nextSlide, 5000)
			return () => clearInterval(interval)
		}
	}, [isOpen, currentSlide])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	if (!isOpen) return null

	const resumenFeatures = [
		{ icon: <MapPin size={24} />, title: 'Seguimiento en tiempo real', desc: 'Ubicación de envíos y repartidores en mapa' },
		{ icon: <Calendar size={24} />, title: 'Rutas organizadas', desc: 'Planificación de entregas por zona y horarios' },
		{ icon: <Zap size={24} />, title: 'Operación eficiente', desc: 'Menos tiempos muertos y más entregas completadas' }
	]

	const planes = [
		{
			name: 'Plan Básico Mensual',
			price: '60.000',
			period: 'COP/mes',
			description:
				'Suscripción mensual a EnviaGO para gestionar envíos, rutas y repartidores de tu tienda o negocio de delivery.',
			features: [
				'Gestión de pedidos y estados de entrega',
				'Visualización de entregas en mapa',
				'Asignación de pedidos a repartidores',
				'Notificaciones básicas al cliente',
				'Reportes simples de tiempos de entrega',
				'Soporte estándar y actualizaciones automáticas'
			]
		},
		{
			name: 'Licencia Única (Pago Único)',
			price: '880.000',
			period: 'Pago único (aprox. 220 USD)',
			description:
				'Compra única de la licencia de EnviaGO para tu operación logística. Usa el sistema sin mensualidades, con 1 año de soporte y actualizaciones.',
			features: [
				'Pago único por licencia (sin mensualidades)',
				'Uso ilimitado del sistema para tu negocio de envíos',
				'Módulos de rutas, estados y reportes incluidos',
				'1 año de soporte y mantenimiento incluido',
				'Actualizaciones durante el primer año sin costo',
				'Posibilidad de renovar soporte desde el segundo año'
			],
			recommended: true
		}
	]

	return (
		<div className="mesoft-modal-overlay">
			<div className="mesoft-modal">
				<button className="mesoft-close-btn" onClick={onClose}>
					<X size={28} />
				</button>

				<div className="mesoft-header">
					<h1 className="mesoft-logo">EnviaGO</h1>
				</div>

				<div className="mesoft-content">
					<section className="mesoft-gallery">
						<div className="carousel">
							<button className="carousel-btn prev" onClick={prevSlide}>
								<ChevronLeft size={32} />
							</button>

							<div className="carousel-slides">
								{productImages.map((image, index) => (
									<div
										key={index}
										className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
										style={{
											transform: `translateX(${(index - currentSlide) * 100}%)`
										}}
									>
										<div className="slide-placeholder">
											<img src={image.url} alt={image.alt} />
											<div className="slide-caption">
												<h2>{image.caption}</h2>
											</div>
										</div>
									</div>
								))}
							</div>

							<button className="carousel-btn next" onClick={nextSlide}>
								<ChevronRight size={32} />
							</button>

							<div className="carousel-indicators">
								{productImages.map((_, index) => (
									<button
										key={index}
										className={`indicator ${index === currentSlide ? 'active' : ''}`}
										onClick={() => setCurrentSlide(index)}
									/>
								))}
							</div>
						</div>
					</section>

					<section className="mesoft-summary">
						<h2>EnviaGO: Gestión de entregas</h2>
						<p>
							Coordina tus envíos, rutas y repartidores desde una sola plataforma. Lleva el control de cada entrega,
							mejora los tiempos de respuesta y ofrece una mejor experiencia a tus clientes.
						</p>
						<div className="summary-features">
							{resumenFeatures.map((f, i) => (
								<div key={i} className="summary-card">
									<div className="summary-icon">{f.icon}</div>
									<h3>{f.title}</h3>
									<p>{f.desc}</p>
								</div>
							))}
						</div>
						<div className="summary-pricing">
							<span className="from">Desde</span>
							<div className="amount">
								<span className="currency">$</span>
								<span className="value">60.000</span>
								<span className="period"> COP/mes</span>
							</div>
						</div>
						<div className="summary-actions">
							<button className="btn btn-primary" onClick={() => navigate('/contacto')}>
								Solicitar demo
							</button>
							<button className="btn btn-secondary" onClick={() => navigate('/productos')}>
								Ver más productos
							</button>
						</div>
					</section>

					<section className="mesoft-pricing">
						<h2>Planes y Precios</h2>
						<div className="pricing-grid">
							{planes.map((plan, index) => (
								<div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
									{plan.recommended && <span className="badge-recommended">Más Popular</span>}
									<h3>{plan.name}</h3>
									<div className="price">
										<span className="currency">$</span>
										<span className="amount">{plan.price}</span>
										<span className="period">{plan.period}</span>
									</div>
									<p className="plan-description">{plan.description}</p>
									<ul className="features-list">
										{plan.features.map((feature, idx) => (
											<li key={idx}>
												<Check size={20} />
												<span>{feature}</span>
											</li>
										))}
									</ul>
									<button className="btn btn-primary" onClick={() => navigate('/contacto')}>
										Hablar con ventas
									</button>
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default EnviaGODetail

