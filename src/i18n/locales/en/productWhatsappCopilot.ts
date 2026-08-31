/**
 * WhatsApp Copilot product page.
 *
 * Scope note: in the app this product is the *reporting* copilot — it sends
 * scheduled performance reports to WhatsApp and answers questions about the
 * account's own data. It is NOT the inbox reply-suggestion copilot, which is a
 * separate capability. Keep this page on the reporting story so the marketing
 * and the product agree.
 */
export default {
  seo: {
    title: 'WhatsApp Copilot — Grialink | Your practice metrics on WhatsApp',
    description:
      'Grialink WhatsApp Copilot sends your practice performance report to WhatsApp on the schedule you choose, and answers questions about your own account data in the same chat.',
  },

  hero: {
    badge: 'WhatsApp Copilot',
    title: 'Ask your business a question. On WhatsApp.',
    subtitle:
      'Scheduled reports and straight answers about your own numbers, delivered to the app you already have open. No dashboard, no export, no waiting for someone to pull the figures.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See pricing',
    note: 'Included on Pro and Scale plans',
    previewAlt: 'A WhatsApp conversation with the Grialink Copilot showing the morning report',
  },

  highlights: [
    'Daily, weekly or monthly',
    'English and Spanish',
    'Ask in plain language',
    'Included on Pro and Scale',
  ],

  problem: {
    title: 'The numbers exist. Nobody has time to go and get them.',
    subtitle:
      'Practice owners do not avoid reporting because it is hard. They avoid it because it sits behind a login they open once a fortnight.',
    points: [
      {
        title: 'The report is always a week old',
        body: 'By the time somebody exports the figures, the week they describe is over and the decision has already been made without them.',
      },
      {
        title: 'One person is the bottleneck',
        body: 'Every question about performance goes through whoever knows where the dashboard lives — and waits until they are free.',
      },
      {
        title: 'Slow drift goes unnoticed',
        body: 'Missed calls creeping up or one agent quietly converting less does not announce itself. You find it a quarter later.',
      },
    ],
  },

  benefits: {
    title: 'What changes once it is connected',
    items: [
      {
        title: 'You start the day already informed',
        body: 'The summary is in your phone before you reach the practice, so the morning conversation starts from facts instead of impressions.',
      },
      {
        title: 'Anyone who should ask, can',
        body: 'A question in the chat gets an answer from live account data — without handing another person a dashboard login.',
      },
      {
        title: 'Problems surface the same week',
        body: 'A drop in answered calls or a stalled stage shows up in the next scheduled report, not in a quarterly review.',
      },
    ],
  },

  steps: {
    title: 'Connected in three steps',
    subtitle: 'Setup is a one-time job and takes about as long as adding a contact.',
    items: [
      {
        title: 'Add your WhatsApp number',
        body: 'Enter the number the reports should go to. Grialink sends a verification code to confirm it is yours.',
      },
      {
        title: 'Choose what and when',
        body: 'Pick the metrics you care about, the frequency — daily, weekly or monthly — and the language of the report.',
      },
      {
        title: 'Activate and forget it',
        body: 'The copilot starts sending on schedule. From then on you can also just message it whenever a question comes up.',
      },
    ],
  },

  sections: [
    {
      eyebrow: 'The reports',
      title: 'What it can tell you',
      subtitle:
        'The copilot answers from the same data your reports are built on, so the chat and the dashboard never disagree.',
      items: [
        'Scheduled reports — daily, weekly or monthly, in English or Spanish',
        'Choose the metrics: appointments booked, calls answered and missed, conversion',
        'Free-form questions answered from your live account data',
        'Number verified by code before anything is sent',
        'Report history kept in the app so you can look back',
      ],
      captureAlt:
        'The Grialink WhatsApp Copilot setup screen with a verified number connected and the report summary panel showing frequency, language and included metrics',
      captureCaption: 'Connect a number once — the copilot handles the rest from WhatsApp.',
    },
    {
      eyebrow: 'Grial Bots',
      title: 'One of four agents, managed from one place',
      subtitle:
        'The copilot lives alongside the receptionist, the scheduler and call analysis. Configure them from the same screen and turn each on when you need it.',
      items: [
        'Every agent configured from one Grial Bots screen',
        'Turn an agent on or off without touching the others',
        'Shared AI credits across every agent on the plan',
      ],
      captureAlt: 'The Grial Bots screen in Grialink showing the available AI agents as cards',
      captureCaption: 'All four Grial Bots, configured from one place.',
    },
  ],

  featureGrid: {
    title: 'Everything the copilot handles',
    items: [
      { title: 'Scheduled delivery', body: 'Daily, weekly or monthly, at the hour you pick.' },
      {
        title: 'Your metrics only',
        body: 'Choose which figures appear — the rest stay out of the report.',
      },
      {
        title: 'Two languages',
        body: 'Reports and answers in English or Spanish, set per number.',
      },
      {
        title: 'Verified numbers',
        body: 'A code confirms the number before a single report is sent.',
      },
      {
        title: 'Report history',
        body: 'Past reports stay in the app, so you can look back without scrolling WhatsApp.',
      },
      {
        title: 'No new app',
        body: 'It arrives in the WhatsApp your team already has open all day.',
      },
    ],
  },

  useCases: {
    title: 'When people actually use it',
    items: [
      {
        title: 'The Monday morning check',
        body: 'The weekly report lands before the team meeting, so the meeting is about what to do rather than what happened.',
      },
      {
        title: 'The question you have at 9pm',
        body: 'You wonder how the Meta campaign converted this week. You ask in the chat and get the number, without opening a laptop.',
      },
      {
        title: 'Owners with more than one site',
        body: 'Each location reports to the same thread, so the comparison is a scroll rather than a spreadsheet.',
      },
    ],
  },

  faq: {
    title: 'Before you connect it',
    items: [
      {
        question: 'Is this the assistant that replies to my clients?',
        answer:
          'No. WhatsApp Copilot talks to you about your business — it sends your reports and answers your questions. Replying to clients on WhatsApp is handled in the Grialink inbox, and answering the phone is handled by Grial Front Desk. They are separate products.',
      },
      {
        question: 'Do I need a WhatsApp Business API account?',
        answer:
          'No. You verify a normal WhatsApp number with a code and the copilot messages that number. The reports arrive as ordinary WhatsApp messages.',
      },
      {
        question: 'Who else can see the reports?',
        answer:
          'Only the verified number receives them. If you want a second person to get the same reports, they need their own number verified on their own account access.',
      },
      {
        question: 'What happens if I change my phone number?',
        answer:
          'You can change the number from the Connection tab at any time. The new number is verified by code the same way, and reports move across.',
      },
      {
        question: 'Which plans include it?',
        answer:
          'WhatsApp Copilot is included on the Pro and Scale plans. Questions asked in the chat draw on your plan’s AI credits.',
      },
    ],
  },
};
