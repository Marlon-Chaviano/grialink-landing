export default {
  headingLine1: 'Tu equipo + Grialink AI.',
  headingLine2: ' Resultados que se multiplican. ',
  exploreLink: 'Ver módulos de IA',
  features: [
    {
      label: 'Copilot IA — Asistente contextual',
      color: 'purple',
      dashboard: {
        windowLabel: 'Grialink Copilot',
        topLeft: { label: 'Sugerencia Copilot', value: 'Enviar seguimiento', desc: 'Lead sin respuesta hace 2 días. ¿Enviar secuencia de re-engagement?' },
        topRight: { label: 'Tasa de aceptación', value: '87%', delta: '↑ 5% vs mes anterior' },
        alert: { title: 'Copilot detectó una oportunidad', desc: '3 leads con alta intención no han sido contactados. Acción sugerida: iniciar cadencia automática.', btn: 'Ejecutar sugerencia' },
        popup: { title: 'Contexto del lead', desc: 'María González visitó la página de precios 3 veces esta semana.', accept: 'Contactar', dismiss: 'Guardar' },
      },
    },
    {
      label: 'Análisis de Llamadas con Scoring',
      color: 'blue',
      dashboard: {
        windowLabel: 'Grialink Call Analytics',
        topLeft: { label: 'Llamadas analizadas (semana)', value: '148', desc: 'Duración promedio: 4m 32s' },
        topRight: { label: 'Score promedio agentes', value: '8.4', delta: '↑ 0.6 vs semana anterior' },
        alert: { title: 'Agente con score bajo detectado', desc: 'Laura Méndez tiene un score de 5.2 esta semana. Se detectaron interrupciones frecuentes al cliente.', btn: 'Ver análisis' },
        popup: { title: 'Resumen de llamada', desc: 'Cliente interesado en ortodoncia. Pidió presupuesto. Sentimiento: positivo.', accept: 'Agendar', dismiss: 'Cerrar' },
      },
    },
    {
      label: 'Insights de Meta Ads + Fatiga Creativa',
      color: 'teal',
      dashboard: {
        windowLabel: 'Grialink Marketing Insights',
        topLeft: { label: 'CPL promedio (últimos 7 días)', value: '$8.40', desc: 'Mejor campaña: Blanqueamiento Dental' },
        topRight: { label: 'ROAS actual', value: '4.2x', delta: '↑ 0.8x vs mes anterior' },
        alert: { title: 'Fatiga creativa detectada', desc: 'El anuncio "Sonrisa perfecta" lleva 14 días sin cambios y su CTR cayó un 35%. Rota el creativo.', btn: 'Ver campaña' },
        popup: { title: 'Insight de IA', desc: 'Los leads de Instagram convierten 2.3x más que los de Facebook para esta campaña.', accept: 'Optimizar', dismiss: 'Ignorar' },
      },
    },
    {
      label: 'Prospección en Lenguaje Natural',
      color: 'yellow',
      dashboard: {
        windowLabel: 'Grialink Prospector',
        topLeft: { label: 'Búsqueda reciente', value: '"Dentistas en CDMX"', desc: '342 resultados — 89 con email verificado' },
        topRight: { label: 'Leads importados (mes)', value: '1,240', delta: '↑ 18% vs mes anterior' },
        alert: { title: 'Nueva lista sugerida', desc: 'Basado en tu pipeline, recomendamos prospectar "Clínicas de estética en Monterrey" — alta conversión histórica.', btn: 'Buscar ahora' },
        popup: { title: 'Enriquecimiento completado', desc: '56 contactos nuevos con email y teléfono verificado listos para importar.', accept: 'Importar', dismiss: 'Descartar' },
      },
    },
  ],
};
