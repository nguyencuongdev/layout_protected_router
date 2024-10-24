import { AuthLayout } from '@/layouts/AuthLayout';

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout>{children}</AuthLayout>;
}

export default Layout;
