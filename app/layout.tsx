import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CinematicBackground } from "@/components/cinematic-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  generator: "Nandita",
}

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans scroll-smooth hud-grid relative text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CinematicBackground />
          <div className="min-h-dvh relative hud-scanlines">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
