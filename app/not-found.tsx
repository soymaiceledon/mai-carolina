import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-16">
      <Container className="max-w-xl text-center">
        <p className="mb-3 font-serif text-6xl text-dorado">404</p>
        <h1 className="font-serif text-3xl text-marfil">Esta página no existe.</h1>
        <p className="mt-4 text-base text-gris-claro">
          Puede que el enlace esté roto o la página se haya movido.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-block rounded-full bg-dorado px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-negro transition-opacity hover:opacity-90"
        >
          Volver al inicio
        </Link>
      </Container>
    </section>
  );
}
