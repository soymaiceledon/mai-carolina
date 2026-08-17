export type Testimonial = {
  name: string;
  role: string;
  photo?: string;
  quote: string;
  result: string;
  serviceType: string;
  pending: boolean;
};

// No inventar testimonios. Los tres siguientes son placeholders
// claramente marcados como contenido pendiente de aprobación.
// Reemplázalos cuando tengas testimonios reales autorizados por el cliente.
export const testimonials: Testimonial[] = [
  {
    name: "Nombre pendiente",
    role: "Profesión pendiente",
    quote: "Testimonio pendiente de aprobación.",
    result: "Resultado pendiente de aprobación.",
    serviceType: "Diagnóstico y estrategia",
    pending: true,
  },
  {
    name: "Nombre pendiente",
    role: "Profesión pendiente",
    quote: "Testimonio pendiente de aprobación.",
    result: "Resultado pendiente de aprobación.",
    serviceType: "Sistema digital base",
    pending: true,
  },
  {
    name: "Nombre pendiente",
    role: "Profesión pendiente",
    quote: "Testimonio pendiente de aprobación.",
    result: "Resultado pendiente de aprobación.",
    serviceType: "Implementación premium",
    pending: true,
  },
];
