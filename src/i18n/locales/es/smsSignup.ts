export default {
  /* ── SEO ── */
  seo: {
    title: 'Suscripción a alertas SMS — Grialink',
    description:
      'Suscríbete a las alertas SMS de Grialink. Recibe novedades del producto, invitaciones a webinars y ofertas por tiempo limitado. Hasta 4 mensajes al mes. Responde STOP para cancelar.',
  },

  /* ── Hero ── */
  hero: {
    badge: 'Alertas SMS',
    title: 'Recibe las novedades de Grialink por mensaje de texto',
    subtitle:
      'Anuncios de producto, invitaciones a webinars y ofertas por tiempo limitado en los planes de Grialink, directo a tu teléfono. Hasta 4 mensajes al mes. Puedes cancelar cuando quieras.',
  },

  /* ── Opt-in form ── */
  form: {
    heading: 'Suscríbete a las alertas SMS',
    fields: {
      firstName: { label: 'Nombre', placeholder: 'Ana' },
      email: { label: 'Correo electrónico', placeholder: 'ana@empresa.com' },
      phone: {
        label: 'Número de móvil',
        placeholder: '+1 (555) 123-4567',
        hint: 'Solo números móviles de EE. UU. Aplican las tarifas estándar de tu operador.',
      },
    },
    /*
     * Misma estructura que el Message Flow EN (keywords STOP/HELP en inglés,
     * URLs visibles). Twilio revisa sobre todo la página EN pública.
     */
    consent:
      'Acepto recibir mensajes de texto de marketing recurrentes de Grialink en el número móvil proporcionado. El consentimiento no es condición de compra. La frecuencia varía, hasta 4 mensajes al mes. Pueden aplicar tarifas de mensajes y datos. Responde STOP para cancelar, HELP para obtener ayuda. Términos: {termsUrl}  Privacidad: {privacyUrl}',
    submit: 'Suscribirme a las alertas SMS',
    sending: 'Suscribiendo…',
    success: 'Ya estás suscrito. Revisa tu teléfono, te enviamos un mensaje de confirmación.',
    error: 'No pudimos completar tu suscripción. Inténtalo de nuevo o escríbenos a info@grialink.com.',
    validation: {
      firstNameRequired: 'Ingresa tu nombre.',
      firstNameMin: 'Ingresa al menos 2 caracteres.',
      emailRequired: 'Ingresa tu correo electrónico.',
      emailInvalid: 'Ingresa un correo electrónico válido.',
      phoneRequired: 'Ingresa tu número de móvil.',
      phoneInvalid: 'Ingresa un número móvil de EE. UU. válido, por ejemplo +1 (555) 123-4567.',
      consentRequired: 'Debes aceptar recibir mensajes de texto para suscribirte.',
    },
  },

  /* ── Program disclosures (required for A2P 10DLC / CTIA compliance) ── */
  disclosures: {
    title: 'Detalles del programa',
    items: [
      {
        term: 'Nombre del programa',
        description: 'Alertas de marketing de Grialink, operado por Ezi Group LLC (DBA Grialink).',
      },
      {
        term: 'Contenido de los mensajes',
        description:
          'Anuncios de producto y nuevas funciones, invitaciones a webinars y eventos, ofertas por tiempo limitado en los planes de suscripción de Grialink, y seguimientos si solicitaste una demo o iniciaste una prueba gratuita.',
      },
      {
        term: 'Frecuencia de mensajes',
        description: 'La frecuencia varía, hasta 4 mensajes al mes.',
      },
      {
        term: 'Costo',
        description:
          'Pueden aplicar tarifas de mensajes y datos. Grialink no cobra por este programa; tu operador móvil sí podría hacerlo.',
      },
      {
        term: 'Cómo cancelar',
        description:
          'Responde STOP a cualquier mensaje para cancelar. Recibirás un último mensaje de confirmación y ningún otro mensaje de marketing.',
      },
      {
        term: 'Cómo obtener ayuda',
        description:
          'Responde HELP a cualquier mensaje, o escríbenos a info@grialink.com para recibir asistencia con este programa.',
      },
      {
        term: 'Operadores compatibles',
        description:
          'Los operadores no son responsables por mensajes demorados o no entregados. No todos los operadores móviles son compatibles.',
      },
      {
        term: 'Tu privacidad',
        description:
          'Los números de teléfono móvil y el consentimiento SMS nunca se comparten ni se venden a terceros ni a afiliados con fines de marketing.',
      },
    ],
  },
};
