/**
 * Grial Scheduler product page.
 *
 * Called "Grial Scheduler" in the app (bot id `appointment-agent`). It sends
 * reminders by email or calls through a voice agent. The client can confirm,
 * reschedule or cancel; it does not create net-new appointments.
 */
export default {
  seo: {
    title:
      'Grial Scheduler — Grialink | Recordatorios de cita que se confirman solos',
    description:
      'Grial Scheduler envía recordatorios por email o llama con un agente de voz para confirmar, reagendar o cancelar la cita y actualizar el calendario sin intervención del equipo.',
  },

  hero: {
    badge: 'Grial Scheduler',
    title: 'La cita se confirma antes de que tengas que llamar.',
    subtitle:
      'Grial Scheduler envía un email con enlace seguro o llama con un agente de voz que confirma, cancela o reagenda durante la conversación. El calendario se actualiza solo.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver planes',
    note: 'Email con enlace seguro o llamada de voz conversacional',
    previewAlt:
      'El calendario de Grialink con las citas de la semana y su estado de confirmación',
  },

  highlights: [
    'Email o llamada de voz',
    'Confirma, reagenda o cancela',
    'Respeta las horas de silencio',
    'Avisa a tu equipo en cada acción',
  ],

  problem: {
    title: 'La agenda no se vacía por falta de demanda. Se vacía por falta de confirmación.',
    subtitle:
      'Cuando el equipo descubre una ausencia el mismo día, ya es tarde para recuperar el hueco y demasiado pronto para dejar de repetir la ronda mañana.',
    points: [
      {
        title: 'La ronda del día antes consume horas',
        body: 'Alguien revisa la agenda, llama uno a uno y vuelve a intentar con quien no contesta.',
      },
      {
        title: 'Un mensaje no siempre obtiene respuesta',
        body: 'El cliente ve el recordatorio, pero si no puede ir necesita una forma inmediata de cancelar o elegir otro horario.',
      },
      {
        title: 'Los cambios llegan por canales distintos',
        body: 'Una llamada, un email y una nota separada terminan dejando al calendario y al equipo con estados diferentes.',
      },
    ],
  },

  benefits: {
    title: 'Cada respuesta termina en una agenda actualizada',
    items: [
      {
        title: 'El equipo deja de perseguir confirmaciones',
        body: 'Scheduler trabaja la lista automáticamente y solo avisa cuando hay una decisión o una excepción.',
      },
      {
        title: 'El cliente elige el canal',
        body: 'Puede actuar desde un email o resolverlo hablando con el agente de voz, sin esperar a recepción.',
      },
      {
        title: 'El hueco vuelve a estar disponible',
        body: 'Una cancelación o reagendado actualiza el calendario al momento para que esa hora se pueda volver a ocupar.',
      },
    ],
  },

  steps: {
    title: 'Cómo se confirma una cita sin trabajo manual',
    subtitle: 'Configuras la pauta una vez; Scheduler ejecuta cada recordatorio y registra la respuesta.',
    items: [
      {
        title: 'Detecta la próxima cita',
        body: 'Toma del calendario el cliente, servicio, fecha y hora, y respeta los intervalos y horas de silencio configurados.',
      },
      {
        title: 'Envía el email o realiza la llamada',
        body: 'El email incluye un enlace seguro; por voz, el agente explica la cita y pregunta qué desea hacer.',
      },
      {
        title: 'Confirma, cancela o reagenda',
        body: 'La decisión se escribe en el calendario, se libera o mueve el hueco y el equipo recibe la actualización.',
      },
    ],
  },

  sections: [
    {
      eyebrow: 'El recordatorio',
      title: 'Email o voz, según cómo quieras confirmar',
      subtitle:
        'Configuras la pauta y el canal una vez. Scheduler envía el email o realiza la llamada en los intervalos que elijas, sin contactar fuera de las horas permitidas.',
      items: [
        'Email con un enlace seguro para confirmar, reagendar o cancelar',
        'Agente de voz que llama y registra la respuesta durante la conversación',
        'Uno o varios recordatorios, en horas antes de la cita',
        'Horas de silencio para no escribir en mitad de la noche',
        'Tu propio nombre de agente, tono, idioma y firma',
        'Recordatorios en español o inglés, o detectado por contacto',
      ],
      captureAlt:
        'El calendario de Grialink con las citas de la semana y su estado de confirmación',
      captureCaption: 'El estado de confirmación se ve en cada cita del calendario.',
    },
    {
      eyebrow: 'Autogestión',
      title: 'El cliente resuelve la cita en la misma interacción',
      subtitle:
        'Desde el enlace del email o hablando con el agente de voz, el cliente puede confirmar, elegir otro hueco o cancelar. El resultado llega al calendario y al equipo.',
      items: [
        'Confirmar, reagendar o cancelar desde el enlace o durante la llamada',
        'Reagendado limitado a los huecos que de verdad tienes libres',
        'Un margen mínimo de horas antes de que se cierre el reagendado',
        'Motivo de cancelación obligatorio, si lo activas',
        'Tu equipo avisado en cuanto el cliente hace algo',
      ],
      captureAlt:
        'Pantalla de Grial Bots en Grialink con los agentes de IA disponibles para configurar',
      captureCaption: 'Scheduler convive con los demás agentes en Grial Bots.',
    },
  ],

  featureGrid: {
    title: 'Qué controlas tú',
    items: [
      {
        title: 'Canal del recordatorio',
        body:
          'Email con enlace seguro o llamada de un agente de voz; si la llamada no se entrega, cae automáticamente a email.',
      },
      {
        title: 'Momento del envío',
        body: 'Elige uno o varios recordatorios, cada uno en horas antes de la cita.',
      },
      {
        title: 'Horas de silencio',
        body:
          'Define inicio y fin para que los recordatorios se pausen de noche en tu zona horaria.',
      },
      {
        title: 'Identidad del agente',
        body: 'Nombre, rol, tono, idioma y firma: suena a tu centro.',
      },
      {
        title: 'Variables del mensaje',
        body:
          'Nombre, fecha, hora, servicio, especialista y negocio entran en cada mensaje.',
      },
      {
        title: 'Bajas de voz',
        body:
          'Quien pide no recibir más llamadas queda registrado y se omite automáticamente.',
      },
    ],
  },

  useCases: {
    title: 'Dónde se paga solo',
    items: [
      {
        title: 'La ronda de llamadas del día antes',
        body:
          'Los recordatorios salen solos, así que nadie se pasa la tarde llamando a la lista de mañana.',
      },
      {
        title: 'Ausencias en tratamientos de valor alto',
        body:
          'Quien va a cancelar lo hace desde el enlace o durante la llamada con días de margen, dejando el hueco libre para otra persona.',
      },
      {
        title: 'Reagendados que antes se perdían',
        body:
          'En vez de no aparecer, el cliente elige otro hueco libre por su cuenta y sigue en el calendario.',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Agenda citas nuevas?',
        answer:
          'No: eso lo hace Grial Front Desk en las llamadas entrantes. Scheduler entra cuando la cita ya existe: la confirma, la recuerda y gestiona sus cambios.',
      },
      {
        question: '¿Y si el cliente no tiene teléfono?',
        answer:
          'Si elegiste recordatorios por voz y el contacto no tiene teléfono, o la llamada no se puede entregar, el recordatorio se envía por email. No se queda nadie sin aviso.',
      },
      {
        question: '¿Pueden los clientes parar las llamadas?',
        answer:
          'Sí. Si alguien pide no recibir más llamadas durante un recordatorio, entra en la lista de bajas de voz y no recibe más llamadas automáticas hasta que vuelva a dar su consentimiento.',
      },
      {
        question: '¿Escribirá de noche?',
        answer:
          'No si configuras horas de silencio. Los recordatorios se pausan desde tu hora de inicio y se reanudan tras la de fin, en la zona horaria que definas.',
      },
    ],
  },
};
