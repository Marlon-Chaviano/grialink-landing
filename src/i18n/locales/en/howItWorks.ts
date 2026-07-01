export default {
  title: 'From zero to AI-powered in 4 steps',
  subtitle:
    'No complex installations. Create your account, connect your channels, and let AI do the rest.',
  statusConnected: 'Connected',
  statusPending: 'Pending',
  statusActive: 'Active',
  steps: [
    {
      title: 'Create your free account',
      description:
        'Sign up in under 2 minutes. No credit card required. Land directly in your Grialink dashboard.',
      icon: 'account',
      previewTitle: 'Settings / Account setup',
      previewItems: [
        { label: 'Workspace created', status: 'connected' },
        { label: 'Team invite sent', status: 'connected' },
        { label: 'Billing profile', status: 'pending' },
      ],
      previewNote: 'Same onboarding flow as app.grialink.com after registration.',
    },
    {
      title: 'Connect your channels',
      description:
        'WhatsApp, Instagram, Email, Web Chat, and Twilio. Every inbox your leads use, in one place.',
      icon: 'channels',
      previewTitle: 'Settings / Inboxes',
      previewItems: [
        { label: 'WhatsApp Business', status: 'connected' },
        { label: 'Instagram DM', status: 'connected' },
        { label: 'Email (SendGrid)', status: 'connected' },
        { label: 'Website widget', status: 'pending' },
      ],
      previewNote: 'Connect channels from Settings without code or external consultants.',
    },
    {
      title: 'Configure your pipeline',
      description:
        'Pick a template for aesthetics, dental, or dermatology. Stages, SLAs, and automations ready in minutes.',
      icon: 'pipeline',
      previewTitle: 'Pipelines / Aesthetics template',
      previewItems: [
        { label: 'New lead', status: 'active' },
        { label: 'Consultation booked', status: 'active' },
        { label: 'Treatment scheduled', status: 'active' },
        { label: 'Follow-up sequence', status: 'connected' },
      ],
      previewNote: 'Drag-and-drop stages with cadences and reminders built in.',
    },
    {
      title: 'Activate AI',
      description:
        'Grial Bots auto-respond, Grial Dialer scores calls, and Copilot suggests the next best action.',
      icon: 'ai',
      previewTitle: 'Grial Bots / WhatsApp Assistant',
      previewItems: [
        { label: 'WhatsApp Assistant', status: 'active' },
        { label: 'AI Receptionist (IVR)', status: 'connected' },
        { label: 'Call Analytics scoring', status: 'connected' },
        { label: 'Copilot suggestions', status: 'active' },
      ],
      previewNote: 'Toggle each AI module from Grial Bots when your team is ready.',
    },
  ],
  cta: 'Start free',
};
