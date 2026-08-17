import { formatPrice } from "@/lib/utils";

export function PriceTag({
  original,
  launch,
  currency = "USD",
  note,
  unit,
}: {
  original?: number;
  launch: number;
  currency?: string;
  note?: string;
  unit?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        {original && (
          <span className="text-lg text-gris line-through decoration-gris/70">
            {formatPrice(original, currency)}
          </span>
        )}
        <span className="font-serif text-4xl text-dorado">{formatPrice(launch, currency)}</span>
        {unit && <span className="text-sm text-gris">{unit}</span>}
      </div>
      {note && <p className="mt-2 text-xs text-gris">{note}</p>}
    </div>
  );
}
