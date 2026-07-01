export default {
  headingLine1: 'Your team + Grialink AI.',
  headingLine2: 'Results that multiply.',
  subtitle:
    'Copilot, call scoring, marketing insights, and prospecting in the same workspace your agents already use.',
  exploreLink: 'Explore AI modules',
  previewLabel: 'Live preview',
  marketingLabels: {
    roas: 'ROAS',
    cpl: 'Avg. CPL',
    period: 'Last 7 days',
  },
  features: [
    {
      label: 'Copilot AI',
      tagline: 'Reply drafts and next steps inside conversations',
      color: 'primary',
      variant: 'copilot',
      appUrl: 'app.grialink.com/conversations/842',
      copilot: {
        contact: 'María González',
        channel: 'WhatsApp',
        status: 'Open · Unassigned',
        inbound:
          'Hi, I wanted to ask about Invisalign pricing and whether you offer payment plans for the full treatment.',
        suggestionTitle: 'Suggested reply',
        suggestionDraft:
          'Hi María! We offer Invisalign from $3,200 with monthly plans. I can send a quick quote and book a free scan this week.',
        actions: ['Send reply', 'Save as template'],
        chips: ['High intent', 'Pricing page ×3', 'Follow-up due'],
      },
    },
    {
      label: 'Call Analytics',
      tagline: 'AI score and coaching on every call',
      color: 'green',
      variant: 'calls',
      appUrl: 'app.grialink.com/call-analytics',
      calls: {
        kpis: [
          { label: 'Calls analyzed', value: '148' },
          { label: 'Avg. duration', value: '4m 32s' },
          { label: 'Team AI score', value: '8.4' },
        ],
        aiScoreLabel: 'AI Score',
        rows: [
          {
            contact: 'Carlos Ruiz',
            meta: 'Inbound · 6m 12s · Laura M.',
            finding: 'Quoted whitening package. Client asked about same-day availability.',
            score: 91,
            scoreLabel: 'AI Score',
          },
          {
            contact: 'Ana Beltrán',
            meta: 'Outbound · 3m 05s · Diego R.',
            finding: 'Objection: price. Agent offered financing before confirming need.',
            score: 58,
            scoreLabel: 'AI Score',
          },
        ],
      },
    },
    {
      label: 'Marketing Insights',
      tagline: 'Meta Ads CPL, ROAS, and creative fatigue',
      color: 'accent',
      variant: 'marketing',
      appUrl: 'app.grialink.com/marketing-insights',
      marketing: {
        roas: '4.2x',
        roasDelta: '+0.8x vs last month',
        cpl: '$8.40',
        campaigns: [
          {
            name: 'Teeth Whitening · Miami',
            spend: '$1,240',
            cpl: '$6.10',
            ctr: '2.8%',
            status: 'healthy',
          },
          {
            name: 'Perfect Smile · Retargeting',
            spend: '$890',
            cpl: '$14.20',
            ctr: '0.9%',
            status: 'fatigue',
          },
        ],
        insight:
          'Instagram leads convert 2.3x better than Facebook on this account. Rotate the fatigued creative.',
        statusHealthy: 'Healthy',
        statusFatigue: 'Creative fatigue',
      },
    },
    {
      label: 'Prospector AI',
      tagline: 'Natural language search and verified enrichment',
      color: 'muted',
      variant: 'prospector',
      appUrl: 'app.grialink.com/prospector',
      prospector: {
        query: 'Dental clinic owners in Miami with 10+ employees',
        meta: '342 matches · 89 emails verified',
        results: [
          {
            name: 'Dr. Elena Vargas',
            title: 'Owner',
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
            name: 'Sofia Mendez',
            title: 'Director',
            company: 'Bay Dental Group',
            email: 'sofia@baydental.io',
            photoKey: 'sofia',
            location: 'Miami Beach, FL',
          },
        ],
        importLabel: 'Import 56 enriched contacts',
      },
    },
  ],
};
