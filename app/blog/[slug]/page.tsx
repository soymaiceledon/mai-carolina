import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BrandPhoto } from "@/components/BrandPhoto";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { slugifyCategory } from "@/lib/slug";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Artículo no encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <article className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <Link
          href={`/blog/categoria/${slugifyCategory(post.category)}`}
          className="focus-ring text-xs uppercase tracking-[0.15em] text-dorado hover:underline"
        >
          {post.category}
        </Link>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-marfil md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.1em] text-gris">
          {post.author} · {formatDate(post.date)} · {post.readingTime} de lectura
        </p>
        {post.demo && (
          <p className="mt-3 inline-block border border-dorado/30 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-dorado">
            Contenido de muestra — demostración
          </p>
        )}

        <BrandPhoto src={post.image} alt={post.title} priority className="mt-8 aspect-[16/9] w-full rounded-sm" />

        <div className="mt-10 space-y-5 text-base leading-relaxed text-gris-claro">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Container>

      {related.length > 0 && (
        <Container className="mt-20 border-t border-dorado/15 pt-14">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-dorado">Artículos relacionados</p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      )}
    </article>
  );
}
