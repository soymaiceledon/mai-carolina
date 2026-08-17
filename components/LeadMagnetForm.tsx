"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "loading" | "error";

export function LeadMagnetForm({ source = "recurso-gratis" }: { source?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const profession = String(data.get("profession") ?? "").trim();
    const consent = data.get("consent") === "on";

    if (!name || !email) {
      setError("Nombre y correo son obligatorios.");
      return;
    }
    if (!consent) {
      setError("Necesito tu consentimiento para poder escribirte.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, profession, consent, source }),
      });
      if (!res.ok) throw new Error("request_failed");
      router.push("/gracias");
    } catch {
      setStatus("error");
      setError("Algo falló al enviar el formulario. Intenta de nuevo en unos segundos.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gris-claro">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="focus-ring w-full border border-dorado/25 bg-transparent px-4 py-3 text-marfil placeholder:text-gris/60"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gris-claro">
          Correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="focus-ring w-full border border-dorado/25 bg-transparent px-4 py-3 text-marfil placeholder:text-gris/60"
          placeholder="tucorreo@email.com"
        />
      </div>

      <div>
        <label htmlFor="profession" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gris-claro">
          Profesión o negocio
        </label>
        <input
          id="profession"
          name="profession"
          type="text"
          autoComplete="organization-title"
          className="focus-ring w-full border border-dorado/25 bg-transparent px-4 py-3 text-marfil placeholder:text-gris/60"
          placeholder="¿A qué te dedicas?"
        />
      </div>

      {/* honeypot anti-spam */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="flex items-start gap-3 text-xs text-gris">
        <input type="checkbox" name="consent" required className="focus-ring mt-0.5 h-4 w-4 border-dorado/40" />
        Acepto recibir comunicaciones de Mai Carolina y entiendo la{" "}
        <a href="/privacidad" className="underline hover:text-dorado">
          política de privacidad
        </a>
        .
      </label>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring w-full rounded-full bg-dorado px-6 py-3.5 text-sm uppercase tracking-[0.15em] text-negro transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando…" : "Quiero mi diagnóstico"}
      </button>
    </form>
  );
}
