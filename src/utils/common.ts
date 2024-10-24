export type Locale = (typeof locales)[number];

export const locales = ['vn', 'en'] as const;
export const defaultLocale: Locale = 'vn';

export const COOKIE_NAME = 'NEXT_LOCALE';
