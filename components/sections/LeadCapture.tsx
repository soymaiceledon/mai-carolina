import { Container } from "@/components/Container";
import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export function LeadCapture() {
  return (
    <section id="recurso-gratis" className="border-b border-dorado/15 bg-marfil py-20 text-negro md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Recurso gratuito</p>
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">
            Diagnóstico gratuito: descubre qué necesita tu negocio para empezar a crecer con IA.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gris">
            Responde una serie de preguntas y recibe una hoja de ruta inicial para saber qué
            trabajar primero: oferta, marca, contenido, web, automatización o captación.
          </p>
        </div>

        <div className="border border-negro/10 bg-negro p-8">
          <LeadMagnetForm source="home-recurso-gratis" />
        </div>
      </Container>
    </section>
  );
}
