import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { getMessages} from "next-intl/server";
import { Suspense } from "react";
import Loading from "./loading";
import { Wrapper } from "@/app/[locale]/components/wrapper";


export async function generateMetadata() {
  return {
    title: { default: "Explorem SARL", template: "%s - Explorem SARL" },
    description: "We Make A Difference, We Make It Happen.",
    metadataBase: new URL(  `https://www.explorem.net`),
    alternates: {
      canonical: "/en",
      languages: {
        de: "/de",
        ar: "/ar",
      },
      
    },
    images: [
      {
        url: `https://www.explorem.net/opengraph-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        url: `https://www.explorem.net/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Explorem SARL",
      },
    ],
    locale: "en",
    type: "website ",
  };
}

export default async  function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  

  return (
    <html  lang={locale} className=" !scroll-smooth">
      <Wrapper/>
      <body className="bg-[#f5f5f5]  scrollbar scrollbar-thumb-[#134ba1]  " >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <main className="flex flex-col h-screen justify-between ">
              <Navbar locale={locale} />
              
              <Suspense fallback={<Loading />}><div className=" ">{children}</div></Suspense>
              <Footer locale={locale}/>
        </main>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}