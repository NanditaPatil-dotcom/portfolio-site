"use client"

import { useEffect, useRef } from "react"

export function CinematicBackground() {
  const glowRef = useRef<HTMLDivElement | null>(null)
  const fog1Ref = useRef<HTMLDivElement | null>(null)
  const fog2Ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const w = window.innerWidth || 1
      const h = window.innerHeight || 1
      const nx = (e.clientX / w - 0.5) * 10
      const ny = (e.clientY / h - 0.5) * 10

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${nx * -0.6}px, ${ny * -0.6}px, 0)`
      }
      if (fog1Ref.current) {
        fog1Ref.current.style.transform = `translate3d(${nx * 0.8}px, ${ny * 0.8}px, 0)`
      }
      if (fog2Ref.current) {
        fog2Ref.current.style.transform = `translate3d(${nx * -1.1}px, ${ny * -1.1}px, 0)`
      }
    }

    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])


  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/fb/f8/fb/fbf8fb8d24f0c28e1b4438843b3e0784.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Neon gradient glow background */}
      <div
        ref={glowRef}
        className="absolute inset-0 cyber-bg"
        style={{ opacity: 0.35 }}
      />

      {/* Animated fog layers */}
      <div ref={fog1Ref} className="fog-layer fog-1" />
      <div ref={fog2Ref} className="fog-layer fog-2" />

      {/* Particles overlay */}
      <div className="absolute inset-0 stars opacity-30" />
    </div>
  )
}