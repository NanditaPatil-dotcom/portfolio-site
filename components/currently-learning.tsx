import { Section } from "./section"
import { Badge } from "@/components/ui/badge"

const LEARNING = ["Machine Learning"]

export function CurrentlyLearning() {
  return (
    <Section id="learning" title="Currently Learning">
      <br></br>
      <div className="flex flex-wrap gap-2">
        {LEARNING.map((t) => (
          <Badge key={t} className="hud-badge">
            {t}
          </Badge>
        ))}
      </div>
    </Section>
  )
}
