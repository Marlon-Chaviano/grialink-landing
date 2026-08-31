/**
 * The /products index.
 *
 * Product names and taglines live here; the ordering, icons and routes come
 * from `src/lib/productPages.ts`. Keys match the product slug.
 */
export default {
  seo: {
    title: 'Products — Grialink | Eleven products, one client journey',
    description:
      'Four AI agents and seven platform modules covering the whole path from first enquiry to the follow-up visit — WhatsApp Copilot, Grial Front Desk, Grial Scheduler, Grial Auditor, Prospector, Outreach, Inbox & Pipeline, Grial Mind, Calendar, Dialer and Analytics.',
  },

  hero: {
    badge: 'The full catalogue',
    titleLine1: 'Eleven products.',
    titleHighlight: 'One client journey.',
    subtitle:
      'Four AI agents that answer for you, and seven modules that help your team move the funnel. Each works on its own — together, nothing falls between the gaps.',
    ctaPrimary: 'Start free',
    ctaSecondary: 'See pricing',
  },

  explore: 'Explore',

  groups: {
    agents: {
      eyebrow: 'Grial Bots',
      title: 'The agents that answer for you',
      subtitle:
        'Four AI agents that pick up the phone, message your clients and read back what happened — so your team handles the conversations that need a person.',
    },
    platform: {
      eyebrow: 'The platform',
      title: 'The system behind them',
      subtitle:
        'Seven modules covering everything from finding a lead and writing a better reply to measuring what the appointment was worth.',
    },
  },

  items: {
    'whatsapp-copilot': {
      name: 'WhatsApp Copilot',
      tagline:
        'Your numbers arrive on WhatsApp every morning — and answer back when you ask.',
    },
    'grial-front-desk': {
      name: 'Grial Front Desk',
      tagline:
        'Answers the calls your team misses, qualifies the caller and books the slot.',
    },
    'grial-scheduler': {
      name: 'Grial Scheduler',
      tagline:
        'Reminds every booked client and lets them confirm, move or cancel from a link.',
    },
    'grial-auditor': {
      name: 'Grial Auditor',
      tagline: 'Turns finished calls into searchable transcripts with AI scoring.',
    },
    prospector: {
      name: 'Prospector AI',
      tagline:
        'Describe the client you want in plain language and get verified contacts back.',
    },
    outreach: {
      name: 'Outreach Engine',
      tagline: 'Multi-step follow-up that sends itself and stops the moment they reply.',
    },
    'inbox-pipeline': {
      name: 'Inbox & Pipeline',
      tagline:
        'Every channel in one inbox, every opportunity with an owner and a next step.',
    },
    'grial-mind': {
      name: 'Grial Mind',
      tagline:
        'Suggest replies, fix spelling, and improve tone inside every conversation.',
    },
    calendar: {
      name: 'Smart Calendar',
      tagline: 'Book from the conversation, synced both ways with Google Calendar.',
    },
    dialer: {
      name: 'Grialink Dialer',
      tagline: 'Your own numbers, click-to-call, and call routing you draw yourself.',
    },
    analytics: {
      name: 'Analytics Hub',
      tagline: 'What each campaign, agent and call is actually worth to the practice.',
    },
  },
};
