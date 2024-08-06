import Contactform from "./forma/contact";

export async function generateMetadata() {
  return {
    title: "Contact Us | Get in Touch for Recruitment and Training Services",
    description: "Contact Explorem SARL for reliable recruitment, training, and career development services. Get in touch with our team for any inquiries or assistance. We're here to help you achieve your career goals. ",
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

  return <>
  <Contactform locale={locale}/>
  </>;
}
