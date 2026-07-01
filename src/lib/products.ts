/**
 * Products configuration.
 *
 * All user-facing labels are i18n keys resolved at runtime via `productsPage.*`.
 */

/* ─── Types ─── */

export interface Product {
  /** Internal identifier — matches i18n key: productsPage.products.<id> */
  id: string;
  /** URL-safe slug for anchor links (#prospector) and future /products/<slug> */
  slug: string;
  /** SVG path(s) for the product icon */
  iconPath: string;
  /** Accent key for card styling */
  color: 'orange' | 'blue' | 'violet' | 'green' | 'slate';
}

/* ─── Data ─── */

export const products: Product[] = [
  {
    id: 'prospector',
    slug: 'prospector',
    color: 'orange',
    iconPath:
      'M10 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.42 0-8 1.79-8 4v2h12.5M20.59 16.93l-3.54-3.54a5.003 5.003 0 10-1.41 1.41l3.54 3.54 1.41-1.41zM14.5 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    id: 'outreach',
    slug: 'outreach',
    color: 'blue',
    iconPath: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z',
  },
  {
    id: 'pipeline',
    slug: 'ses',
    color: 'violet',
    iconPath:
      'M9.78 11.16l-1.42 1.42a7.282 7.282 0 01-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zM11 6L7 2 3 6h3.02c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H11zm10 0l-4-4-4 4h3.02c-.02.81-.08 1.54-.19 2.17l-1.94-.49c.07-.48.12-1.05.13-1.68H18zM14.22 11.16l1.42 1.42c.69-.69 1.28-1.66 1.79-2.94l-1.94-.49c-.32.89-.77 1.5-1.27 2.01zM11 18h2v4h-2v-4zm-4.01-.77l1.42 1.42L12 15.07l-1.42-1.42-3.59 3.58zm8.6 1.42l1.42-1.42L12 15.07l-1.42 1.42 5.01 2.16z',
  },
  {
    id: 'calendar',
    slug: 'calendar',
    color: 'violet',
    iconPath:
      'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
  },
  {
    id: 'analytics',
    slug: 'analytics',
    color: 'green',
    iconPath:
      'M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55C21.56 12.26 23 11.45 23 10c0-1.1-.9-2-2-2z',
  },
  {
    id: 'dialer',
    slug: 'dialer',
    color: 'green',
    iconPath:
      'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
  },
  {
    id: 'grialBots',
    slug: 'grial-bots',
    color: 'slate',
    iconPath:
      'M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7v1h1.18a2 2 0 110 4H20v1a7 7 0 01-7 7h-2a7 7 0 01-7-7v-1H2.82a2 2 0 110-4H4v-1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M9 11a1 1 0 000 2h6a1 1 0 100-2H9z',
  },
];

/** Tailwind classes mapped to product colors (dark-mode friendly) */
export const productColorClasses: Record<
  Product['color'],
  { bg: string; text: string; border: string; glow: string; link: string }
> = {
  orange: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'hover:border-primary/30',
    glow: 'bg-primary/15',
    link: 'group-hover:text-primary',
  },
  blue: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'hover:border-accent/30',
    glow: 'bg-accent/15',
    link: 'group-hover:text-accent',
  },
  violet: {
    bg: 'bg-primary/5',
    text: 'text-primary',
    border: 'hover:border-primary/20',
    glow: 'bg-primary/10',
    link: 'group-hover:text-primary',
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    border: 'hover:border-green-400/30',
    glow: 'bg-green-500/15',
    link: 'group-hover:text-green-400',
  },
  slate: {
    bg: 'bg-muted',
    text: 'text-foreground',
    border: 'hover:border-border',
    glow: 'bg-muted/80',
    link: 'group-hover:text-foreground',
  },
};

/**
 * Map product slugs to in-page anchors on /products.
 */
export const productSectionAnchor: Record<string, string> = {
  prospector: 'prospector',
  outreach: 'outreach',
  ses: 'ses',
  calendar: 'calendar-detail',
  analytics: 'sales-dashboard',
  dialer: 'dialer',
  'grial-bots': 'grial-bots',
};

/** Modules without a ProductShowcase section — anchor id lives on the grid card. */
export const productGridOnlyAnchors = new Set<string>();
