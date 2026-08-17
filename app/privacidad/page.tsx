import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: false },
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <h1 className="font-serif text-4xl text-marfil">Política de privacidad</h1>
        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-gris">
          Última actualización: {new Date().toLocaleDateString("es", { year: "numeric", month: "long" })}
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-gris-claro">
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">1. Qué datos recopilamos</h2>
            <p>
              Cuando completas un formulario en este sitio (diagnóstico gratuito, contacto, o
              registro a la asesoría) recopilamos tu nombre, correo electrónico y, cuando aplica,
              tu profesión o el mensaje que nos escribes.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">2. Para qué los usamos</h2>
            <p>
              Usamos tus datos para responder tu solicitud, enviarte el recurso que pediste y,
              si diste tu consentimiento, comunicarte contenido y ofertas relacionadas con Mai
              Carolina. No vendemos ni compartimos tus datos con terceros para fines publicitarios
              ajenos a este sitio.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">3. Dónde se almacenan</h2>
            <p>
              Durante la fase actual del sitio, los datos de los formularios se almacenan de forma
              interna mientras se conecta un proveedor de email marketing (ConvertKit, Brevo o
              MailerLite). Puedes solicitar la eliminación de tus datos en cualquier momento
              escribiendo a{" "}
              <a href={`mailto:${site.contact.email}`} className="text-dorado hover:underline">
                {site.contact.email}
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">4. Tus derechos</h2>
            <p>
              Puedes solicitar acceso, corrección o eliminación de tus datos personales, así como
              darte de baja de cualquier comunicación en el momento que quieras.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-serif text-xl text-marfil">5. Cookies</h2>
            <p>
              Este sitio puede usar cookies técnicas necesarias para su funcionamiento y, en el
              futuro, cookies de analítica para entender cómo se usa el contenido. No usamos
              cookies de publicidad de terceros.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs italic text-gris">
          Este documento es una base general y no constituye asesoría legal. Revísalo con un
          profesional antes de operar comercialmente con datos de usuarios.
        </p>
      </Container>
    </section>
  );
}
