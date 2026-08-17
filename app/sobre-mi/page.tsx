import type { Metadata } from "next";
import { BrandPhoto } from "@/components/BrandPhoto";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "La historia detrás de Mai Carolina: de la intención a la acción.",
  alternates: { canonical: "/sobre-mi" },
};

export default function SobreMiPage() {
  return (
    <>
      <section className="border-b border-dorado/15 py-16 md:py-24">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <BrandPhoto src={site.images.about} alt="Mai Carolina" priority className="aspect-[4/5] w-full rounded-sm" />
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Sobre mí</p>
            <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">
              Sé lo que se siente tener talento y no tener un sistema.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gris-claro">
              Durante años tuve ideas, experiencia y ganas de construir algo propio. Pero depender
              de terceros para ejecutar frenó muchos de mis proyectos. La inteligencia artificial
              cambió eso. Hoy puedo unir estrategia y ejecución, y ayudar a otros a avanzar sin
              quedarse atrapados entre cursos, herramientas y proveedores.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gris-claro">
              Mai Carolina nace de esa transformación: pasar de la intención a la acción, convertir
              conocimiento en estructura y usar la tecnología con criterio para crear resultados
              reales.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-dorado/15 bg-marfil py-16 text-negro md:py-24">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Filosofía" title="La educación y la ejecución van juntas." />
          <p className="mt-6 text-base leading-relaxed text-gris">
            Creo en construir con criterio: usar la inteligencia artificial no como un fin, sino
            como una herramienta al servicio de una estrategia clara. El conocimiento sin acción
            se queda en intención — y mi trabajo es ayudarte a cerrar esa distancia.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Trayectoria" title="Espacio reservado para tu historia completa." light />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Conferencias", "Certificaciones", "Publicaciones", "Libro", "Proyectos", "Visión de marca"].map(
              (label) => (
                <div key={label} className="border border-dorado/20 p-6">
                  <p className="text-sm font-medium text-marfil">{label}</p>
                  <p className="mt-1 text-xs text-gris">Contenido pendiente de agregar.</p>
                </div>
              )
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
