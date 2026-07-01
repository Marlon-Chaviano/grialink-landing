export default {
  headingLine1: 'Tu equipo + Grialink AI.',
  headingLine2: 'Resultados que se multiplican.',
  subtitle:
    'Copilot, scoring de llamadas, insights de marketing y prospección en el mismo workspace que ya usa tu equipo.',
  exploreLink: 'Ver módulos de IA',
  previewLabel: 'Vista previa',
  marketingLabels: {
    roas: 'ROAS',
    cpl: 'CPL prom.',
    period: 'Últimos 7 días',
  },
  features: [
    {
      label: 'Copilot IA',
      tagline: 'Borradores y siguientes pasos dentro de cada conversación',
      color: 'primary',
      variant: 'copilot',
      appUrl: 'app.grialink.com/conversations/842',
      copilot: {
        contact: 'María González',
        channel: 'WhatsApp',
        status: 'Abierta · Sin asignar',
        inbound:
          'Hola, quería preguntar por el precio de Invisalign y si manejan planes de pago para el tratamiento completo.',
        suggestionTitle: 'Respuesta sugerida',
        suggestionDraft:
          'Hola María. Manejamos Invisalign desde $3,200 con planes mensuales. Te envío una cotización y agendamos un escaneo sin costo esta semana.',
        actions: ['Enviar respuesta', 'Guardar plantilla'],
        chips: ['Alta intención', 'Precios ×3', 'Seguimiento pendiente'],
      },
    },
    {
      label: 'Análisis de Llamadas',
      tagline: 'Score de IA y coaching en cada llamada',
      color: 'green',
      variant: 'calls',
      appUrl: 'app.grialink.com/call-analytics',
      calls: {
        kpis: [
          { label: 'Llamadas analizadas', value: '148' },
          { label: 'Duración prom.', value: '4m 32s' },
          { label: 'Score IA equipo', value: '8.4' },
        ],
        aiScoreLabel: 'Score IA',
        rows: [
          {
            contact: 'Carlos Ruiz',
            meta: 'Entrante · 6m 12s · Laura M.',
            finding: 'Cotizó blanqueamiento. Cliente preguntó por disponibilidad el mismo día.',
            score: 91,
            scoreLabel: 'Score IA',
          },
          {
            contact: 'Ana Beltrán',
            meta: 'Saliente · 3m 05s · Diego R.',
            finding: 'Objeción: precio. Agente ofreció financiamiento antes de confirmar necesidad.',
            score: 58,
            scoreLabel: 'Score IA',
          },
        ],
      },
    },
    {
      label: 'Marketing Insights',
      tagline: 'CPL, ROAS y fatiga creativa en Meta Ads',
      color: 'accent',
      variant: 'marketing',
      appUrl: 'app.grialink.com/marketing-insights',
      marketing: {
        roas: '4.2x',
        roasDelta: '+0.8x vs mes anterior',
        cpl: '$8.40',
        campaigns: [
          {
            name: 'Blanqueamiento · CDMX',
            spend: '$1,240',
            cpl: '$6.10',
            ctr: '2.8%',
            status: 'healthy',
          },
          {
            name: 'Sonrisa perfecta · Retargeting',
            spend: '$890',
            cpl: '$14.20',
            ctr: '0.9%',
            status: 'fatigue',
          },
        ],
        insight:
          'Los leads de Instagram convierten 2.3x mejor que Facebook en esta cuenta. Rota el creativo fatigado.',
        statusHealthy: 'Saludable',
        statusFatigue: 'Fatiga creativa',
      },
    },
    {
      label: 'Prospector IA',
      tagline: 'Búsqueda en lenguaje natural y enriquecimiento verificado',
      color: 'muted',
      variant: 'prospector',
      appUrl: 'app.grialink.com/prospector',
      prospector: {
        query: 'Dueños de clínicas dentales en CDMX con 10+ empleados',
        meta: '342 coincidencias · 89 emails verificados',
        results: [
          {
            name: 'Dra. Elena Vargas',
            title: 'Dueña',
            company: 'Bright Smile Dental',
            email: 'elena@brightsmile.co',
            photoKey: 'elena',
            location: 'Miami, FL',
          },
          {
            name: 'James Porter',
            title: 'Practice Manager',
            company: 'Coral Gables Ortho',
            email: 'j.porter@coralortho.com',
            photoKey: 'james',
            location: 'Coral Gables, FL',
          },
          {
            name: 'Sofia Méndez',
            title: 'Directora',
            company: 'Bay Dental Group',
            email: 'sofia@baydental.io',
            photoKey: 'sofia',
            location: 'Miami Beach, FL',
          },
        ],
        importLabel: 'Importar 56 contactos enriquecidos',
      },
    },
  ],
};
