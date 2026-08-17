import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !EMAIL_RE.test(email) ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  // Almacenamiento simulado (mismo store de leads, source "contacto").
  // El campo profession se reutiliza para guardar el mensaje.
  await saveLead({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    profession: message.trim(),
    source: "contacto",
    consent: true,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
