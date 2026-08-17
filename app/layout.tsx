import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.domain,
    siteName: site.name,
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-negro text-marfil antialiased">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
