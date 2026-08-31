/** AI Analytics Hub product page — sales, marketing and call reporting. */
export default {
  seo: {
    title: 'Analytics Hub — Grialink | Sales, marketing and call performance',
    description:
      'Sales KPIs, campaign performance and cost per lead, and AI-scored call analytics — in one workspace, so you can see what each campaign and each agent is actually worth.',
  },

  hero: {
    badge: 'Analytics Hub',
    title: 'What each campaign, agent and call is actually worth.',
    subtitle:
      'Ad spend in one tool, conversations in another, calls nowhere. Analytics Hub puts sales, marketing and call performance in one place, built from the data your team already generates.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See pricing',
    note: 'Included on Pro and Scale plans',
    previewAlt: 'The Grialink sales insights dashboard showing KPIs and pipeline movement',
  },

  highlights: [
    'Sales KPIs',
    'Campaign cost per lead',
    'AI call scoring',
    'Conversion by stage and owner',
  ],

  sections: [
    {
      eyebrow: 'Sales and CRM',
      title: 'Where the pipeline is actually moving',
      subtitle:
        'Conversion by stage and by owner, pipeline movement over the period, and a forecast for where the month is heading.',
      items: [
        'Sales KPIs and pipeline movement',
        'Conversion measured by stage and by owner',
        'Forecast for the current period',
        'Client and contact analytics beside the deals',
      ],
      captureAlt:
        'The Grialink CRM analytics dashboard showing contact and pipeline breakdowns',
      captureCaption: 'The pipeline and the client base, measured together.',
    },
    {
      eyebrow: 'Marketing and calls',
      title: 'What a lead costs, and what happens after it arrives',
      subtitle:
        'Campaign performance and cost per lead on one side, AI-scored calls on the other — so a cheap lead that never converts stops looking like a win.',
      items: [
        'Campaign performance and cost per lead',
        'Call analytics with AI scoring on every completed call',
        'Speed to lead and call performance by closer',
        'Trends across the period rather than a snapshot',
      ],
      captureAlt: 'The Grialink sales KPI cards showing headline metrics for the period',
      captureCaption: 'Headline numbers first, the breakdown underneath.',
    },
  ],

  featureGrid: {
    title: 'What you can see',
    items: [
      {
        title: 'Sales KPIs',
        body: 'The headline numbers for the period, without building a report.',
      },
      {
        title: 'Stage conversion',
        body: 'Where opportunities move forward and where they stop.',
      },
      {
        title: 'By owner',
        body: 'How each person\'s pipeline is actually performing.',
      },
      {
        title: 'Cost per lead',
        body: 'What each campaign is paying to produce an enquiry.',
      },
      {
        title: 'Call analytics',
        body: 'AI scoring and outcomes on completed calls.',
      },
      {
        title: 'Forecast',
        body: 'Where the current period is heading on present numbers.',
      },
    ],
  },

  useCases: {
    title: 'The questions it answers',
    items: [
      {
        title: '\'Is this campaign working?\'',
        body: 'Cost per lead beside what those leads actually did once they arrived.',
      },
      {
        title: '\'Where are we losing them?\'',
        body:
          'Stage conversion shows the point in the funnel where opportunities stall.',
      },
      {
        title: '\'Who needs support?\'',
        body:
          'Performance by owner and by closer, without anyone building a spreadsheet.',
      },
    ],
  },

  faq: {
    title: 'Common questions',
    items: [
      {
        question: 'Do I have to set up reports?',
        answer:
          'No. The dashboards are built from the conversations, opportunities and calls already in your account, so they fill in as your team works.',
      },
      {
        question: 'Does it include call analysis?',
        answer:
          'Yes — AI-scored call analytics is part of the hub. Grial Auditor is the agent that produces those transcripts and scores.',
      },
      {
        question: 'Which plans include it?',
        answer: 'The smart dashboard is included on the Pro and Scale plans.',
      },
    ],
  },
};
