export default {
  seo: {
    title: 'Planes y Precios — Grialink | Ventas con IA desde $0/mes',
    description:
      'Elige el plan ideal para tu equipo. Desde lo esencial gratis hasta automatización comercial con IA. Mejora o cancela cuando quieras.',
  },

  hero: {
    title: 'Planes Grialink',
    subtitle: 'Ventas con IA para cada tamaño de equipo. Mejora o cancela cuando quieras.',
    badge: 'Sin contratos · Cancela cuando quieras',
  },

  plans: {
    perMonthShort: 'mes',
    extras: {
      agent: '+ Agente + línea: {price}/mes',
      admin: '+ Administrador adicional: {price}/mes',
    },
    free: {
      name: 'Free',
      description: 'Prueba lo esencial.',
      cta: 'Empezar gratis',
      highlights: [
        '10 prospectos enriquecidos',
        '50 créditos de IA',
        '1 agente · 1 línea',
        'Prospección básica',
        '1 segmento · 1 equipo',
      ],
    },
    starter: {
      name: 'Starter',
      description: 'Prospección + dialer.',
      cta: 'Comenzar',
      highlights: [
        '20 prospectos enriquecidos',
        '1.500 créditos de IA',
        'Dialer · 1.000 min incluidos',
        '5 agentes · 5 líneas',
        '5 secuencias · 5 segmentos',
        '1.000 correos/mes',
        '5 equipos',
      ],
    },
    pro: {
      name: 'Pro',
      description: 'Stack de ventas con IA.',
      cta: 'Comenzar',
      badge: 'Popular',
      highlights: [
        '50 prospectos enriquecidos',
        '5.000 créditos de IA',
        'Dialer · 3.000 min incluidos',
        'Grial Bots + IA de llamadas',
        'Panel inteligente',
        '10 agentes · 10 líneas',
        '5.000 correos/mes',
        '3 subcuentas',
      ],
    },
    scale: {
      name: 'Scale',
      description: 'Para orgs en crecimiento.',
      cta: 'Comenzar',
      highlights: [
        '100 prospectos enriquecidos',
        '12.000 créditos de IA',
        'Dialer · 6.000 min incluidos',
        'Grial Bots + IA de llamadas',
        'Panel inteligente',
        '20 agentes · 20 líneas',
        '50.000 correos/mes',
        'Equipos ilimitados · 5 subcuentas',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      description: 'Para redes grandes.',
      priceLabel: 'Personalizado',
      cta: 'Contactar ventas',
      highlights: [
        'Agentes y líneas personalizados',
        'Soporte dedicado + SLA',
        'Onboarding personalizado',
        'Seguridad enterprise',
      ],
    },
  },

  integrations: {
    title: 'Integraciones nativas',
    metaAds: 'Meta Ads',
    googleAds: 'Google Ads',
    goHighLevel: 'GoHighLevel',
    ringCentral: 'RingCentral',
  },

  trust: {
    title: 'Seguridad pensada para tu centro',
    subtitle:
      'Controles de acceso, cifrado y auditoría para proteger datos de clientes y del equipo — sin claims de certificación que aún no tenemos.',
    mfa: 'Autenticación MFA',
    rbac: 'Roles y permisos (RBAC)',
    audit: 'Audit logs',
    captcha: 'Protección anti-bot',
    encryption: 'Cifrado en tránsito y en reposo',
    encryptionDesc: 'TLS + prácticas modernas',
  },

  addons: {
    title: '¿Necesitas más capacidad?',
    subtitle:
      'Agrega agentes, créditos o correos cuando quieras — sin cambiar de plan.',
    pills: [
      'Prospectos extra · +50 enriquecidos por $35',
      'Créditos IA extra · +5.000 por $35',
      'Correos extra · +5.000/mes por $25',
      'Agente + línea extra · $20/mes',
      'Admin extra · +1 por $10/mes',
    ],
  },

  compare: {
    title: 'Compara planes de un vistazo',
    subtitle: 'Límites y módulos incluidos — alineados con el onboarding de la app.',
    feature: 'Capacidad',
    rows: [
      { label: 'Prospectos enriquecidos / mes', values: ['10', '20', '50', '100', 'Custom'] },
      { label: 'Créditos de IA / mes', values: ['50', '1.500', '5.000', '12.000', 'Custom'] },
      { label: 'Minutos dialer incluidos', values: ['—', '1.000', '3.000', '6.000', 'Custom'] },
      { label: 'Agentes · líneas', values: ['1 · 1', '5 · 5', '10 · 10', '20 · 20', 'Custom'] },
      { label: 'Grial Bots + Call Analysis', values: ['—', '—', '✓', '✓', '✓'] },
      { label: 'Panel inteligente (insights)', values: ['—', '—', '✓', '✓', '✓'] },
      { label: 'Correos / mes', values: ['—', '1.000', '5.000', '50.000', 'Custom'] },
      { label: 'Subcuentas', values: ['—', '—', '3', '5', 'Custom'] },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
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
        question: '¿Puedo gestionar varias sucursales o centros?',
        answer:
          'Sí, el plan Scale incluye capacidad multi-cuenta con hasta 5 subcuentas y 20 agentes. Enterprise ofrece límites personalizados para redes grandes.',
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
        question: '¿Mis datos están seguros?',
        answer:
          'Usamos MFA, roles y permisos (RBAC), audit logs, protección anti-bot y cifrado en tránsito y en reposo. No afirmamos certificaciones HIPAA o SOC 2 que aún no tenemos.',
      },
      {
        question: '¿Hay trial en planes de pago?',
        answer:
          'Sí. Los planes de pago incluyen 14 días de prueba en el flujo de onboarding de app.grialink.com.',
      },
    ],
  },

  cta: {
    title: 'Empieza gratis y escala cuando quieras',
    subtitle:
      'El plan Free no tiene fecha de expiración. Explora la plataforma sin compromiso y actualiza cuando estés listo.',
    primaryButton: 'Crear cuenta gratis',
    secondaryButton: 'Pedir demo (formulario)',
  },

  disclaimer:
    '* Política de uso: Los límites de leads se restablecen mensualmente. Los servicios de IA están sujetos a términos de uso razonable para garantizar el rendimiento óptimo del motor. Los precios mostrados no incluyen IVA donde corresponda.',
};
