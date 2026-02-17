export default {
  seo: {
    title: 'Contact — Grialink | Talk to Our Clinic SES Team',
    description:
      'Schedule a personalized demo or contact our team. Technical support, sales inquiries, and partnerships for health, aesthetic, and dental clinics.',
  },

  hero: {
    badge: "Let's talk about your clinic",
    titleLine1: 'Your clinic is unique.',
    titleHighlight: 'Your solution should be too.',
    subtitle:
      'Tell us about your case and we\'ll show you how Grialink can automate patient acquisition, scheduling, and retention at your clinic.',
  },

  info: {
    phone: {
      title: 'Direct Support',
      description: 'Live chat available on the platform',
      value: 'Chat at app.grialink.com',
    },
    email: {
      title: 'Email Us',
      description: 'Sales and support inquiries',
      value: 'info@grialink.com',
    },
    schedule: {
      title: 'Response Time',
      description: 'Our commitment to you',
      days: 'Monday to Friday',
      hours: 'Response within 24h',
    },
  },

  form: {
    title: 'Request a demo or send us your inquiry',
    subtitle: 'Fill out the form and our team will contact you within 24 business hours.',
    fields: {
      name: {
        label: 'Full Name',
        placeholder: 'Your name',
      },
      email: {
        label: 'Email Address',
        placeholder: 'name@yourclinic.com',
      },
      company: {
        label: 'Clinic name (optional)',
        placeholder: 'E.g.: DermaPro Clinic',
      },
      subject: {
        label: 'Subject',
        placeholder: 'How can we help?',
        options: {
          demo: 'I want a personalized demo',
          support: 'Technical Support',
          partners: 'Partnerships & Alliances',
          other: 'Other',
        },
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us about your clinic: how many patients do you manage per month? What channels do you use? What is your biggest operational challenge?',
      },
    },
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Message received! A specialist will contact you soon to coordinate your demo.',
    error: 'There was an error sending your message. Try again or email us at info@grialink.com.',
    validation: {
      nameRequired: 'Name is required.',
      nameMin: 'Name must be at least 2 characters.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Please enter a valid email address.',
      subjectRequired: 'Please select a subject.',
      messageRequired: 'Message is required.',
      messageMin: 'Message must be at least 10 characters.',
    },
  },

  resources: {
    title: 'Explore while you wait',
    items: [
      {
        label: 'See plans & pricing',
        href: '/pricing',
        color: 'blue',
      },
      {
        label: 'Explore the product',
        href: '/products',
        color: 'purple',
      },
      {
        label: 'Our story',
        href: '/about',
        color: 'orange',
      },
    ],
  },

  cta: {
    title: 'Already a Grialink customer?',
    subtitle:
      'Access your dashboard directly to manage your clinic, review analytics, or contact support.',
    button: 'Go to app.grialink.com',
  },
};
