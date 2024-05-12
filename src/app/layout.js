
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.

export async function generateMetadata() {
  
  return {
    title: { default: "Explorem SARL", template: "%s - Explorem SARL" },
    description: "We Make A Difference, We Make It Happen.",
    metadataBase: new URL('https://explorem.net'),
    alternates: {
      canonical: "/en",
      languages: {
        de: "/de",
        ar: "/ar",
      },
      
    },
  
  };
}


export default function RootLayout({children}) {
  return children;
}