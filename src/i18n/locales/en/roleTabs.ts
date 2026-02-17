export default {
  tabs: [
    {
      id: 'marketing',
      label: 'Marketing',
      suiteLabel: 'Marketing Suite',
      title: 'Measure the real ROI of every campaign',
      description:
        'Connect Meta Ads directly to your SES. Visualize CPL, ROAS, and creative fatigue in real time. AI detects underperforming campaigns and suggests optimizations before you waste budget.',
      buttonText: 'See Marketing features',
      board: {
        impact: { label: 'Ad ROI', value: '4.2x', desc: 'Average ROAS this month' },
        col1: {
          title: 'Active campaigns',
          count: '8',
          cards: [
            { name: 'Teeth Whitening', tag: 'Meta Ads', tagColor: 'blue', metric: 'CPL: $6.80' },
            { name: 'Summer Botox Promo', tag: 'Instagram', tagColor: 'purple', metric: 'CTR: 3.2%' },
          ],
        },
        col2: {
          title: 'Optimization suggested',
          count: '3',
          cards: [
            { name: 'Creative fatigue detected', msg: '"Perfect Smile" ad running 14 days with no changes. CTR dropped 35%.', btn: 'Rotate creative' },
          ],
        },
        col3: { title: 'Paused' },
      },
    },
    {
      id: 'sales',
      label: 'Sales',
      suiteLabel: 'Sales Suite',
      title: 'From lead to scheduled patient in minutes',
      description:
        'Smart pipeline with 7 stages designed for clinics. Automatic lead scoring, WhatsApp and Instagram follow-ups, and email sequences that trigger automatically.',
      buttonText: 'See Sales features',
      board: {
        impact: { label: 'AI Impact', value: '+$12k', desc: 'Extra generated this month with automation' },
        col1: {
          title: 'New Leads',
          count: '12',
          cards: [
            { name: 'Maria Johnson', tag: 'Facial aesthetics', tagColor: 'blue', metric: '10m' },
            { name: 'Charles Davis', tag: 'Dental implant', tagColor: 'purple' },
          ],
        },
        col2: {
          title: 'Contacted',
          count: '5',
          cards: [
            { name: 'Anna Martinez', msg: 'Replied on WhatsApp: "I\'m interested in the quote"', btn: 'Schedule appointment' },
          ],
        },
        col3: { title: 'Scheduled' },
      },
    },
    {
      id: 'reception',
      label: 'Reception',
      suiteLabel: 'Reception Suite',
      title: 'Zero forgotten appointments, zero no-shows',
      description:
        'Appointment system with bidirectional Google Calendar sync. Automatic WhatsApp and email reminders. Confirmation, cancellation, and rescheduling without manual calls.',
      buttonText: 'See Reception features',
      board: {
        impact: { label: 'No-show', value: '↓ 62%', desc: 'Reduction with automatic reminders' },
        col1: {
          title: 'Today\'s appointments',
          count: '14',
          cards: [
            { name: 'Laura Mendez', tag: 'Orthodontics', tagColor: 'teal', metric: '10:30 AM' },
            { name: 'Peter Sanchez', tag: 'Dental cleaning', tagColor: 'blue', metric: '11:00 AM' },
          ],
        },
        col2: {
          title: 'Pending confirmation',
          count: '3',
          cards: [
            { name: 'Sofia Reyes', msg: 'WhatsApp reminder sent 2h ago. No response yet.', btn: 'Resend reminder' },
          ],
        },
        col3: { title: 'Completed' },
      },
    },
    {
      id: 'management',
      label: 'Management',
      suiteLabel: 'Management Suite',
      title: 'Actionable data, not static reports',
      description:
        'Dashboards with AI-powered alerts. Identify pipeline bottlenecks, analyze call quality with agent scoring, and predict revenue with conversion models.',
      buttonText: 'See Management features',
      board: {
        impact: { label: 'Forecast', value: '$48k', desc: 'Projected revenue this month (93% confidence)' },
        col1: {
          title: 'Active alerts',
          count: '4',
          cards: [
            { name: 'High Speed-to-Lead', tag: 'Urgent', tagColor: 'red', metric: '+2h average' },
            { name: 'Stalled pipeline', tag: 'Attention', tagColor: 'yellow', metric: '8 deals stuck' },
          ],
        },
        col2: {
          title: 'Agent scoring',
          count: '6',
          cards: [
            { name: 'Top: Robert Johnson — 9.2', msg: 'Best speech, lowest response time. Reference for the team.', btn: 'View analysis' },
          ],
        },
        col3: { title: 'Resolved' },
      },
    },
  ],
};
