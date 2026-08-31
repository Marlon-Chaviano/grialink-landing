/**
 * Contenido de demostración para los mockups de producto.
 *
 * Vive en i18n y no en los componentes para que los mockups se lean bien en
 * ambos idiomas — una captura de pantalla no puede hacerlo.
 *
 * Las cifras son datos de ejemplo mostrados dentro de una interfaz de producto,
 * igual que en una cuenta de demostración. No son resultados de clientes y no
 * deben presentarse como tales.
 */
export default {
  whatsapp: {
    alt: 'Una conversación de WhatsApp con Grialink Copilot: envía el informe de la mañana y luego responde qué agente agendó más citas.',
    contact: 'Grialink Copilot',
    status: 'en línea',
    day: 'Hoy',
    reportTitle: 'Informe diario · 08:30',
    metrics: [
      { label: 'Citas agendadas', value: '14' },
      { label: 'Llamadas atendidas', value: '38 de 41' },
      { label: 'Llamadas perdidas', value: '3' },
      { label: 'Conversión', value: '34%' },
    ],
    reportTime: '08:30',
    question: '¿Qué agente agendó más esta semana?',
    questionTime: '09:12',
    answer:
      'Marta, con 23 citas agendadas de 61 conversaciones (38%). Andrés le sigue con 17.',
    answerTime: '09:12',
    inputPlaceholder: 'Pregunta por tus números…',
  },

  call: {
    alt: 'Una llamada atendida por Grial Front Desk: la IA responde una consulta de precio, ofrece dos huecos, captura los datos del contacto y agenda la cita.',
    heading: 'Llamada entrante',
    number: '+34 6•• ••• 148',
    timer: '01:12',
    statusPill: 'Grial Front Desk · atendiendo',
    transcriptLabel: 'Transcripción en vivo',
    lines: [
      { speaker: 'caller', name: 'Contacto', text: 'Hola, ¿hacéis blanqueamiento dental? ¿Cuánto cuesta?' },
      {
        speaker: 'ai',
        name: 'Grial Front Desk',
        text: 'Sí. El blanqueamiento LED cuesta 180 € e incluye la valoración. Tengo el jueves a las 10:30 o el viernes a las 16:00.',
      },
      { speaker: 'caller', name: 'Contacto', text: 'El jueves a las 10:30 me viene bien.' },
    ],
    capturedLabel: 'Capturado',
    captured: [
      { label: 'Nombre', value: 'Lucía Navarro' },
      { label: 'Servicio', value: 'Blanqueamiento LED' },
      { label: 'Cita', value: 'Jue 10:30' },
    ],
    outcome: 'Cita agendada',
    outcomeNote: 'Sincronizada con Google Calendar',
  },

  scheduler: {
    alt: 'Grial Scheduler llama a una clienta para recordar su cita, acuerda una nueva hora y actualiza el calendario automáticamente.',
    eyebrow: 'Próxima cita',
    title: 'Valoración facial · Lucía Navarro',
    appointment: 'Mañana · 10:30 · Clínica Aurora',
    pending: 'Por confirmar',
    email: { title: 'Email automático', note: 'Enlace para gestionar la cita' },
    voice: { title: 'Llamada de voz', note: 'Agente confirmando ahora' },
    transcriptLabel: 'Recordatorio por voz',
    timer: '00:42',
    lines: [
      { speaker: 'agent', name: 'Grial Scheduler', text: 'Hola, Lucía. Te llamo de Clínica Aurora para confirmar tu cita de mañana a las 10:30.' },
      { speaker: 'client', name: 'Lucía', text: 'A esa hora no puedo. ¿Tenéis algo por la tarde?' },
      { speaker: 'agent', name: 'Grial Scheduler', text: 'Sí, puedo reagendarla para mañana a las 16:00. ¿Te viene bien?' },
    ],
    outcome: 'Cita reagendada · 16:00',
    outcomeNote: 'Calendario y equipo actualizados',
    fallback: 'Si la llamada no se entrega, el recordatorio sale por email automáticamente.',
  },

  mind: {
    alt: 'Grial Mind dentro de una conversación: detecta un borrador con errores, propone una respuesta corregida y deja que la persona la revise antes de insertarla.',
    avatar: 'LN',
    contact: 'Lucía Navarro',
    channel: 'Conversación · WhatsApp',
    status: 'En línea',
    incoming:
      'Hola, me interesa la limpieza facial. ¿Tenéis algún hueco mañana por la tarde?',
    incomingTime: '12:41',
    draftLabel: 'Tu borrador',
    draft: 'Hola Lucia si tenemos un hueco mañana alas 16 te viene bien?',
    ready: 'Listo para ayudarte',
    actions: ['Sugerir respuesta', 'Corregir ortografía', 'Mejorar el tono', 'Acortar'],
    suggestionLabel: 'Respuesta mejorada',
    suggestion:
      'Hola, Lucía. Sí, tenemos un hueco mañana a las 16:00. ¿Te viene bien esa hora?',
    reviewNote: 'Tú revisas antes de enviar',
    insert: 'Usar respuesta',
  },
};
