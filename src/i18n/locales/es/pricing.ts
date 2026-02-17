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
    platform: 'Plataforma',
    advanced: 'Funciones Avanzadas',
  },

  /* ── Feature labels ── */
  features: {
    /* Prospección */
    enrichedContacts: '{count} Contactos enriquecidos',
    aiCredits: '{count} Créditos de IA',
    sequences: '{count} Secuencias',
    noSequences: 'Sin secuencias',
    emailsPerMonth: '{count} Emails/mes',
    basicProspecting: 'Prospección básica',
    advancedAI: 'IA avanzada',
    noAdvancedAI: 'Sin IA avanzada',
    unlimitedSequences: 'Secuencias ilimitadas',
    unlimitedEmails: 'Emails ilimitados',

    /* Plataforma */
    agentLimit: '{count} Agentes',
    adminAccounts: '{count} Admin',
    adminAccountsPlural: '{count} Admins',
    unlimitedInboxes: 'Inboxes ilimitados',
    contactsLimit: '{count} Contactos',
    unlimitedContacts: 'Contactos ilimitados',
    conversationsPerMonth: '{count} Conversaciones/mes',
    unlimitedConversations: 'Conversaciones ilimitadas',
    teams: '{count} Equipos',
    unlimitedTeams: 'Equipos ilimitados',
    automationRules: '{count} Reglas de automatización',
    unlimitedAutomationRules: 'Reglas ilimitadas',
    segments: '{count} Segmentos',
    unlimitedSegments: 'Segmentos ilimitados',
    unlimitedAgents: 'Agentes ilimitados',

    /* Avanzadas */
    callTranscription: 'Transcripción de llamadas',
    noCallTranscription: 'Sin transcripción de llamadas',
    smartDashboard: 'Dashboard inteligente',
    noSmartDashboard: 'Sin dashboard inteligente',
    prioritySupport: 'Soporte prioritario',
    noPrioritySupport: 'Sin soporte prioritario',
    multiClinic: 'Multi-clínica',
    noMultiClinic: 'Sin multi-clínica',
    corporateReports: 'Reportes corporativos',
    noCorporateReports: 'Sin reportes corporativos',

    /* Notas al pie */
    extraAgent: '+ Agente adicional: <strong>{price}/mes</strong>',
    extraAdmin: '+ Admin adicional: <strong>{price}/mes</strong>',
    trialLabel: 'Prueba gratis de {days} días',
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
    title: 'Complementos adicionales',
    items: [
      {
        title: 'Paquetes AI Credits',
        availability: 'Todos los planes',
        tiers: [
          { label: '+2,000', price: '$15/mes' },
          { label: '+5,000 ⭐', price: '$35/mes' },
          { label: '+10,000', price: '$60/mes' },
        ],
      },
      {
        title: 'Paquetes de Contactos',
        availability: 'Todos los planes',
        tiers: [
          { label: '+200', price: '$15/mes' },
          { label: '+500', price: '$30/mes' },
        ],
      },
      {
        title: 'Agente adicional',
        availability: 'Starter y Growth',
        description: 'Amplía tu equipo por <strong>$20/mes</strong> por agente adicional.',
      },
      {
        title: 'Admin adicional',
        availability: 'Starter, Growth y Scale',
        description: 'Subcuenta administrativa adicional por <strong>$5–$10/mes</strong> según plan.',
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
        question: '¿Puedo migrar mis contactos desde otra plataforma?',
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
