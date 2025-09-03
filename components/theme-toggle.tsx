"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

export function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = (resolvedTheme || theme) === "dark"

  return (
    <div className="flex items-center gap-2">
      <Switch
        id="dark-mode"
        checked={isDark}
        onCheckedChange={(v) => setTheme(v ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Label htmlFor="dark-mode" className="text-xs text-muted-foreground">
        Dark
      </Label>
    </div>
  )
}
