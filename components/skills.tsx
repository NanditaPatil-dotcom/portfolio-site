import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SKILLS = [
  { title: "C++", desc: "STL, OOP, performance-minded" },
  { title: "MERN", desc: "MongoDB, Express, React, Node" },
  { title: "AI/ML", desc: "Python, basics of models & pipelines" },
  { title: "DSA", desc: "Data structures, algorithms, patterns" },
]

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <br></br>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {SKILLS.map((s) => (
          <Card key={s.title} className="transition-all hover:-translate-y-0.5 hud-panel no-glow-panel">
            <CardHeader>
              <CardTitle className="text-base font-mono uppercase tracking-wider hud-accent">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
