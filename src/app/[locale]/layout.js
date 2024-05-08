import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
export const metadata = {
  title: { default: "Explorem", template: "%s - Explorem" },
  description: "We Make A Difference, We Make It Happen.",
  metadataBase: new URL("https://www.explorem.net/en/"),
  alternates: {
    canonical: "/en",
    languages: {
      de: "/de",
      ar: "/ar",
    },
    
  },
  openGraph: {
    url: "https://www.explorem.net/en/",
    siteName: "Explorem",
    images: [
      {
        url: "https://www.explorem.net/en/opengraph-image.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://www.explorem.net/en/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Explorem",
      },
    ],
    locale: "en",
    type: "website",
  },
};
export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex flex-col justify-between  h-screen">
              <Navbar locale={locale} />
              <div className="pt-20 lg:pt-24    mb-auto bg-[#f5f5f5]">{children}</div>
              <Footer locale={locale}/>
            </div>
          </NextIntlClientProvider>
        </main>
     
  );
}
