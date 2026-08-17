"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Completa nombre, correo y mensaje.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("No se pudo enviar el mensaje. Intenta de nuevo en unos segundos.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-dorado/30 p-6 text-center">
        <p className="text-sm text-marfil">
          Gracias por escribir. Te responderé lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="c-name" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gris-claro">
          Nombre
        </label>
        <input
          id="c-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="focus-ring w-full border border-dorado/25 bg-transparent px-4 py-3 text-marfil placeholder:text-gris/60"
        />
      </div>
      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gris-claro">
          Correo
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="focus-ring w-full border border-dorado/25 bg-transparent px-4 py-3 text-marfil placeholder:text-gris/60"
        />
      </div>
      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-gris-claro">
          Mensaje
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          className="focus-ring w-full border border-dorado/25 bg-transparent px-4 py-3 text-marfil placeholder:text-gris/60"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring w-full rounded-full bg-dorado px-6 py-3.5 text-sm uppercase tracking-[0.15em] text-negro transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
