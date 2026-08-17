import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";
import { freeResources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Recursos gratis",
  description: "Diagnóstico gratuito y recursos descargables para empezar a ordenar tu sistema.",
  alternates: { canonical: "/recursos-gratis" },
};

export default function RecursosGratisPage() {
  const [available, ...upcoming] = freeResources;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-12 border-b border-dorado/15 pb-16 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Disponible ahora</p>
            <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">
              {available.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gris-claro">{available.description}</p>
          </div>
          <div className="border border-dorado/20 bg-marfil p-8 text-negro">
            <LeadMagnetForm source="pagina-recursos-gratis" />
          </div>
        </div>

        <div className="pt-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-dorado">Próximamente</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((r) => (
              <div key={r.slug} className="border border-dorado/15 p-6 opacity-70">
                <p className="text-sm font-medium text-marfil">{r.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-gris">{r.description}</p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-dorado">Próximamente</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
