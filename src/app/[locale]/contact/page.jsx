

import Contactform from "./forma/contact";

export const metadata = {
  title: "Contact",
  
};
export default function Contact({ params: { locale } }) {

  return <>
  <Contactform locale={locale}/>
  </>;
}
