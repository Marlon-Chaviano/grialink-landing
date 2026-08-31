/**
 * Página de producto de Grial Front Desk.
 *
 * El identificador interno sigue siendo `ai-receptionist`, pero el nombre
 * público y la ruta canónica usan la marca correcta.
 */
export default {
  seo: {
    title: 'Grial Front Desk — Grialink | Atiende llamadas y agenda citas',
    description:
      'Grial Front Desk atiende las llamadas de tu centro con IA, califica al contacto, agenda la cita y traspasa a una persona cuando la conversación lo necesita. Funciona dentro de tus flujos IVR.',
  },

  hero: {
    badge: 'Grial Front Desk',
    title: 'Atiende cada llamada. Agenda la cita. Nunca libra.',
    subtitle:
      'Grial Front Desk aprende tus servicios, horarios y reglas para contestar cuando tu equipo no puede, calificar al contacto y dejar la cita directamente en el calendario.',
    ctaPrimary: 'Empezar gratis',
    ctaSecondary: 'Ver planes',
    note: 'Habla español e inglés, y detecta cuál está usando quien llama',
    previewAlt:
      'Una llamada atendida por Grial Front Desk, con la transcripción y la cita agendada',
  },

  highlights: [
    'Contesta al primer tono',
    'Español e inglés',
    'Agenda en tu calendario',
    'Traspasa a una persona',
  ],

  problem: {
    title: 'Una llamada perdida es un cliente que llamó a otro sitio.',
    subtitle:
      'La mayoría de los centros pierde más ingresos en recepción que en cualquier otro punto del embudo, y nunca aparece en un informe como pérdida.',
    points: [
      {
        title: 'El teléfono suena cuando recepción está ocupada',
        body: 'Ya hay alguien en el mostrador atendiendo a un cliente. La segunda llamada va al buzón, y casi nadie deja mensaje.',
      },
      {
        title: 'La mitad de las consultas llegan fuera de horario',
        body: 'La gente pregunta por tratamientos por la tarde y el fin de semana, que es justo cuando no hay nadie para contestar.',
      },
      {
        title: 'Las mismas tres preguntas, todo el día',
        body: 'Precio, disponibilidad y dónde estáis. Personal formado se pasa el día repitiendo respuestas en vez de atender las llamadas que requieren criterio.',
      },
    ],
  },

  benefits: {
    title: 'Qué cambia cuando ya está atendiendo',
    items: [
      {
        title: 'No suena en vacío',
        body: 'Todas las llamadas se cogen al primer tono, incluidas las que entran mientras tu equipo ya está al teléfono.',
      },
      {
        title: 'Las llamadas rutinarias dejan de llegar a tu equipo',
        body: 'Las preguntas de precio y disponibilidad se responden y se agendan sin una persona, así recepción atiende las conversaciones que sí la necesitan.',
      },
      {
        title: 'Sabes qué se dijo',
        body: 'Cada llamada se transcribe y se resume, así que el seguimiento no depende de que alguien lo apuntara.',
      },
    ],
  },

  steps: {
    title: 'Cómo transcurre una llamada',
    subtitle: 'Le enseñas el negocio una vez. A partir de ahí, atiende, califica y agenda cada lead.',
    items: [
      {
        title: 'Entra la llamada',
        body: 'Tu número de Grialink suena y Grial Front Desk contesta al momento, saludando con el nombre de tu negocio.',
      },
      {
        title: 'Responde y califica',
        body: 'Contesta con los servicios y las FAQ que configuraste, y averigua qué quiere el contacto y cuándo puede venir.',
      },
      {
        title: 'Agenda, o traspasa',
        body: 'La cita entra en el calendario. Si la conversación se sale de lo que debe atender, transfiere a una persona o toma un mensaje.',
      },
    ],
  },

  sections: [
    {
      eyebrow: 'La configuración',
      title: 'Qué configuras',
      subtitle:
        'La configuración es una descripción de tu negocio, no un árbol de guiones. Tú das los datos y el tono; ella se encarga de las palabras.',
      items: [
        'Identidad del negocio: nombre, a qué os dedicáis, ubicación y especialidades',
        'Servicios y FAQ con los que tiene permitido responder',
        'Horario comercial, para saber cuándo agendar y cuándo tomar un mensaje',
        'Voz y tono, con detección automática entre español e inglés',
        'Reglas de traspaso para cuándo debe entrar una persona',
        'Transcripción y resumen guardados en la ficha del contacto',
      ],
      captureAlt:
        'Pantalla de configuración de Grial Front Desk con los campos de identidad del negocio, el horario comercial y un panel de vista previa con el saludo, el idioma, el tono y la voz',
      captureCaption: 'Describe el centro una vez: identidad, servicios, horario y tono.',
    },
    {
      eyebrow: 'Enrutado de llamadas',
      title: 'Encaja en el flujo de llamadas que ya tienes',
      subtitle:
        'Grial Front Desk es un nodo de tu IVR, no un sustituto. Mándale las llamadas que debe atender y enruta el resto donde iban antes.',
      items: [
        'Añádela a cualquier flujo IVR como un nodo en el constructor visual',
        'Dale una opción del teclado y deja que las demás sigan yendo a tu equipo',
        'Mándale solo las llamadas de fuera de horario y deja las del día en recepción',
        'Cae a buzón o a traspaso humano cuando no deba contestar',
      ],
      captureAlt:
        'Constructor visual de IVR de Grialink con un flujo de llamadas donde una opción del teclado enruta a un nodo de Grial Front Desk, y otras opciones van a un agente y al buzón de voz',
      captureCaption: 'Un nodo de Grial Front Desk conectado en un flujo IVR real.',
    },
  ],

  featureGrid: {
    title: 'Todo lo que resuelve en una llamada',
    items: [
      { title: 'Contesta al momento', body: 'Descuelga al primer tono, incluso con el resto de líneas ocupadas.' },
      { title: 'Conoce tus servicios', body: 'Responde con los servicios y las FAQ que configuraste, no improvisando.' },
      { title: 'Agenda la cita', body: 'Ofrece huecos reales y deja la cita escrita en tu calendario.' },
      { title: 'Traspaso a persona', body: 'Transfiere a alguien en cuanto la conversación lo necesita.' },
      { title: 'Transcripción y resumen', body: 'Cada llamada queda escrita en la ficha del contacto.' },
      { title: 'Conoce tu horario', body: 'Agenda dentro de tu horario y toma un mensaje fuera de él.' },
    ],
  },

  useCases: {
    title: 'Dónde la ponen primero los centros',
    items: [
      {
        title: 'Tardes y fines de semana',
        body: 'Llamadas que antes acababan en el buzón se convierten en citas agendadas esperándote el lunes por la mañana.',
      },
      {
        title: 'Desbordamiento cuando el mostrador está lleno',
        body: 'La segunda y la tercera llamada simultánea se atienden en vez de encolarse, así nadie cuelga esperando.',
      },
      {
        title: 'Cuando arranca una campaña',
        body: 'Una campaña que de golpe triplica las llamadas no necesita una contratación temporal para sobrevivir a la semana.',
      },
    ],
  },

  faq: {
    title: 'Lo que preguntan primero',
    items: [
      {
        question: '¿Se dará cuenta quien llama de que habla con una IA?',
        answer:
          'Se presenta con el nombre de tu negocio y habla con naturalidad. No dice ser una persona concreta, y tú eliges el saludo con el que abre.',
      },
      {
        question: '¿Qué pasa si no sabe responder algo?',
        answer:
          'Traspasa a una persona o toma un mensaje, según cómo lo configures. Responde con los servicios y las FAQ que le diste, en lugar de improvisar en temas como consejo clínico.',
      },
      {
        question: '¿Funciona en español?',
        answer:
          'Sí. El saludo inicial puede darse en los dos idiomas, y después detecta en cuál habla quien llama y continúa en ese.',
      },
      {
        question: '¿Tengo que cambiar mi centralita?',
        answer:
          'No. Funciona sobre un número de Grialink y vive dentro de tu flujo IVR como un nodo más. Tú decides qué llamadas le llegan y cuáles siguen yendo donde van hoy.',
      },
      {
        question: '¿Cuánto cuesta una llamada?',
        answer:
          'Las llamadas consumen los minutos de dialer incluidos en tu plan, y la atención con IA consume créditos de IA. Ambos se muestran en la app antes de activarla.',
      },
    ],
  },
};
