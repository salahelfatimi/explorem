import "./globals.css"
export const metadata = {
  title: "Admin",
  description: "Panel Admin  ",
};
export default function RootLayout({ children }) {
    return (
      <html>
        <body className="bg-[#f5f5f5]">
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
  }