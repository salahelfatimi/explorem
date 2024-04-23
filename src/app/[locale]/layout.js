import { NextIntlClientProvider, useMessages } from "next-intl";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
export const metadata = {
  title: {default:"explorem", template:"%s - explorem"},
  description: "We Make A Difference , We Make It Happen .",
};

export default function LocaleLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex flex-col justify-between  h-screen">
              <Navbar locale={locale} />
              <div className="pt-20 lg:pt-24    mb-auto bg-[#f5f5f5]">{children}</div>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </main>
     
  );
}
