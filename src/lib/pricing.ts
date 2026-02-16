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
  /** Extra seller price footnote value (null = none) */
  extraSellerPrice: string | null;
  /** Whether this plan is visually highlighted */
  highlighted: boolean;
  /** Whether this plan is active/available */
  active: boolean;
}

/* ─── Data ─── */

export const ANNUAL_DISCOUNT_PERCENT = 20;

export const plans: Plan[] = [
  {
    id: 'free',
    priceMonthly: 0,
    priceYearly: 0,
    highlighted: false,
    active: true,
    extraSellerPrice: null,
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'basicProspecting' },
          { labelKey: 'noAdvancedAI', disabled: true },
        ],
      },
      {
        categoryKey: 'sales',
        features: [
          { labelKey: 'adminAccounts', values: { count: 1 }, bold: true },
          { labelKey: 'agentLimit', values: { count: 5 } },
        ],
      },
    ],
  },
  {
    id: 'starter',
    priceMonthly: 60,
    priceYearly: 60 * 12 * (1 - ANNUAL_DISCOUNT_PERCENT / 100),
    highlighted: false,
    active: true,
    extraSellerPrice: '$25',
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'contacts', values: { count: '80' } },
          { labelKey: 'aiCredits', values: { count: '3,500' } },
          { labelKey: 'lists', values: { count: 3 } },
          { labelKey: 'aiAgents', values: { count: 1 } },
        ],
      },
      {
        categoryKey: 'sales',
        features: [
          { labelKey: 'adminAccounts', values: { count: 1 }, bold: true },
          { labelKey: 'agentLimit', values: { count: 5 } },
        ],
      },
    ],
  },
  {
    id: 'growth',
    priceMonthly: 100,
    priceYearly: 100 * 12 * (1 - ANNUAL_DISCOUNT_PERCENT / 100),
    highlighted: true,
    active: true,
    extraSellerPrice: '$25',
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'contacts', values: { count: '300' }, bold: true },
          { labelKey: 'aiCredits', values: { count: '10,000' }, bold: true },
          { labelKey: 'lists', values: { count: 10 } },
          { labelKey: 'sequences', values: { count: '3-5' } },
          { labelKey: 'aiAgents', values: { count: 3 } },
        ],
      },
      {
        categoryKey: 'sales',
        features: [
          { labelKey: 'adminAccountsPlural', values: { count: 5 }, bold: true, highlight: true },
          { labelKey: 'agentLimit', values: { count: 20 } },
          { labelKey: 'callTranscription' },
          { labelKey: 'smartDashboard' },
        ],
      },
    ],
  },
  {
    id: 'scale',
    priceMonthly: 150,
    priceYearly: 150 * 12 * (1 - ANNUAL_DISCOUNT_PERCENT / 100),
    highlighted: false,
    active: true,
    extraSellerPrice: '$20',
    featureGroups: [
      {
        categoryKey: 'prospecting',
        features: [
          { labelKey: 'contacts', values: { count: '800' }, bold: true },
          { labelKey: 'aiCredits', values: { count: '25,000' }, bold: true },
          { labelKey: 'unlimitedAgentsLists' },
        ],
      },
      {
        categoryKey: 'sales',
        features: [
          { labelKey: 'adminAccountsPlural', values: { count: 15 }, bold: true, highlight: true },
          { labelKey: 'unlimitedAgents', bold: true },
          { labelKey: 'scoringDashboard' },
          { labelKey: 'corporateFeatures' },
        ],
      },
    ],
  },
];
