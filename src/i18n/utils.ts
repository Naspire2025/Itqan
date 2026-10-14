import { defaultLang, locales } from './content';
import type { Lang } from './content';

export const dirOf = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');
export const other = (lang: Lang): Lang => (lang === 'ar' ? 'en' : 'ar');

// Arabic (default) lives at the root, English under /en/.
export const localePath = (lang: Lang, page = '') =>
  `/${lang === defaultLang ? '' : `${lang}/`}${page ? `${page}/` : ''}`;

export const langFromParam = (param: string | undefined): Lang => (param as Lang) ?? defaultLang;

// For [...lang] routes: undefined → Arabic at root, 'en' → /en/.
export const langPaths = () =>
  locales.map((lang) => ({ params: { lang: lang === defaultLang ? undefined : lang } }));
