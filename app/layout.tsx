import type React from "react"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
})

export const metadata = {
  title: "MegaPlus Running Club - Azərbaycanın Ən Böyük Qaçış İcması",
  description: "MegaPlus Running Club - Marafonlar, qaçış geyimləri və professional qaçış icması. Azərbaycanın bütün şəhərlərində marafonlar təşkil edirik.",
  keywords: "marafon, qaçış, running, marathon, MegaPlus, Azərbaycan, Bakı, qaçış geyimləri",
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
