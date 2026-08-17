import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PriceTag } from "@/components/PriceTag";
import { services } from "@/data/services";
import { Check } from "lucide-react";

export function ServicesGrid() {
  return (
    <section id="servicios" className="border-b border-dorado/15 py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Servicios" title="Tres formas de trabajar juntas." light />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col border border-dorado/20 p-8 transition-colors hover:border-dorado/50"
            >
              <h3 className="font-serif text-xl text-marfil">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gris-claro">
                {service.description}
              </p>

              {service.includes && (
                <ul className="mt-5 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gris-claro">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-dorado" strokeWidth={1.75} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {service.showPrice && service.price && (
                <div className="mt-6">
                  <PriceTag
                    original={service.price.original}
                    launch={service.price.launch}
                    note={service.price.note}
                    unit={service.price.unit}
                  />
                </div>
              )}

              <Link
                href={service.cta.href}
                className="focus-ring mt-8 inline-block rounded-full border border-dorado px-6 py-3 text-center text-xs uppercase tracking-[0.15em] text-dorado transition-colors hover:bg-dorado hover:text-negro"
              >
                {service.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
