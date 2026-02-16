export default {
  /* ── SEO ── */
  seo: {
    title: 'Planes y Precios — Grialink | IA para Clínicas desde $0/mes',
    description:
      'Elige el plan ideal para tu clínica. Desde prospección básica gratuita hasta automatización comercial completa con IA. Sin contratos forzosos.',
  },

  /* ── Hero ── */
  hero: {
    titleLine1: 'Planes que crecen',
    titleHighlight: 'con tu clínica',
    subtitle:
      'Desde una clínica independiente hasta una red de múltiples sucursales. Escala con IA sin cambiar de plataforma. Todos los planes incluyen canales ilimitados: WhatsApp, Instagram, Email y más.',
    badge: 'Sin contratos · Cancela cuando quieras',
  },

  /* ── Toggle ── */
  toggle: {
    monthly: 'Mensual',
    yearly: 'Anual',
    saveLabel: 'Ahorra {percent}%',
  },

  /* ── Plans ── */
  plans: {
    perMonth: '/mes',
    perYear: '/año',
    free: {
      name: 'Free',
      description: 'Explora la plataforma sin costo.',
      cta: 'Comenzar gratis',
    },
    starter: {
      name: 'Starter',
      description: 'Ideal para clínicas que inician con IA.',
      cta: 'Comenzar',
    },
    growth: {
      name: 'Growth',
      description: 'Para clínicas en crecimiento activo.',
      cta: 'Comenzar',
      badge: 'Más Popular',
    },
    scale: {
      name: 'Scale',
      description: 'Multi-clínica y equipos grandes.',
      cta: 'Comenzar',
    },
  },

  /* ── Feature categories ── */
  categories: {
    prospecting: 'Prospección & IA',
    sales: 'Ventas',
  },

  /* ── Feature labels ── */
  features: {
    basicProspecting: 'Prospección básica',
    noAdvancedAI: 'Sin IA avanzada',
    contacts: '{count} Contactos',
    aiCredits: '{count} AI Credits',
    lists: '{count} Listas',
    sequences: '{count} Secuencias',
    aiAgents: '{count} Agentes de IA',
    unlimitedAgentsLists: 'Agentes/Listas Ilimitados',
    adminAccounts: '{count} Cuenta Admin',
    adminAccountsPlural: '{count} Cuentas Admin',
    agentLimit: 'Límite {count} agentes',
    unlimitedAgents: 'Agentes Ilimitados',
    callTranscription: 'Transcripción de llamadas',
    smartDashboard: 'Dashboard inteligente',
    scoringDashboard: 'Dashboard Scoring',
    corporateFeatures: 'Funciones Corporativas',
    extraSeller: '+ Vendedor adicional: <strong>{price}/mes</strong>',
  },

  /* ── Trust / Security ── */
  trust: {
    badge: 'Grado Médico',
    title: 'Seguridad y Cumplimiento',
    subtitle:
      'Protección de datos sensibles con infraestructura certificada y encriptación de extremo a extremo para el sector salud.',
    certifications: ['HIPAA Compliant', 'SOC 2 Type II', 'GDPR Ready'],
    encryptionTitle: 'Encriptación AES-256',
    encryptionSubtitle: 'Estándar bancario',
  },

  /* ── Integrations ── */
  integrations: {
    title: 'Integraciones Nativas',
  },

  /* ── Add-ons ── */
  addons: {
    title: 'Complementos adicionales (Overages)',
    items: [
      {
        title: 'Paquetes de Contactos',
        tiers: [
          { label: '+200', price: '$15' },
          { label: '+500', price: '$30' },
        ],
      },
      {
        title: 'Paquetes AI Credits',
        tiers: [
          { label: '+2k', price: '$15' },
          { label: '+10k', price: '$60' },
        ],
      },
      {
        title: 'Vendedores Extra',
        description: 'Amplía tu equipo desde <strong>$20/mes</strong> por vendedor adicional.',
      },
      {
        title: 'Admin Extra',
        description: 'Subcuenta administrativa adicional por <strong>$10/mes</strong>.',
      },
    ],
  },

  /* ── FAQ ── */
  faq: {
    title: 'Preguntas Frecuentes',
    subtitle: 'Las respuestas que necesitas antes de decidir.',
    items: [
      {
        question: '¿Se integra con WhatsApp Business?',
        answer:
          'Sí, Grialink tiene integración nativa con WhatsApp Business API. Puedes enviar y recibir mensajes, automatizar recordatorios de citas y hacer seguimiento de leads directamente desde la plataforma.',
      },
      {
        question: '¿Puedo sincronizar las citas con Google Calendar?',
        answer:
          'Sí, ofrecemos sincronización bidireccional con Google Calendar vía OAuth. Las citas creadas en Grialink aparecen automáticamente en tu calendario, y viceversa.',
      },
      {
        question: '¿Qué pasa si se me acaban los créditos de IA?',
        answer:
          'Puedes comprar paquetes adicionales de créditos como add-on mensual sin cambiar de plan. Los créditos no usados no se acumulan. También puedes actualizar tu plan para obtener más créditos incluidos.',
      },
      {
        question: '¿Puedo gestionar varias sucursales o clínicas?',
        answer:
          'Sí, el plan Scale incluye capacidad multi-clínica con hasta 15 cuentas administrativas y agentes ilimitados. Ideal para redes de clínicas con reportes corporativos centralizados.',
      },
      {
        question: '¿Qué canales de comunicación soporta?',
        answer:
          'WhatsApp Business API, Instagram DMs, Facebook Messenger, Email, Web Chat en vivo, Telegram, LINE, SMS (via Twilio) y un canal API genérico para integraciones personalizadas. Todos los canales están incluidos en todos los planes.',
      },
      {
        question: '¿Puedo empezar con el plan Free?',
        answer:
          'Sí, el plan Free no tiene fecha de expiración. Puedes explorar la plataforma sin costo y actualizar a un plan de pago cuando estés listo para desbloquear funciones avanzadas de IA y más capacidad.',
      },
      {
        question: '¿Puedo migrar mis contactos desde otro CRM?',
        answer:
          'Sí, puedes importar contactos de forma masiva y también usar el Prospector AI para enriquecer datos desde Apollo.io. Si necesitas migración asistida, nuestro equipo te ayuda sin costo adicional.',
      },
      {
        question: '¿Los datos de mis pacientes están seguros?',
        answer:
          'Implementamos encriptación AES-256, autenticación multifactor (MFA), roles y permisos personalizados (RBAC), audit logs, y protección anti-bot con hCaptcha. Tus datos nunca se comparten con terceros.',
      },
    ],
  },

  /* ── CTA ── */
  cta: {
    title: 'Empieza gratis y escala cuando quieras',
    subtitle:
      'El plan Free no tiene fecha de expiración. Explora la plataforma sin compromiso y actualiza cuando estés listo.',
    primaryButton: 'Crear cuenta gratis',
    secondaryButton: 'Agendar demo personalizada',
  },

  /* ── Disclaimer ── */
  disclaimer:
    '* Política de uso: Los límites de leads se restablecen mensualmente. Los servicios de IA están sujetos a términos de uso razonable para garantizar el rendimiento óptimo del motor clínico. Los precios mostrados no incluyen IVA donde corresponda.',
};
