/**
 * Products configuration.
 *
 * All user-facing labels are i18n keys resolved at runtime via `productsPage.*`.
 * Colors reference Tailwind colour utilities used in cards / icons.
 */

/* ─── Types ─── */

export interface ProductFeature {
  /** i18n key from productsPage.products.<id>.features.<index> */
  labelKey: string;
}

export interface Product {
  /** Internal identifier — matches i18n key: productsPage.products.<id> */
  id: string;
  /** URL-safe slug for anchor links (#prospector) and future /products/<slug> */
  slug: string;
  /** SVG path(s) for the product icon */
  iconPath: string;
  /** Tailwind colour key for the accent: 'orange' | 'blue' | 'purple' | 'emerald' */
  color: 'orange' | 'blue' | 'purple' | 'emerald';
}

/* ─── Brain Features ─── */

export interface BrainFeature {
  /** i18n key suffix within productsPage.brain.features */
  id: string;
  /** SVG icon path */
  iconPath: string;
}

/* ─── Data ─── */

export const products: Product[] = [
  {
    id: 'prospector',
    slug: 'prospector',
    color: 'orange',
    // person_search
    iconPath:
      'M10 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 1.79-8 4v2h12.5M20.59 16.93l-3.54-3.54a5.003 5.003 0 10-1.41 1.41l3.54 3.54 1.41-1.41zM14.5 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    id: 'outreach',
    slug: 'outreach',
    color: 'blue',
    // send
    iconPath: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z',
  },
  {
    id: 'pipeline',
    slug: 'crm',
    color: 'purple',
    // alt_route
    iconPath:
      'M9.78 11.16l-1.42 1.42a7.282 7.282 0 01-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zM11 6L7 2 3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H11zm10 0l-4-4-4 4h3.02c-.02.81-.08 1.54-.19 2.17l-1.94-.49c.07-.48.12-1.05.13-1.68H18zM14.22 11.16l1.42 1.42c.69-.69 1.28-1.66 1.79-2.94l-1.94-.49c-.32.89-.77 1.5-1.27 2.01zM11 18h2v4h-2v-4zm-4.01-.77l1.42 1.42L12 15.07l-1.42-1.42-3.59 3.58zm8.6 1.42l1.42-1.42L12 15.07l-1.42 1.42 5.01 2.16z',
  },
  {
    id: 'analytics',
    slug: 'analytics',
    color: 'emerald',
    // insights
    iconPath:
      'M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55C21.56 12.26 23 11.45 23 10c0-1.1-.9-2-2-2z',
  },
  {
    id: 'salesDashboard',
    slug: 'sales-dashboard',
    color: 'emerald',
    // bar_chart
    iconPath:
      'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  },
];

export const brainFeatures: BrainFeature[] = [
  {
    id: 'nlp',
    // check_circle
    iconPath:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  },
  {
    id: 'predictive',
    // check_circle
    iconPath:
      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  },
];

/** Tailwind classes mapped to product colors */
export const productColorClasses: Record<
  Product['color'],
  { bg: string; bgHover: string; text: string; border: string }
> = {
  orange: {
    bg: 'bg-orange-100',
    bgHover: 'group-hover:bg-primary group-hover:text-white',
    text: 'text-primary',
    border: 'hover:border-primary/20',
  },
  blue: {
    bg: 'bg-blue-100',
    bgHover: 'group-hover:bg-blue-600 group-hover:text-white',
    text: 'text-blue-600',
    border: 'hover:border-blue-400/20',
  },
  purple: {
    bg: 'bg-purple-100',
    bgHover: 'group-hover:bg-purple-600 group-hover:text-white',
    text: 'text-purple-600',
    border: 'hover:border-purple-400/20',
  },
  emerald: {
    bg: 'bg-emerald-100',
    bgHover: 'group-hover:bg-emerald-600 group-hover:text-white',
    text: 'text-emerald-600',
    border: 'hover:border-emerald-400/20',
  },
};

/** Hover text color for "view details" links */
export const productLinkHoverColor: Record<Product['color'], string> = {
  orange: 'group-hover:text-primary',
  blue: 'group-hover:text-blue-600',
  purple: 'group-hover:text-purple-600',
  emerald: 'group-hover:text-emerald-600',
};
