import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog";
import { slugifyCategory } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre inteligencia artificial, marketing, marca personal, sistemas y ventas.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">Blog</p>
        <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">
          Ideas y estrategia, sin relleno.
        </h1>

        <div className="mt-8 flex flex-wrap gap-2">
          {blogCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog/categoria/${slugifyCategory(cat)}`}
              className="focus-ring rounded-full border border-dorado/25 px-4 py-1.5 text-xs uppercase tracking-[0.1em] text-gris-claro transition-colors hover:border-dorado hover:text-dorado"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
