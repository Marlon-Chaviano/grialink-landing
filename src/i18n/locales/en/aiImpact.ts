export default {
  headingLine1: 'Your team + Grialink AI.',
  headingLine2: ' Results that multiply. ',
  exploreLink: 'Explore AI modules',
  features: [
    {
      label: 'Copilot AI — Contextual Assistant',
      color: 'purple',
      dashboard: {
        windowLabel: 'Grialink Copilot',
        topLeft: { label: 'Copilot Suggestion', value: 'Send follow-up', desc: 'Lead with no reply for 2 days. Send re-engagement sequence?' },
        topRight: { label: 'Acceptance rate', value: '87%', delta: '↑ 5% vs last month' },
        alert: { title: 'Copilot detected an opportunity', desc: '3 high-intent leads haven\'t been contacted. Suggested action: start automated cadence.', btn: 'Execute suggestion' },
        popup: { title: 'Lead context', desc: 'María González visited the pricing page 3 times this week.', accept: 'Contact', dismiss: 'Save' },
      },
    },
    {
      label: 'Call Analytics with Agent Scoring',
      color: 'blue',
      dashboard: {
        windowLabel: 'Grialink Call Analytics',
        topLeft: { label: 'Calls analyzed (week)', value: '148', desc: 'Average duration: 4m 32s' },
        topRight: { label: 'Agent avg. score', value: '8.4', delta: '↑ 0.6 vs last week' },
        alert: { title: 'Low-score agent detected', desc: 'Laura Méndez scored 5.2 this week. Frequent interruptions to clients detected.', btn: 'View analysis' },
        popup: { title: 'Call summary', desc: 'Client interested in orthodontics. Requested a quote. Sentiment: positive.', accept: 'Schedule', dismiss: 'Close' },
      },
    },
    {
      label: 'Meta Ads Insights + Creative Fatigue',
      color: 'teal',
      dashboard: {
        windowLabel: 'Grialink Marketing Insights',
        topLeft: { label: 'Avg. CPL (last 7 days)', value: '$8.40', desc: 'Best campaign: Teeth Whitening' },
        topRight: { label: 'Current ROAS', value: '4.2x', delta: '↑ 0.8x vs last month' },
        alert: { title: 'Creative fatigue detected', desc: 'The ad "Perfect Smile" has been running for 14 days with no changes and CTR dropped 35%. Rotate the creative.', btn: 'View campaign' },
        popup: { title: 'AI Insight', desc: 'Instagram leads convert 2.3x more than Facebook leads for this campaign.', accept: 'Optimize', dismiss: 'Dismiss' },
      },
    },
    {
      label: 'Natural Language Prospecting',
      color: 'yellow',
      dashboard: {
        windowLabel: 'Grialink Prospector',
        topLeft: { label: 'Recent search', value: '"Dentists in Miami"', desc: '342 results — 89 with verified email' },
        topRight: { label: 'Leads imported (month)', value: '1,240', delta: '↑ 18% vs last month' },
        alert: { title: 'New list suggested', desc: 'Based on your pipeline, we recommend prospecting "Aesthetic clinics in Houston" — high historic conversion.', btn: 'Search now' },
        popup: { title: 'Enrichment completed', desc: '56 new contacts with verified email and phone ready to import.', accept: 'Import', dismiss: 'Discard' },
      },
    },
  ],
};
