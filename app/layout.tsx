import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
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
    "Procesos que tardaban días, ahora en 1 hora. Página web, identidad digital y sistemas IA personalizados para profesionales y pequeñas empresas. 1,200+ clientes confían en nosotros.",
  keywords: [
    "IA",
    "automatización",
    "página web profesional",
    "identidad digital",
    "agencia digital",
    "consultoría IA",
    "landing page",
    "servicios digitales",
  ],
  authors: [{ name: "MAI NEXUS", url: "https://mai-nexus.com" }],
  openGraph: {
    title: "MAI NEXUS | Automatiza tu negocio con IA",
    description: "Procesos que tardaban días, ahora en 1 hora. Automatización inteligente para tu negocio.",
    url: "https://mai-nexus.com",
    siteName: "MAI NEXUS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAI NEXUS | Automatiza tu negocio con IA",
    description: "Procesos que tardaban días, ahora en 1 hora.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
