/**
 * Demo content for the hand-built product mockups.
 *
 * Kept in i18n rather than hardcoded in the components so the mockups read
 * correctly in both languages — a screenshot cannot do that.
 *
 * The figures here are illustrative sample data shown inside a product
 * interface, in the same spirit as a seeded demo account. They are not claims
 * about customer results and must never be presented as such.
 */
export default {
  whatsapp: {
    /** Alt text for the whole mockup — it is one figure to a screen reader. */
    alt: 'A WhatsApp conversation with Grialink Copilot: it sends the morning report, then answers a question about which agent booked the most appointments.',
    contact: 'Grialink Copilot',
    status: 'online',
    day: 'Today',
    reportTitle: 'Daily report · 08:30',
    metrics: [
      { label: 'Appointments booked', value: '14' },
      { label: 'Calls answered', value: '38 of 41' },
      { label: 'Missed calls', value: '3' },
      { label: 'Conversion', value: '34%' },
    ],
    reportTime: '08:30',
    question: 'Which agent booked the most this week?',
    questionTime: '09:12',
    answer:
      'Marta, with 23 appointments booked from 61 conversations (38%). Andrés follows with 17.',
    answerTime: '09:12',
    inputPlaceholder: 'Ask about your numbers…',
  },

  call: {
    alt: 'A live call handled by Grial Front Desk: the AI answers a pricing question, offers two slots, captures the caller details, and books the appointment.',
    heading: 'Incoming call',
    number: '+1 (555) ••• 0148',
    timer: '01:12',
    statusPill: 'Grial Front Desk · answering',
    transcriptLabel: 'Live transcript',
    lines: [
      { speaker: 'caller', name: 'Caller', text: 'Hi — do you do teeth whitening? How much is it?' },
      {
        speaker: 'ai',
        name: 'Grial Front Desk',
        text: 'We do. LED whitening is $180 and includes the assessment. I have Thursday at 10:30 or Friday at 16:00.',
      },
      { speaker: 'caller', name: 'Caller', text: 'Thursday at 10:30 works.' },
    ],
    capturedLabel: 'Captured',
    captured: [
      { label: 'Name', value: 'Lucía Navarro' },
      { label: 'Service', value: 'LED whitening' },
      { label: 'Slot', value: 'Thu 10:30' },
    ],
    outcome: 'Appointment booked',
    outcomeNote: 'Synced to Google Calendar',
  },

  scheduler: {
    alt: 'Grial Scheduler calls a client with an appointment reminder, agrees a new time, and updates the calendar automatically.',
    eyebrow: 'Upcoming appointment',
    title: 'Facial consultation · Lucía Navarro',
    appointment: 'Tomorrow · 10:30 · Aurora Clinic',
    pending: 'Awaiting reply',
    email: { title: 'Automatic email', note: 'Link to manage the booking' },
    voice: { title: 'Voice call', note: 'Agent confirming now' },
    transcriptLabel: 'Voice reminder',
    timer: '00:42',
    lines: [
      { speaker: 'agent', name: 'Grial Scheduler', text: 'Hi Lucía. I am calling from Aurora Clinic to confirm your appointment tomorrow at 10:30.' },
      { speaker: 'client', name: 'Lucía', text: 'I cannot make that time. Do you have anything in the afternoon?' },
      { speaker: 'agent', name: 'Grial Scheduler', text: 'Yes, I can move it to tomorrow at 16:00. Does that work for you?' },
    ],
    outcome: 'Appointment moved · 16:00',
    outcomeNote: 'Calendar and team updated',
    fallback: 'If the call cannot be delivered, the reminder falls back to email automatically.',
  },

  mind: {
    alt: 'Grial Mind inside a conversation: it spots a draft with errors, proposes a corrected reply, and lets the teammate review it before inserting it.',
    avatar: 'LN',
    contact: 'Lucía Navarro',
    channel: 'Conversation · WhatsApp',
    status: 'Online',
    incoming:
      'Hi, I am interested in the facial treatment. Do you have anything tomorrow afternoon?',
    incomingTime: '12:41',
    draftLabel: 'Your draft',
    draft: 'Hi Lucia yes we have a slot tomorrow at 4 does that work for you',
    ready: 'Ready to help',
    actions: ['Suggest a reply', 'Fix spelling', 'Improve tone', 'Shorten'],
    suggestionLabel: 'Improved reply',
    suggestion:
      'Hi Lucía. Yes, we have an opening tomorrow at 4:00 PM. Would that time work for you?',
    reviewNote: 'You review before sending',
    insert: 'Use reply',
  },
};
