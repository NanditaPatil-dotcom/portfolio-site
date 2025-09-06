"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Section({
  id,
  title,
  children,
  className,
  delay = 0,
}: {
  id: string
  title: string
  children: ReactNode
  className?: string
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 600 + delay) // Base delay + custom delay

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <section 
      id={id} 
      className={cn(
        "mx-auto max-w-5xl px-6 py-14 scroll-mt-24 ml-35 transition-all duration-1000 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
        className
      )}
    >
      <h2 className="neon-title text-2xl md:text-3xl">{title}</h2>
      {children}
    </section>
  )
}
