import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { PriceTag } from "@/components/PriceTag";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Asesoría 1 a 1",
  description:
    "Una hora para ordenar lo que llevas meses intentando resolver: diagnóstico, bloqueo principal y próximos pasos.",
  alternates: { canonical: "/asesoria" },
};

const includes = [
  "Diagnóstico de situación actual.",
  "Identificación del principal bloqueo.",
  "Recomendaciones concretas.",
  "Próximos pasos.",
  "Resumen escrito posterior.",
];

const calendlyConfigured = site.contact.calendlyUrl.startsWith("http");

export default function AsesoriaPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Asesoría 1 a 1</p>
          <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">
            Una hora para ordenar lo que llevas meses intentando resolver.
          </h1>

          <div className="mt-8">
            <PriceTag
              launch={site.pricing.asesoria.launch}
              currency={site.pricing.asesoria.currency}
              unit={site.pricing.asesoria.duration}
              note={`Precio especial de lanzamiento. Valor regular: ${site.pricing.asesoria.original} ${site.pricing.asesoria.currency}.`}
            />
          </div>

          <p className="mt-8 mb-4 text-xs uppercase tracking-[0.2em] text-dorado">Incluye</p>
          <ul className="space-y-2.5">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gris-claro">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-dorado" strokeWidth={1.75} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-dorado">Agenda tu horario</p>
          {calendlyConfigured ? (
            <div className="aspect-[4/5] w-full overflow-hidden border border-dorado/20">
              <iframe
                src={site.contact.calendlyUrl}
                title="Agenda tu asesoría"
                className="h-full w-full"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 border border-dorado/25 bg-negro/40 p-8 text-center">
              <p className="text-sm uppercase tracking-[0.15em] text-dorado">Calendly pendiente de conectar</p>
              <p className="text-xs text-gris">
                Define <code className="text-gris-claro">CALENDLY_URL</code> en{" "}
                <code className="text-gris-claro">config/site.ts</code> para activar el
                calendario en vivo.
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="focus-ring mt-2 rounded-full border border-dorado px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-dorado hover:bg-dorado hover:text-negro"
              >
                Escríbeme para agendar
              </a>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
