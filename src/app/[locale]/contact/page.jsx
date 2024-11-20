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
    openGraph: {
      title: 'Contact Us for Recruitment & Training',
      description: "Contact Explorem SARL for recruitment, training, and career development services. We're here to assist you in achieving your career goals.",
      url: ['https://explorem.net/en/contact','https://explorem.net/ar/contact','https://explorem.net/de/contact'],
      siteName: "Explorem SARL",
      images: [
        {
          url: `/image/index/opengraph-image.jpg`,
          secureUrl: `/image/index/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Contact Us for Recruitment & Training`,
        }
      ],
      type: "website",
     
    },
  };
};

export default function Contact({ params: { locale } }) {

  return <div className="pt-[6rem]">
  <Contactform locale={locale}/>
  </div>;
}
