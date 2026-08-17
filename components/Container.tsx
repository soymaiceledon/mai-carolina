import { cx } from "@/lib/utils";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return <As className={cx("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>{children}</As>;
}
