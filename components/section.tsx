import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-5xl px-4 py-14 scroll-mt-24", className)}>
      <h2 className="neon-title text-2xl md:text-3xl">{title}</h2>
      {children}
    </section>
  )
}
