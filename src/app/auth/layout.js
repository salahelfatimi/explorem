import "./globals.css"
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