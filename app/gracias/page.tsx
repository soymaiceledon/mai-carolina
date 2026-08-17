import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Gracias",
  robots: { index: false },
};

const PDF_PATH = "/recursos/diagnostico-ejemplo.pdf";

export default function GraciasPage() {
  const pdfExists = fs.existsSync(path.join(process.cwd(), "public", PDF_PATH));

  return (
    <section className="flex min-h-[70vh] items-center py-16">
      <Container className="max-w-xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Listo</p>
        <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">
          Gracias, ya está en camino.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gris-claro">
          Revisa tu correo en los próximos minutos. Mientras tanto, aquí tienes un adelanto en PDF
          del diagnóstico para que empieces a mirar tu negocio con otra claridad.
        </p>

        {pdfExists ? (
          <a
            href={PDF_PATH}
            className="focus-ring mt-8 inline-block rounded-full bg-dorado px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-negro transition-opacity hover:opacity-90"
          >
            Descargar PDF de ejemplo
          </a>
        ) : (
          <div className="mt-8 border border-dorado/25 bg-negro/40 px-6 py-4 text-xs text-gris">
            PDF de ejemplo pendiente de subir. Colócalo en{" "}
            <code className="text-gris-claro">/public{PDF_PATH}</code> y este botón se activará
            automáticamente.
          </div>
        )}

        <div className="mt-10">
          <Link href="/" className="focus-ring text-sm uppercase tracking-[0.12em] text-gris hover:text-dorado">
            Volver al inicio
          </Link>
        </div>
      </Container>
    </section>
  );
}
