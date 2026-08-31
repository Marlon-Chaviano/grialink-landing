/**
 * The product catalogue — one dedicated page per product.
 *
 * Every entry generates `/{lang}/products/{slug}` from a single template
 * (`src/pages/[lang]/products/[slug].astro`) and a matching EN/ES locale file.
 * Adding a product is an entry here plus two locale files — no new page, no new
 * component.
 *
 * `id` matches the identifier the app uses (see `botRegistry.js` for the
 * agents) so marketing copy and product copy cannot drift apart.
 */

export type ProductMockup =
  | "whatsappThread"
  | "liveCall"
  | "schedulerReminder"
  | "grialMindComposer";
export type ProductGroup = "agents" | "platform";

export interface ProductPageEntry {
  /** Matches the in-app identifier where one exists. */
  id: string;
  /** URL segment: /{lang}/products/{slug} */
  slug: string;
  /** Previous public URL segments kept as permanent redirects. */
  legacySlugs?: string[];
  /** i18n namespace holding this page's copy. */
  namespace: string;
  /** Which block of the catalogue this belongs to. */
  group: ProductGroup;
  /**
   * Agents render the Grial cup mark with this glyph inside it, the same way
   * the dashboard does. Platform modules use the glyph on its own.
   */
  iconPath: string;
  /** Hand-built mockup for the hero, when the product has one. */
  mockup?: ProductMockup;
  /**
   * Capture pair names under `src/assets/marketing/captures/`. The first backs
   * the hero when there is no mockup; the rest feed the deep-dive sections in
   * order.
   */
  captures: string[];
  /** OG card basename under `public/og/`. */
  ogPage: string;
  /** Flagship products get a stronger accent in listings. */
  featured?: boolean;
}

export const productPages: ProductPageEntry[] = [
  /* ─── Grial Bots: the AI agents ─── */
  {
    id: "whatsapp-assistant",
    slug: "whatsapp-copilot",
    namespace: "productWhatsappCopilot",
    group: "agents",
    featured: true,
    mockup: "whatsappThread",
    captures: ["whatsapp-copilot", "grial-bots"],
    ogPage: "whatsapp-copilot",
    iconPath: "M12 21a9 9 0 10-7.79-4.5L3 21l4.66-1.17A8.96 8.96 0 0012 21z",
  },
  {
    id: "ai-receptionist",
    slug: "grial-front-desk",
    legacySlugs: ["ai-receptionist"],
    namespace: "productGrialFrontDesk",
    group: "agents",
    featured: true,
    mockup: "liveCall",
    captures: ["front-desk", "ivr-builder"],
    ogPage: "grial-front-desk",
    iconPath:
      "M4 14v-2a8 8 0 1116 0v2 M6 12h1v6H6a2 2 0 01-2-2v-2a2 2 0 012-2z M18 12h-1v6h1a2 2 0 002-2v-2a2 2 0 00-2-2z",
  },
  {
    id: "appointment-agent",
    slug: "grial-scheduler",
    namespace: "productGrialScheduler",
    group: "agents",
    mockup: "schedulerReminder",
    captures: ["calendar", "grial-bots"],
    ogPage: "grial-scheduler",
    iconPath:
      "M8 2v4 M16 2v4 M3 10h18 M21 13V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7 M17 21l2 2 4-4",
  },
  {
    id: "grial-voice",
    slug: "grial-auditor",
    legacySlugs: ["grial-voice"],
    namespace: "productGrialAuditor",
    group: "agents",
    captures: ["call-intelligence", "dialer-calls"],
    ogPage: "grial-auditor",
    iconPath: "M2 12h2 M6 8v8 M10 4v16 M14 7v10 M18 10v4 M22 12h-2",
  },

  /* ─── The platform ─── */
  {
    id: "prospector",
    slug: "prospector",
    namespace: "productProspector",
    group: "platform",
    captures: ["prospector-smart", "prospector-results", "prospector-search"],
    ogPage: "prospector",
    iconPath: "M11 19a8 8 0 100-16 8 8 0 000 16z M21 21l-4.35-4.35",
  },
  {
    id: "outreach",
    slug: "outreach",
    namespace: "productOutreach",
    group: "platform",
    captures: ["cadences", "inbox"],
    ogPage: "outreach",
    iconPath: "M3 20l18-8L3 4v6l12 2-12 2v6z",
  },
  {
    id: "pipeline",
    slug: "inbox-pipeline",
    namespace: "productInboxPipeline",
    group: "platform",
    captures: ["inbox-thread", "pipeline", "inbox"],
    ogPage: "inbox-pipeline",
    iconPath: "M4 5h6v6H4V5z M14 5h6v10h-6V5z M4 15h6v4H4v-4z",
  },
  {
    id: "grial-mind",
    slug: "grial-mind",
    namespace: "productGrialMind",
    group: "platform",
    featured: true,
    mockup: "grialMindComposer",
    captures: ["inbox-thread", "inbox"],
    ogPage: "grial-mind",
    iconPath:
      "M9.5 4A2.5 2.5 0 007 6.5v.4A3.5 3.5 0 005 10a3.5 3.5 0 001.5 2.87A3.5 3.5 0 009 19.5c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h.5z M14.5 4A2.5 2.5 0 0117 6.5v.4A3.5 3.5 0 0119 10a3.5 3.5 0 01-1.5 2.87 3.5 3.5 0 01-2.5 6.63c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h-.5z M7.5 9.5H11 M13 9.5h3.5 M8 14h3 M13 14h3",
  },
  {
    id: "calendar",
    slug: "calendar",
    namespace: "productCalendar",
    group: "platform",
    captures: ["calendar", "inbox-thread"],
    ogPage: "calendar",
    iconPath:
      "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    id: "dialer",
    slug: "dialer",
    namespace: "productDialer",
    group: "platform",
    captures: ["dialer-calls", "ivr", "dialer"],
    ogPage: "dialer",
    iconPath:
      "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    id: "analytics",
    slug: "analytics",
    namespace: "productAnalytics",
    group: "platform",
    captures: ["sales-insights", "crm-analytics", "sales-kpis"],
    ogPage: "analytics",
    iconPath: "M4 20V10 M10 20V4 M16 20v-7 M22 20H2",
  },
];

export const productPageSlugs = productPages.map((p) => p.slug);
export const agentPages = productPages.filter((p) => p.group === "agents");
export const platformPages = productPages.filter((p) => p.group === "platform");

export function findProductPage(slug: string): ProductPageEntry | undefined {
  return productPages.find((p) => p.slug === slug);
}
