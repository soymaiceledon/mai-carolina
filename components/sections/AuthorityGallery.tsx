import { BrandPhoto } from "@/components/BrandPhoto";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/config/site";

const statLabels: { key: keyof typeof site.authorityStats; label: string }[] = [
  { key: "personasImpactadas", label: "Personas impactadas" },
  { key: "conferencias", label: "Conferencias" },
  { key: "programas", label: "Programas" },
  { key: "publicaciones", label: "Publicaciones" },
  { key: "proyectos", label: "Proyectos" },
  { key: "certificaciones", label: "Certificaciones" },
];

export function AuthorityGallery() {
  const stats = statLabels.filter((s) => site.authorityStats[s.key] !== null);

  return (
    <section className="border-b border-dorado/15 bg-marfil py-20 text-negro md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Autoridad"
          title="Experiencia real. Estrategia aplicada."
          description="He trabajado en comunicación, liderazgo, emprendimiento y desarrollo de proyectos. Hoy integro esa experiencia con inteligencia artificial para ayudar a profesionales y emprendedores a construir sistemas que les permitan crecer."
        />

        <div className="mt-12 grid grid-cols-2 gap-4">
          <BrandPhoto
            src={site.images.conferencia}
            alt="Mai Carolina en conferencia"
            className="aspect-[3/4] rounded-sm"
          />
          <BrandPhoto
            src={site.images.office}
            alt="Mai Carolina en oficina"
            className="aspect-[3/4] rounded-sm"
          />
        </div>

        {stats.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-negro/10 pt-10 md:grid-cols-6">
            {stats.map((stat) => (
              <div key={stat.key}>
                <p className="font-serif text-3xl text-dorado">{site.authorityStats[stat.key]}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-gris">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
