import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";
import { sendWelcomeEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, email, profession, consent, source, website } = body as Record<string, unknown>;

  // honeypot: si el campo oculto viene lleno, es un bot. Respondemos 200 sin guardar.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true, stored: false });
  }

  if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  await saveLead({
    name: cleanName,
    email: cleanEmail,
    profession: typeof profession === "string" ? profession.trim() : undefined,
    source: typeof source === "string" ? source : "unknown",
    consent: true,
    createdAt: new Date().toISOString(),
  });

  const welcomed = await sendWelcomeEmail({ name: cleanName, email: cleanEmail }).catch(() => false);

  return NextResponse.json({ ok: true, stored: true, welcomed });
}
