import Link from "next/link";
import { site } from "@/config/site";

/**
 * Versión tipográfica temporal del logo (construida con CSS).
 * Reemplazar por /public/images/logo-mai.svg (fondo claro) y
 * /public/images/logo-mai-white.svg (fondo oscuro) cuando estén listos —
 * este componente queda preparado para ese swap.
 */
export function Logo({
  variant = "gold",
  withDescriptor = true,
  className,
}: {
  variant?: "gold" | "negro";
  withDescriptor?: boolean;
  className?: string;
}) {
  const wordmarkColor = variant === "gold" ? "text-dorado" : "text-negro";
  const textColor = variant === "gold" ? "text-marfil" : "text-negro";

  return (
    <Link href="/" className={`group inline-flex flex-col leading-none ${className ?? ""}`}>
      <span className={`font-serif text-2xl tracking-[0.15em] ${wordmarkColor}`}>
        {site.shortName}
      </span>
      {withDescriptor && (
        <span className={`mt-1 text-[10px] uppercase tracking-[0.25em] ${textColor} opacity-70`}>
          {site.descriptor}
        </span>
      )}
    </Link>
  );
}
