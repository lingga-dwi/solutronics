import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Solutronics 3D Printing",
  description: "Solutronics — Jasa 3D Printing: harga transparan, kalkulator, upload file, dan konsultasi WhatsApp.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="antialiased">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
