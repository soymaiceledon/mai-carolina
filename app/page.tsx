'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold">
              ⓜ
            </div>
            <span className="text-xl font-bold">MAI NEXUS</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#servicios" className="text-sm text-slate-300 hover:text-white transition">Servicios</a>
            <a href="#casos" className="text-sm text-slate-300 hover:text-white transition">Casos</a>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition">
              Comenzar
            </button>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-8 inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30">
            <span className="text-pink-300 text-sm font-semibold">✨ Confían en nosotros 1,200+ profesionales</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Tu negocio está{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
              perdiendo dinero
            </span>{' '}
            cada día
          </h1>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl">
            Procesos que tardaban <span className="text-pink-400 font-semibold">3-5 días</span> ahora se hacen en <span className="text-pink-400 font-semibold">1 hora</span>.
            Nosotros construimos sistemas de IA personalizados que automatizan lo que te tiene atrapado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-pink-500/50 transition transform hover:scale-105">
              Obtén tu diagnóstico gratis
            </button>
            <button className="px-8 py-4 rounded-lg border-2 border-slate-700 text-white font-semibold hover:border-pink-500 hover:text-pink-400 transition">
              Agendar llamada
            </button>
          </div>

          <p className="text-sm text-slate-400">✓ Sin compromiso · ✓ Sin spam · ✓ Resultado en 2 minutos</p>
        </div>
      </section>

      {/* ===== TRUST WALL ===== */}
      <section className="py-16 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '1,200+', label: 'Profesionales capacitados' },
            { num: '15 años', label: 'De experiencia en digital' },
            { num: '3-5 días → 1 hora', label: 'Reducción de procesos' },
            { num: '+40%', label: 'Aumento en conversión' },
          ].map((stat, i) => (
            <div key={i} className="animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.num}
              </div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROBLEMA/SOLUCIÓN ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">¿Cuánto dinero pierdes cada día?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⏱️',
                problema: 'Análisis Lento',
                desc: 'Tu equipo pasa horas analizando datos. Respuestas llegan en días.',
                solucion: 'IA que analiza y responde en 1 hora',
              },
              {
                icon: '🌐',
                problema: 'Identidad Débil',
                desc: 'Página bonita que no vende. Sin presencia clara.',
                solucion: 'Página profesional + identidad visual',
              },
              {
                icon: '⛓️',
                problema: 'Cuellos de Botella',
                desc: 'No puedes crecer sin contratar más gente.',
                solucion: 'Automatización que escala sin gente',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur hover:border-pink-500/50 hover:bg-slate-900/80 transition"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.problema}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                <p className="text-pink-400 font-semibold text-sm">✓ {item.solucion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section id="servicios" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Soluciones para cada etapa</h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Desde freelancers hasta medianas empresas. Cada servicio diseñado para tu presupuesto.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                nivel: 'NIVEL 1',
                nombre: 'Diagnóstico',
                precio: '$0',
                desc: 'Descubre qué necesita tu negocio',
                items: ['3 preguntas rápidas', 'Análisis en 2 min', 'Plan de acción claro'],
                cta: 'Comenzar',
                highlight: false,
              },
              {
                nivel: 'NIVEL 2',
                nombre: 'Página Web',
                precio: '$29/mes',
                desc: 'Presencia profesional online',
                items: ['Página responsive', 'Manual de marca', 'Cambios ilimitados'],
                cta: 'Ver más',
                highlight: true,
              },
              {
                nivel: 'NIVEL 3',
                nombre: 'Identidad Digital',
                precio: '$79/mes',
                desc: 'Página + contenido + redes',
                items: ['Todo del nivel 2', 'Edición mensual', 'Gestión de redes'],
                cta: 'Agendar',
                highlight: false,
              },
              {
                nivel: 'NIVEL 4',
                nombre: 'Sistema IA',
                precio: '$199-497/mes',
                desc: 'Automatización empresarial',
                items: ['Auditoría de procesos', 'Sistema IA', 'Capacitación'],
                cta: 'Propuesta',
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border transition ${
                  plan.highlight
                    ? 'border-pink-500/50 bg-slate-900/80 ring-1 ring-pink-500/20'
                    : 'border-slate-800 bg-slate-900/50 hover:border-pink-500/30'
                }`}
              >
                <div className="text-xs font-semibold text-slate-400 mb-2">{plan.nivel}</div>
                <h3 className="text-lg font-bold mb-2">{plan.nombre}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-pink-400">{plan.precio}</p>
                  <p className="text-xs text-slate-500">Cancelable cuando quieras</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-300">✓ {item}</li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg font-semibold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/50'
                      : 'border border-slate-700 text-slate-300 hover:border-pink-500 hover:text-pink-400'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASOS DE ÉXITO ===== */}
      <section id="casos" className="py-20 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Cómo lo hacemos real</h2>

          <div className="space-y-8">
            {[
              {
                icon: '🏢',
                empresa: 'Empresa de Seguros',
                antes: '3-5 días por análisis',
                despues: '1 hora (automático)',
                beneficios: ['Más clientes', 'Mejor servicio', 'Sin contratar'],
              },
              {
                icon: '💳',
                empresa: 'Fintech',
                antes: '4-6 horas por solicitud',
                despues: '<30 minutos (automático)',
                beneficios: ['Escalabilidad', 'Satisfacción 95%', 'Costos reducidos'],
              },
              {
                icon: '🛍️',
                empresa: 'Ecommerce',
                antes: 'Conversión baja (2%)',
                despues: '+40% conversión mes 1',
                beneficios: ['Primeros $5k', 'Identidad clara', 'Escalable'],
              },
            ].map((caso, i) => (
              <div key={i} className="p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-pink-500/30 transition">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{caso.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{caso.empresa}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-950 p-4 rounded-lg">
                    <p className="text-slate-400 text-sm">Antes</p>
                    <p className="font-bold text-pink-400">{caso.antes}</p>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-pink-400">→</span>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-lg">
                    <p className="text-slate-400 text-sm">Después</p>
                    <p className="font-bold text-green-400">{caso.despues}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-slate-300">
                  {caso.beneficios.map((b, j) => (
                    <div key={j}>✓ {b}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Lo que dicen nuestros clientes</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nombre: 'Juan M.',
                rol: 'Director de Operaciones | Aseguradora',
                texto: 'Pasábamos 3 días analizando. Ahora 1 hora. El sistema se integró sin problemas.',
              },
              {
                nombre: 'Sofía P.',
                rol: 'Founder | Ecommerce',
                texto: 'Nuestra página anterior no vendía. +40% en conversión el mes 1. Increíble.',
              },
              {
                nombre: 'Carlos R.',
                rol: 'CEO | Fintech',
                texto: 'No sabía por dónde empezar. El diagnóstico fue honesto. Implementamos y escalamos.',
              },
            ].map((test, i) => (
              <div key={i} className="p-8 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-pink-500/30 transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{test.texto}"</p>
                <div>
                  <p className="font-semibold">{test.nombre}</p>
                  <p className="text-sm text-slate-400">{test.rol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 px-6 border-y border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Preguntas frecuentes</h2>

          <div className="space-y-4">
            {[
              {
                q: '¿Cuánto cuesta?',
                a: 'Desde gratis (diagnóstico) hasta $497/mes (sistemas complejos). Cada opción está diseñada para diferentes presupuestos.',
              },
              {
                q: '¿Es para mi negocio?',
                a: 'Si tienes procesos manuales que tardan horas/días, sí. Desde freelancers hasta medianas empresas.',
              },
              {
                q: '¿Qué pasa si no me gusta?',
                a: '30 días dinero de vuelta. Sin preguntas. Queremos clientes felices, no rehenes.',
              },
              {
                q: '¿Cuánto tiempo tarda?',
                a: 'Diagnóstico: 2 minutos. Página web: 2-4 semanas. Sistema IA: 4-8 semanas.',
              },
            ].map((item, i) => (
              <details key={i} className="group p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-pink-500/30 transition cursor-pointer">
                <summary className="font-semibold flex items-center justify-between">
                  {item.q}
                  <span className="text-pink-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-slate-400 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Comienza con tu diagnóstico gratuito. Sin compromiso. Resultado en 2 minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/50 transition">
              Obtén tu diagnóstico gratis
            </button>
            <button className="px-10 py-4 rounded-lg border-2 border-slate-700 text-white font-semibold text-lg hover:border-pink-500 hover:text-pink-400 transition">
              Agendar llamada
            </button>
          </div>

          <p className="text-sm text-slate-400">
            💬 Respondemos en &lt;2 horas · 📧 mainexusllc@gmail.com
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                  ⓜ
                </div>
                <span className="font-bold">MAI NEXUS</span>
              </div>
              <p className="text-sm text-slate-400">Automatiza. Escala. Transforma.</p>
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
