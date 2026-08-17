"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="section-container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white">
              Ⓜ
            </div>
            <span className="font-sora font-bold text-lg">MAI NEXUS</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-slate-300 hover:text-white transition">
              Servicios
            </a>
            <a href="#casos" className="text-sm text-slate-300 hover:text-white transition">
              Casos
            </a>
            <a href="#cta" className="btn-primary text-sm px-6 py-2">
              Comenzar
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="section-container pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl opacity-30 -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Sombra visual de confianza */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-pink-500/20 text-pink-300 border border-pink-500/30">
              ✨ Confían en nosotros 1,200+ profesionales
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Tu negocio está{" "}
            <span className="text-gradient font-bold">perdiendo dinero</span>{" "}
            cada día
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Procesos que tardaban <span className="font-bold text-pink-400">3-5 días</span> ahora se hacen en{" "}
            <span className="font-bold text-pink-400">1 hora</span>.
            <br />
            Nosotros construimos sistemas de IA personalizados que automatizan lo que te tiene atrapado.
          </p>

          {/* CTAs Principales */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <button className="btn-primary w-full md:w-auto">
              Obtén tu diagnóstico gratis
            </button>
            <button className="btn-secondary w-full md:w-auto">
              Agendar llamada
            </button>
          </div>

          {/* Risk Reversal */}
          <p className="text-sm text-slate-400">
            ✓ Sin compromiso · ✓ Sin spam · ✓ Resultado en 2 minutos
          </p>
        </div>
      </section>

      {/* ===== TRUST WALL ===== */}
      <section className="section-container py-16 border-y border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="animate-slideUp" style={{ animationDelay: "0s" }}>
            <div className="text-4xl font-bold text-gradient">1,200+</div>
            <p className="text-slate-400 text-sm mt-2">Profesionales capacitados</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold text-gradient">15 años</div>
            <p className="text-slate-400 text-sm mt-2">De experiencia en digital</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-gradient">3-5 días</div>
            <p className="text-slate-400 text-sm mt-2">→ 1 hora (reducción real)</p>
          </div>
          <div className="animate-slideUp" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl font-bold text-gradient">+40%</div>
            <p className="text-slate-400 text-sm mt-2">Aumento en conversión</p>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMA & SOLUCIÓN ===== */}
      <section className="section-container py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          ¿Cuánto dinero pierdes cada día?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Problema 1 */}
          <div className="card group">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold mb-3">Análisis Lento</h3>
            <p className="text-slate-400 text-sm mb-4">
              Tu equipo pasa horas analizando datos. Respuestas llegan en días. Dinero se pierde.
            </p>
            <p className="text-pink-400 font-semibold text-sm">
              Solución: IA que analiza y responde en 1 hora
            </p>
          </div>

          {/* Problema 2 */}
          <div className="card group">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3">Identidad Digital Débil</h3>
            <p className="text-slate-400 text-sm mb-4">
              Página bonita pero que no vende. Sin presencia clara. Clientes van con competencia.
            </p>
            <p className="text-pink-400 font-semibold text-sm">
              Solución: Página + identidad profesional
            </p>
          </div>

          {/* Problema 3 */}
          <div className="card group">
            <div className="text-3xl mb-4">⛓️</div>
            <h3 className="text-xl font-semibold mb-3">Cuellos de Botella</h3>
            <p className="text-slate-400 text-sm mb-4">
              No puedes crecer sin contratar. Costos explotan. Procesos no escalan.
            </p>
            <p className="text-pink-400 font-semibold text-sm">
              Solución: Automatización que escala sin gente
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ESCALONADOS ===== */}
      <section id="servicios" className="section-container py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Soluciones para cada etapa
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Desde freelancers hasta pequeñas empresas. Cada servicio está diseñado para tu presupuesto y necesidad.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Nivel 1: Diagnóstico */}
          <div className="card">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 mb-4">
              NIVEL 1
            </div>
            <h3 className="text-2xl font-bold mb-2">Diagnóstico Gratis</h3>
            <p className="text-slate-400 mb-6">
              Descubre exactamente qué necesita tu negocio
            </p>
            <div className="mb-6">
              <p className="text-lg font-bold text-pink-400">$0</p>
              <p className="text-sm text-slate-500">Siempre gratuito</p>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>3 preguntas rápidas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Análisis personalizado en 2 minutos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Plan claro de qué automatizar</span>
              </li>
            </ul>
            <button className="btn-ghost w-full">Comenzar diagnóstico</button>
          </div>

          {/* Nivel 2: Página Web Básica */}
          <div className="card border-pink-500/50 bg-slate-900/80">
            <div className="inline-block px-3 py-1 rounded-full bg-pink-500/20 text-xs font-semibold text-pink-300 mb-4">
              NIVEL 2 · MÁS POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Página Web Profesional</h3>
            <p className="text-slate-400 mb-6">
              Para profesionales que necesitan presencia clara
            </p>
            <div className="mb-6">
              <p className="text-lg font-bold text-pink-400">$29/mes</p>
              <p className="text-sm text-slate-500">Cancelable cuando quieras</p>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Página web profesional (responsive)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Manual de marca completo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Cambios ilimitados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Soporte WhatsApp directo</span>
              </li>
            </ul>
            <button className="btn-primary w-full">Ver planes de página web</button>
          </div>

          {/* Nivel 3: Página + Content */}
          <div className="card">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 mb-4">
              NIVEL 3
            </div>
            <h3 className="text-2xl font-bold mb-2">Página + Identidad Digital</h3>
            <p className="text-slate-400 mb-6">
              Para equipos que necesitan todo centralizado
            </p>
            <div className="mb-6">
              <p className="text-lg font-bold text-pink-400">$79/mes</p>
              <p className="text-sm text-slate-500">Cancelable cuando quieras</p>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Todo del Nivel 2 +</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Edición de contenido mensual</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Gestión de redes sociales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Email marketing integrado</span>
              </li>
            </ul>
            <button className="btn-secondary w-full">Agendar demo</button>
          </div>

          {/* Nivel 4: Sistema IA */}
          <div className="card">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 mb-4">
              NIVEL 4 · EMPRESA
            </div>
            <h3 className="text-2xl font-bold mb-2">Sistema IA Personalizado</h3>
            <p className="text-slate-400 mb-6">
              Para empresas con procesos complejos
            </p>
            <div className="mb-6">
              <p className="text-lg font-bold text-pink-400">$199-$497/mes</p>
              <p className="text-sm text-slate-500">Según complejidad</p>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Auditoría de procesos actuales</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Sistema IA personalizado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Integración con tu software</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-400 mt-1">✓</span>
                <span>Capacitación del equipo</span>
              </li>
            </ul>
            <button className="btn-secondary w-full">Solicitar propuesta</button>
          </div>
        </div>
      </section>

      {/* ===== CASOS DE ÉXITO ===== */}
      <section id="casos" className="section-container py-20 border-y border-slate-800">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Cómo lo hacemos real
        </h2>

        <div className="space-y-8">
          {/* Caso 1 */}
          <div className="card">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🏢</div>
              <div>
                <h3 className="text-2xl font-bold">Empresa de Seguros</h3>
                <p className="text-slate-400">Análisis de pólizas automatizado</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400">Antes</p>
                <p className="font-bold text-pink-400">3-5 días por análisis</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-pink-400">→</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400">Después</p>
                <p className="font-bold text-green-400">1 hora (respuesta automática)</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              ✓ Más clientes atendidos · ✓ Mejor servicio · ✓ Sin contratar
            </p>
          </div>

          {/* Caso 2 */}
          <div className="card">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">💳</div>
              <div>
                <h3 className="text-2xl font-bold">Fintech (Aprobación de Créditos)</h3>
                <p className="text-slate-400">Decisiones automáticas en segundos</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400">Antes</p>
                <p className="font-bold text-pink-400">4-6 horas por solicitud</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-pink-400">→</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400">Después</p>
                <p className="font-bold text-green-400">&lt;30 minutos (automatizado)</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              ✓ Escalabilidad sin contratar · ✓ Satisfacción 95% · ✓ Costos reducidos
            </p>
          </div>

          {/* Caso 3 */}
          <div className="card">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl">🛍️</div>
              <div>
                <h3 className="text-2xl font-bold">Ecommerce</h3>
                <p className="text-slate-400">Página profesional + automatización</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400">Antes</p>
                <p className="font-bold text-pink-400">Conversión baja (2%)</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-pink-400">→</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <p className="text-slate-400">Después</p>
                <p className="font-bold text-green-400">+40% conversión mes 1</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              ✓ Primeros $5k en ventas · ✓ Identidad clara · ✓ Escalable
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="section-container py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Juan M.",
              role: "Director de Operaciones | Aseguradora",
              text: "Pasábamos 3 días analizando. Ahora 1 hora. El sistema se integró sin problemas.",
            },
            {
              name: "Sofía P.",
              role: "Founder | Ecommerce",
              text: "Nuestra página anterior no vendía. +40% en conversión el mes 1. Increíble.",
            },
            {
              name: "Carlos R.",
              role: "CEO | Fintech",
              text: "No sabía por dónde empezar. El diagnóstico fue honesto. Implementamos y escalamos.",
            },
          ].map((testimonial, i) => (
            <div key={i} className="card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-container py-20 border-y border-slate-800">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Preguntas frecuentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "¿Cuánto cuesta?",
              a: "Desde gratis (diagnóstico) hasta $497/mes (sistemas complejos). Cada opción está diseñada para diferentes presupuestos.",
            },
            {
              q: "¿Es para mi negocio?",
              a: "Si tienes procesos manuales que tardan horas/días, sí. Desde freelancers hasta pequeñas empresas.",
            },
            {
              q: "¿Qué pasa si no me gusta?",
              a: "30 días dinero de vuelta. Sin preguntas. Queremos clientes felices, no rehenes.",
            },
            {
              q: "¿Cuánto tiempo tarda?",
              a: "Diagnóstico: 2 minutos. Página web: 2-4 semanas. Sistema IA: 4-8 semanas.",
            },
          ].map((item, i) => (
            <details key={i} className="card group cursor-pointer">
              <summary className="font-semibold flex items-center justify-between">
                {item.q}
                <span className="text-pink-400 group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-slate-400 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="cta" className="section-container py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para transformar tu negocio?
          </h2>

          <p className="text-xl text-slate-300">
            Comienza con tu diagnóstico gratuito. Sin compromiso. Resultado en 2 minutos.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="btn-primary w-full md:w-auto text-lg px-10 py-5">
              Obtén tu diagnóstico gratis
            </button>
            <button className="btn-secondary w-full md:w-auto text-lg px-10 py-5">
              Agendar llamada
            </button>
          </div>

          <p className="text-sm text-slate-400">
            💬 Respondemos en &lt;2 horas · 📧 mainexusllc@gmail.com
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  Ⓜ
                </div>
                <span className="font-sora font-bold">MAI NEXUS</span>
              </div>
              <p className="text-sm text-slate-400">
                Automatiza. Escala. Transforma.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#servicios" className="hover:text-white transition">Página Web</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Sistema IA</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Identidad Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#casos" className="hover:text-white transition">Casos</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p>© 2026 MAI NEXUS. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
