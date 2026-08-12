export default {
  /* ── SEO ── */
  seo: {
    title: 'SMS Alerts Sign-Up — Grialink',
    description:
      'Subscribe to Grialink SMS alerts. Get product updates, webinar invitations, and limited-time offers by text. Up to 4 messages per month. Reply STOP to cancel.',
  },

  /* ── Hero ── */
  hero: {
    badge: 'SMS Alerts',
    title: 'Get Grialink updates by text',
    subtitle:
      'Product announcements, webinar invitations, and limited-time offers on Grialink plans — sent straight to your phone. Up to 4 messages per month. You can unsubscribe at any time.',
  },

  /* ── Opt-in form ── */
  form: {
    heading: 'Subscribe to SMS alerts',
    fields: {
      firstName: { label: 'First name', placeholder: 'Jane' },
      email: { label: 'Email address', placeholder: 'jane@company.com' },
      phone: {
        label: 'Mobile number',
        placeholder: '+1 (555) 123-4567',
        hint: 'US mobile numbers only. Standard carrier rates apply.',
      },
    },
    /*
     * Keep this disclosure aligned with the Twilio Message Flow / CTA text.
     * `{termsUrl}` / `{privacyUrl}` become clickable links that still show the
     * bare grialink.com URLs — reviewers reject “See our Terms” without the URL.
     */
    consent:
      'I agree to receive recurring marketing text messages from Grialink at the mobile number provided. Consent is not a condition of purchase. Message frequency varies, up to 4 messages per month. Message and data rates may apply. Reply STOP to cancel, HELP for help. Terms: {termsUrl}  Privacy: {privacyUrl}',
    submit: 'Subscribe to SMS alerts',
    sending: 'Subscribing…',
    success: 'You are subscribed. Check your phone for a confirmation text.',
    error: 'We could not complete your subscription. Please try again or email info@grialink.com.',
    validation: {
      firstNameRequired: 'Please enter your first name.',
      firstNameMin: 'Please enter at least 2 characters.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
      phoneRequired: 'Please enter your mobile number.',
      phoneInvalid: 'Please enter a valid US mobile number, e.g. +1 (555) 123-4567.',
      consentRequired: 'You must agree to receive text messages to subscribe.',
    },
  },

  /* ── Program disclosures (required for A2P 10DLC / CTIA compliance) ── */
  disclosures: {
    title: 'Program details',
    items: [
      {
        term: 'Program name',
        description: 'Grialink marketing alerts, operated by Ezi Group LLC (DBA Grialink).',
      },
      {
        term: 'Message content',
        description:
          'Product announcements and new feature releases, webinar and event invitations, limited-time offers on Grialink subscription plans, and follow-ups if you requested a demo or started a free trial.',
      },
      {
        term: 'Message frequency',
        description: 'Message frequency varies, up to 4 messages per month.',
      },
      {
        term: 'Cost',
        description:
          'Message and data rates may apply. Grialink does not charge for this program; your mobile carrier may.',
      },
      {
        term: 'How to opt out',
        description:
          'Reply STOP to any message to unsubscribe. You will receive one final confirmation text and no further marketing messages.',
      },
      {
        term: 'How to get help',
        description:
          'Reply HELP to any message, or email info@grialink.com for assistance with this program.',
      },
      {
        term: 'Supported carriers',
        description:
          'Carriers are not liable for delayed or undelivered messages. Not all mobile carriers are supported.',
      },
      {
        term: 'Your privacy',
        description:
          'Mobile phone numbers and SMS opt-in consent are never shared with or sold to third parties or affiliates for marketing purposes.',
      },
    ],
  },
};
