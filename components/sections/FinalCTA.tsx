import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/config/site";

export function FinalCTA() {
  return (
    <section className="bg-marfil py-20 text-negro md:py-28">
      <Container className="max-w-2xl text-center">
        <h2 className="font-serif text-3xl leading-tight md:text-4xl">
          Tu negocio no necesita más ideas. Necesita dirección y ejecución.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-gris">
          Construyamos un sistema que convierta tu experiencia en una marca visible, profesional
          y preparada para vender.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={site.cta.primary.href}
            className="focus-ring rounded-full bg-negro px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-marfil transition-opacity hover:opacity-85"
          >
            {site.cta.primary.label}
          </Link>
          <Link
            href="/reto-10-dias"
            className="focus-ring rounded-full border border-negro/40 px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-negro transition-colors hover:border-negro"
          >
            Entrar al reto
          </Link>
        </div>
      </Container>
    </section>
  );
}
