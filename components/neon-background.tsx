"use client"

export function NeonBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#0b1023",
          backgroundImage: [
            "radial-gradient(1200px 600px at 85% -10%, rgba(99,102,241,0.35), rgba(99,102,241,0) 60%)",
            "radial-gradient(800px 500px at 10% 20%, rgba(219,39,119,0.35), rgba(219,39,119,0) 60%)",
            "radial-gradient(900px 600px at 20% 100%, rgba(34,211,238,0.35), rgba(34,211,238,0) 60%)",
          ].join(", "),
        }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage: [
            "radial-gradient(2px 2px at 20px 40px, rgba(255,255,255,.30), transparent 2px)",
            "radial-gradient(1.5px 1.5px at 140px 120px, rgba(255,255,255,.22), transparent 2px)",
            "radial-gradient(1px 1px at 60px 200px, rgba(255,255,255,.18), transparent 2px)",
          ].join(", "),
          backgroundSize: "200px 200px, 300px 300px, 250px 250px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(1200px 800px at 50% -10%, rgba(255,255,255,0.08), rgba(255,255,255,0) 60%)",
          maskImage: "radial-gradient(1200px 800px at 50% -10%, rgba(0,0,0,1), rgba(0,0,0,0) 65%)",
          WebkitMaskImage: "radial-gradient(1200px 800px at 50% -10%, rgba(0,0,0,1), rgba(0,0,0,0) 65%)",
        }}
      />
    </div>
  )
}
