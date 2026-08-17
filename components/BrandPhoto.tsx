import fs from "fs";
import path from "path";
import Image from "next/image";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { cx } from "@/lib/utils";

/**
 * Envuelve next/image con la lógica de "si el archivo no existe, muestra
 * un placeholder elegante" que pide el brief, en vez de romper el layout.
 */
export function BrandPhoto({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes,
  objectPosition = "top",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (!exists) {
    return <PlaceholderImage file={src} label={alt} className={cx("aspect-[4/5] w-full", className)} />;
  }

  return (
    <div className={cx("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
        style={{ objectPosition }}
        className={cx("object-cover", imgClassName)}
      />
    </div>
  );
}
