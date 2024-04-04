import "./globals.css"
export const metadata = {
  title: "Admin",
  description: "Panel Admin  ",
};
export default function RootLayout({ children }) {
    return (
      
          <main>{children}</main>
        
    )
  }