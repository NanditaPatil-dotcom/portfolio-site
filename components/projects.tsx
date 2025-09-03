import Image from "next/image"
import { Section } from "./section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  desc: string
  image: string
  tags: string[]
  github?: string
  website?: string
}

const PROJECTS: Project[] = [
  {
    title: "Lumine",
    desc: "Study repetition website",
    image: "https://i.pinimg.com/1200x/8e/3c/4e/8e3c4e858347d55dcd8a6676f1f94574.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "Fullstack"],
    github: "https://github.com/NanditaPatil-dotcom/Lumine",
  },
  {
    title: "Zenthomes",
    desc: "Property listings platform",
    image: "https://i.pinimg.com/1200x/90/5d/75/905d75ddceb4fd24a3f3618d9e55405f.jpg",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/NanditaPatil-dotcom/Zenthomes",
    website: "https://zenthomes.onrender.com/listings",
  },
]

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <br></br>
      {PROJECTS.length === 0 ? (
        <div className="neon-card rounded-2xl border p-6 text-sm">
          <p className="text-muted-foreground">Projects are coming soon. Meanwhile, explore my GitHub:</p>
          <a
            href="https://github.com/NanditaPatil-dotcom"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-full px-4 py-2 btn-neon neon-glow"
          >
            Visit GitHub
          </a>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <Card
              key={p.title}
              className="overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg cyber-card spotlight"
            >
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="block group">
                  <div className="relative h-44 w-full overflow-hidden rounded-lg mb-3 md:mb-4">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={`${p.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <CardHeader className="mt-3 md:mt-4">
                    <CardTitle className="text-lg font-mono uppercase tracking-wider neon-subtitle">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} className="cyber-badge">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </a>
              ) : (
                <>
                  <div className="relative h-44 w-full overflow-hidden rounded-lg mb-3 md:mb-4">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={`${p.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <CardHeader className="mt-3 md:mt-4">
                    <CardTitle className="text-lg font-mono uppercase tracking-wider neon-subtitle">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} className="cyber-badge">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </>
              )}
              <CardFooter className="flex gap-2 flex-wrap">
                {p.website && (
                  <a href={p.website} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="glow-button">Visit the website</Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </Section>
  )
}

/* HUD styling: tags use .hud-badge utility */
