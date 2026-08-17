import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  robots: { index: false },
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <h1 className="font-serif text-4xl text-marfil">Términos y condiciones</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-gris">
          Última actualización: {new Date().toLocaleDateString("es", { year: "numeric", month: "long" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-gris-claro">
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">1. Sobre los servicios</h2>
            <p>
              Mai Carolina ofrece servicios de consultoría, acompañamiento y productos digitales
              relacionados con estrategia, marketing, sistemas e inteligencia artificial aplicada a
              negocios. Los alcances específicos de cada servicio se detallan antes de la compra.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">2. Pagos</h2>
            <p>
              Los precios publicados en este sitio son de lanzamiento y pueden cambiar sin previo
              aviso. El precio vigente es el que se muestra al momento de la contratación.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">3. Garantía del Reto de 10 días</h2>
            <p>
              Puedes explorar el contenido del reto durante los primeros siete días desde tu
              inscripción. Si compruebas que el programa no corresponde a lo prometido, puedes
              solicitar la devolución escribiendo a{" "}
              <a href={`mailto:${site.contact.email}`} className="text-dorado hover:underline">
                {site.contact.email}
              </a>
              . Esta garantía no aplica a servicios de implementación personalizados.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">4. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio (textos, imágenes, materiales del reto) es propiedad
              de Mai Carolina y no puede ser reproducido, revendido ni distribuido sin autorización
              expresa.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">5. Limitación de responsabilidad</h2>
            <p>
              Los resultados de negocio dependen de múltiples factores fuera de nuestro control. No
              garantizamos resultados específicos de ingresos o clientes.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs italic text-gris">
          Este documento es una base general y no constituye asesoría legal. Revísalo con un
          profesional antes de operar comercialmente.
        </p>
      </Container>
    </section>
  );
}
