import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LayoutWrapper } from "@/components/layout-wrapper"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-family-brand",
})

export const metadata: Metadata = {
  title: "shadcn/ui Components",
  description: "Component showcase for shadcn/ui",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-[var(--font-family-brand)]`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
