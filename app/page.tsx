import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
/* removed: Timeline import */
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Achievements } from "@/components/achievements"
import { CurrentlyLearning } from "@/components/currently-learning"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      {/* Timeline removed */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <CurrentlyLearning />
      <Contact />
      {/* </CHANGE> */}
      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nandita. All rights reserved.
      </footer>
    </main>
  )
}
