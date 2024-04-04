export default function RootLayout({ children, params: { locale } }) {
  return <html lang={locale}>{children}</html>;
}
