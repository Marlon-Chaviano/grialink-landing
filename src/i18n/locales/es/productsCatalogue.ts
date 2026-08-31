/**
 * The /products index.
 *
 * Product names and taglines live here; the ordering, icons and routes come
 * from `src/lib/productPages.ts`. Keys match the product slug.
 */
export default {
  seo: {
    title: 'Productos — Grialink | Once productos, un solo recorrido',
    description:
      'Cuatro agentes de IA y siete módulos de plataforma que cubren todo el camino de la primera consulta a la visita de seguimiento: WhatsApp Copilot, Grial Front Desk, Grial Scheduler, Grial Auditor, Prospector, Cadencias, Bandeja y Pipeline, Grial Mind, Calendario, Dialer y Analytics.',
  },

  hero: {
    badge: 'El catálogo completo',
    titleLine1: 'Once productos.',
    titleHighlight: 'Un solo recorrido.',
    subtitle:
      'Cuatro agentes de IA que responden por ti y siete módulos que ayudan a tu equipo a mover el embudo. Cada uno funciona por su cuenta; juntos, no se cuela nada por las grietas.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver planes',
  },

  explore: 'Explorar',

  groups: {
    agents: {
      eyebrow: 'Grial Bots',
      title: 'Los agentes que responden por ti',
      subtitle:
        'Cuatro agentes de IA que descuelgan el teléfono, escriben a tus clientes y te cuentan qué pasó, para que tu equipo lleve las conversaciones que necesitan una persona.',
    },
    platform: {
      eyebrow: 'La plataforma',
      title: 'El sistema que hay detrás',
      subtitle:
        'Siete módulos que cubren desde encontrar un lead y responder mejor hasta medir cuánto valió la cita.',
    },
  },

  items: {
    'whatsapp-copilot': {
      name: 'WhatsApp Copilot',
      tagline:
        'Tus números llegan a WhatsApp cada mañana, y te responden cuando preguntas.',
    },
    'grial-front-desk': {
      name: 'Grial Front Desk',
      tagline:
        'Atiende las llamadas que tu equipo pierde, califica al contacto y agenda la cita.',
    },
    'grial-scheduler': {
      name: 'Grial Scheduler',
      tagline:
        'Recuerda a cada cliente su cita y le deja confirmar, moverla o cancelarla desde un enlace.',
    },
    'grial-auditor': {
      name: 'Grial Auditor',
      tagline:
        'Convierte las llamadas terminadas en transcripciones buscables con scoring de IA.',
    },
    prospector: {
      name: 'Prospector IA',
      tagline:
        'Describe al cliente que buscas en lenguaje natural y recibe contactos verificados.',
    },
    outreach: {
      name: 'Motor de Cadencias',
      tagline:
        'Seguimiento de varios pasos que se envía solo y para en cuanto responden.',
    },
    'inbox-pipeline': {
      name: 'Bandeja y Pipeline',
      tagline:
        'Todos los canales en una bandeja y cada oportunidad con responsable y siguiente paso.',
    },
    'grial-mind': {
      name: 'Grial Mind',
      tagline:
        'Sugiere respuestas, corrige ortografía y mejora el tono dentro de cada conversación.',
    },
    calendar: {
      name: 'Calendario Inteligente',
      tagline:
        'Agenda desde la conversación, sincronizado en dos sentidos con Google Calendar.',
    },
    dialer: {
      name: 'Grialink Dialer',
      tagline:
        'Tus propios números, click-to-call y un enrutado de llamadas que dibujas tú.',
    },
    analytics: {
      name: 'Hub de Analytics',
      tagline: 'Cuánto vale de verdad cada campaña, agente y llamada para el centro.',
    },
  },
};
