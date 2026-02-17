export default {
  tabs: [
    {
      id: 'marketing',
      label: 'Marketing',
      suiteLabel: 'Suite de Marketing',
      title: 'Mide el ROI real de cada campaña',
      description:
        'Conecta Meta Ads directamente con tu SES. Visualiza CPL, ROAS y fatiga creativa en tiempo real. La IA detecta campañas con bajo rendimiento y sugiere optimizaciones antes de que pierdas presupuesto.',
      buttonText: 'Ver funcionalidades de Marketing',
      board: {
        impact: { label: 'ROI en Ads', value: '4.2x', desc: 'ROAS promedio este mes' },
        col1: {
          title: 'Campañas activas',
          count: '8',
          cards: [
            { name: 'Blanqueamiento Dental', tag: 'Meta Ads', tagColor: 'blue', metric: 'CPL: $6.80' },
            { name: 'Botox Promo Verano', tag: 'Instagram', tagColor: 'purple', metric: 'CTR: 3.2%' },
          ],
        },
        col2: {
          title: 'Optimización sugerida',
          count: '3',
          cards: [
            { name: 'Fatiga creativa detectada', msg: '"Sonrisa Perfecta" lleva 14 días sin cambios. CTR cayó 35%.', btn: 'Rotar creativo' },
          ],
        },
        col3: { title: 'Pausadas' },
      },
    },
    {
      id: 'ventas',
      label: 'Ventas',
      suiteLabel: 'Suite de Ventas',
      title: 'De lead a paciente agendado en minutos',
      description:
        'Pipeline inteligente con 7 etapas diseñadas para clínicas. Scoring automático de leads, seguimiento por WhatsApp e Instagram, y secuencias de email que se activan solas.',
      buttonText: 'Ver funcionalidades de Ventas',
      board: {
        impact: { label: 'Impacto IA', value: '+$12k', desc: 'Generados extra este mes con automatización' },
        col1: {
          title: 'Nuevos Leads',
          count: '12',
          cards: [
            { name: 'María González', tag: 'Estética facial', tagColor: 'blue', metric: '10m' },
            { name: 'Carlos Ruiz', tag: 'Implante dental', tagColor: 'purple' },
          ],
        },
        col2: {
          title: 'Contactados',
          count: '5',
          cards: [
            { name: 'Ana Martínez', msg: 'Respondió por WhatsApp: "Me interesa el presupuesto"', btn: 'Agendar cita' },
          ],
        },
        col3: { title: 'Cita agendada' },
      },
    },
    {
      id: 'recepcion',
      label: 'Recepción',
      suiteLabel: 'Suite de Recepción',
      title: 'Cero citas olvidadas, cero no-shows',
      description:
        'Sistema de citas con sincronización bidireccional a Google Calendar. Recordatorios automáticos por WhatsApp y email. Confirmación, cancelación y reprogramación sin llamadas manuales.',
      buttonText: 'Ver funcionalidades de Recepción',
      board: {
        impact: { label: 'No-show', value: '↓ 62%', desc: 'Reducción con recordatorios automáticos' },
        col1: {
          title: 'Citas de hoy',
          count: '14',
          cards: [
            { name: 'Laura Méndez', tag: 'Ortodoncia', tagColor: 'teal', metric: '10:30 AM' },
            { name: 'Pedro Sánchez', tag: 'Limpieza dental', tagColor: 'blue', metric: '11:00 AM' },
          ],
        },
        col2: {
          title: 'Pendientes confirmar',
          count: '3',
          cards: [
            { name: 'Sofía Reyes', msg: 'Recordatorio WhatsApp enviado hace 2h. Sin respuesta.', btn: 'Reenviar recordatorio' },
          ],
        },
        col3: { title: 'Completadas' },
      },
    },
    {
      id: 'gerencia',
      label: 'Gerencia',
      suiteLabel: 'Suite de Gerencia',
      title: 'Datos accionables, no reportes estáticos',
      description:
        'Dashboards con alertas inteligentes de IA. Identifica cuellos de botella en tu pipeline, analiza calidad de llamadas con scoring de agentes y predice ingresos con modelos de conversión.',
      buttonText: 'Ver funcionalidades de Gerencia',
      board: {
        impact: { label: 'Predicción', value: '$48k', desc: 'Ingreso proyectado este mes (93% confianza)' },
        col1: {
          title: 'Alertas activas',
          count: '4',
          cards: [
            { name: 'Speed-to-Lead alto', tag: 'Urgente', tagColor: 'red', metric: '+2h promedio' },
            { name: 'Pipeline estancado', tag: 'Atención', tagColor: 'yellow', metric: '8 deals sin mover' },
          ],
        },
        col2: {
          title: 'Scoring de agentes',
          count: '6',
          cards: [
            { name: 'Top: Roberto Díaz — 9.2', msg: 'Mejor speech, menor tiempo de respuesta. Referencia para el equipo.', btn: 'Ver análisis' },
          ],
        },
        col3: { title: 'Resueltas' },
      },
    },
  ],
};
