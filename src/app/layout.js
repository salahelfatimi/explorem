import "./globals.css";
export const metadata = {
  title: {default:"explorem", template:"%s - explorem"},
  description: "We Make A Difference , We Make It Happen .",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5] ">
        <main>{children}</main>
      </body>
    </html>
  );
}
