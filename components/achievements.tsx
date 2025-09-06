import Image from "next/image"
import { Section } from "./section"

const CERT = {
  title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  issuer: "Oracle",
  issued: "Issued: Aug 22, 2025",
  expires: "Expiration: Aug 22, 2027",
  image: "/images/oracle-cert.png",
  url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B588C489E8F97A3A0F04A93E0A4532C1022C1C2800445464200DD706F283B3E2",
}



export function Achievements({ delay = 0 }: { delay?: number }) {
  return (
    <Section id="achievements" title="Achievements & Certifications" delay={delay}>
      <br></br>
      <a
        href={CERT.url}
        target="_blank"
        rel="noreferrer"
        className="hud-panel rounded-2xl p-6 grid gap-6 md:grid-cols-[140px_1fr] hover:brightness-110 transition"
      >
        <div className="hud-media flex items-start justify-center rounded-xl">
          <Image
            src={CERT.image || "/placeholder.svg"}
            alt="Oracle AI Foundations Associate badge"
            width={140}
            height={140}
            className="rounded-lg object-contain"
          />
        </div>
        <div>
          <div className="font-mono uppercase tracking-wider hud-accent font-medium">{CERT.title}</div>
          <p className="text-sm text-muted-foreground">
            {CERT.issuer} • {CERT.issued} • {CERT.expires}
          </p>
        </div>
      </a>

    </Section>
  )
}
