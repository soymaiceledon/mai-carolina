import { site } from "@/config/site";

export type Service = {
  slug: string;
  name: string;
  description: string;
  includes?: string[];
  price?: {
    launch: number;
    original?: number;
    note?: string;
    unit?: string;
  };
  cta: { label: string; href: string };
  showPrice: boolean;
};

export const services: Service[] = [
  {
    slug: "diagnostico-estrategia",
    name: "Diagnóstico y estrategia",
    description:
      "Una sesión profunda para ordenar tu negocio, definir tu oferta y crear una ruta clara de crecimiento.",
    price: {
      launch: site.pricing.asesoria.launch,
      original: site.pricing.asesoria.original,
      note: "Precio especial con 50% de descuento durante el lanzamiento.",
      unit: "por una hora",
    },
    cta: { label: "Agendar asesoría", href: "/asesoria" },
    showPrice: true,
  },
  {
    slug: "sistema-digital-base",
    name: "Sistema digital base",
    description:
      "Construimos la base de tu presencia digital: posicionamiento, landing page, estructura de contenido y automatización básica.",
    includes: [
      "Posicionamiento",
      "Landing page",
      "Estructura de contenido",
      "Automatización básica",
      "Optimización de perfiles",
    ],
    cta: { label: "Solicitar propuesta", href: "/contacto" },
    showPrice: false,
  },
  {
    slug: "implementacion-premium",
    name: "Implementación premium",
    description:
      "Acompañamiento completo para construir tu sistema de principio a fin: estrategia, marca, web, funnel y prospección.",
    includes: [
      "Estrategia",
      "Branding",
      "Web completa",
      "Funnel",
      "Automatizaciones",
      "Contenido inicial",
      "Prospección",
      "Acompañamiento",
    ],
    cta: { label: "Aplicar al servicio premium", href: "/contacto" },
    showPrice: false,
  },
];
