export type BlogCategory =
  | "Inteligencia artificial"
  | "Marketing"
  | "Marca personal"
  | "Sistemas"
  | "Automatización"
  | "Ventas"
  | "Emprendimiento";

export const blogCategories: BlogCategory[] = [
  "Inteligencia artificial",
  "Marketing",
  "Marca personal",
  "Sistemas",
  "Automatización",
  "Ventas",
  "Emprendimiento",
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string; // ISO
  readingTime: string;
  image: string;
  content: string[];
  demo: boolean;
};

// Contenido de muestra, marcado explícitamente como demostración.
// Reemplaza por artículos reales cuando estén listos.
export const blogPosts: BlogPost[] = [
  {
    slug: "ia-no-resuelve-lo-que-la-estrategia-no-define",
    title: "La IA no resuelve lo que la estrategia no define",
    excerpt:
      "Tener acceso a herramientas de inteligencia artificial no es lo mismo que tener un sistema para conseguir clientes.",
    category: "Inteligencia artificial",
    author: "Mai Carolina",
    date: "2026-06-01",
    readingTime: "4 min",
    image: "/images/blog/ia-no-resuelve-lo-que-la-estrategia-no-define.jpg",
    demo: true,
    content: [
      "Artículo de demostración. Este espacio está preparado para tu contenido real.",
      "Aquí puedes desarrollar por qué la inteligencia artificial multiplica resultados solo cuando existe una estrategia clara detrás.",
    ],
  },
  {
    slug: "el-voz-a-voz-no-es-un-sistema",
    title: "El voz a voz no es un sistema",
    excerpt:
      "Depender de referidos funciona hasta que deja de funcionar. Así se ve un sistema de captación real.",
    category: "Sistemas",
    author: "Mai Carolina",
    date: "2026-06-08",
    readingTime: "5 min",
    image: "/images/blog/el-voz-a-voz-no-es-un-sistema.jpg",
    demo: true,
    content: [
      "Artículo de demostración. Este espacio está preparado para tu contenido real.",
      "Aquí puedes explicar la diferencia entre depender del boca a boca y construir un sistema que atraiga clientes de forma constante.",
    ],
  },
  {
    slug: "marca-personal-no-es-exposicion-es-estrategia",
    title: "Marca personal no es exposición, es estrategia",
    excerpt:
      "Mostrarte más no es lo mismo que posicionarte mejor. La diferencia está en la dirección.",
    category: "Marca personal",
    author: "Mai Carolina",
    date: "2026-06-15",
    readingTime: "4 min",
    image: "/images/blog/marca-personal-no-es-exposicion-es-estrategia.jpg",
    demo: true,
    content: [
      "Artículo de demostración. Este espacio está preparado para tu contenido real.",
      "Aquí puedes desarrollar cómo construir una marca personal con propósito comercial claro, no solo presencia.",
    ],
  },
];
