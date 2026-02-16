import { defaultLang, type Lang, supportedLanguages } from './config';

/* ------------------------------------------------------------------ */
/*  Translation loader                                                 */
/* ------------------------------------------------------------------ */

// Eagerly import all locale modules via Vite glob
const localeModules = import.meta.glob<{ default: Record<string, unknown> }>(
  './locales/**/*.ts',
  { eager: true },
);

// Build a nested map: { es: { navbar: {...}, hero: {...} }, en: { ... } }
type TranslationMap = Record<string, Record<string, Record<string, unknown>>>;

const translations: TranslationMap = {};

for (const [path, mod] of Object.entries(localeModules)) {
  // path looks like  ./locales/es/navbar.ts
  const match = path.match(/\.\/locales\/(\w+)\/(\w+)\.ts$/);
  if (!match) continue;
  const [, lang, namespace] = match;
  translations[lang] ??= {};
  translations[lang][namespace] = mod.default as Record<string, unknown>;
}

/* ------------------------------------------------------------------ */
/*  Public helpers                                                     */
/* ------------------------------------------------------------------ */

/**
 * Return a `t` function scoped to a specific language.
 *
 * Usage (Astro):
 *   const t = useTranslations('es');
 *   t('hero.badge')  // ← namespace.key
 *
 * Supports nested keys with dot notation: "hero.features.0.label"
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const [namespace, ...rest] = key.split('.');
    const keyPath = rest.join('.');

    // Try requested language first, then fallback
    const value =
      resolve(translations[lang]?.[namespace], keyPath) ??
      resolve(translations[defaultLang]?.[namespace], keyPath);

    if (value === undefined) {
      console.warn(`[i18n] Missing key: "${key}" for lang "${lang}"`);
      return key;
    }

    return String(value);
  };
}

/**
 * Return the full namespace object for a language.
 * Useful for passing to React components as props.
 */
export function getTranslations(lang: Lang, namespace: string): Record<string, unknown> {
  return (
    translations[lang]?.[namespace] ??
    translations[defaultLang]?.[namespace] ??
    {}
  );
}

/**
 * Extract language from a URL pathname.
 * e.g. /es/products → "es",  /en → "en",  / → defaultLang
 */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (supportedLanguages.includes(maybeLang as Lang)) {
    return maybeLang as Lang;
  }
  return defaultLang;
}

/* ------------------------------------------------------------------ */
/*  Internals                                                          */
/* ------------------------------------------------------------------ */

function resolve(obj: Record<string, unknown> | undefined, path: string): unknown {
  if (!obj || !path) return obj;
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj);
}
