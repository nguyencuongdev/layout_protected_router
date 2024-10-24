function DefaultLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

export default DefaultLayout;
