'use client';

import { locales } from '@/utils';
import { useLocale } from 'next-intl';
import { ChangeEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';

function Header() {
  const locale = useLocale() ?? 'vn';
  const router = useRouter();
  const pathName = usePathname();

  const handleChangeLocale = (locale: string) => {
    router.replace(`/${locale}/${pathName.slice(4, pathName.length)}`);
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
