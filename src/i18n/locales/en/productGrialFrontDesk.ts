/**
 * Grial Front Desk product page.
 *
 * The internal identifier remains `ai-receptionist`, while the public product
 * name and canonical route use the correct brand.
 */
export default {
  seo: {
    title: 'Grial Front Desk — Grialink | Answers calls and books appointments',
    description:
      'Grial Front Desk answers your practice’s calls with AI, qualifies the caller, books the appointment and hands over to a person when the conversation needs one. Works inside your IVR flows.',
  },

  hero: {
    badge: 'Grial Front Desk',
    title: 'Answers every call. Books the appointment. Never off shift.',
    subtitle:
      'Grial Front Desk learns your services, hours and rules so it can answer when your team cannot, qualify the caller and put the appointment straight into the calendar.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See pricing',
    note: 'Speaks English and Spanish, and detects which the caller is using',
    previewAlt:
      'A live call handled by Grial Front Desk, showing the transcript and the booked appointment',
  },

  highlights: [
    'Answers on the first ring',
    'English and Spanish',
    'Books into your calendar',
    'Hands over to a person',
  ],

  problem: {
    title: 'A missed call is a client who called somebody else.',
    subtitle:
      'Most practices lose more revenue at reception than anywhere else in the funnel — and it never appears on a report as a loss.',
    points: [
      {
        title: 'The phone rings when reception is busy',
        body: 'Someone is already at the desk with a client. The second call goes to voicemail, and most callers do not leave one.',
      },
      {
        title: 'Half the enquiries arrive out of hours',
        body: 'People call about treatments in the evening and at weekends, which is exactly when nobody is there to answer.',
      },
      {
        title: 'The same three questions, all day',
        body: 'Price, availability, and where you are. Trained staff spend their day repeating answers instead of handling the calls that need judgement.',
      },
    ],
  },

  benefits: {
    title: 'What changes once it is answering',
    items: [
      {
        title: 'Nothing rings out',
        body: 'Every call gets picked up on the first ring, including the ones that arrive while your team is already on the phone.',
      },
      {
        title: 'The routine calls stop reaching your team',
        body: 'Price and availability questions are answered and booked without a person, so reception handles the conversations that need one.',
      },
      {
        title: 'You know what was said',
        body: 'Every call is transcribed and summarised, so follow-up does not depend on whether someone wrote it down.',
      },
    ],
  },

  steps: {
    title: 'How a call actually goes',
    subtitle: 'Teach it the business once. From then on, it answers, qualifies and books every lead.',
    items: [
      {
        title: 'The call comes in',
        body: 'Your Grialink number rings and Grial Front Desk answers immediately, greeting the caller in your business name.',
      },
      {
        title: 'It answers and qualifies',
        body: 'It responds from the services and FAQs you configured, then finds out what the caller wants and when they can come in.',
      },
      {
        title: 'It books — or hands over',
        body: 'The appointment goes into the calendar. If the conversation goes past what it should handle, it transfers to a person or takes a message.',
      },
    ],
  },

  sections: [
    {
      eyebrow: 'The setup',
      title: 'What you configure',
      subtitle:
        'Setup is a description of your business, not a script tree. You give it the facts and the tone; it handles the wording.',
      items: [
        'Business identity: name, what you do, location and specialties',
        'Services and FAQs it is allowed to answer from',
        'Business hours, so it knows when to book and when to take a message',
        'Voice and tone, with multilingual auto-detect between English and Spanish',
        'Transfer rules for when a human should take over',
        'Transcript and summary saved against the contact record',
      ],
      captureAlt:
        'The Grial Front Desk setup screen showing business identity fields, business hours, and a preview panel with the greeting, language, tone and voice',
      captureCaption: 'Describe the practice once — identity, services, hours and tone.',
    },
    {
      eyebrow: 'Call routing',
      title: 'It slots into the call flow you already have',
      subtitle:
        'Grial Front Desk is a node in your IVR, not a replacement for it. Send it the calls it should take and route the rest wherever they went before.',
      items: [
        'Drop it into any IVR flow as a node in the visual builder',
        'Give it one keypad option and keep the others going to your team',
        'Send only after-hours calls to it and keep daytime calls with reception',
        'Falls through to voicemail or a human transfer when it should not answer',
      ],
      captureAlt:
        'The Grialink visual IVR builder showing a call flow where a keypad option routes to a Grial Front Desk node, with other options going to an agent and to voicemail',
      captureCaption: 'A Grial Front Desk node wired into a live IVR flow.',
    },
  ],

  featureGrid: {
    title: 'Everything it handles on a call',
    items: [
      { title: 'Answers instantly', body: 'Picks up on the first ring, including while every other line is busy.' },
      { title: 'Knows your services', body: 'Answers from the services and FAQs you configured, not from guesswork.' },
      { title: 'Books the appointment', body: 'Offers real slots and writes the booking into your calendar.' },
      { title: 'Human handover', body: 'Transfers to a person the moment the conversation needs one.' },
      { title: 'Transcript and summary', body: 'Every call written up against the contact record.' },
      { title: 'Knows your hours', body: 'Books inside your business hours and takes a message outside them.' },
    ],
  },

  useCases: {
    title: 'Where practices point it first',
    items: [
      {
        title: 'Evenings and weekends',
        body: 'Calls that used to hit voicemail become booked appointments waiting for you on Monday morning.',
      },
      {
        title: 'Overflow when the desk is busy',
        body: 'The second and third simultaneous calls get answered instead of queued, so nobody hangs up waiting.',
      },
      {
        title: 'After an ad goes live',
        body: 'A campaign that suddenly triples call volume does not need a temporary hire to survive the week.',
      },
    ],
  },

  faq: {
    title: 'The questions people ask first',
    items: [
      {
        question: 'Will callers know they are talking to an AI?',
        answer:
          'It introduces itself in your business name and speaks naturally. It does not claim to be a specific human being, and you choose the greeting it opens with.',
      },
      {
        question: 'What happens when it cannot answer something?',
        answer:
          'It transfers to a person or takes a message, depending on how you configure it. It answers from the services and FAQs you gave it rather than improvising on things like clinical advice.',
      },
      {
        question: 'Does it work in Spanish?',
        answer:
          'Yes. The opening greeting can be given in both languages, after which it detects which language the caller is using and continues in that one.',
      },
      {
        question: 'Do I need to replace my phone system?',
        answer:
          'No. It runs on a Grialink number and sits inside your IVR flow as one node. You decide which calls reach it and which keep going where they go today.',
      },
      {
        question: 'What does a call cost?',
        answer:
          'Calls draw on the dialer minutes included in your plan, and the AI handling uses AI credits. Both are shown in the app before you activate it.',
      },
    ],
  },
};
