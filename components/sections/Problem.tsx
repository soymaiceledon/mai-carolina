import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const problems = [
  "No sabes por dónde empezar.",
  "No tienes tiempo para aprender marketing.",
  "Tu presencia digital no genera clientes.",
  "Has contratado servicios que no reflejan lo que querías.",
];

export function Problem() {
  return (
    <section className="border-b border-dorado/15 bg-marfil py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="El problema"
          title="No necesitas aprender veinte herramientas. Necesitas saber qué hacer con ellas."
          description="Muchos profesionales tienen talento, experiencia y un servicio valioso. Pero dependen del voz a voz, publican sin estrategia y prueban herramientas sin construir un sistema. La inteligencia artificial no resuelve eso por sí sola. Sin dirección, solo crea más ruido."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-negro/10 bg-negro/10 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <div key={problem} className="flex gap-4 bg-marfil p-8">
              <span className="font-serif text-2xl text-dorado">0{i + 1}</span>
              <p className="text-base leading-relaxed text-negro">{problem}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
