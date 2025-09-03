"use client"

import Image from "next/image"
import { Section } from "./section"

type Milestone = {
  title: string
  period: string
  desc: string
  tag: string
  image?: string
}

const MILESTONES: Milestone[] = [
  {
    title: "C++ Foundations",
    period: "2023",
    desc: "Mastered STL, OOP, and problem‑solving patterns.",
    tag: "Skills",
    image: "/placeholder.jpg",
  },
  {
    title: "MERN Stack",
    period: "2024",
    desc: "Built fullstack apps with MongoDB, Express, React, and Node.",
    tag: "Skills",
    image: "/placeholder.jpg",
  },
  {
    title: "Lumine",
    period: "2024",
    desc: "Study repetition website. Next.js + TypeScript + Tailwind.",
    tag: "Project",
    image:
      "https://i.pinimg.com/1200x/8e/3c/4e/8e3c4e858347d55dcd8a6676f1f94574.jpg",
  },
  {
    title: "Zenthomes",
    period: "2025",
    desc: "Property listings platform. Node.js + Express + MongoDB.",
    tag: "Project",
    image:
      "https://i.pinimg.com/1200x/90/5d/75/905d75ddceb4fd24a3f3618d9e55405f.jpg",
  },
  {
    title: "Oracle AI Foundations",
    period: "2025",
    desc: "OCI 2025 Certified AI Foundations Associate.",
    tag: "Achievement",
    image: "/images/oracle-cert.png",
  },
]

export function Timeline() {
  return (
    <Section id="timeline" title="Timeline">
      <div className="relative">
        {/* Rail */}
        <div className="timeline-rail absolute left-0 right-0 top-7 hidden md:block" />
        {/* Cards */}
        <div className="parallax grid gap-4 overflow-x-auto snap-x snap-mandatory md:grid-cols-4 md:overflow-visible">
          {MILESTONES.map((m, idx) => (
            <article
              key={m.title + idx}
              className="group snap-start min-w-[260px] md:min-w-0 cyber-card parallax-item p-4"
            >
              <header className="flex items-center justify-between">
                <span className="cyber-badge">{m.tag}</span>
                <span className="text-xs text-muted-foreground">{m.period}</span>
              </header>

              {m.image && (
                <div className="relative mt-3 h-36 w-full overflow-hidden rounded-lg">
                  <Image
                    src={m.image}
                    alt={m.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width:768px) 25vw, 80vw"
                  />
                </div>
              )}

              <h3 className="mt-3 font-mono uppercase tracking-wider text-sm text-neon">
                {m.title}
              </h3>

              <p className="mt-2 max-h-12 overflow-hidden text-sm text-muted-foreground transition-[max-height] duration-500 ease-in-out group-hover:max-h-32">
                {m.desc}
              </p>

              {/* Dot for the rail on desktop */}
              <div className="hidden md:block">
                <div className="timeline-dot mx-auto mt-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}