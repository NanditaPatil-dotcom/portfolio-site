import nodemailer from "nodemailer"

export const runtime = "nodejs"

type Payload = {
  name: string
  email: string
  message: string
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>
    const name = (body.name || "").toString().trim()
    const email = (body.email || "").toString().trim()
    const message = (body.message || "").toString().trim()

    if (!name || !email || !message || !isValidEmail(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid input" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.NOTIFY_EMAIL || user

    if (!user || !pass || !to) {
      console.error("[contact] Missing SMTP env vars. Required: SMTP_USER, SMTP_PASS, NOTIFY_EMAIL (or use SMTP_USER)")
      return new Response(JSON.stringify({ ok: false, error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    })

    const subject = `Portfolio Contact: ${name}`
    const html = `
      <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6; color:#e5e7eb; background:#0b0b15; padding:24px">
        <h2 style="margin:0 0 8px; color:#a78bfa">New contact form submission</h2>
        <p style="margin:0 0 16px; color:#93c5fd"><strong>From:</strong> ${name} <${email}></p>
        <div style="padding:16px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:12px; white-space:pre-wrap">${message}</div>
      </div>
    `

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      subject,
      html,
      replyTo: email,
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("[contact] error:", err)
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
