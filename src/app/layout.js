// i finich the project 
import "./globals.css";
export const metadata = {
  title: { template: "%s - Explorem" },
  description: "We Make A Difference , We Make It Happen .",
  metadataBase: new URL("https://www.explorem.net"),
  alternates: {
    canonical: "/en",
    languages: {
      de: "/de",
      ar: "/ar",
    },
    
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="U7WYTE5ZRtqvqaGCPKOfzh0eHWzM0E-XRhHeWvedXek" />
      </head>
      <body className="bg-[#f5f5f5] ">
        <main>{children}</main>
      </body>
    </html>
  );
}
