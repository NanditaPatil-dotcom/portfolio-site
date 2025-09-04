import { Section } from "./section"
/* Badge removed; rendering as panels instead */

const LEARNING = ["Machine Learning"]

export function CurrentlyLearning() {
  return (
    <Section id="learning" title="Currently Learning">
      <br></br>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {LEARNING.map((t) => (
          <div key={t} className="hud-panel no-glow-panel bronze-outline rounded-2xl p-4">
            <div className="font-mono uppercase tracking-wider">{t}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
