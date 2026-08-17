import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAI NEXUS | Automatiza tu negocio con IA",
  description:
    "Procesos que tardaban días, ahora en 1 hora. Página web, identidad digital y sistemas IA personalizados. 1,200+ profesionales confían en nosotros.",
  keywords: [
    "IA",
    "automatización",
    "página web",
    "identidad digital",
    "agencia digital",
    "consultoría IA",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${sora.variable} ${inter.variable} bg-slate-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
