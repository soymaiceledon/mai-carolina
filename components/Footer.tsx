import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/Container";
import { site } from "@/config/site";

const socialLinks = [
  { label: "Instagram", href: site.social.instagram },
  { label: "TikTok", href: site.social.tiktok },
  { label: "YouTube", href: site.social.youtube },
  { label: "LinkedIn", href: site.social.linkedin },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dorado/15 bg-negro">
      <Container className="grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-gris">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-xs uppercase tracking-[0.12em] text-gris hover:text-dorado"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-dorado">Explora</p>
          <ul className="space-y-2">
            {site.footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring text-sm text-gris hover:text-marfil">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-dorado">Legal</p>
          <ul className="space-y-2">
            {site.legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring text-sm text-gris hover:text-marfil">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-dorado">Contacto</p>
          <a href={`mailto:${site.contact.email}`} className="focus-ring block text-sm text-gris hover:text-marfil">
            {site.contact.email}
          </a>
          <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="focus-ring mt-2 block text-sm text-gris hover:text-marfil">
            {site.contact.whatsappDisplay}
          </a>
        </div>
      </Container>

      <div className="border-t border-dorado/10 py-6">
        <Container>
          <p className="text-center text-xs text-gris">
            © {year} {site.name}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
