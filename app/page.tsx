import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { SocialSidebar } from "@/components/social-sidebar"
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
      <SocialSidebar />
      {/* Timeline removed */}
      <About delay={0} />
      <Skills delay={200} />
      <Projects delay={400} />
      <Experience delay={600} />
      <Achievements delay={800} />
      <CurrentlyLearning delay={1000} />
      <Contact delay={1200} />
      {/* </CHANGE> */}
      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nandita. All rights reserved.
      </footer>
    </main>
  )
}
