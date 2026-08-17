import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, blogCategories } from "@/data/blog";
import { slugifyCategory } from "@/lib/slug";

export function generateStaticParams() {
  return blogCategories.map((cat) => ({ categoria: slugifyCategory(cat) }));
}

function findCategory(slug: string) {
  return blogCategories.find((cat) => slugifyCategory(cat) === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = findCategory(categoria);
  return {
    title: category ? `Blog · ${category}` : "Categoría no encontrada",
    alternates: { canonical: `/blog/categoria/${categoria}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = findCategory(categoria);
  if (!category) notFound();

  const posts = blogPosts.filter((p) => p.category === category);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <Link href="/blog" className="focus-ring text-xs uppercase tracking-[0.15em] text-gris hover:text-dorado">
          ← Todo el blog
        </Link>
        <p className="mb-3 mt-4 text-xs uppercase tracking-[0.3em] text-dorado">Categoría</p>
        <h1 className="font-serif text-4xl leading-tight text-marfil md:text-5xl">{category}</h1>

        {posts.length === 0 ? (
          <p className="mt-10 text-sm text-gris">Todavía no hay artículos en esta categoría.</p>
        ) : (
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
