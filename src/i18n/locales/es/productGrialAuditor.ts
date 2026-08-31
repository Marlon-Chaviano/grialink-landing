/**
 * Grial Auditor product page.
 *
 * In the app this is the call-intelligence agent: it turns recorded calls into
 * transcripts, AI scoring and insights, and surfaces the calls that need
 * attention. Keep the copy on analysis of calls that already happened — placing
 * and answering calls belongs to Dialer and Grial Front Desk.
 */
export default {
  seo: {
    title: 'Grial Auditor — Grialink | Análisis y scoring de llamadas con IA',
    description:
      'Grial Auditor convierte cada llamada grabada en una transcripción buscable con scoring de IA, señala las llamadas que necesitan seguimiento y muestra cómo rinde cada closer y cada servicio.',
  },

  hero: {
    badge: 'Grial Auditor',
    title: 'Cada llamada, leída y puntuada. No solo grabada.',
    subtitle:
      'Una grabación que nadie escucha no es un registro. Grial Auditor transcribe cada llamada, puntúa cómo fue y te dice cuáles necesitan que alguien haga seguimiento hoy.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver planes',
    note: 'Funciona sobre llamadas ya realizadas, sin hardware extra',
    previewAlt:
      'La pantalla de análisis de llamadas de Grialink con scoring de IA y métricas en el tiempo',
  },

  highlights: [
    'Transcripciones buscables',
    'Scoring de IA por llamada',
    'Speed to lead por closer',
    'Llamadas que necesitan atención',
  ],

  sections: [
    {
      eyebrow: 'Inteligencia de llamadas',
      title: 'Encuentra en segundos esa llamada que medio recuerdas',
      subtitle:
        'Cada llamada completada se transcribe y se puntúa, así que una conversación de hace tres semanas está a una búsqueda y no dentro de una grabación que nadie tiene tiempo de escuchar.',
      items: [
        'Transcripción completa en la ficha del contacto',
        'Scoring de IA sobre cómo fue la llamada',
        'Llamadas marcadas cuando necesitan seguimiento',
        'Contactos llamados más de dos veces en el periodo, señalados',
        'Métricas de llamadas en el tiempo, no solo de hoy',
      ],
      captureAlt:
        'Panel de análisis de llamadas de Grialink con scoring de IA, métricas en el tiempo y llamadas marcadas',
      captureCaption: 'Scoring, tendencias y llamadas que necesitan atención, en una vista.',
    },
    {
      eyebrow: 'La vista del equipo',
      title: 'Qué closer, y qué servicio, convierte de verdad',
      subtitle:
        'El rendimiento de las llamadas desglosado por quien las atiende y por el tratamiento del que se habla, incluido lo que tarda cada closer en devolver la llamada a un lead nuevo.',
      items: [
        'Speed to lead medido por closer',
        'Rendimiento de llamadas comparado por closer',
        'Rendimiento de llamadas comparado por servicio',
        'Tendencias del periodo, para que una mala semana se vea como tal',
      ],
      captureAlt:
        'El registro de llamadas de Grialink con las llamadas completadas, su resultado y su duración',
      captureCaption: 'Cada llamada registrada y puntuada automáticamente.',
    },
  ],

  featureGrid: {
    title: 'Qué añade Grial Auditor a una llamada',
    items: [
      {
        title: 'Transcripción',
        body:
          'La conversación hablada se convierte en texto buscable en la ficha del contacto.',
      },
      {
        title: 'Scoring de IA',
        body:
          'Cada llamada se evalúa automáticamente en vez de por muestreo del responsable.',
      },
      {
        title: 'Necesita atención',
        body:
          'Las llamadas que merecen seguimiento humano salen a la superficie en vez de quedar enterradas.',
      },
      {
        title: 'Speed to lead',
        body: 'Cuánto tarda cada closer en devolver la llamada a un lead nuevo.',
      },
      {
        title: 'Por servicio',
        body: 'Ve qué tratamientos convierten por teléfono y cuáles no.',
      },
      {
        title: 'Detección de recontacto',
        body: 'Los contactos llamados más de dos veces en el periodo quedan marcados.',
      },
    ],
  },

  useCases: {
    title: 'Para qué lo usan los equipos',
    items: [
      {
        title: 'Formar sin estar delante',
        body:
          'El responsable revisa llamadas puntuadas y transcripciones en vez de escuchar grabaciones al azar.',
      },
      {
        title: 'Encontrar la fuga',
        body:
          'Cuando un tratamiento deja de convertir por teléfono, el desglose por servicio lo enseña antes de cerrar el mes.',
      },
      {
        title: 'Hacer bien el seguimiento',
        body:
          'Las llamadas marcadas se convierten en una lista corta que alguien sí puede trabajar.',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Hace o atiende llamadas?',
        answer:
          'No. Grialink Dialer las hace y Grial Front Desk las atiende. Grial Auditor trabaja sobre llamadas que ya ocurrieron, convirtiéndolas en transcripciones, puntuaciones e insights.',
      },
      {
        question: '¿Necesito hardware especial?',
        answer:
          'No. Analiza las llamadas que pasaron por Grialink. Configuras un proveedor de llamadas en ajustes y las llamadas empiezan a sincronizarse y analizarse.',
      },
      {
        question: '¿Cuánto cuesta el análisis?',
        answer:
          'El análisis consume los créditos de IA de tu plan. Si la cuenta se queda sin créditos, la llamada se graba igual: solo queda marcada como análisis omitido, y no se pierde nada.',
      },
      {
        question: '¿Qué planes lo incluyen?',
        answer:
          'El análisis de llamadas está disponible en los planes Pro y Scale, junto al resto de Grial Bots.',
      },
    ],
  },
};
