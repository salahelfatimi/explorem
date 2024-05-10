

import Contactform from "./forma/contact";

export const metadata = {
  title: "Contact",
  description: "Get In Touch with Explorem  "
};
export default function Contact({ params: { locale } }) {

  return <>
  <Contactform locale={locale}/>
  </>;
}
