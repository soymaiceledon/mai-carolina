export type ChallengeDay = {
  day: number;
  title: string;
  description: string;
};

export const challengeDays: ChallengeDay[] = [
  { day: 1, title: "Objetivo y diagnóstico", description: "Defines con claridad qué quieres lograr en los próximos 10 días." },
  { day: 2, title: "Cliente ideal", description: "Identificas a quién le hablas y qué necesita escuchar de ti." },
  { day: 3, title: "Análisis de marca", description: "Revisamos fortalezas, riesgos y oportunidades de tu marca actual." },
  { day: 4, title: "Propuesta de valor", description: "Construyes la razón concreta por la que deberían elegirte a ti." },
  { day: 5, title: "Mensaje principal", description: "Convertimos tu propuesta en un mensaje claro, directo y memorable." },
  { day: 6, title: "Presencia digital", description: "Ordenamos qué mostrar, dónde y cómo en tus canales." },
  { day: 7, title: "Contenido y visibilidad", description: "Defines tu estrategia para conectar, aportar y posicionarte." },
  { day: 8, title: "Prueba y ajustes", description: "Mides lo que está funcionando y ajustas lo que no." },
  { day: 9, title: "Lanzamiento de oferta", description: "Comunicas tu oferta con confianza y una estructura clara." },
  { day: 10, title: "Resultados y siguiente nivel", description: "Evalúas resultados y defines tu plan para escalar." },
];

export const challengeBonuses: string[] = [
  "Página web activa durante un año.",
  "Mantenimiento mensual.",
  "Un cambio gratuito al mes.",
  "Plan de contenido mensual durante tres meses.",
  "Guía práctica de IA aplicada al negocio.",
  "Plantillas para organizar prospectos.",
  "Sesión grupal de cierre.",
];

export const challengeResults: string[] = [
  "Claridad de negocio.",
  "Posicionamiento.",
  "Identidad base.",
  "Página web funcional.",
  "Plan de contenido.",
  "Base inicial de posibles clientes.",
  "Sistema básico de seguimiento.",
];

export const challengeForWho: string[] = [
  "Tienes un servicio o negocio funcionando y quieres ordenarlo en un sistema.",
  "Estás dispuesto a ejecutar, no solo a aprender teoría.",
  "Quieres usar la IA con criterio, no solo probar herramientas sueltas.",
  "Puedes dedicar tiempo enfocado durante los 10 días del reto.",
];

export const challengeNotForWho: string[] = [
  "Buscas una solución mágica sin poner acción de tu parte.",
  "Todavía no tienes claro qué servicio o negocio quieres ofrecer.",
  "No tienes disponibilidad para participar activamente durante el reto.",
  "Buscas el precio más bajo posible, no un sistema real.",
];

export const challengeFaq: { question: string; answer: string }[] = [
  {
    question: "¿Necesito saber de tecnología o inteligencia artificial?",
    answer:
      "No. El reto está diseñado para que definas y ejecutes tu sistema aunque nunca hayas usado IA para tu negocio.",
  },
  {
    question: "¿Cuánto tiempo debo dedicarle por día?",
    answer:
      "Cada día tiene un objetivo concreto. La dedicación exacta depende de tu ritmo, pero está pensado para que sea aplicable dentro de una semana normal de trabajo.",
  },
  {
    question: "¿Qué pasa después de los 10 días?",
    answer:
      "Terminas con un sistema base funcionando y una ruta clara de siguiente nivel. Los alcances finales de web, mantenimiento, contenido y soporte se detallan antes de la compra.",
  },
  {
    question: "¿Hay garantía?",
    answer:
      "Puedes explorar el contenido durante los primeros siete días. Si compruebas que el programa no corresponde a lo prometido, puedes solicitar la devolución conforme a los términos publicados.",
  },
];
