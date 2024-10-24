'use server';

import { cookies } from 'next/headers';
import { COOKIE_NAME, defaultLocale, Locale } from './common';

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
