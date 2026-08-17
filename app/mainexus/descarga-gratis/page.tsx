"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mainexus } from "@/config/mainexus";

export default function DescargaGratisPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/mainexus-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          type: "profesional",
        }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      router.push("/mainexus/gracias");
    } catch (err) {
      setError("Algo salió mal. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: mainexus.colors.midnight }}
    >
      <div className="max-w-2xl w-full">
        {/* Contenido */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: mainexus.colors.white }}>
              {mainexus.profesionales.leadMagnet}
            </h1>
            <p className="text-lg mb-6" style={{ color: mainexus.colors.gray }}>
              Copia estos prompts. Úsalos mañana en tu trabajo. Ve los resultados en tu próxima reunión.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <span style={{ color: mainexus.colors.magenta }}>✓</span>
                <p style={{ color: mainexus.colors.gray }}>10 prompts específicos para tu rol</p>
              </div>
              <div className="flex gap-3">
                <span style={{ color: mainexus.colors.magenta }}>✓</span>
                <p style={{ color: mainexus.colors.gray }}>Presentaciones que captan atención</p>
              </div>
              <div className="flex gap-3">
                <span style={{ color: mainexus.colors.magenta }}>✓</span>
                <p style={{ color: mainexus.colors.gray }}>Reportes ejecutivos en minutos</p>
              </div>
              <div className="flex gap-3">
                <span style={{ color: mainexus.colors.magenta }}>✓</span>
                <p style={{ color: mainexus.colors.gray }}>Listos para copiar y usar HOY</p>
              </div>
            </div>

            <p className="text-sm italic" style={{ color: mainexus.colors.gray }}>
              "La mayoría usa ChatGPT pero no sabe cómo. Estos prompts son específicos para profesionales."
            </p>
          </div>

          {/* Right: Form */}
          <div
            className="p-8 rounded-lg"
            style={{ backgroundColor: `${mainexus.colors.magenta}15` }}
          >
            <h2 className="text-2xl font-bold mb-6" style={{ color: mainexus.colors.white }}>
              Descarga Gratis
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: mainexus.colors.white }}>
                  Tu nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Juan García"
                  className="w-full px-4 py-3 rounded-lg bg-opacity-20"
                  style={{
                    backgroundColor: mainexus.colors.white,
                    color: mainexus.colors.midnight,
                  }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: mainexus.colors.white }}>
                  Tu email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-opacity-20"
                  style={{
                    backgroundColor: mainexus.colors.white,
                    color: mainexus.colors.midnight,
                  }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-bold text-lg transition hover:opacity-90 disabled:opacity-50"
                style={{
                  backgroundColor: mainexus.colors.magenta,
                  color: mainexus.colors.white,
                }}
              >
                {loading ? "Enviando..." : "Descargar Gratis"}
              </button>

              <p className="text-xs text-center" style={{ color: mainexus.colors.gray }}>
                Te enviaremos el PDF a tu email al instante.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
