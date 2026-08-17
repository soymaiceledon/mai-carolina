export function formatPrice(amount: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("es-PA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("es", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso)
  );
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
