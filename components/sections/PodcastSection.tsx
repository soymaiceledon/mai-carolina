import { Play, Music2, Video, Newspaper } from "lucide-react";
import { BrandPhoto } from "@/components/BrandPhoto";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/config/site";

const channels = [
  { label: "YouTube", icon: Play, href: site.social.youtube },
  { label: "Spotify", icon: Music2, href: "#" },
  { label: "TikTok", icon: Video, href: site.social.tiktok },
  { label: "Blog", icon: Newspaper, href: "/blog" },
];

export function PodcastSection() {
  return (
    <section className="border-b border-dorado/15 py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <BrandPhoto src={site.images.podcast} alt="Podcast de Mai Carolina" className="aspect-[4/5] w-full rounded-sm" />

        <div>
          <SectionHeading eyebrow="Contenido" title="Conversaciones sobre IA, negocio y crecimiento." light />

          <div className="mt-8 grid grid-cols-2 gap-3">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus-ring flex items-center gap-3 border border-dorado/20 px-4 py-3 text-sm text-gris-claro transition-colors hover:border-dorado hover:text-dorado"
              >
                <ch.icon className="h-4 w-4" strokeWidth={1.5} />
                {ch.label}
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs italic text-gris">Contenido de muestra — demostración.</p>
        </div>
      </Container>
    </section>
  );
}
