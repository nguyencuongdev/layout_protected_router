import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '../utils/locate';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  };
});
