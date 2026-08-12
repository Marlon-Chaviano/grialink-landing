export default {
  seo: {
    title: 'Plans & Pricing — Grialink | AI Sales from $0/mo',
    description:
      'Choose the right plan for your team. From free essentials to full AI sales automation. Upgrade or cancel anytime.',
  },

  hero: {
    title: 'Grialink Plans',
    subtitle: 'AI-powered sales for every team size. Upgrade or cancel anytime.',
    badge: 'No contracts · Cancel anytime',
  },

  plans: {
    perMonthShort: 'mo',
    extras: {
      agent: '+ Agent + line: {price}/month',
      admin: '+ Additional admin: {price}/month',
    },
    free: {
      name: 'Free',
      description: 'Try the essentials.',
      cta: 'Start free',
      highlights: [
        '10 enriched prospects',
        '50 AI credits',
        '1 agent · 1 line',
        'Basic prospecting',
        '1 segment · 1 team',
      ],
    },
    starter: {
      name: 'Starter',
      description: 'Prospecting + dialer.',
      cta: 'Get started',
      highlights: [
        '20 enriched prospects',
        '1,500 AI credits',
        'Dialer · 1,000 min included',
        '5 agents · 5 lines',
        '5 sequences · 5 segments',
        '1,000 emails/mo',
        '5 teams',
      ],
    },
    pro: {
      name: 'Pro',
      description: 'Full AI sales stack.',
      cta: 'Get started',
      badge: 'Popular',
      highlights: [
        '50 enriched prospects',
        '5,000 AI credits',
        'Dialer · 3,000 min included',
        'Grial Bots + Call Analysis AI',
        'Smart dashboard',
        '10 agents · 10 lines',
        '5,000 emails/mo',
        '3 sub-accounts',
      ],
    },
    scale: {
      name: 'Scale',
      description: 'For growing orgs.',
      cta: 'Get started',
      highlights: [
        '100 enriched prospects',
        '12,000 AI credits',
        'Dialer · 6,000 min included',
        'Grial Bots + Call Analysis AI',
        'Smart dashboard',
        '20 agents · 20 lines',
        '50,000 emails/mo',
        'Unlimited teams · 5 sub-accounts',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      description: 'Built for large networks.',
      priceLabel: 'Custom',
      cta: 'Contact sales',
      highlights: [
        'Custom agents & lines',
        'Dedicated support + SLA',
        'Custom onboarding',
        'Enterprise security',
      ],
    },
  },

  integrations: {
    title: 'Native Integrations',
    metaAds: 'Meta Ads',
    googleAds: 'Google Ads',
    goHighLevel: 'GoHighLevel',
    ringCentral: 'RingCentral',
  },

  trust: {
    title: 'Security built for your practice',
    subtitle:
      'Access controls, encryption, and audit trails to protect client and team data — without claiming certifications we do not hold yet.',
    mfa: 'MFA authentication',
    rbac: 'Roles & permissions (RBAC)',
    audit: 'Audit logs',
    captcha: 'Anti-bot protection',
    encryption: 'Encryption in transit & at rest',
    encryptionDesc: 'TLS + modern practices',
  },

  addons: {
    title: 'Need more capacity?',
    subtitle: 'Add agents, credits, or emails anytime — no plan change required.',
    pills: [
      'Extra prospects · +50 enriched for $35',
      'Extra AI credits · +5,000 for $35',
      'Extra emails · +5,000/mo for $25',
      'Extra agent + line · $20/mo',
      'Extra admin · +1 for $10/mo',
    ],
  },

  compare: {
    title: 'Compare plans at a glance',
    subtitle: 'Limits and included modules — aligned with app onboarding.',
    feature: 'Capacity',
    rows: [
      { label: 'Enriched prospects / mo', values: ['10', '20', '50', '100', 'Custom'] },
      { label: 'AI credits / mo', values: ['50', '1,500', '5,000', '12,000', 'Custom'] },
      { label: 'Dialer minutes included', values: ['—', '1,000', '3,000', '6,000', 'Custom'] },
      { label: 'Agents · lines', values: ['1 · 1', '5 · 5', '10 · 10', '20 · 20', 'Custom'] },
      { label: 'Grial Bots + Call Analysis', values: ['—', '—', '✓', '✓', '✓'] },
      { label: 'Smart dashboard (insights)', values: ['—', '—', '✓', '✓', '✓'] },
      { label: 'Emails / mo', values: ['—', '1,000', '5,000', '50,000', 'Custom'] },
      { label: 'Sub-accounts', values: ['—', '—', '3', '5', 'Custom'] },
    ],
  },

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
        question: 'Can I manage multiple branches or practices?',
        answer:
          'Yes, the Scale plan includes multi-account capacity with up to 5 sub-accounts and 20 agents. Enterprise offers custom limits for large networks.',
      },
      {
        question: 'What communication channels are supported?',
        answer:
          'WhatsApp Business API, Instagram DMs, Facebook Messenger, Email, Live Web Chat, Telegram, LINE, SMS (via Twilio), and a generic API channel for custom integrations. All channels are included in every plan.',
      },
      {
        question: 'Can I start with the Free plan?',
        answer:
          "Yes, the Free plan never expires. You can explore the platform at no cost and upgrade to a paid plan when you're ready to unlock advanced AI features and more capacity.",
      },
      {
        question: 'Can I migrate contacts from another platform?',
        answer:
          'Yes, you can bulk import contacts and also use Prospector AI to enrich data from Apollo.io. If you need assisted migration, our team helps you at no additional cost.',
      },
      {
        question: 'Is my data secure?',
        answer:
          'We use MFA, roles & permissions (RBAC), audit logs, anti-bot protection, and encryption in transit and at rest. We do not claim HIPAA or SOC 2 certifications we do not hold yet.',
      },
      {
        question: 'Is there a paid-plan trial?',
        answer:
          'Yes. Paid plans include a 14-day trial in the onboarding flow at app.grialink.com.',
      },
    ],
  },

  cta: {
    title: 'Start free and scale when ready',
    subtitle:
      "The Free plan never expires. Explore the platform with no commitment and upgrade when you're ready.",
    primaryButton: 'Create free account',
    secondaryButton: 'Request demo (form)',
  },

  disclaimer:
    '* Usage policy: Lead limits reset monthly. AI services are subject to fair use terms to ensure optimal engine performance. Prices shown do not include VAT where applicable.',
};
