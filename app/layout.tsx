import { Geist, Geist_Mono, Noto_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/Footer/Footer";
import { Navbar } from "@/components/shared/Navbar/Navbar";

const notoSerif = Noto_Serif({subsets:['latin'],variable:'--font-serif'});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable, "font-serif", notoSerif.variable)}
    >
    
      <body>
        {/* <ThemeProvider></ThemeProvider> */}
        <main>
          <Navbar />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
