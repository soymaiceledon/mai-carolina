import Link from "next/link";
import { BrandPhoto } from "@/components/BrandPhoto";
import { Container } from "@/components/Container";
import { site } from "@/config/site";

const indicators = ["Estrategia", "Inteligencia artificial", "Marketing", "Sistemas", "Ejecución"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-dorado/15">
      <Container className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-dorado">{site.descriptor}</p>
          <h1 className="font-serif text-4xl leading-[1.1] text-marfil md:text-5xl">
            Tienes el talento. Ahora necesitas un sistema que te traiga clientes.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-gris-claro">
            Te ayudo a usar inteligencia artificial, marketing y automatización para construir una
            presencia digital que atraiga oportunidades, convierta clientes y te permita crecer
            con claridad.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/reto-10-dias"
              className="focus-ring rounded-full bg-dorado px-7 py-3.5 text-center text-sm uppercase tracking-[0.15em] text-negro transition-opacity hover:opacity-90"
            >
              Quiero construir mi sistema
            </Link>
            <Link
              href={site.cta.secondary.href}
              className="focus-ring rounded-full border border-dorado/50 px-7 py-3.5 text-center text-sm uppercase tracking-[0.15em] text-marfil transition-colors hover:border-dorado hover:text-dorado"
            >
              {site.cta.secondary.label}
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {indicators.map((label) => (
              <li key={label} className="text-xs uppercase tracking-[0.15em] text-gris">
                {label}
              </li>
            ))}
          </ul>
        </div>

        <BrandPhoto
          src={site.images.heroOffice}
          alt="Mai Carolina en su oficina"
          priority
          className="aspect-[4/5] w-full rounded-sm md:aspect-[3/4]"
        />
      </Container>
    </section>
  );
}
