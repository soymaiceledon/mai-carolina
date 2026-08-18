import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAI CAROLINA - Experta en IA y Automatización",
  description: "Descubre cómo la IA puede transformar tu negocio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
