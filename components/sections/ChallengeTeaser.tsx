import Link from "next/link";
import { BrandPhoto } from "@/components/BrandPhoto";
import { Container } from "@/components/Container";
import { PriceTag } from "@/components/PriceTag";
import { site } from "@/config/site";
import { challengeResults } from "@/data/challenge";
import { Check } from "lucide-react";

export function ChallengeTeaser() {
  return (
    <section className="border-b border-dorado/15 bg-marfil py-20 text-negro md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <BrandPhoto
          src={site.images.retoTeaser}
          alt="Mai Carolina explicando el reto de 10 días"
          className="aspect-[4/5] w-full rounded-sm md:order-2"
        />

        <div className="md:order-1">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Reto de 10 días</p>
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">
            Construye tu sistema digital en 10 días.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gris">
            Un proceso guiado para transformar una idea, servicio o marca personal en una
            presencia digital clara, profesional y lista para atraer clientes.
          </p>

          <ul className="mt-8 space-y-2">
            {challengeResults.map((result) => (
              <li key={result} className="flex items-start gap-2 text-sm text-negro/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-dorado" strokeWidth={1.75} />
                {result}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <PriceTag
              original={site.pricing.reto.original}
              launch={site.pricing.reto.launch}
              currency={site.pricing.reto.currency}
            />
          </div>

          <Link
            href="/reto-10-dias"
            className="focus-ring mt-8 inline-block rounded-full bg-negro px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-marfil transition-opacity hover:opacity-85"
          >
            Quiero entrar al reto
          </Link>
        </div>
      </Container>
    </section>
  );
}
