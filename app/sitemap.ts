import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { blogPosts, blogCategories } from "@/data/blog";
import { slugifyCategory } from "@/lib/slug";

const staticRoutes = [
  "",
  "/sobre-mi",
  "/servicios",
  "/reto-10-dias",
  "/recursos-gratis",
  "/asesoria",
  "/blog",
  "/contacto",
  "/privacidad",
  "/terminos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  for (const post of blogPosts) {
    entries.push({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date) });
  }
  for (const cat of blogCategories) {
    entries.push({ url: `${base}/blog/categoria/${slugifyCategory(cat)}`, lastModified: now });
  }

  return entries;
}
