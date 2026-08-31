/**
 * Página de producto de WhatsApp Copilot.
 *
 * Nota de alcance: en la aplicación este producto es el copilot de *informes* —
 * envía informes de rendimiento programados a WhatsApp y responde preguntas
 * sobre los datos de la propia cuenta. NO es el copilot de sugerencias de
 * respuesta de la bandeja, que es una capacidad distinta.
 */
export default {
  seo: {
    title: 'WhatsApp Copilot — Grialink | Las métricas de tu centro en WhatsApp',
    description:
      'Grialink WhatsApp Copilot envía el informe de rendimiento de tu centro a WhatsApp con la frecuencia que elijas y responde preguntas sobre los datos de tu propia cuenta en el mismo chat.',
  },

  hero: {
    badge: 'WhatsApp Copilot',
    title: 'Pregúntale a tu negocio. Por WhatsApp.',
    subtitle:
      'Informes programados y respuestas directas sobre tus propios números, en la app que ya tienes abierta. Sin panel, sin exportar, sin esperar a que alguien saque las cifras.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver planes',
    note: 'Incluido en los planes Pro y Scale',
    previewAlt: 'Una conversación de WhatsApp con Grialink Copilot mostrando el informe de la mañana',
  },

  highlights: [
    'Diario, semanal o mensual',
    'Español e inglés',
    'Pregunta en lenguaje natural',
    'Incluido en Pro y Scale',
  ],

  problem: {
    title: 'Los números existen. Nadie tiene tiempo de ir a buscarlos.',
    subtitle:
      'Los responsables de un centro no evitan los informes porque sean difíciles. Los evitan porque están detrás de un login que abren una vez cada quince días.',
    points: [
      {
        title: 'El informe siempre llega tarde',
        body: 'Para cuando alguien exporta las cifras, la semana que describen ya terminó y la decisión se tomó sin ellas.',
      },
      {
        title: 'Una sola persona es el cuello de botella',
        body: 'Cada pregunta sobre rendimiento pasa por quien sabe dónde está el panel, y espera a que esa persona tenga un hueco.',
      },
      {
        title: 'La caída lenta no se ve',
        body: 'Que las llamadas perdidas suban poco a poco o que un agente convierta menos no avisa. Lo descubres un trimestre después.',
      },
    ],
  },

  benefits: {
    title: 'Qué cambia cuando lo conectas',
    items: [
      {
        title: 'Empiezas el día ya informado',
        body: 'El resumen está en tu móvil antes de llegar al centro, así la conversación de la mañana parte de datos y no de sensaciones.',
      },
      {
        title: 'Puede preguntar quien deba preguntar',
        body: 'Una pregunta en el chat recibe una respuesta con datos en vivo, sin darle a otra persona acceso al panel.',
      },
      {
        title: 'Los problemas salen la misma semana',
        body: 'Una bajada en llamadas atendidas o una etapa atascada aparece en el siguiente informe, no en la revisión trimestral.',
      },
    ],
  },

  steps: {
    title: 'Conectado en tres pasos',
    subtitle: 'La configuración se hace una vez y cuesta lo mismo que guardar un contacto.',
    items: [
      {
        title: 'Añade tu número de WhatsApp',
        body: 'Introduce el número al que deben llegar los informes. Grialink envía un código de verificación para confirmar que es tuyo.',
      },
      {
        title: 'Elige qué y cuándo',
        body: 'Selecciona las métricas que te importan, la frecuencia — diaria, semanal o mensual — y el idioma del informe.',
      },
      {
        title: 'Actívalo y olvídate',
        body: 'El copilot empieza a enviar según lo programado. A partir de ahí también puedes escribirle cuando te surja una duda.',
      },
    ],
  },

  sections: [
    {
      eyebrow: 'Los informes',
      title: 'Qué te puede contar',
      subtitle:
        'El copilot responde con los mismos datos con los que se construyen tus informes, así que el chat y el panel nunca se contradicen.',
      items: [
        'Informes programados: diarios, semanales o mensuales, en español o inglés',
        'Elige las métricas: citas agendadas, llamadas atendidas y perdidas, conversión',
        'Preguntas libres respondidas con los datos en vivo de tu cuenta',
        'Número verificado por código antes de enviar nada',
        'Historial de informes guardado en la app para consultarlo después',
      ],
      captureAlt:
        'Pantalla de configuración de Grialink WhatsApp Copilot con un número verificado conectado y el panel de resumen mostrando frecuencia, idioma y métricas incluidas',
      captureCaption: 'Conecta un número una vez: el copilot se encarga del resto desde WhatsApp.',
    },
    {
      eyebrow: 'Grial Bots',
      title: 'Uno de cuatro agentes, gestionados desde un solo sitio',
      subtitle:
        'El copilot convive con la recepcionista, el agente de citas y el análisis de llamadas. Los configuras desde la misma pantalla y activas cada uno cuando lo necesites.',
      items: [
        'Todos los agentes configurados desde una sola pantalla de Grial Bots',
        'Activa o desactiva un agente sin tocar los demás',
        'Créditos de IA compartidos entre todos los agentes del plan',
      ],
      captureAlt:
        'Pantalla de Grial Bots en Grialink mostrando los agentes de IA disponibles como tarjetas',
      captureCaption: 'Los cuatro Grial Bots, configurados desde un solo sitio.',
    },
  ],

  featureGrid: {
    title: 'Todo lo que hace el copilot',
    items: [
      { title: 'Envío programado', body: 'Diario, semanal o mensual, a la hora que elijas.' },
      {
        title: 'Solo tus métricas',
        body: 'Eliges qué cifras aparecen; el resto se queda fuera del informe.',
      },
      {
        title: 'Dos idiomas',
        body: 'Informes y respuestas en español o inglés, configurable por número.',
      },
      {
        title: 'Números verificados',
        body: 'Un código confirma el número antes de enviar un solo informe.',
      },
      {
        title: 'Historial de informes',
        body: 'Los informes anteriores quedan en la app, sin rebuscar en WhatsApp.',
      },
      {
        title: 'Sin apps nuevas',
        body: 'Llega al WhatsApp que tu equipo ya tiene abierto todo el día.',
      },
    ],
  },

  useCases: {
    title: 'Cuándo se usa de verdad',
    items: [
      {
        title: 'La revisión del lunes',
        body: 'El informe semanal llega antes de la reunión de equipo, así la reunión trata de qué hacer y no de qué pasó.',
      },
      {
        title: 'La duda que te entra a las 21:00',
        body: 'Te preguntas cómo convirtió la campaña de Meta esta semana. Lo preguntas en el chat y tienes el dato, sin abrir el portátil.',
      },
      {
        title: 'Centros con varias sedes',
        body: 'Cada sede informa al mismo hilo, así que comparar es hacer scroll y no montar una hoja de cálculo.',
      },
    ],
  },

  faq: {
    title: 'Antes de conectarlo',
    items: [
      {
        question: '¿Es el asistente que responde a mis clientes?',
        answer:
          'No. WhatsApp Copilot habla contigo sobre tu negocio: te envía tus informes y responde tus preguntas. Responder a los clientes por WhatsApp se hace desde la bandeja de Grialink, y atender el teléfono es tarea de Grial Front Desk. Son productos distintos.',
      },
      {
        question: '¿Necesito una cuenta de WhatsApp Business API?',
        answer:
          'No. Verificas un número normal de WhatsApp con un código y el copilot escribe a ese número. Los informes llegan como mensajes de WhatsApp corrientes.',
      },
      {
        question: '¿Quién más puede ver los informes?',
        answer:
          'Solo los recibe el número verificado. Si quieres que una segunda persona reciba los mismos informes, necesita verificar su propio número con su propio acceso a la cuenta.',
      },
      {
        question: '¿Qué pasa si cambio de número?',
        answer:
          'Puedes cambiar el número desde la pestaña Conexión cuando quieras. El nuevo número se verifica por código igual que el anterior y los informes se mueven con él.',
      },
      {
        question: '¿Qué planes lo incluyen?',
        answer:
          'WhatsApp Copilot está incluido en los planes Pro y Scale. Las preguntas que haces en el chat consumen los créditos de IA de tu plan.',
      },
    ],
  },
};
