import { ImageOff } from "lucide-react";
import { cx } from "@/lib/utils";

/**
 * Placeholder elegante para cuando una imagen referenciada todavía no existe.
 * Indica exactamente qué archivo falta, sin romper la interfaz.
 */
export function PlaceholderImage({ file, label, className }: { file: string; label?: string; className?: string }) {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-center gap-3 border border-dorado/30 bg-negro/60 text-center",
        className
      )}
    >
      <ImageOff className="h-8 w-8 text-dorado/60" strokeWidth={1.25} />
      <p className="px-6 text-xs uppercase tracking-[0.2em] text-gris">
        {label ?? "Imagen pendiente"}
      </p>
      <code className="px-6 text-[11px] text-gris-claro/70">{file}</code>
    </div>
  );
}
