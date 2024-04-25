// i finich the project 
import { cookies } from "next/headers";
import "./globals.css";
export const metadata = {
 
  metadataBase: new URL("https://www.explorem.net"),
  alternates: {
    canonical: "/en",
    languages: {
      de: "/de",
      ar: "/ar",
    },
    
  },
  openGraph: {
   
    description: 'We Make A Difference , We Make It Happen .',
    url: 'https://www.explorem.net/en',
    siteName: 'Explorem',
    images: [
      {
        url: 'en/opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: 'en/opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'Explorem',
      },
    ],
    locale:[ "de", "ar"],
    type: 'website',
  },
};
export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const locale = await cookieStore.get('NEXT_LOCALE')

  return (
    <html lang={locale.value}>
      <head>
      <meta name="google-site-verification" content="U7WYTE5ZRtqvqaGCPKOfzh0eHWzM0E-XRhHeWvedXek" />
      </head>
      <body className="bg-[#f5f5f5] ">
        <main>{children}</main>
      </body>
    </html>
  );
}
