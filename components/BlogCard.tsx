import Link from "next/link";
import { BrandPhoto } from "@/components/BrandPhoto";
import { formatDate } from "@/lib/utils";
import { slugifyCategory } from "@/lib/slug";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`}>
        <BrandPhoto src={post.image} alt={post.title} className="aspect-[3/2] w-full rounded-sm" />
      </Link>
      <div className="mt-4">
        <Link
          href={`/blog/categoria/${slugifyCategory(post.category)}`}
          className="focus-ring text-xs uppercase tracking-[0.15em] text-dorado hover:underline"
        >
          {post.category}
        </Link>
        <h3 className="mt-2 font-serif text-xl text-marfil">
          <Link href={`/blog/${post.slug}`} className="focus-ring hover:text-dorado">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gris-claro">{post.excerpt}</p>
        <p className="mt-3 text-xs text-gris">
          {formatDate(post.date)} · {post.readingTime} de lectura
        </p>
      </div>
    </article>
  );
}
