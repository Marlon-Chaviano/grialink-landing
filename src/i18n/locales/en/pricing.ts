export default {
  /* ── SEO ── */
  seo: {
    title: 'Plans & Pricing — Grialink | AI for Clinics from $0/mo',
    description:
      'Choose the ideal plan for your clinic. From free basic prospecting to full AI-powered sales automation. No forced contracts.',
  },

  /* ── Hero ── */
  hero: {
    titleLine1: 'Plans that grow',
    titleHighlight: 'with your clinic',
    subtitle:
      'From an independent clinic to a multi-location network. Scale with AI without switching platforms. All plans include unlimited channels: WhatsApp, Instagram, Email, and more.',
    badge: 'No contracts \u00B7 Cancel anytime',
  },

  /* ── Toggle ── */
  toggle: {
    monthly: 'Monthly',
    yearly: 'Yearly',
    saveLabel: 'Save {percent}%',
  },

  /* ── Plans ── */
  plans: {
    perMonth: '/mo',
    perYear: '/yr',
    free: {
      name: 'Free',
      description: 'Explore the platform at no cost.',
      cta: 'Start Free',
    },
    starter: {
      name: 'Starter',
      description: 'Ideal for clinics starting with AI.',
      cta: 'Get started',
    },
    growth: {
      name: 'Growth',
      description: 'For actively growing clinics.',
      cta: 'Get started',
      badge: 'Most Popular',
    },
    scale: {
      name: 'Scale',
      description: 'Multi-clinic & large teams.',
      cta: 'Get started',
    },
  },

  /* ── Feature categories ── */
  categories: {
    prospecting: 'Prospecting & AI',
    sales: 'Sales',
  },

  /* ── Feature labels ── */
  features: {
    basicProspecting: 'Basic prospecting',
    noAdvancedAI: 'No advanced AI',
    contacts: '{count} Contacts',
    aiCredits: '{count} AI Credits',
    lists: '{count} Lists',
    sequences: '{count} Sequences',
    aiAgents: '{count} AI Agents',
    unlimitedAgentsLists: 'Unlimited Agents/Lists',
    adminAccounts: '{count} Admin Account',
    adminAccountsPlural: '{count} Admin Accounts',
    agentLimit: 'Limit {count} agents',
    unlimitedAgents: 'Unlimited Agents',
    callTranscription: 'Call transcription',
    smartDashboard: 'Smart dashboard',
    scoringDashboard: 'Scoring dashboard',
    corporateFeatures: 'Corporate features',
    extraSeller: '+ Extra seller: <strong>{price}/mo</strong>',
  },

  /* ── Trust / Security ── */
  trust: {
    badge: 'Medical Grade',
    title: 'Security & Compliance',
    subtitle:
      'Sensitive data protection with certified infrastructure and end-to-end encryption for the healthcare sector.',
    certifications: ['HIPAA Compliant', 'SOC 2 Type II', 'GDPR Ready'],
    encryptionTitle: 'AES-256 Encryption',
    encryptionSubtitle: 'Banking standard',
  },

  /* ── Integrations ── */
  integrations: {
    title: 'Native Integrations',
  },

  /* ── Add-ons ── */
  addons: {
    title: 'Additional Add-ons (Overages)',
    items: [
      {
        title: 'Contact Packages',
        tiers: [
          { label: '+200', price: '$15' },
          { label: '+500', price: '$30' },
        ],
      },
      {
        title: 'AI Credit Packages',
        tiers: [
          { label: '+2k', price: '$15' },
          { label: '+10k', price: '$60' },
        ],
      },
      {
        title: 'Extra Sellers',
        description: 'Expand your team from <strong>$20/mo</strong> per additional seller.',
      },
      {
        title: 'Extra Admin',
        description: 'Additional administrative sub-account for <strong>$10/mo</strong>.',
      },
    ],
  },

  /* ── FAQ ── */
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'The answers you need before deciding.',
    items: [
      {
        question: 'Does it integrate with WhatsApp Business?',
        answer:
          'Yes, Grialink has native WhatsApp Business API integration. You can send and receive messages, automate appointment reminders, and follow up on leads directly from the platform.',
      },
      {
        question: 'Can I sync appointments with Google Calendar?',
        answer:
          'Yes, we offer bidirectional sync with Google Calendar via OAuth. Appointments created in Grialink automatically appear in your calendar, and vice versa.',
      },
      {
        question: 'What happens if I run out of AI credits?',
        answer:
          'You can purchase additional credit packages as a monthly add-on without changing plans. Unused credits do not roll over. You can also upgrade your plan to get more credits included.',
      },
      {
        question: 'Can I manage multiple branches or clinics?',
        answer:
          'Yes, the Scale plan includes multi-clinic capacity with up to 15 admin accounts and unlimited agents. Ideal for clinic networks with centralized corporate reporting.',
      },
      {
        question: 'What communication channels are supported?',
        answer:
          'WhatsApp Business API, Instagram DMs, Facebook Messenger, Email, Live Web Chat, Telegram, LINE, SMS (via Twilio), and a generic API channel for custom integrations. All channels are included in every plan.',
      },
      {
        question: 'Can I start with the Free plan?',
        answer:
          'Yes, the Free plan never expires. You can explore the platform at no cost and upgrade to a paid plan when you\'re ready to unlock advanced AI features and more capacity.',
      },
      {
        question: 'Can I migrate contacts from another platform?',
        answer:
          'Yes, you can bulk import contacts and also use Prospector AI to enrich data from Apollo.io. If you need assisted migration, our team helps you at no additional cost.',
      },
      {
        question: 'Is my patient data secure?',
        answer:
          'We implement AES-256 encryption, multi-factor authentication (MFA), custom roles and permissions (RBAC), audit logs, and anti-bot protection with hCaptcha. Your data is never shared with third parties.',
      },
    ],
  },

  /* ── CTA ── */
  cta: {
    title: 'Start free and scale when ready',
    subtitle:
      'The Free plan never expires. Explore the platform with no commitment and upgrade when you\'re ready.',
    primaryButton: 'Create free account',
    secondaryButton: 'Schedule personalized demo',
  },

  /* ── Disclaimer ── */
  disclaimer:
    '* Usage policy: Lead limits reset monthly. AI services are subject to reasonable use terms to ensure optimal performance of the clinical engine. Displayed prices do not include VAT where applicable.',
};
