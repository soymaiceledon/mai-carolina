import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PriceTag } from "@/components/PriceTag";
import { BrandPhoto } from "@/components/BrandPhoto";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { site } from "@/config/site";
import {
  challengeDays,
  challengeBonuses,
  challengeResults,
  challengeForWho,
  challengeNotForWho,
  challengeFaq,
} from "@/data/challenge";
import { testimonials } from "@/data/testimonials";

const retoCheckoutHref = site.payments.retoPaymentLink.startsWith("http")
  ? site.payments.retoPaymentLink
  : "/contacto";

export const metadata: Metadata = {
  title: "Reto de 10 días",
  description:
    "Un proceso guiado de 10 días para transformar tu idea, servicio o marca personal en un sistema digital que atrae clientes.",
  alternates: { canonical: "/reto-10-dias" },
};

export default function RetoPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-dorado/15 py-16 md:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Reto de 10 días</p>
            <h1 className="font-serif text-4xl leading-[1.1] text-marfil md:text-5xl">
              Construye tu sistema digital en 10 días.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-gris-claro">
              Un proceso guiado para transformar una idea, servicio o marca personal en una
              presencia digital clara, profesional y lista para atraer clientes.
            </p>
            <div className="mt-8">
              <PriceTag
                original={site.pricing.reto.original}
                launch={site.pricing.reto.launch}
                currency={site.pricing.reto.currency}
              />
            </div>
            <Link
              href={retoCheckoutHref}
              className="focus-ring mt-8 inline-block rounded-full bg-dorado px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-negro transition-opacity hover:opacity-90"
            >
              Quiero entrar al reto
            </Link>
          </div>
          <BrandPhoto
            src={site.images.retoPageHero}
            alt="Mai Carolina explicando el reto de 10 días"
            priority
            className="aspect-[4/5] w-full rounded-sm md:aspect-[3/4]"
          />
        </Container>
      </section>

      {/* Problema */}
      <section className="border-b border-dorado/15 bg-marfil py-16 text-negro md:py-24">
        <Container className="max-w-2xl">
          <SectionHeading
            eyebrow="El problema"
            title="Tienes el talento, pero no tienes un sistema."
            description="Sabes hacer bien tu trabajo. Pero conseguir clientes sigue dependiendo del azar: un referido aquí, una publicación allá, sin una estructura que se repita y funcione."
          />
        </Container>
      </section>

      {/* Historia / transformación */}
      <section className="border-b border-dorado/15 py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Mi historia</p>
            <p className="text-base leading-relaxed text-gris-claro">
              Durante años tuve ideas, experiencia y ganas de construir algo propio. Pero depender
              de terceros para ejecutar frenó muchos de mis proyectos. La inteligencia artificial
              cambió eso: hoy puedo unir estrategia y ejecución, y este reto es la forma más
              directa que encontré para transmitir ese proceso.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Transformación</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gris">Antes</p>
                <ul className="space-y-1.5 text-sm text-gris-claro">
                  <li>Confundido</li>
                  <li>Probando cosas sin resultados</li>
                  <li>Sin sistema</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-dorado">Después</p>
                <ul className="space-y-1.5 text-sm text-marfil">
                  <li>Claridad total</li>
                  <li>Sistema funcionando</li>
                  <li>Leads constantes</li>
                  <li>Confianza al usar IA</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Qué incluye */}
      <section className="border-b border-dorado/15 bg-marfil py-16 text-negro md:py-24">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Qué incluye" title="Resultados concretos al terminar el reto." />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {challengeResults.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-negro/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-dorado" strokeWidth={1.75} />
                {r}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Calendario 10 días */}
      <section className="border-b border-dorado/15 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Calendario" title="Un recorrido de 10 días, paso a paso." light />
          <ol className="mt-12 grid gap-px overflow-hidden border border-dorado/15 sm:grid-cols-2 lg:grid-cols-5">
            {challengeDays.map((d) => (
              <li key={d.day} className="bg-negro p-6">
                <p className="font-serif text-xs uppercase tracking-[0.2em] text-dorado">Día {d.day}</p>
                <p className="mt-2 text-sm font-medium text-marfil">{d.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-gris">{d.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Bonos */}
      <section className="border-b border-dorado/15 bg-marfil py-16 text-negro md:py-24">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Bonos incluidos" title="Todo lo que llevas contigo al terminar." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {challengeBonuses.map((bonus) => (
              <div key={bonus} className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-dorado" strokeWidth={1.5} />
                <p className="text-sm text-negro/80">{bonus}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 border-t border-negro/10 pt-6 text-xs italic text-gris">
            Los alcances finales de la web, mantenimiento, contenidos y soporte se detallarán antes
            de la compra.
          </p>
        </Container>
      </section>

      {/* Para quién es / no es */}
      <section className="border-b border-dorado/15 py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="border border-dorado/20 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-dorado">Para quién es</p>
            <ul className="space-y-3">
              {challengeForWho.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gris-claro">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-dorado" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gris/20 p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gris">Para quién no es</p>
            <ul className="space-y-3">
              {challengeNotForWho.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gris">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-gris" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Testimonios */}
      <section className="border-b border-dorado/15 bg-marfil py-16 text-negro md:py-24">
        <Container>
          <SectionHeading eyebrow="Testimonios" title="Lo que dicen quienes ya construyeron su sistema." />
          <div className="mt-10 [&_article]:border-negro/15 [&_article]:bg-marfil [&_p]:text-negro/70 [&_svg]:text-dorado">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-dorado/15 py-16 md:py-24">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de que entres al reto." light />
          <div className="mt-8 divide-y divide-dorado/10 border-t border-b border-dorado/10">
            {challengeFaq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="focus-ring cursor-pointer list-none text-sm font-medium text-marfil marker:content-none">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gris-claro">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Precio + Garantía + CTA */}
      <section id="precio" className="bg-marfil py-16 text-negro md:py-24">
        <Container className="max-w-xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Inversión</p>
          <div className="flex justify-center">
            <PriceTag
              original={site.pricing.reto.original}
              launch={site.pricing.reto.launch}
              currency={site.pricing.reto.currency}
            />
          </div>

          <Link
            href={retoCheckoutHref}
            className="focus-ring mt-8 inline-block rounded-full bg-negro px-8 py-4 text-sm uppercase tracking-[0.15em] text-marfil transition-opacity hover:opacity-85"
          >
            Quiero entrar al reto
          </Link>
          {retoCheckoutHref === "/contacto" && (
            <p className="mt-3 text-xs text-gris">
              Cobro en línea pendiente de conectar — este botón te lleva a contacto mientras tanto.
            </p>
          )}

          <div className="mt-10 border-t border-negro/10 pt-8 text-left">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-dorado">Garantía</p>
            <p className="text-sm leading-relaxed text-gris">
              Explora el contenido durante los primeros siete días. Si compruebas que el programa
              no corresponde a lo prometido, podrás solicitar la devolución conforme a los
              términos publicados.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
