"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500) // Delay for initial page load

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className={`fixed right-6 top-40 z-40 transition-all duration-1000 ease-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground text-center mb-2">
          Connect
        </p>
        
        <a
          href="mailto:nanditanpatil14@gmail.com"
          className="group hud-panel rounded-xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition-all hover:scale-105"
        >
          <div className="relative h-12 w-12">
            <Image
              src="https://i.pinimg.com/736x/05/48/c8/0548c8470dfd73141ff77559c20c88e6.jpg"
              alt="Email"
              fill
              className="rounded-full object-cover border-2 glow-avatar"
              style={{ borderColor: "var(--hud-amber)" }}
              sizes="48px"
            />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider hud-accent">Email</span>
        </a>

        <a
          href="https://github.com/NanditaPatil-dotcom"
          target="_blank"
          rel="noreferrer"
          className="group hud-panel rounded-xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition-all hover:scale-105"
        >
          <div className="relative h-12 w-12">
            <Image
              src="https://i.pinimg.com/1200x/33/b9/92/33b9922d67cae5108170659266aaa099.jpg"
              alt="GitHub"
              fill
              className="rounded-full object-cover border-2 glow-avatar"
              style={{ borderColor: "var(--hud-amber)" }}
              sizes="48px"
            />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider hud-accent">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nandita-n-patil-3a8b0632a"
          target="_blank"
          rel="noreferrer"
          className="group hud-panel rounded-xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition-all hover:scale-105"
        >
          <div className="relative h-12 w-12">
            <Image
              src="https://i.pinimg.com/1200x/54/06/a8/5406a866d98d11e1f288db49710be550.jpg"
              alt="LinkedIn"
              fill
              className="rounded-full object-cover border-2 glow-avatar"
              style={{ borderColor: "var(--hud-amber)" }}
              sizes="48px"
            />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider hud-accent">LinkedIn</span>
        </a>

        <a
          href="https://leetcode.com/u/Nandita_Patil/"
          target="_blank"
          rel="noreferrer"
          className="group hud-panel rounded-xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition-all hover:scale-105"
        >
          <div className="relative h-12 w-12">
            <Image
              src="https://i.pinimg.com/1200x/8a/59/48/8a59482bd63beaf37e0fd7b35989859a.jpg"
              alt="LeetCode"
              fill
              className="rounded-full object-cover border-2 glow-avatar"
              style={{ borderColor: "var(--hud-amber)" }}
              sizes="48px"
            />
          </div>
          <span className="text-xs font-mono uppercase tracking-wider hud-accent">LeetCode</span>
        </a>
      </div>
    </div>
  )
}
