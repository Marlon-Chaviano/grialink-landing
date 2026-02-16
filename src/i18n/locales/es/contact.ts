export default {
  seo: {
    title: 'Contacto — Grialink | Habla con Nuestro Equipo de CRM para Clínicas',
    description:
      'Agenda una demo personalizada o contacta a nuestro equipo. Soporte técnico, consultas comerciales y alianzas para clínicas de salud, estéticas y dentales.',
  },

  hero: {
    badge: 'Hablemos de tu clínica',
    titleLine1: 'Tu clínica es única.',
    titleHighlight: 'Tu solución también.',
    subtitle:
      'Cuéntanos tu caso y te mostraremos cómo Grialink puede automatizar la captación, agendamiento y retención de pacientes en tu clínica.',
  },

  info: {
    phone: {
      title: 'Soporte directo',
      description: 'Chat en vivo disponible en la plataforma',
      value: 'Chat en app.grialink.com',
    },
    email: {
      title: 'Escríbenos',
      description: 'Consultas comerciales y soporte',
      value: 'info@grialink.com',
    },
    schedule: {
      title: 'Tiempo de respuesta',
      description: 'Nuestro compromiso contigo',
      days: 'Lunes a Viernes',
      hours: 'Respuesta en menos de 24h',
    },
  },

  form: {
    title: 'Solicita una demo o envíanos tu consulta',
    subtitle: 'Completa el formulario y nuestro equipo te contactará en menos de 24 horas laborables.',
    fields: {
      name: {
        label: 'Nombre Completo',
        placeholder: 'Tu nombre',
      },
      email: {
        label: 'Correo Electrónico',
        placeholder: 'nombre@tuclinica.com',
      },
      company: {
        label: 'Nombre de tu clínica (opcional)',
        placeholder: 'Ej: Clínica DermaPro',
      },
      subject: {
        label: 'Asunto',
        placeholder: '¿Cómo te podemos ayudar?',
        options: {
          sales: 'Quiero una demo personalizada',
          support: 'Soporte Técnico',
          partners: 'Alianzas y partnerships',
          other: 'Otro',
        },
      },
      message: {
        label: 'Mensaje',
        placeholder: 'Cuéntanos sobre tu clínica: ¿cuántos pacientes gestionas al mes? ¿Qué canales usas? ¿Cuál es tu mayor reto operativo?',
      },
    },
    submit: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje recibido! Un especialista te contactará pronto para coordinar tu demo.',
    error: 'Hubo un error al enviar tu mensaje. Intenta de nuevo o escríbenos a info@grialink.com.',
    validation: {
      nameRequired: 'El nombre es obligatorio.',
      nameMin: 'El nombre debe tener al menos 2 caracteres.',
      emailRequired: 'El correo electrónico es obligatorio.',
      emailInvalid: 'Ingresa un correo electrónico válido.',
      subjectRequired: 'Selecciona un asunto.',
      messageRequired: 'El mensaje es obligatorio.',
      messageMin: 'El mensaje debe tener al menos 10 caracteres.',
    },
  },

  resources: {
    title: 'Explora mientras esperas',
    items: [
      {
        label: 'Ver planes y precios',
        href: '/pricing',
        color: 'blue',
      },
      {
        label: 'Conocer el producto',
        href: '/products',
        color: 'purple',
      },
      {
        label: 'Nuestra historia',
        href: '/about',
        color: 'orange',
      },
    ],
  },

  cta: {
    title: '¿Ya eres cliente de Grialink?',
    subtitle:
      'Accede directamente a tu panel de control para gestionar tu clínica, revisar analytics o contactar soporte.',
    button: 'Ir a app.grialink.com',
  },
};
