
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.

export async function generateMetadata() {
  
  return {
    title: { default: "Explorem SARL", template: "%s - Explorem SARL" },
    description: "We Make A Difference, We Make It Happen.",
    
    images: [
      {
        url: `https://explorem.net/opengraph-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        url: `https://explorem.net/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Explorem SARL",
      },
    ],
    locale: "en",
    type: "website ",
  };
}


export default function RootLayout({children}) {
  return children;
}