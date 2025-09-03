"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Section } from "./section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }
    try {
      setStatus("sending")
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <Section id="contact" title="Contact">
      <br></br>
      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-4 hud-panel p-5 rounded-2xl">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} required />
          </div>
          <Button type="submit" disabled={status === "sending"} className="rounded-md px-4 hud-button">
            {status === "sending" ? "Sending…" : "Send"}
          </Button>
          {/* Keep palette limited: use muted/foreground instead of extra colors */}
          {status === "sent" && <p className="text-sm text-foreground">Thanks! I’ll get back to you soon.</p>}
          {status === "error" && (
            <p className="text-sm text-muted-foreground">Something went wrong. Please try again.</p>
          )}
        </form>
        <div className="space-y-3 hud-panel p-5 rounded-2xl">
          <p className="text-sm text-muted-foreground">Prefer email or social?</p>
          <div className="grid gap-3 sm:grid-cols-4">
            <a
              href="mailto:nanditanpatil14@gmail.com"
              className="group hud-panel rounded-2xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition"
            >
              <div className="relative h-16 w-16">
                <Image
                  src="https://i.pinimg.com/736x/05/48/c8/0548c8470dfd73141ff77559c20c88e6.jpg"
                  alt="Email"
                  fill
                  className="rounded-full object-cover border-2 glow-avatar"
                  style={{ borderColor: "var(--hud-amber)" }}
                  sizes="64px"
                />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider hud-accent">Email</span>
            </a>

            <a
              href="https://github.com/NanditaPatil-dotcom"
              target="_blank"
              rel="noreferrer"
              className="group hud-panel rounded-2xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition"
            >
              <div className="relative h-16 w-16">
                <Image
                  src="https://i.pinimg.com/1200x/33/b9/92/33b9922d67cae5108170659266aaa099.jpg"
                  alt="GitHub"
                  fill
                  className="rounded-full object-cover border-2 glow-avatar"
                  style={{ borderColor: "var(--hud-amber)" }}
                  sizes="64px"
                />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider hud-accent">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nandita-n-patil-3a8b0632a"
              target="_blank"
              rel="noreferrer"
              className="group hud-panel rounded-2xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition"
            >
              <div className="relative h-16 w-16">
                <Image
                  src="https://i.pinimg.com/1200x/54/06/a8/5406a866d98d11e1f288db49710be550.jpg"
                  alt="LinkedIn"
                  fill
                  className="rounded-full object-cover border-2 glow-avatar"
                  style={{ borderColor: "var(--hud-amber)" }}
                  sizes="64px"
                />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider hud-accent">LinkedIn</span>
            </a>

            <a
              href="https://leetcode.com/u/Nandita_Patil/"
              target="_blank"
              rel="noreferrer"
              className="group hud-panel rounded-2xl p-3 flex flex-col items-center gap-2 text-center hover:brightness-110 transition"
            >
              <div className="relative h-16 w-16">
                <Image
                  src="https://i.pinimg.com/1200x/8a/59/48/8a59482bd63beaf37e0fd7b35989859a.jpg"
                  alt="LeetCode"
                  fill
                  className="rounded-full object-cover border-2 glow-avatar"
                  style={{ borderColor: "var(--hud-amber)" }}
                  sizes="64px"
                />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider hud-accent">LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
