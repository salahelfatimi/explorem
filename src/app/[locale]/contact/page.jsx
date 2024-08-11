import Contactform from "./forma/contact";

export async function generateMetadata() {
  return {
    title: "Contact Us for Recruitment & Training",
    description: "Contact Explorem SARL for recruitment, training, and career development services. We're here to assist you in achieving your career goals.",
    keywords: ['Explorem SARL, contact us, recruitment services, training services, career development, get in touch, inquiries, assistance, HR solutions, career support'],
    alternates: {
      canonical: "/en/contact",
      languages: {
        de: "/de/contact",
        ar: "/ar/contact",
      },
      
    },
  };
};

export default function Contact({ params: { locale } }) {

  return <div className="pt-[6rem]">
  <Contactform locale={locale}/>
  </div>;
}
