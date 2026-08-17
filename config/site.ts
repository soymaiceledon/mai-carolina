/**
 * Configuración central del sitio.
 * Cambia aquí nombre, contacto, precios, enlaces y textos principales
 * sin tener que tocar componentes ni páginas.
 */

export const site = {
  name: "Mai Carolina",
  shortName: "MAI",
  descriptor: "IA · Marketing · Sistemas · Crecimiento",
  tagline: "No te enseño IA. Te ayudo a usarla para conseguir clientes.",
  locale: "es",
  domain: "https://maicarolina.com", // REEMPLAZAR con el dominio real cuando esté comprado

  seo: {
    title: "Mai Carolina | IA, Marketing y Sistemas para conseguir clientes",
    description:
      "Ayudo a profesionales, marcas personales y emprendedores a usar inteligencia artificial, marketing y sistemas digitales para atraer clientes y crecer con claridad.",
    keywords: [
      "inteligencia artificial para emprendedores",
      "marketing con IA",
      "automatización de negocios",
      "marca personal",
      "páginas web para emprendedores",
      "sistemas de captación",
      "consultoría de IA",
      "marketing digital",
      "conseguir clientes",
      "Panamá",
    ],
  },

  contact: {
    email: "hola@maicarolina.com", // REEMPLAZAR con el correo real
    whatsapp: "https://wa.me/50700000000", // REEMPLAZAR con el número real (formato wa.me)
    whatsappDisplay: "+507 0000-0000", // REEMPLAZAR
    calendlyUrl: "REEMPLAZAR_CON_URL_REAL", // ej. https://calendly.com/maicarolina/asesoria
  },

  social: {
    instagram: "https://instagram.com/maicarolina", // REEMPLAZAR
    tiktok: "https://tiktok.com/@maicarolina", // REEMPLAZAR
    youtube: "https://youtube.com/@maicarolina", // REEMPLAZAR
    linkedin: "https://linkedin.com/in/maicarolina", // REEMPLAZAR
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Servicios", href: "/servicios" },
    { label: "Reto 10 días", href: "/reto-10-dias" },
    { label: "Recursos gratis", href: "/recursos-gratis" },
    { label: "Blog", href: "/blog" },
  ],

  footerLinks: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Servicios", href: "/servicios" },
    { label: "Reto 10 días", href: "/reto-10-dias" },
    { label: "Asesoría 1 a 1", href: "/asesoria" },
    { label: "Recursos gratis", href: "/recursos-gratis" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],

  legalLinks: [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Términos y condiciones", href: "/terminos" },
  ],

  cta: {
    primary: { label: "Agenda una asesoría", href: "/asesoria" },
    secondary: { label: "Descargar recurso gratis", href: "/recursos-gratis" },
  },

  pricing: {
    reto: {
      original: 197,
      launch: 97,
      currency: "USD",
    },
    asesoria: {
      original: 94,
      launch: 47,
      currency: "USD",
      duration: "1 hora",
    },
  },

  // Stripe Payment Links (se crean en el dashboard de Stripe, sin código:
  // Payment Links → Create → precio fijo → copiar URL). Mientras el valor
  // empiece con "REEMPLAZAR", los botones de precio muestran un CTA de
  // contacto en vez de un link roto — ver README → "Pagos".
  payments: {
    retoPaymentLink: "REEMPLAZAR_CON_PAYMENT_LINK_DE_STRIPE",
    // Alternativa recomendada para la asesoría: activar el cobro nativo de
    // Calendly (Calendly → Integrations → Stripe) para cobrar al agendar, sin
    // necesitar este link aparte. Si prefieres cobrar antes de agendar, define
    // esta URL y se usará en su lugar.
    asesoriaPaymentLink: "REEMPLAZAR_CON_PAYMENT_LINK_DE_STRIPE",
  },

  // Cada foto real se usa una sola vez en todo el sitio (sin repetir).
  images: {
    // Hero: foto más relajada (postura casual, medio sonriendo) — la seria
    // quedó para la sección de autoridad/oficina, donde ese tono sí encaja.
    heroOffice: "/images/mai-office.png",
    conferencia: "/images/mai-conferencia.png",
    podcast: "/images/mai-podcast.png",
    retoTeaser: "/images/mai-reto-10-dias.png", // teaser del reto en el home
    retoPageHero: "/images/mai-reto-page-hero.png", // hero de /reto-10-dias (foto distinta a la del teaser)
    office: "/images/mai-office-hero.png",
    about: "/images/mai-about.png",
  },

  authorityStats: {
    // Campos editables — dejar en null hasta tener el dato real.
    // Cuando tengas la cifra, reemplaza null por el número/texto.
    personasImpactadas: null as string | null,
    conferencias: null as string | null,
    programas: null as string | null,
    publicaciones: null as string | null,
    proyectos: null as string | null,
    certificaciones: null as string | null,
  },
} as const;

export type Site = typeof site;
