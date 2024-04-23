import "./globals.css";
export const metadata = {
  title: {default:"explorem", template:"%s - explorem"},
  description: "We Make A Difference , We Make It Happen .",
  metadataBase: new URL('https://www.explorem.net'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'de': '/de',
      'ar': '/ar',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5] ">
        <main>{children}</main>
      </body>
    </html>
  );
}
