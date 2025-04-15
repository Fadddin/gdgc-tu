import type React from "react"
import type { Metadata } from "next"
import { Inter, Alegreya_Sans as Google_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const googleSans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-google-sans",
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Google Developer Groups - Tezpur University",
  description: "Official website of Google Developer Groups Tezpur University chapter",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '8x8', type: 'image/png' },
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${googleSans.variable} font-sans bg-white select-none`}>
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'