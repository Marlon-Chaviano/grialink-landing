/**
 * The "Product" navigation menu.
 *
 * A thin projection of `productPages` — the menu cannot list a product that has
 * no page, and adding a product puts it in the menu automatically. The desktop
 * mega menu and the mobile accordion both read from here, so the two lists can
 * never drift.
 *
 * Labels come from the `productsCatalogue` namespace, keyed by slug, so a
 * product is named identically in the menu, on /products and on its own page.
 */
import { agentPages, platformPages, type ProductPageEntry } from "@/lib/productPages";

export interface ProductMenuGroup {
  /** i18n key under `navbar.productMenu.groups`. */
  key: "agents" | "platform";
  entries: ProductPageEntry[];
}

export const productMenuGroups: ProductMenuGroup[] = [
  { key: "agents", entries: agentPages },
  { key: "platform", entries: platformPages },
];

/** Flat, ordered list — used by the mobile accordion. */
export const productMenuEntries: ProductPageEntry[] = [...agentPages, ...platformPages];
