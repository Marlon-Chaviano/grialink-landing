/**
 * Pricing plan configuration — aligned with app onboarding plans
 * (`app/javascript/v3/views/auth/plans/Index.vue` + signup.json).
 */

export type PlanVariant = 'muted' | 'default' | 'featured' | 'enterprise';

export interface Plan {
  /** Internal id — keys in pricing.plans.<id> */
  id: string;
  variant: PlanVariant;
  /** USD monthly price; null = custom (Enterprise) */
  priceMonthly: number | null;
  showPerMonth: boolean;
}

export const plans: Plan[] = [
  {
    id: 'free',
    variant: 'muted',
    priceMonthly: 0,
    showPerMonth: true,
  },
  {
    id: 'starter',
    variant: 'default',
    priceMonthly: 99,
    showPerMonth: true,
  },
  {
    id: 'pro',
    variant: 'featured',
    priceMonthly: 199,
    showPerMonth: true,
  },
  {
    id: 'scale',
    variant: 'default',
    priceMonthly: 349,
    showPerMonth: true,
  },
  {
    id: 'enterprise',
    variant: 'enterprise',
    priceMonthly: null,
    showPerMonth: false,
  },
];
