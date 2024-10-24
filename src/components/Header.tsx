'use client';

import { Locale, locales, setUserLocale } from '@/utils';
import { useLocale } from 'next-intl';
import { ChangeEvent } from 'react';

function Header() {
  const locale = useLocale() ?? 'vn';

  const handleChangeLocale = (locale: string) => {
    setUserLocale(locale as Locale);
  };

  return (
    <header>
      <select onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChangeLocale(e.target.value)} value={locale}>
        {locales.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </header>
  );
}

export default Header;
