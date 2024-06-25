import Contactform from "./forma/contact";

export async function generateMetadata() {
  return {
    title: "Contact",
    description: "Get In Touch with Explorem  ",
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
