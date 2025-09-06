"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // Trigger slide-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200) // Delay for initial page load

    return () => clearTimeout(timer)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-6 z-50 hud-scanlines transition-all duration-1000 ease-out",
        scrolled ? "backdrop-blur-sm" : "",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className={cn("flex h-14 items-center justify-between rounded-xl px-4 transition-colors hud-panel")}>
          <Link href="/" className="font-mono tracking-widest uppercase text-[13px] hud-accent">
          </Link>
          <nav className="hidden gap-4 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">

          </div>
        </div>
        <nav id="mobile-nav" className="hidden flex-col gap-2 pb-3 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-xs text-muted-foreground hover:text-foreground hud-panel transition-colors"
              onClick={() => {
                const nav = document.getElementById("mobile-nav")
                if (nav) nav.classList.add("hidden")
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
