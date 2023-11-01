import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils/shadcn-utils"
import "./globals.css"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Lift Tracker",
  description: "Track you weight lifting progress",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>{children}</body>
    </html>
  )
}
