
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.

export const metadata = {

    metadataBase: new URL('https://explorem.net'),
    
   

    
  };



export default function RootLayout({children}) {
  return children;
}