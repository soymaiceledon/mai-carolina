import { cx } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-dorado">{eyebrow}</p>
      )}
      <h2
        className={cx(
          "font-serif text-3xl leading-tight md:text-4xl",
          light ? "text-marfil" : "text-negro"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cx("mt-4 text-base leading-relaxed", light ? "text-gris-claro" : "text-gris")}>
          {description}
        </p>
      )}
    </div>
  );
}
