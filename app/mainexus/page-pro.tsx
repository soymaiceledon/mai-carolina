"use client";

import { useState } from "react";

export default function MainexusProPage() {
  const [activeTab, setActiveTab] = useState<"profesionales" | "emprendedores">(
    "profesionales"
  );

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
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "1.5rem", margin: 0, fontWeight: 600 }}>
            MAI NEXUS
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#B894FF",
              margin: "0.25rem 0 0",
            }}
          >
            Conecta. Automatiza. Crece con IA.
          </p>
        </div>
      </header>

      {/* HERO */}
      <section
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(245, 61, 150, 0.05) 0%, rgba(184, 148, 255, 0.05) 100%)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "3.5rem",
              fontWeight: 700,
              margin: "0 0 1rem",
              background: "linear-gradient(90deg, #F53D96, #B894FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            No vendemos herramientas.
          </h2>
          <h2 style={{ fontSize: "3rem", fontWeight: 700, margin: "0 0 2rem" }}>
            Vendemos resultados.
          </h2>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <button
              onClick={() => setActiveTab("profesionales")}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "1rem",
                background:
                  activeTab === "profesionales"
                    ? "linear-gradient(90deg, #F53D96, #B894FF)"
                    : "rgba(255, 255, 255, 0.1)",
                color: "#FFFFFF",
                transition: "all 0.3s",
              }}
            >
              Profesionales
            </button>
            <button
              onClick={() => setActiveTab("emprendedores")}
              style={{
                padding: "0.75rem 2rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "1rem",
                background:
                  activeTab === "emprendedores"
                    ? "linear-gradient(90deg, #F53D96, #B894FF)"
                    : "rgba(255, 255, 255, 0.1)",
                color: "#FFFFFF",
                transition: "all 0.3s",
              }}
            >
              Emprendedores
            </button>
          </div>
        </div>
      </section>

      {/* PROFESIONALES SECTION */}
      {activeTab === "profesionales" && (
        <section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              background: "rgba(245, 61, 150, 0.08)",
              border: "1px solid rgba(245, 61, 150, 0.2)",
              borderRadius: "16px",
              padding: "3rem",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", margin: "0 0 1rem" }}>
              Deja de confundir ChatGPT con IA.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#B894FF",
                margin: "0 0 1.5rem",
              }}
            >
              Implementa sistemas que funcionan en tu empresa.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#B7BDD1" }}>
              <strong>En 30 días:</strong> 3 sistemas de IA funcionando. 10+ horas
              ahorradas cada semana.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {[
              { title: "Implementa sistemas reales", desc: "No teoría. Código, prompts y procesos que funcionan en tu empresa." },
              { title: "Domina en 30 días", desc: "Paso a paso, practicando con casos reales de tu rol." },
              { title: "Llega mejor preparado", desc: "Tus reuniones cambiarán cuando demuestres resultados concretos." },
            ].map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(184, 148, 255, 0.1)",
                  border: "1px solid rgba(184, 148, 255, 0.2)",
                  borderRadius: "12px",
                  padding: "2rem",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem", color: "#F53D96" }}>
                  ✓ {benefit.title}
                </h3>
                <p style={{ margin: 0, color: "#B7BDD1", fontSize: "0.95rem" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <button
            style={{
              width: "100%",
              padding: "1.2rem",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(90deg, #F53D96, #D4537E)",
              color: "#FFFFFF",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Descarga guía gratis: 10 prompts efectivos
          </button>
        </section>
      )}

      {/* EMPRENDEDORES SECTION */}
      {activeTab === "emprendedores" && (
        <section style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              background: "rgba(184, 148, 255, 0.08)",
              border: "1px solid rgba(184, 148, 255, 0.2)",
              borderRadius: "16px",
              padding: "3rem",
              marginBottom: "3rem",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", margin: "0 0 1rem" }}>
              Página web que genera leads mientras duermes.
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#F53D96",
                margin: "0 0 1.5rem",
              }}
            >
              Nosotros armamos el sistema, tú creces.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "#B7BDD1" }}>
              <strong>Página en 5 días + contenido automatizado = primeros clientes en 30 días.</strong>
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {[
              { title: "Página que vende 24/7", desc: "Trabajando incluso cuando duermes. Eso sí es automatización real." },
              { title: "Contenido listo para publicar", desc: "IA redacta, tú publicas. Parrillas completas, listos." },
              { title: "Creces sin agencias caras", desc: "Te enseñamos a escalar. Después lo haces solo, sin depender." },
            ].map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(245, 61, 150, 0.1)",
                  border: "1px solid rgba(245, 61, 150, 0.2)",
                  borderRadius: "12px",
                  padding: "2rem",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem", color: "#B894FF" }}>
                  ✓ {benefit.title}
                </h3>
                <p style={{ margin: 0, color: "#B7BDD1", fontSize: "0.95rem" }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* PRICING COMPARISON TABLE */}
          <div style={{ marginBottom: "3rem", overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(245, 61, 150, 0.3)" }}>
                  <th
                    style={{
                      padding: "1.5rem",
                      textAlign: "left",
                      fontWeight: 600,
                    }}
                  >
                    Características
                  </th>
                  <th
                    style={{
                      padding: "1.5rem",
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#B7BDD1",
                    }}
                  >
                    Basic<br />$29/mes
                  </th>
                  <th
                    style={{
                      padding: "1.5rem",
                      textAlign: "center",
                      fontWeight: 600,
                      background: "rgba(245, 61, 150, 0.15)",
                      borderRadius: "12px 12px 0 0",
                      color: "#F53D96",
                    }}
                  >
                    Pro<br />$79/mes
                  </th>
                  <th
                    style={{
                      padding: "1.5rem",
                      textAlign: "center",
                      fontWeight: 600,
                      color: "#B894FF",
                    }}
                  >
                    Premium<br />$149/mes
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Página web", basic: "✓", pro: "✓", premium: "✓" },
                  { feature: "Dominio", basic: ".cards", pro: "Tu dominio", premium: "Tu dominio" },
                  { feature: "Lead magnet", basic: "—", pro: "✓", premium: "✓" },
                  { feature: "Contenido IA", basic: "—", pro: "Básico", premium: "Parrilla completa" },
                  { feature: "Acompañamiento", basic: "Email", pro: "Prioridad", premium: "Estrategia semanal" },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom:
                        "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <td style={{ padding: "1.2rem", fontWeight: 500 }}>
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: "1.2rem",
                        textAlign: "center",
                        color: "#B7BDD1",
                      }}
                    >
                      {row.basic}
                    </td>
                    <td
                      style={{
                        padding: "1.2rem",
                        textAlign: "center",
                        background: "rgba(245, 61, 150, 0.08)",
                        color: "#F53D96",
                        fontWeight: 600,
                      }}
                    >
                      {row.pro}
                    </td>
                    <td
                      style={{
                        padding: "1.2rem",
                        textAlign: "center",
                        color: "#B894FF",
                      }}
                    >
                      {row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA BUTTONS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { name: "Basic", price: "$29/mes", color: "#B7BDD1" },
              { name: "Pro", price: "$79/mes", color: "#F53D96", featured: true },
              { name: "Premium", price: "$149/mes", color: "#B894FF" },
            ].map((plan, idx) => (
              <button
                key={idx}
                style={{
                  padding: "1.2rem",
                  borderRadius: "8px",
                  border: "none",
                  background: plan.featured
                    ? "linear-gradient(90deg, #F53D96, #D4537E)"
                    : `rgba(255, 255, 255, 0.05)`,
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = plan.featured
                    ? "linear-gradient(90deg, #D4537E, #B83565)"
                    : "rgba(255, 255, 255, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = plan.featured
                    ? "linear-gradient(90deg, #F53D96, #D4537E)"
                    : "rgba(255, 255, 255, 0.05)";
                }}
              >
                Comenzar con {plan.name}
              </button>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              style={{
                padding: "1rem 2rem",
                borderRadius: "8px",
                border: "1px solid rgba(184, 148, 255, 0.4)",
                background: "transparent",
                color: "#B894FF",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "rgba(184, 148, 255, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Auditar mi web gratis (2 minutos)
            </button>
          </div>
        </section>
      )}

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
        <p style={{ margin: 0 }}>MAI NEXUS © 2026 | mainexusllc@gmail.com</p>
      </footer>
    </div>
  );
}
