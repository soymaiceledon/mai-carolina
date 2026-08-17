import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { challengeDays, challengeBonuses } from "@/data/challenge";
import { Sparkles } from "lucide-react";

export function ChallengeIncludes() {
  return (
    <section className="border-b border-dorado/15 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Qué incluye el reto" title="Un recorrido de 10 días, paso a paso." light />

        <ol className="mt-12 grid gap-px overflow-hidden border border-dorado/15 sm:grid-cols-2 lg:grid-cols-5">
          {challengeDays.map((d) => (
            <li key={d.day} className="bg-negro p-6" style={{ borderColor: "rgba(198,161,91,0.15)" }}>
              <p className="font-serif text-xs uppercase tracking-[0.2em] text-dorado">Día {d.day}</p>
              <p className="mt-2 text-sm font-medium text-marfil">{d.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-gris">{d.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 border-t border-dorado/15 pt-10">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-dorado">Bonos incluidos</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {challengeBonuses.map((bonus) => (
              <div key={bonus} className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-dorado" strokeWidth={1.5} />
                <p className="text-sm text-gris-claro">{bonus}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-dorado/15 pt-6 text-xs italic text-gris">
          Los alcances finales de la web, mantenimiento, contenidos y soporte se detallarán antes
          de la compra.
        </p>
      </Container>
    </section>
  );
}
