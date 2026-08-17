import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Tres formas de trabajar con Mai Carolina: diagnóstico, sistema base o implementación premium.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="border-b border-dorado/15 py-16 md:py-20">
        <Container className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Servicios</p>
          <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">
            Tres formas de trabajar juntas.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gris-claro">
            Desde una sesión de diagnóstico hasta un acompañamiento completo de implementación —
            elige el punto de partida que corresponde a dónde estás hoy.
          </p>
        </Container>
      </section>
      <div className="[&_section]:border-none [&_section]:pt-0">
        <ServicesGrid />
      </div>
    </>
  );
}
