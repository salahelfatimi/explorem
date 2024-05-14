import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { getMessages} from "next-intl/server";
import { Suspense } from "react";
import Loading from "./loading";
export default async  function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  

  return (
    <html  lang={locale} className=" !scroll-smooth">
      <head>
          <meta property="og:url" content="https://explorem.net"/>
      </head>
      <body className="bg-[#f5f5f5]  scrollbar scrollbar-thumb-[#134ba1]  " >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="flex flex-col h-screen justify-between ">
            <Navbar locale={locale} />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer locale={locale}/>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}