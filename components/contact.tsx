"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Section } from "./section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Contact({ delay = 0 }: { delay?: number }) {
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
    <Section id="contact" title="Contact" delay={delay}>
      <br></br>
      <div className="max-w-md">
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
          <Button type="submit" disabled={status === "sending"} className="rounded-md px-4 hud-button no-glow-button">
            {status === "sending" ? "Sending…" : "Send"}
          </Button>
          {/* Keep palette limited: use muted/foreground instead of extra colors */}
          {status === "sent" && <p className="text-sm text-foreground">Thanks! I'll get back to you soon.</p>}
          {status === "error" && (
            <p className="text-sm text-muted-foreground">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </Section>
  )
}
