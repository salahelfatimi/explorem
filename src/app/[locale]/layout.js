import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { getMessages} from "next-intl/server";
import { Suspense } from "react";
import Loading from "./loading";




export async function generateMetadata({params: {locale}}) {
  return {
    title: { default: "Explorem SARL", template: "%s - Explorem SARL" },
    description: "We Make A Difference, We Make It Happen.",
    metadataBase: new URL(  `https://www.explorem.net/${locale}`),
    alternates: {
      canonical: "/en",
      languages: {
        de: "/de",
        ar: "/ar",
      },
      
    },
    images: [
      {
        url: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        url: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Explorem",
      },
    ],
  };
}

export default async  function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <html className="" lang={locale}>
      <body className="bg-[#f5f5f5]" >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <main className="flex flex-col h-screen justify-between ">
              <Navbar locale={locale} />
              
              <Suspense fallback={<Loading />}><div className=" pt-20 lg:pt-28 ">{children}</div></Suspense>
              <Footer locale={locale}/>
        </main>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}