import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "bhoomika",
  description: "Personal portfolio showcasing my work and experience",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const htmlClassName = [inter.variable, montserrat.variable, "antialiased"].join(" ")

  return (
    <html lang="en" className={htmlClassName}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
