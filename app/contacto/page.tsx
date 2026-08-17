import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbeme por correo, WhatsApp o el formulario de contacto.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Contacto</p>
          <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">
            Hablemos de tu sistema.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gris-claro">
            Escríbeme por el canal que prefieras. Si buscas una implementación premium o el
            sistema digital base, cuéntame en qué punto estás para preparar una propuesta.
          </p>

          <div className="mt-8 space-y-3">
            <a href={`mailto:${site.contact.email}`} className="focus-ring block text-sm text-marfil hover:text-dorado">
              {site.contact.email}
            </a>
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring block text-sm text-marfil hover:text-dorado"
            >
              WhatsApp — {site.contact.whatsappDisplay}
            </a>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
