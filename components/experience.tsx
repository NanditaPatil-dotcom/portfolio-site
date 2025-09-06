import { Section } from "./section"

type Item = { role: string; org: string; time: string; notes: string }

const EXPERIENCE: Item[] = []

export function Experience({ delay = 0 }: { delay?: number }) {
  return (
    <Section id="experience" title="Experience" delay={delay}>
      <br></br>
      {EXPERIENCE.length === 0 ? (
        <div className="hud-panel rounded-2xl p-6 text-sm text-muted-foreground">
          Experience details coming soon. Check back later!
        </div>
      ) : (
        <ul className="space-y-4">
          {EXPERIENCE.map((e) => (
            <li key={e.role} className="hud-panel rounded-2xl p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-mono uppercase tracking-wider hud-accent font-medium">{e.role}</div>
                <div className="text-xs text-muted-foreground">{e.time}</div>
              </div>
              <div className="text-sm text-muted-foreground">{e.org}</div>
              <p className="mt-2 text-sm">{e.notes}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
