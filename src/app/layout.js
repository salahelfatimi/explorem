import "./globals.css";
export const metadata = {
  title: "explorem",
  description: "explorem website",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-[#f5f5f5] ">
        <main>{children}</main>
      </body>
    </html>
  );
}
