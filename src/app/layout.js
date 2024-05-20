
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.

export async function generateMetadata() {
  
  return {
    title: { default: "Explorem SARL", template: "%s - Explorem SARL" },
    description: "We Make A Difference, We Make It Happen.",
    metadataBase: new URL('https://explorem.net'),

    alternates: {
      canonical: "/en/",
      languages: {
        de: "/de/",
        ar: "/ar/",
      },
      
    },

    images: [
      {
        url: `./opengraph-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        url: `./opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Explorem SARL",
      },
    ],
    twitter: {
      card: "summary_large_image",
      title: "Explorem",
      description: "We Make A Difference, We Make It Happen. ",
      creator: 'Explorem',
      images: [
        {
          url: "./opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Explorem",
        },
      ],
    },
    locale: "en",
    type: "website ",
  };
}


export default function RootLayout({children}) {
  return children;
}