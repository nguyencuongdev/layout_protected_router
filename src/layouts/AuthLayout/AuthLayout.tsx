function AuthLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <div>
      <header>Logo page</header>
      <main>{children}</main>
    </div>
  );
}

export default AuthLayout;
