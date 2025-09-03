"use client"

// Subtle animated grid background using pure CSS
export function Hero() {
  return (
    <section className="relative overflow-hidden hud-scanlines" aria-labelledby="intro">
      {/* neon gradient hero with stars overlay and pill CTA */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 stars" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-20">
        <h1 id="intro" className="neon-title text-balance text-4xl md:text-6xl">Hello, Nandita here.</h1>
        <p className="mt-2 neon-subtitle text-sm md:text-base">Engineer • Coder • Creator</p>
        <p className="mt-4 max-w-2xl text-pretty text-muted-foreground md:text-lg">
          I build clean, performant interfaces and love solving problems with C++, MERN, and AI/ML. Exploring systems,
          art, and the joy of learning.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-md px-4 py-2 glow-button">
            View Projects
          </a>
          <a href="#contact" className="rounded-md px-4 py-2 glow-button">
            Contact Me
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-22px);
          }
        }
        .stars {
          background-image: radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.5) 50%, transparent 51%),
            radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.5) 50%, transparent 51%),
            radial-gradient(1px 1px at 80% 40%, rgba(255, 255, 255, 0.5) 50%, transparent 51%),
            radial-gradient(2px 2px at 60% 20%, rgba(255, 255, 255, 0.35) 50%, transparent 51%),
            radial-gradient(2px 2px at 75% 85%, rgba(255, 255, 255, 0.35) 50%, transparent 51%);
          background-repeat: no-repeat;
        }
        @media (prefers-reduced-motion: reduce) {
          div[aria-hidden='true'] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}
