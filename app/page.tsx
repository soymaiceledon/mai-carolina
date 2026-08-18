import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MAI NEXUS - Página de venta profesional",
  description: "Descubre MAI NEXUS, la solución de IA para automatizar tu negocio",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">MAI NEXUS</h1>
        <p className="text-xl text-blue-200 mb-8">Página de venta profesional con IA</p>

        <div className="grid md:grid-cols-2 gap-8 my-16">
          <Link
            href="/mainexus"
            className="p-8 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white"
          >
            <h2 className="text-2xl font-bold mb-2">📱 Ver Landing</h2>
            <p>Accede a la landing page completa de MAI NEXUS</p>
          </Link>

          <div className="p-8 rounded-lg bg-gray-800 text-gray-300">
            <h2 className="text-2xl font-bold mb-2">🚀 Próximamente</h2>
            <p>Rutas de API y funcionalidades adicionales</p>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          ✅ Landing page activa | ⏳ API routes en desarrollo
        </p>
      </div>
    </div>
  );
}
