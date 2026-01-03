import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, Zap, Calendar, Lock, Check } from 'lucide-react';
import '../../styles/Products/Mesoft.css';

const MesoftDetail = ({ isOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate()

    // Imágenes del producto (aquí colocarás las URLs de tus imágenes reales)
    const productImages = [
        {
            url: new URL('./Image-Mesoft/MesoftAdmin.png', import.meta.url).href,
            alt: 'Gestiona tu restaurante con precisión',
            caption: 'Gestiona, Organiza y Optimiza tu restaurante'
        },
        {
        url: new URL('./Image-Mesoft/MesoftFinanzas.png', import.meta.url).href,
        alt: 'Quiénes somos - Mesoft',
        caption: 'Maneja tus finanzas y operaciones eficientemente'
        },
        {
        url: new URL('./Image-Mesoft/MesoftMesero.png', import.meta.url).href,
        alt: 'Panel de control Mesoft',
        caption: 'Dashboard intuitivo y fácil de usar'
        },
        {
        url: new URL('./Image-Mesoft/MesoftMeseroPedido.png', import.meta.url).href,
        alt: 'Quiénes somos - Mesoft',
        caption: 'Control de pedidos desde cualquier dispositivo'
        },
        {
        url: new URL('./Image-Mesoft/MesoftMesas.png', import.meta.url).href,
        alt: 'Quiénes somos - Mesoft',
        caption: 'Controla tus mesas y optimiza el servicio'
        }
    ];

    // Navegar en el carousel
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % productImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
    };

    // Auto-slide cada 5 segundos
    useEffect(() => {
        if (isOpen) {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
        }
    }, [isOpen, currentSlide]);

    // Prevenir scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'unset';
        }
        return () => {
        document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const resumenFeatures = [
      { icon: <Calendar size={24} />, title: 'Operación ágil', desc: 'Mesas y pedidos en tiempo real' },
      { icon: <Lock size={24} />, title: 'Seguro', desc: 'Roles, permisos y auditoría' },
      { icon: <Zap size={24} />, title: 'Automatizado', desc: 'Asignaciones y KPIs' }
    ]

        const planes = [
            {
                name: 'Plan Básico Mensual',
                price: '60.000',
                period: 'COP/mes',
                description:
                    'Suscripción mensual a Mesoft con todas las funcionalidades del sistema (pedidos, inventario, reportes, usuarios). Ideal si prefieres empezar con un pago mensual bajo e ir creciendo.',
                features: [
                    'Pago mensual por suscripción',
                    'Acceso completo mientras la suscripción esté activa',
                    'Gestión de pedidos ilimitados',
                    'Control de inventario y productos',
                    'Reportes y estadísticas básicas',
                    'Gestión de usuarios y roles',
                    'Soporte estándar incluido',
                    'Actualizaciones automáticas mientras la suscripción esté activa'
                ]
            },
            {
                name: 'Licencia Única',
                price: '720.000',
                period: '  Pago único',
                description:
                    'Compra única de la licencia de Mesoft para tu restaurante. Pagas una sola vez y usas el sistema sin mensualidades, con 1 año de soporte y actualizaciones incluidas.',
                features: [
                    'Pago único por licencia (sin mensualidades)',
                    'Uso ilimitado del sistema para tu negocio',
                    'Todas las funcionalidades del sistema Mesoft',
                    '1 año de soporte y mantenimiento incluido',
                    'Actualizaciones durante el primer año sin costo',
                    'Posibilidad de renovar soporte desde el segundo año',
                    'Ideal para negocios que prefieren inversión única y estabilidad en costos'
                ],
                recommended: true
            }
        ]

    return (
        <div className="mesoft-modal-overlay">
        <div className="mesoft-modal">
            {/* Close Button */}
            <button className="mesoft-close-btn" onClick={onClose}>
            <X size={28} />
            </button>

                        {/* Encabezado simple */}
                        <div className="mesoft-header">
                            <h1 className="mesoft-logo">Mesoft</h1>
                        </div>

            {/* Contenido Scrolleable */}
            <div className="mesoft-content">
            
            {/* Galería de Imágenes con Carousel */}
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

                {/* Indicadores */}
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

                        {/* Resumen */}
                        <section className="mesoft-summary">
                            <h2>Mesoft: Gestión para Restaurantes</h2>
                            <p>
                                Optimiza mesas y pedidos, controla tu equipo y tus finanzas, toma decisiones con reportes en tiempo real.
                                Genera facturas, gestiona inventarios y supervisa el rendimiento de tu restaurante.
                                Todo en la nube y accesible desde cualquier dispositivo.
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
                                                <a
                                                    className="btn btn-primary"
                                                    href="https://mesoft.store/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Sitio Web
                                                </a>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => navigate('/productos')}
                                >
                                    Ver más productos
                                </button>
                            </div>
                        </section>

                                        {/* Planes y Precios */}
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
                                                        <button className="btn btn-primary" onClick={() => window.open('https://srv1037585.hstgr.cloud/', '_blank', 'noopener')}>Elegir Plan</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

            </div>
        </div>
        </div>
    );
};

export default MesoftDetail;