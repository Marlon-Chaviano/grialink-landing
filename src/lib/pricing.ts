/**
 * Pricing plan configuration.
 *
 * All user-facing labels are i18n keys resolved at runtime.
 * Prices are numbers so they can be formatted per locale/currency.
 * Feature keys reference `pricing.features.*` and `pricing.categories.*`.
 */

/* ─── Types ─── */

export interface PlanFeature {
  /** i18n key from pricing.features.* */
  labelKey: string;
  /** Interpolation values for the label template */
  values?: Record<string, string | number>;
  /** Visual emphasis */
  bold?: boolean;
  /** Shown as disabled / not available */
  disabled?: boolean;
  /** Highlighted row background on featured plan */
  highlight?: boolean;
}

export interface FeatureGroup {
  /** i18n key from pricing.categories.* */
  categoryKey: string;
  features: PlanFeature[];
}

export interface Plan {
  /** Internal identifier (matches i18n key: pricing.plans.<id>) */
  id: string;
  /** Monthly price in USD (0 for free) */
  priceMonthly: number;
  /** Yearly price in USD (total per year) */
  priceYearly: number;
  /** Feature groups displayed on the card */
  featureGroups: FeatureGroup[];
  /** Extra agent price footnote (null = none / unlimited) */
  extraAgentPrice: string | null;
  /** Extra admin price footnote (null = none) */
  extraAdminPrice: string | null;
  /** Trial period in days (null = no trial) */
  trialDays: number | null;
  /** Whether this plan is visually highlighted */
  highlighted: boolean;
  /** Whether this plan is active/available */
  active: boolean;
}

/* ─── Data ─── */

export const ANNUAL_DISCOUNT_PERCENT = 20;

export const plans: Plan[] = [
  /* ── FREE ── */
  {
    id: 'free',
    priceMonthly: 0,
    priceYearly: 0,
    highlighted: false,
    active: true,
    extraAgentPrice: null,
    extraAdminPrice: null,
    trialDays: null,
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'enrichedContacts', values: { count: 10 } },
          { labelKey: 'aiCredits', values: { count: 50 } },
          { labelKey: 'noSequences', disabled: true },
          { labelKey: 'emailsPerMonth', values: { count: 50 } },
          { labelKey: 'basicProspecting' },
          { labelKey: 'noAdvancedAI', disabled: true },
        ],
      },
      {
        categoryKey: 'platform',
        features: [
          { labelKey: 'agentLimit', values: { count: 5 } },
          { labelKey: 'adminAccounts', values: { count: 1 } },
          { labelKey: 'unlimitedInboxes' },
          { labelKey: 'contactsLimit', values: { count: 100 } },
          { labelKey: 'conversationsPerMonth', values: { count: 50 } },
          { labelKey: 'teams', values: { count: 1 } },
          { labelKey: 'automationRules', values: { count: 3 } },
          { labelKey: 'segments', values: { count: 1 } },
        ],
      },
      {
        categoryKey: 'advanced',
        features: [
          { labelKey: 'noCallTranscription', disabled: true },
          { labelKey: 'noSmartDashboard', disabled: true },
          { labelKey: 'noPrioritySupport', disabled: true },
          { labelKey: 'noMultiClinic', disabled: true },
          { labelKey: 'noCorporateReports', disabled: true },
        ],
      },
    ],
  },

  /* ── STARTER (basic) ── */
  {
    id: 'starter',
    priceMonthly: 60,
    priceYearly: 60 * 12 * (1 - ANNUAL_DISCOUNT_PERCENT / 100),
    highlighted: false,
    active: true,
    extraAgentPrice: '$20',
    extraAdminPrice: '$10',
    trialDays: null,
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'enrichedContacts', values: { count: 80 } },
          { labelKey: 'aiCredits', values: { count: '3,500' } },
          { labelKey: 'sequences', values: { count: 1 } },
          { labelKey: 'emailsPerMonth', values: { count: 500 } },
          { labelKey: 'basicProspecting' },
          { labelKey: 'advancedAI', bold: true },
        ],
      },
      {
        categoryKey: 'platform',
        features: [
          { labelKey: 'agentLimit', values: { count: 10 } },
          { labelKey: 'adminAccountsPlural', values: { count: 2 } },
          { labelKey: 'unlimitedInboxes' },
          { labelKey: 'contactsLimit', values: { count: '1,000' } },
          { labelKey: 'conversationsPerMonth', values: { count: 500 } },
          { labelKey: 'teams', values: { count: 3 } },
          { labelKey: 'automationRules', values: { count: 10 } },
          { labelKey: 'segments', values: { count: 3 } },
        ],
      },
      {
        categoryKey: 'advanced',
        features: [
          { labelKey: 'noCallTranscription', disabled: true },
          { labelKey: 'noSmartDashboard', disabled: true },
          { labelKey: 'noPrioritySupport', disabled: true },
          { labelKey: 'noMultiClinic', disabled: true },
          { labelKey: 'noCorporateReports', disabled: true },
        ],
      },
    ],
  },

  /* ── GROWTH (professional) ⭐ ── */
  {
    id: 'growth',
    priceMonthly: 100,
    priceYearly: 100 * 12 * (1 - ANNUAL_DISCOUNT_PERCENT / 100),
    highlighted: true,
    active: true,
    extraAgentPrice: '$20',
    extraAdminPrice: '$10',
    trialDays: null,
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'enrichedContacts', values: { count: 300 }, bold: true },
          { labelKey: 'aiCredits', values: { count: '10,000' }, bold: true },
          { labelKey: 'sequences', values: { count: 5 } },
          { labelKey: 'emailsPerMonth', values: { count: '2,000' } },
          { labelKey: 'basicProspecting' },
          { labelKey: 'advancedAI', bold: true },
        ],
      },
      {
        categoryKey: 'platform',
        features: [
          { labelKey: 'agentLimit', values: { count: 25 } },
          { labelKey: 'adminAccountsPlural', values: { count: 5 }, bold: true, highlight: true },
          { labelKey: 'unlimitedInboxes' },
          { labelKey: 'contactsLimit', values: { count: '10,000' }, bold: true },
          { labelKey: 'unlimitedConversations', bold: true },
          { labelKey: 'teams', values: { count: 10 } },
          { labelKey: 'automationRules', values: { count: 50 } },
          { labelKey: 'segments', values: { count: 10 } },
        ],
      },
      {
        categoryKey: 'advanced',
        features: [
          { labelKey: 'callTranscription' },
          { labelKey: 'smartDashboard' },
          { labelKey: 'noPrioritySupport', disabled: true },
          { labelKey: 'noMultiClinic', disabled: true },
          { labelKey: 'noCorporateReports', disabled: true },
        ],
      },
    ],
  },

  /* ── SCALE (organization) ── */
  {
    id: 'scale',
    priceMonthly: 150,
    priceYearly: 150 * 12 * (1 - ANNUAL_DISCOUNT_PERCENT / 100),
    highlighted: false,
    active: true,
    extraAgentPrice: null,
    extraAdminPrice: '$5',
    trialDays: null,
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'enrichedContacts', values: { count: 800 }, bold: true },
          { labelKey: 'aiCredits', values: { count: '25,000' }, bold: true },
          { labelKey: 'unlimitedSequences', bold: true },
          { labelKey: 'unlimitedEmails', bold: true },
          { labelKey: 'basicProspecting' },
          { labelKey: 'advancedAI', bold: true },
        ],
      },
      {
        categoryKey: 'platform',
        features: [
          { labelKey: 'unlimitedAgents', bold: true },
          { labelKey: 'adminAccountsPlural', values: { count: 15 }, bold: true, highlight: true },
          { labelKey: 'unlimitedInboxes' },
          { labelKey: 'unlimitedContacts', bold: true },
          { labelKey: 'unlimitedConversations', bold: true },
          { labelKey: 'unlimitedTeams', bold: true },
          { labelKey: 'unlimitedAutomationRules', bold: true },
          { labelKey: 'unlimitedSegments', bold: true },
        ],
      },
      {
        categoryKey: 'advanced',
        features: [
          { labelKey: 'callTranscription' },
          { labelKey: 'smartDashboard' },
          { labelKey: 'prioritySupport', bold: true },
          { labelKey: 'multiClinic', bold: true },
          { labelKey: 'corporateReports', bold: true },
        ],
      },
    ],
  },
];
