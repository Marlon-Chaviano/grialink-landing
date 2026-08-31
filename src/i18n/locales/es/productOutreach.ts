/** Outreach Engine product page — multi-step email sequences. */
export default {
  seo: {
    title:
      'Motor de Cadencias — Grialink | Secuencias que se detienen al recibir respuesta',
    description:
      'Crea cadencias de email de varios pasos por tratamiento, envía dentro de la ventana que elijas y detén la secuencia en cuanto el cliente responde. Con tus propios dominios verificados por DNS.',
  },

  hero: {
    badge: 'Motor de Cadencias',
    title: 'El seguimiento que nadie tiene tiempo de enviar.',
    subtitle:
      'La mayoría de las consultas se enfrían porque el segundo mensaje nunca sale. Define los pasos una vez y la cadencia los envía por ti, y se detiene sola en cuanto el cliente contesta.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver planes',
    note: 'Tus propios dominios de envío, verificados por DNS',
    previewAlt:
      'La lista de cadencias de Grialink con métricas de envío, aperturas y clics por cadencia',
  },

  highlights: [
    'Cadencias de varios pasos',
    'Se detiene al responder',
    'Tus propios dominios',
    'Optimizador de copy con IA',
  ],

  sections: [
    {
      eyebrow: 'La cadencia',
      title: 'Configura los pasos una vez, no cada semana',
      subtitle:
        'Pasos de email y de espera en el orden que quieras, ejecutándose solo dentro de la ventana de envío que elijas, día tras día, sin que nadie tenga que acordarse de darle a enviar.',
      items: [
        'Pasos de email y de espera con ventana de envío',
        'Parada automática en cuanto el contacto responde',
        'Aperturas, clics y rebotes reportados por paso',
        'Tus propios dominios, verificados por DNS',
        'Un optimizador de copy con IA por cadencia',
      ],
      captureAlt:
        'Pantalla de cadencias de Grialink con las cadencias activas y sus métricas de envío, apertura y clic',
      captureCaption: 'Cada paso medido: enviado, abierto, clicado, rebotado.',
    },
    {
      eyebrow: 'La respuesta',
      title: 'Cuando contestan, llega donde tu equipo ya trabaja',
      subtitle:
        'Una respuesta detiene la cadencia y aparece en la bandeja compartida junto a la ficha del cliente, para que la conversación siga con una persona y no con otro email automático.',
      items: [
        'Las respuestas llegan a la bandeja compartida, no a un buzón personal',
        'La cadencia se detiene sola, así nadie persigue a quien ya contestó',
        'La ficha y el historial del cliente están junto a la conversación',
      ],
      captureAlt:
        'La bandeja compartida de Grialink con las conversaciones entrantes de clientes de todos los canales',
      captureCaption: 'Las respuestas llegan a la misma bandeja que el resto de canales.',
    },
  ],

  featureGrid: {
    title: 'Qué resuelve el motor',
    items: [
      {
        title: 'Cadencias de varios pasos',
        body: 'Tantos pasos de email y espera como necesite el tratamiento.',
      },
      {
        title: 'Ventana de envío',
        body: 'Los mensajes solo salen en las horas que elijas.',
      },
      {
        title: 'Parada al responder',
        body: 'Contestar saca al contacto de la cadencia automáticamente.',
      },
      {
        title: 'Métricas por paso',
        body: 'Ve qué mensaje se abre, cuál agenda y cuál se ignora.',
      },
      {
        title: 'Verificación de dominio',
        body: 'Envía desde tu propio dominio, verificado por registros DNS.',
      },
      {
        title: 'Optimizador con IA',
        body: 'Reescribe el texto de una cadencia sin empezar de cero.',
      },
    ],
  },

  useCases: {
    title: 'Para qué se usan las cadencias',
    items: [
      {
        title: 'Consultas que se quedaron en silencio',
        body:
          'Quien preguntó un precio y no volvió recibe un segundo y un tercer mensaje automáticamente.',
      },
      {
        title: 'Seguimiento post-tratamiento',
        body:
          'Un mensaje de control tras la visita, medido en días, sin que nadie lo apunte en la agenda.',
      },
      {
        title: 'Reactivar clientes antiguos',
        body:
          'Una cadencia a quienes no reservan desde hace un año, ejecutándose en segundo plano.',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿Seguirá escribiendo a quien ya respondió?',
        answer:
          'No. Una respuesta detiene la cadencia para ese contacto automáticamente: es el comportamiento por defecto, no algo que tengas que configurar.',
      },
      {
        question: '¿Puedo enviar desde mi propio dominio?',
        answer:
          'Sí, y deberías. Añades tu dominio y lo verificas con registros DNS para que los mensajes salgan desde tu dirección y no desde una compartida.',
      },
      {
        question: '¿Cuántos emails puedo enviar?',
        answer:
          'Cada plan incluye una cuota mensual de emails y puedes ampliarla con un complemento. Las cuotas actuales están en la página de planes.',
      },
    ],
  },
};
