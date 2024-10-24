import React from 'react';
import { DefaultLayout } from '@/layouts/DefaultLayout';

function Layout({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode {
  return (
    <DefaultLayout>
      Nội dung trang CMS
      {children}
    </DefaultLayout>
  );
}

export default Layout;
