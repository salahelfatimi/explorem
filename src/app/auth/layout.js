import "./globals.css"
export const metadata = {
  title: "Admin",
  description: "Panel Admin  ",
};
export default function RootLayout({ children }) {
    return (
      <html>
        <body>
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
  }