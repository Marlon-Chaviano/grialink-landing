/** Smart Calendar product page — appointments synced with Google Calendar. */
export default {
  seo: {
    title: 'Smart Calendar — Grialink | Appointments synced with Google Calendar',
    description:
      'Book appointments straight from the conversation, sync every booking two ways with Google Calendar, and send WhatsApp reminders before the visit.',
  },

  hero: {
    badge: 'Smart Calendar',
    title: 'Book it while you are still in the conversation.',
    subtitle:
      'The appointment gets made where the client is already talking to you, syncs both ways with Google Calendar, and reminds them before the day — so the slot is not lost to a diary nobody updated.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See pricing',
    note: 'Two-way Google Calendar sync',
    previewAlt:
      'The Grialink calendar showing the week\'s appointments with their confirmation status',
  },

  highlights: [
    'Two-way Google sync',
    'Day, week and month',
    'Book from the chat',
    'Reminders before the visit',
  ],

  sections: [
    {
      eyebrow: 'In the conversation',
      title: 'No switching apps to find a free slot',
      subtitle:
        'The calendar sits beside the inbox, so whoever is answering can offer a real time and book it without leaving the thread.',
      items: [
        'Book straight from the conversation',
        'Day, week and month views',
        'Confirmation status visible on every appointment',
        'WhatsApp reminders ahead of the appointment',
        'Every booking mirrored in Google Calendar',
      ],
      captureAlt:
        'The Grialink inbox showing a client conversation where an appointment is being booked',
      captureCaption: 'The slot is offered and booked without leaving the thread.',
    },
  ],

  featureGrid: {
    title: 'What the calendar handles',
    items: [
      {
        title: 'Two-way sync',
        body: 'Changes made in Google Calendar and in Grialink stay in step.',
      },
      {
        title: 'Three views',
        body: 'Day, week and month, depending on how you plan.',
      },
      {
        title: 'Confirmation status',
        body: 'See at a glance which appointments are confirmed.',
      },
      {
        title: 'Reminders',
        body: 'WhatsApp reminders before the appointment, so fewer people forget.',
      },
      {
        title: 'Booked in context',
        body: 'Appointments are made from the conversation that produced them.',
      },
      {
        title: 'Tied to the client',
        body:
          'Each appointment sits on the client record with the rest of their history.',
      },
    ],
  },

  useCases: {
    title: 'Where it changes the day',
    items: [
      {
        title: 'The client asking \'when can you fit me in?\'',
        body:
          'The answer is a real slot offered and booked in the same message, not a callback later.',
      },
      {
        title: 'A specialist working from Google Calendar',
        body:
          'They keep their own calendar and the practice still sees the booking, because both sides sync.',
      },
      {
        title: 'Reducing no-shows',
        body: 'A reminder goes out before the visit without anyone adding it to a list.',
      },
    ],
  },

  faq: {
    title: 'Common questions',
    items: [
      {
        question: 'Does it work with Google Calendar?',
        answer:
          'Yes, and the sync runs both ways — a booking made in Grialink shows up in Google Calendar, and a change made there comes back.',
      },
      {
        question: 'Can it send reminders?',
        answer:
          'Yes. Simple reminders go out ahead of the appointment. If you want confirmation, rescheduling and cancellation handled automatically, that is Grial Scheduler.',
      },
      {
        question: 'Do I need a separate booking tool?',
        answer:
          'No. Appointments are made from the conversation and stored against the client, so the booking, the chat and the record are the same thing.',
      },
    ],
  },
};
