// Data models (pure data, no UI)
export const stats = [
  { number: '1+', label: 'Años de Experiencia' },
  { number: '10+', label: 'Proyectos Completados' },
  { number: '100%', label: 'Satisfacción' }
]

export const services = [
  {
    id: 'dev-software',
    icon: 'Code',
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones tecnológicas personalizadas que se adaptan perfectamente a las necesidades de tu negocio',
    tags: ['Web', 'Móvil', 'Desktop']
  },
  {
    id: 'saas',
    icon: 'Cloud',
    title: 'Sistemas SaaS',
    description: 'Desarrollamos plataformas en la nube escalables y seguras para que gestiones tu negocio desde cualquier lugar',
    tags: ['Cloud', 'Escalable', '24/7']
  },
  {
    id: 'uiux',
    icon: 'Palette',
    title: 'Diseño UI/UX',
    description: 'Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia de tus usuarios',
    tags: ['Moderno', 'Responsive', 'Intuitivo']
  },
  {
    id: 'consultoria',
    icon: 'Wrench',
    title: 'Consultoría Tecnológica',
    description: 'Te asesoramos en la transformación digital de tu empresa con las mejores prácticas del mercado',
    tags: ['Estrategia', 'Innovación', 'Optimización']
  },
  {
    id: 'seguridad',
    icon: 'Shield',
    title: 'Seguridad y Mantenimiento',
    description: 'Garantizamos la seguridad y el correcto funcionamiento de tus sistemas con soporte continuo',
    tags: ['Seguro', 'Confiable', 'Soporte 24/7']
  }
]

export const products = [
  {
    id: 'mesoft',
    name: 'Mesoft',
    tagline: 'Sistema de Gestión para Restaurantes',
    badge: 'SaaS',
    description: 'Sistema web completo para optimizar la operación de tu restaurante. Gestiona pedidos, meseros, inventario y reportes desde una sola plataforma en línea, disponible 24/7.',
    features: [
      { icon: 'ShoppingCart', text: 'Gestión de pedidos en tiempo real' },
      { icon: 'Users', text: 'Control de meseros y mesas' },
      { icon: 'Package', text: 'Inventario inteligente' },
      { icon: 'BarChart3', text: 'Reportes y estadísticas detalladas' },
      { icon: 'Cloud', text: 'Multi-usuario y multi-restaurante' },
      { icon: 'Smartphone', text: 'Acceso desde cualquier dispositivo' }
    ],
    priceBasic: '60.000',
    pricePro: '100.000'
  },
  {
    id: 'agromanager',
    name: 'AgroManager',
    tagline: 'Gestión integral para fincas y cultivos',
    badge: 'SaaS',
    description: 'Plataforma en la nube para administrar lotes, siembras, cosechas y costos de producción agrícola en un solo lugar.',
    features: [
      { icon: 'Sprout', text: 'Control de lotes, cultivos y etapas de siembra' },
      { icon: 'CalendarRange', text: 'Planificación de labores y calendario de actividades' },
      { icon: 'ClipboardList', text: 'Registro de insumos, mano de obra y costos' },
      { icon: 'BarChart3', text: 'Reportes de rendimientos por cultivo y temporada' },
      { icon: 'Users', text: 'Gestión de personal y contratistas' },
      { icon: 'Cloud', text: 'Acceso desde cualquier dispositivo con conexión' }
    ],
    priceBasic: '70.000',
    pricePro: '120.000'
  },
  {
    id: 'enviago',
    name: 'EnviaGO',
    tagline: 'Gestión de entregas y logística de última milla',
    badge: 'SaaS',
    description: 'Sistema para coordinar envíos, rutas y mensajeros en tiempo real, ideal para tiendas en línea y servicios de delivery.',
    features: [
      { icon: 'MapPin', text: 'Seguimiento de envíos en mapa en tiempo real' },
      { icon: 'Route', text: 'Optimización de rutas para repartidores' },
      { icon: 'Smartphone', text: 'Notificaciones al cliente por SMS o WhatsApp (según integración)' },
      { icon: 'Package', text: 'Control de estados de pedido y paquetes' },
      { icon: 'CreditCard', text: 'Registro de cobros contra entrega (COD)' },
      { icon: 'BarChart3', text: 'Indicadores de tiempos de entrega y desempeño' }
    ],
    priceBasic: '60.000',
    pricePro: '110.000'
  }
]
