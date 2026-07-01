export default {
  title: 'De 0 a operando con IA en 4 pasos',
  subtitle:
    'Sin instalaciones complejas. Crea tu cuenta, conecta tus canales y deja que la IA haga el resto.',
  statusConnected: 'Conectado',
  statusPending: 'Pendiente',
  statusActive: 'Activo',
  steps: [
    {
      title: 'Crea tu cuenta gratis',
      description:
        'Regístrate en menos de 2 minutos. Sin tarjeta de crédito. Entras directo al panel de Grialink.',
      icon: 'account',
      previewTitle: 'Ajustes / Configuración de cuenta',
      previewItems: [
        { label: 'Espacio de trabajo creado', status: 'connected' },
        { label: 'Invitación al equipo enviada', status: 'connected' },
        { label: 'Perfil de facturación', status: 'pending' },
      ],
      previewNote: 'El mismo flujo de onboarding que app.grialink.com después del registro.',
    },
    {
      title: 'Conecta tus canales',
      description:
        'WhatsApp, Instagram, Email, Web Chat y Twilio. Todos los inbox donde te escriben tus leads, en un solo lugar.',
      icon: 'channels',
      previewTitle: 'Ajustes / Bandejas de entrada',
      previewItems: [
        { label: 'WhatsApp Business', status: 'connected' },
        { label: 'Instagram DM', status: 'connected' },
        { label: 'Email (SendGrid)', status: 'connected' },
        { label: 'Widget del sitio web', status: 'pending' },
      ],
      previewNote: 'Conecta canales desde Ajustes sin código ni consultores externos.',
    },
    {
      title: 'Configura tu pipeline',
      description:
        'Elige plantilla para estéticas, dental o dermatología. Etapas, SLAs y automatizaciones listas en minutos.',
      icon: 'pipeline',
      previewTitle: 'Pipelines / Plantilla estéticas',
      previewItems: [
        { label: 'Lead nuevo', status: 'active' },
        { label: 'Consulta agendada', status: 'active' },
        { label: 'Tratamiento programado', status: 'active' },
        { label: 'Secuencia de seguimiento', status: 'connected' },
      ],
      previewNote: 'Etapas drag-and-drop con cadencias y recordatorios integrados.',
    },
    {
      title: 'Activa la IA',
      description:
        'Grial Bots responde solo, Grial Dialer puntúa llamadas y Copilot sugiere la siguiente mejor acción.',
      icon: 'ai',
      previewTitle: 'Grial Bots / Asistente WhatsApp',
      previewItems: [
        { label: 'Asistente WhatsApp', status: 'active' },
        { label: 'Recepcionista IA (IVR)', status: 'connected' },
        { label: 'Scoring Call Analytics', status: 'connected' },
        { label: 'Sugerencias Copilot', status: 'active' },
      ],
      previewNote: 'Activa cada módulo de IA desde Grial Bots cuando tu equipo esté listo.',
    },
  ],
  cta: 'Comenzar gratis',
};
