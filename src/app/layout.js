// i finich the project 
import { cookies } from "next/headers";
import "./globals.css";
export const metadata = {
  title: { template: "%s - Explorem" },
  description: "We Make A Difference , We Make It Happen .",
  metadataBase: new URL("https://www.explorem.net"),
  alternates: {
    canonical: "/en",
    languages: {
      de: "/de",
      ar: "/ar",
    },
    
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};
export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const locale = await cookieStore.get('NEXT_LOCALE')
  console.log(locale)

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
