export type FreeResource = {
  slug: string;
  name: string;
  description: string;
  available: boolean;
};

export const freeResources: FreeResource[] = [
  {
    slug: "diagnostico-ia",
    name: "Diagnóstico gratuito: descubre qué necesita tu negocio para empezar a crecer con IA",
    description:
      "Responde una serie de preguntas y recibe una hoja de ruta inicial para saber qué trabajar primero: oferta, marca, contenido, web, automatización o captación.",
    available: true,
  },
  {
    slug: "checklist-presencia-digital",
    name: "Checklist de presencia digital",
    description: "Revisa en minutos qué le falta a tu presencia digital para generar confianza y clientes.",
    available: false,
  },
  {
    slug: "guia-de-contenido",
    name: "Guía de contenido",
    description: "Una guía práctica para planificar contenido con dirección, no al azar.",
    available: false,
  },
  {
    slug: "plantilla-propuesta-de-valor",
    name: "Plantilla de propuesta de valor",
    description: "Estructura tu propuesta de valor en un formato claro y directo.",
    available: false,
  },
  {
    slug: "base-seguimiento-prospectos",
    name: "Base de seguimiento de prospectos",
    description: "Organiza tus prospectos y no vuelvas a perder una oportunidad por falta de seguimiento.",
    available: false,
  },
  {
    slug: "mini-guia-automatizacion",
    name: "Mini guía de automatización",
    description: "Automatiza las tareas repetitivas de tu negocio sin volverte experto en tecnología.",
    available: false,
  },
];
