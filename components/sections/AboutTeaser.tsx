import Link from "next/link";
import { Container } from "@/components/Container";

export function AboutTeaser() {
  return (
    <section className="border-b border-dorado/15 py-20 md:py-28">
      <Container className="max-w-2xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Sobre mí</p>
        <h2 className="font-serif text-3xl leading-tight text-marfil md:text-4xl">
          Sé lo que se siente tener talento y no tener un sistema.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-gris-claro">
          Durante años tuve ideas, experiencia y ganas de construir algo propio. Pero depender de
          terceros para ejecutar frenó muchos de mis proyectos. La inteligencia artificial cambió
          eso: hoy puedo unir estrategia y ejecución, y ayudar a otros a avanzar sin quedarse
          atrapados entre cursos, herramientas y proveedores.
        </p>
        <Link
          href="/sobre-mi"
          className="focus-ring mt-7 inline-block border-b border-dorado pb-1 text-sm uppercase tracking-[0.15em] text-dorado"
        >
          Conoce mi historia
        </Link>
      </Container>
    </section>
  );
}
