/** Smart Calendar product page — appointments synced with Google Calendar. */
export default {
  seo: {
    title:
      'Calendario Inteligente — Grialink | Citas sincronizadas con Google Calendar',
    description:
      'Agenda citas directamente desde la conversación, sincroniza cada reserva en dos sentidos con Google Calendar y envía recordatorios por WhatsApp antes de la visita.',
  },

  hero: {
    badge: 'Calendario Inteligente',
    title: 'Agenda mientras sigues en la conversación.',
    subtitle:
      'La cita se crea donde el cliente ya está hablando contigo, se sincroniza en ambos sentidos con Google Calendar y le recuerda antes del día, para que el hueco no se pierda en una agenda que nadie actualizó.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver planes',
    note: 'Sincronización bidireccional con Google Calendar',
    previewAlt:
      'El calendario de Grialink con las citas de la semana y su estado de confirmación',
  },

  highlights: [
    'Sincronización bidireccional',
    'Día, semana y mes',
    'Agenda desde el chat',
    'Recordatorios antes de la visita',
  ],

  sections: [
    {
      eyebrow: 'En la conversación',
      title: 'Sin cambiar de app para buscar un hueco',
      subtitle:
        'El calendario está junto a la bandeja, así que quien responde puede ofrecer una hora real y agendarla sin salir del hilo.',
      items: [
        'Agenda directamente desde la conversación',
        'Vistas de día, semana y mes',
        'Estado de confirmación visible en cada cita',
        'Recordatorios por WhatsApp antes de la cita',
        'Cada reserva reflejada en Google Calendar',
      ],
      captureAlt:
        'La bandeja de Grialink con una conversación de cliente en la que se está agendando una cita',
      captureCaption: 'El hueco se ofrece y se agenda sin salir del hilo.',
    },
  ],

  featureGrid: {
    title: 'Qué resuelve el calendario',
    items: [
      {
        title: 'Sincronización en dos sentidos',
        body: 'Los cambios en Google Calendar y en Grialink se mantienen al día.',
      },
      {
        title: 'Tres vistas',
        body: 'Día, semana y mes, según cómo planifiques.',
      },
      {
        title: 'Estado de confirmación',
        body: 'Ve de un vistazo qué citas están confirmadas.',
      },
      {
        title: 'Recordatorios',
        body: 'Recordatorios por WhatsApp antes de la cita, para que se olviden menos.',
      },
      {
        title: 'Agendado en contexto',
        body: 'Las citas se crean desde la conversación que las originó.',
      },
      {
        title: 'Ligado al cliente',
        body: 'Cada cita queda en la ficha junto al resto de su historial.',
      },
    ],
  },

  useCases: {
    title: 'Dónde cambia el día',
    items: [
      {
        title: 'El cliente que pregunta «¿cuándo me podéis coger?»',
        body:
          'La respuesta es un hueco real ofrecido y agendado en el mismo mensaje, no una llamada más tarde.',
      },
      {
        title: 'Un especialista que trabaja desde Google Calendar',
        body:
          'Mantiene su propio calendario y el centro sigue viendo la cita, porque ambos lados se sincronizan.',
      },
      {
        title: 'Reducir ausencias',
        body:
          'El recordatorio sale antes de la visita sin que nadie lo añada a una lista.',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Funciona con Google Calendar?',
        answer:
          'Sí, y la sincronización va en los dos sentidos: una cita creada en Grialink aparece en Google Calendar, y un cambio hecho allí vuelve.',
      },
      {
        question: '¿Puede enviar recordatorios?',
        answer:
          'Sí. Salen recordatorios simples antes de la cita. Si quieres confirmación, reagendado y cancelación gestionados automáticamente, eso es Grial Scheduler.',
      },
      {
        question: '¿Necesito otra herramienta de reservas?',
        answer:
          'No. Las citas se crean desde la conversación y se guardan en la ficha del cliente, así que la reserva, el chat y el registro son lo mismo.',
      },
    ],
  },
};
