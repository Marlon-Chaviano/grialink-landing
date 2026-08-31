/**
 * Grial Auditor product page.
 *
 * In the app this is the call-intelligence agent: it turns recorded calls into
 * transcripts, AI scoring and insights, and surfaces the calls that need
 * attention. Keep the copy on analysis of calls that already happened — placing
 * and answering calls belongs to Dialer and Grial Front Desk.
 */
export default {
  seo: {
    title: 'Grial Auditor — Grialink | AI call analysis and scoring',
    description:
      'Grial Auditor turns every recorded call into a searchable transcript with AI scoring, surfaces the calls that need attention, and shows how each closer and each service actually performs.',
  },

  hero: {
    badge: 'Grial Auditor',
    title: 'Every call, read and scored. Not just recorded.',
    subtitle:
      'A recording nobody listens to is not a record. Grial Auditor transcribes each call, scores how it went, and tells you which ones need somebody to follow up today.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See pricing',
    note: 'Runs on completed calls — no extra hardware',
    previewAlt:
      'The Grialink call analytics screen showing AI scoring and call metrics over time',
  },

  highlights: [
    'Searchable transcripts',
    'AI scoring per call',
    'Speed to lead by closer',
    'Calls that need attention',
  ],

  sections: [
    {
      eyebrow: 'Call intelligence',
      title: 'Find the call you half-remember, in seconds',
      subtitle:
        'Every completed call is transcribed and scored, so a conversation from three weeks ago is a search away instead of a recording nobody has time to sit through.',
      items: [
        'Full transcript attached to the contact record',
        'AI scoring on how the call went',
        'Calls flagged when they need someone to follow up',
        'Contacts called more than twice in a period, surfaced',
        'Call metrics tracked over time, not just today',
      ],
      captureAlt:
        'The Grialink call analytics dashboard with AI scoring, call metrics over time and flagged calls',
      captureCaption: 'Scoring, trends and the calls that need attention, in one view.',
    },
    {
      eyebrow: 'The team view',
      title: 'Which closer, and which service, actually converts',
      subtitle:
        'Call performance broken down by the person handling it and the treatment being discussed — including how fast each closer gets back to a new lead.',
      items: [
        'Speed to lead measured per closer',
        'Call performance compared by closer',
        'Call performance compared by service',
        'Trends across the period, so a bad week is visible as a bad week',
      ],
      captureAlt:
        'The Grialink call log listing completed calls with their outcome and duration',
      captureCaption: 'Every call logged, then scored automatically.',
    },
  ],

  featureGrid: {
    title: 'What Grial Auditor adds to a call',
    items: [
      {
        title: 'Transcription',
        body: 'Spoken conversation becomes searchable text on the contact record.',
      },
      {
        title: 'AI scoring',
        body:
          'Each call is assessed automatically instead of spot-checked by a manager.',
      },
      {
        title: 'Needs attention',
        body: 'The calls worth a human follow-up are surfaced rather than buried.',
      },
      {
        title: 'Speed to lead',
        body: 'How long each closer takes to call a new lead back.',
      },
      {
        title: 'By service',
        body: 'See which treatments convert on the phone and which do not.',
      },
      {
        title: 'Recontact detection',
        body: 'Contacts called more than twice in a period are flagged.',
      },
    ],
  },

  useCases: {
    title: 'What teams use it for',
    items: [
      {
        title: 'Coaching without sitting in',
        body:
          'A manager reviews scored calls and transcripts instead of listening to recordings at random.',
      },
      {
        title: 'Finding the leak',
        body:
          'When one treatment stops converting on the phone, the breakdown by service shows it before the month closes.',
      },
      {
        title: 'Following up properly',
        body:
          'The calls flagged for attention become a short list somebody can actually work through.',
      },
    ],
  },

  faq: {
    title: 'Common questions',
    items: [
      {
        question: 'Does it place or answer calls?',
        answer:
          'No. Grialink Dialer places them and Grial Front Desk answers them. Grial Auditor works on calls that already happened, turning them into transcripts, scores and insights.',
      },
      {
        question: 'Do I need special hardware?',
        answer:
          'No. It analyses calls that ran through Grialink. You configure a call provider in settings and calls start syncing and being analysed.',
      },
      {
        question: 'What does analysis cost?',
        answer:
          'Analysis draws on your plan\'s AI credits. If an account runs out of credits, the call is still recorded — it is just marked as analysis skipped, and nothing is lost.',
      },
      {
        question: 'Which plans include it?',
        answer:
          'Call analysis is available on the Pro and Scale plans, alongside the other Grial Bots.',
      },
    ],
  },
};
