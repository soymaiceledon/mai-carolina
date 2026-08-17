"use client";

import { useState } from "react";

interface AuditResult {
  url: string;
  score: number;
  issues: {
    category: string;
    severity: "critical" | "high" | "medium";
    issue: string;
    fix: string;
  }[];
  strengths: string[];
}

export default function AuditorPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular análisis (en producción: usar API real)
    setTimeout(() => {
      const score = Math.floor(Math.random() * 40) + 30; // 30-70

      const auditResult: AuditResult = {
        url,
        score,
        issues: [
          {
            category: "SEO",
            severity: "critical",
            issue: "Meta descripción no optimizada",
            fix: "Agrega descripción de 155-160 caracteres con palabras clave",
          },
          {
            category: "Conversión",
            severity: "high",
            issue: "CTA no clara en hero",
            fix: "Reemplaza 'Haz clic aquí' por 'Obtener demostración gratis'",
          },
          {
            category: "Velocidad",
            severity: "high",
            issue: "Imágenes no optimizadas (>2MB)",
            fix: "Comprime imágenes con TinyPNG, usa WebP format",
          },
          {
            category: "Mobile",
            severity: "medium",
            issue: "Botones muy pequeños en mobile",
            fix: "Aumenta padding de CTA buttons a mínimo 44px",
          },
          {
            category: "Copy",
            severity: "medium",
            issue: "Propuesta de valor no clara",
            fix: "Especifica beneficio concreto en primer párrafo",
          },
        ],
        strengths: [
          "✓ Tiene página de inicio",
          "✓ Contacto visible",
          "✓ Presencia básica",
        ],
      };

      setResult(auditResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #060A18 0%, #0f0f1f 100%)",
        minHeight: "100vh",
        color: "#FFFFFF",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "2rem",
          borderBottom: "1px solid rgba(245, 61, 150, 0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "1.5rem", margin: 0, fontWeight: 600 }}>
            MAI NEXUS - Auditor Digital
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#B894FF",
              margin: "0.25rem 0 0",
            }}
          >
            Analiza tu página web en 2 minutos
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section style={{ padding: "3rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
        {!result ? (
          <>
            <div style={{ marginBottom: "3rem", textAlign: "center" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  margin: "0 0 1rem",
                  background: "linear-gradient(90deg, #F53D96, #B894FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ¿Tu web genera leads?
              </h2>
              <p style={{ color: "#B7BDD1", fontSize: "1.1rem" }}>
                Descubre exactamente qué le falta para atraer más clientes.
              </p>
            </div>

            <form onSubmit={handleAudit}>
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                    color: "#B894FF",
                  }}
                >
                  Tu URL
                </label>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <input
                    type="url"
                    placeholder="https://miempresa.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(184, 148, 255, 0.3)",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#FFFFFF",
                      fontSize: "1rem",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      padding: "1rem 2rem",
                      borderRadius: "8px",
                      border: "none",
                      background: loading
                        ? "rgba(245, 61, 150, 0.5)"
                        : "linear-gradient(90deg, #F53D96, #D4537E)",
                      color: "#FFFFFF",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    {loading ? "Analizando..." : "Auditar"}
                  </button>
                </div>
              </div>
            </form>

            {/* INFO CARDS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
                marginTop: "4rem",
              }}
            >
              {[
                {
                  title: "Análisis SEO",
                  desc: "Detectamos problemas de búsqueda",
                  icon: "🔍",
                },
                {
                  title: "Conversiones",
                  desc: "Identifica frenos en tu venta",
                  icon: "💰",
                },
                {
                  title: "Velocidad",
                  desc: "Mide rendimiento y carga",
                  icon: "⚡",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(245, 61, 150, 0.08)",
                    border: "1px solid rgba(245, 61, 150, 0.2)",
                    borderRadius: "12px",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      margin: "0 0 0.5rem",
                      color: "#F53D96",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, color: "#B7BDD1", fontSize: "0.9rem" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* RESULTS */}
            <div
              style={{
                background: "rgba(184, 148, 255, 0.08)",
                border: "1px solid rgba(184, 148, 255, 0.2)",
                borderRadius: "16px",
                padding: "2rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <div>
                  <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.5rem" }}>
                    {result.url}
                  </h2>
                  <p style={{ margin: 0, color: "#B7BDD1" }}>
                    Análisis completado
                  </p>
                </div>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `conic-gradient(#F53D96 0deg ${(result.score / 100) * 360}deg, rgba(255, 255, 255, 0.1) ${(result.score / 100) * 360}deg)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                  }}
                >
                  {result.score}
                </div>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ color: "#B7BDD1", margin: 0 }}>
                  {result.score < 40
                    ? "Necesita trabajo urgente para generar leads."
                    : result.score < 70
                      ? "Tiene potencial pero le faltan mejoras clave."
                      : "Buena base, optimiza estos detalles."}
                </p>
              </div>
            </div>

            {/* STRENGTHS */}
            <div
              style={{
                background: "rgba(87, 255, 180, 0.1)",
                border: "1px solid rgba(87, 255, 180, 0.3)",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ margin: "0 0 1rem", color: "#57FFB4" }}>
                ✓ Fortalezas
              </h3>
              <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "#B7BDD1" }}>
                {result.strengths.map((strength, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* ISSUES */}
            <div style={{ marginBottom: "3rem" }}>
              <h3 style={{ margin: "0 0 1rem", color: "#F53D96", fontSize: "1.3rem" }}>
                Problemas encontrados
              </h3>

              <div style={{ display: "grid", gap: "1rem" }}>
                {result.issues.map((issue, idx) => {
                  const severityColor = {
                    critical: "#FF4444",
                    high: "#FFB444",
                    medium: "#44B4FF",
                  };

                  return (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(255, 255, 255, 0.03)",
                        border: `1px solid ${severityColor[issue.severity]}33`,
                        borderLeft: `4px solid ${severityColor[issue.severity]}`,
                        borderRadius: "8px",
                        padding: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              margin: 0,
                              color: severityColor[issue.severity],
                              fontWeight: 600,
                            }}
                          >
                            {issue.category}
                          </h4>
                          <p style={{ margin: "0.5rem 0 0", color: "#FFFFFF" }}>
                            {issue.issue}
                          </p>
                        </div>
                        <span
                          style={{
                            background: severityColor[issue.severity] + "20",
                            color: severityColor[issue.severity],
                            padding: "0.25rem 0.75rem",
                            borderRadius: "4px",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                          }}
                        >
                          {issue.severity === "critical"
                            ? "Crítico"
                            : issue.severity === "high"
                              ? "Alto"
                              : "Medio"}
                        </span>
                      </div>
                      <p
                        style={{
                          margin: "1rem 0 0",
                          padding: "1rem",
                          background: "rgba(87, 255, 180, 0.08)",
                          borderRadius: "6px",
                          color: "#B7BDD1",
                          fontSize: "0.9rem",
                        }}
                      >
                        <strong>💡 Fix:</strong> {issue.fix}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                background: "rgba(245, 61, 150, 0.1)",
                border: "1px solid rgba(245, 61, 150, 0.3)",
                borderRadius: "12px",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ margin: "0 0 1rem", color: "#FFFFFF" }}>
                ¿Listo para arreglarlo?
              </h3>
              <p style={{ color: "#B7BDD1", marginBottom: "1.5rem" }}>
                Nuestro plan Basic ($29/mes) incluye los fixes necesarios para
                empezar a generar leads.
              </p>
              <button
                onClick={() => window.location.href = "/mainexus"}
                style={{
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  border: "none",
                  background: "linear-gradient(90deg, #F53D96, #D4537E)",
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Ver planes de MAI NEXUS
              </button>
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button
                onClick={() => setResult(null)}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(184, 148, 255, 0.4)",
                  background: "transparent",
                  color: "#B894FF",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Auditar otro sitio
              </button>
            </div>
          </>
        )}
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          color: "#B7BDD1",
          marginTop: "4rem",
        }}
      >
        <p style={{ margin: 0 }}>MAI NEXUS © 2026 | Auditor Digital Gratis</p>
      </footer>
    </div>
  );
}
