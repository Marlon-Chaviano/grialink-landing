export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const supportedLanguages = Object.keys(languages) as Lang[];

/** Get the base path for a given language */
export function langPath(lang: Lang): string {
  return `/${lang}`;
}

/** Get full href for a path in a given language */
export function localizedHref(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean === '/' ? '' : clean}`;
}
