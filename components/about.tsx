import Image from "next/image"
import { Section } from "./section"

export function About() {
  return (
    <Section id="about" title="About Me">
      <br></br>
      <div className="hud-panel rounded-2xl p-6 grid items-center gap-6 md:grid-cols-[140px_1fr]">
        <div className="hud-media flex items-center justify-center rounded-xl">
          <Image
            src="/images/profile.jpeg"
            alt="Profile photo of Nandita"
            width={140}
            height={140}
            className="rounded-lg object-cover"
          />
        </div>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          I’m an engineering student passionate about building thoughtful, user-friendly products. My toolkit spans C++,
          the MERN stack, AI/ML, and DSA. Outside of code, I enjoy art and exploring how people learn. I’m currently
          seeking internships, club roles, and opportunities where I can ship, learn, and grow.
        </p>
      </div>
    </Section>
  )
}
