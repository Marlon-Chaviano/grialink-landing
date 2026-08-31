/**
 * Grial Scheduler product page.
 *
 * Called "Grial Scheduler" in the app (bot id `appointment-agent`). It sends
 * reminders by email or calls through a voice agent. The client can confirm,
 * reschedule or cancel; it does not create net-new appointments.
 */
export default {
  seo: {
    title:
      'Grial Scheduler — Grialink | Appointment reminders that confirm themselves',
    description:
      'Grial Scheduler sends email reminders or calls through a voice agent to confirm, reschedule or cancel the appointment and update the calendar without staff intervention.',
  },

  hero: {
    badge: 'Grial Scheduler',
    title: 'The appointment confirms before you have to call.',
    subtitle:
      'Grial Scheduler sends a secure email link or calls through a voice agent that confirms, cancels or reschedules in the conversation. Your calendar updates itself.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See pricing',
    note: 'Secure email link or conversational voice call',
    previewAlt:
      'The Grialink calendar showing the week\'s appointments with their confirmation status',
  },

  highlights: [
    'Email or voice call',
    'Confirms, reschedules or cancels',
    'Quiet hours respected',
    'Staff notified on every action',
  ],

  problem: {
    title: 'The schedule does not empty from low demand. It empties from missing confirmation.',
    subtitle:
      'When the team discovers a no-show on the day, it is too late to recover the slot — and too early to stop repeating the same phone round tomorrow.',
    points: [
      {
        title: 'The day-before phone round takes hours',
        body: 'Someone checks the calendar, calls every client, and tries again with the people who did not answer.',
      },
      {
        title: 'A message does not always get a decision',
        body: 'The client sees the reminder, but if they cannot attend they need an immediate way to cancel or choose another time.',
      },
      {
        title: 'Changes arrive through different channels',
        body: 'A call, an email and a separate note leave the calendar and the team holding different appointment states.',
      },
    ],
  },

  benefits: {
    title: 'Every reply ends in an updated schedule',
    items: [
      {
        title: 'The team stops chasing confirmations',
        body: 'Scheduler works through the list automatically and only alerts staff when there is a decision or an exception.',
      },
      {
        title: 'The client gets the right channel',
        body: 'They can act from an email or resolve it by speaking to the voice agent, without waiting for reception.',
      },
      {
        title: 'The slot becomes available again',
        body: 'A cancellation or reschedule updates the calendar immediately so the original time can be booked again.',
      },
    ],
  },

  steps: {
    title: 'How an appointment confirms without manual work',
    subtitle: 'Set the cadence once; Scheduler runs every reminder and records the answer.',
    items: [
      {
        title: 'It finds the upcoming appointment',
        body: 'It reads the client, service, date and time from the calendar, then respects your chosen intervals and quiet hours.',
      },
      {
        title: 'It emails or places the call',
        body: 'The email carries a secure link; on voice, the agent explains the appointment and asks what the client wants to do.',
      },
      {
        title: 'It confirms, cancels or reschedules',
        body: 'The decision is written to the calendar, the slot is released or moved, and the team receives the update.',
      },
    ],
  },

  sections: [
    {
      eyebrow: 'The reminder',
      title: 'Email or voice, depending on how you want to confirm',
      subtitle:
        'Set the cadence and channel once. Scheduler sends the email or places the call at your chosen intervals and stays quiet outside permitted hours.',
      items: [
        'Email with a secure link to confirm, reschedule or cancel',
        'Voice agent that calls and records the answer during the conversation',
        'One or more reminders, timed in hours before the appointment',
        'Quiet hours so nobody is messaged in the middle of the night',
        'Your own agent name, tone, language and signature',
        'Reminders in Spanish or English, or auto-detected per contact',
      ],
      captureAlt:
        'The Grialink calendar with the week\'s appointments and their confirmation status',
      captureCaption: 'Confirmation status visible on every appointment in the calendar.',
    },
    {
      eyebrow: 'Self-service',
      title: 'The client resolves the appointment in the same interaction',
      subtitle:
        'From the email link or while speaking with the voice agent, the client can confirm, choose another slot or cancel. The result reaches the calendar and your team.',
      items: [
        'Confirm, reschedule or cancel from the link or during the call',
        'Reschedule limited to real slots you still have free',
        'A minimum notice window before rescheduling closes',
        'Optional required reason when someone cancels',
        'Your team notified the moment a client takes action',
      ],
      captureAlt:
        'The Grial Bots screen in Grialink showing the AI agents available to configure',
      captureCaption: 'Scheduler sits with the other agents in Grial Bots.',
    },
  ],

  featureGrid: {
    title: 'What you control',
    items: [
      {
        title: 'Reminder channel',
        body:
          'Email with a secure link or a voice-agent call; if the call cannot be delivered, it falls back to email automatically.',
      },
      {
        title: 'Timing',
        body: 'Pick one or more reminders, each set in hours before the appointment.',
      },
      {
        title: 'Quiet hours',
        body: 'Set a start and end time so reminders pause overnight in your timezone.',
      },
      {
        title: 'Agent identity',
        body: 'Name, role, tone, language and signature — it sounds like your practice.',
      },
      {
        title: 'Message variables',
        body:
          'Name, date, time, service, specialist and business drop into every message.',
      },
      {
        title: 'Voice opt-outs',
        body:
          'Anyone who asks not to be called again is recorded and skipped automatically.',
      },
    ],
  },

  useCases: {
    title: 'Where it pays for itself',
    items: [
      {
        title: 'The day-before phone round',
        body:
          'The reminders go out on their own, so nobody spends the afternoon calling tomorrow\'s list.',
      },
      {
        title: 'No-shows on high-value treatments',
        body:
          'A client who is going to cancel does it from the link or during the call days ahead, leaving the slot open for someone else.',
      },
      {
        title: 'Reschedules that used to be lost',
        body:
          'Instead of not turning up, the client picks another free slot themselves and stays in the calendar.',
      },
    ],
  },

  faq: {
    title: 'Common questions',
    items: [
      {
        question: 'Does it book new appointments?',
        answer:
          'No — that is Grial Front Desk\'s job on inbound calls. Scheduler takes over once an appointment exists: it confirms it, reminds about it, and handles changes to it.',
      },
      {
        question: 'What if the client has no phone number?',
        answer:
          'If you chose voice reminders and the contact has no phone, or the call cannot be delivered, the reminder is sent by email instead. Nobody is missed.',
      },
      {
        question: 'Can clients stop the calls?',
        answer:
          'Yes. If someone asks not to be called again during a reminder call, they are added to the voice opt-out list and get no further automated calls until consent is given again.',
      },
      {
        question: 'Will it message people at night?',
        answer:
          'Not if you set quiet hours. Reminders pause from your start time and resume after your end time, in the timezone you configure.',
      },
    ],
  },
};
