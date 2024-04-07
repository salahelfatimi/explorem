import { Providers } from "./providers";
import "./globals.css"
export const metadata = {
  title: "explorem",
  description: "Panel Admin  ",
};
export default function RootLayout({ children }) {
    return (
      
          <Providers>{children}</Providers>
        
    )
  }