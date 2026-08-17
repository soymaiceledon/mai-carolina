import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  {
    number: "01",
    title: "Claridad",
    description: "Definimos tu oferta, cliente, mensaje y dirección.",
  },
  {
    number: "02",
    title: "Sistema",
    description: "Construimos tu web, captación, contenido y automatización.",
  },
  {
    number: "03",
    title: "Crecimiento",
    description: "Creamos una estructura para atraer oportunidades y vender con consistencia.",
  },
];

export function ValueProps() {
  return (
    <section className="border-b border-dorado/15 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Propuesta de valor"
          title="No te enseño IA. Te ayudo a convertirla en resultados."
          light
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="border-t border-dorado/30 pt-6">
              <span className="font-serif text-sm text-dorado">{pillar.number}</span>
              <h3 className="mt-3 font-serif text-2xl text-marfil">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gris-claro">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
