import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CinematicBackground } from "@/components/cinematic-background"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  generator: "Nandita",
  icons: {
    icon: "https://i.pinimg.com/1200x/0c/d1/14/0cd114f2a6f4e92a1d08dccdcda8b410.jpg",
    shortcut: "https://i.pinimg.com/1200x/0c/d1/14/0cd114f2a6f4e92a1d08dccdcda8b410.jpg",
    apple: "https://i.pinimg.com/1200x/0c/d1/14/0cd114f2a6f4e92a1d08dccdcda8b410.jpg",
  },
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

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} antialiased`} suppressHydrationWarning>
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
