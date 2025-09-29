import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tote-Ally Green - Túi Vải Thân Thiện Môi Trường",
  description:
    "Một chiếc túi ngăn hành động xanh. Cùng chúng tôi bảo vệ môi trường với những chiếc túi vải thân thiện.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
