import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { getMessages} from "next-intl/server";
import { Suspense } from "react";
import Loading from "./loading";
import { GoogleAnalytics } from '@next/third-parties/google'
export async function generateMetadata({params: {locale}}) {
  return {
    title: { default: "Explorem SARL", template: "%s - Explorem SARL" },
    description: "We Make A Difference, We Make It Happen.",
    keywords: ['explore m','explorem','centre de formation','centre de formation marrakech	','center', 'center of learning', 'center of learning german','german','center','study','ausbildung in german','ausbildung','lungage german'],
    robots: {
      index: true,
      follow: true,
    },

    images: [
      {
        url: `./opengraph-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        url: `./opengraph-image.jpg`,
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
    <html  lang={locale} >
      
      <head>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID}/>
      </head>
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