import Link from "next/link";
import { mainexus } from "@/config/mainexus";

export const metadata = {
  title: "Descarga confirmada | MAI NEXUS",
};

export default function GraciasPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: mainexus.colors.midnight }}
    >
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div
            className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: mainexus.colors.magenta }}
          >
            <span className="text-3xl">✓</span>
          </div>

          <h1 className="text-4xl font-bold mb-4" style={{ color: mainexus.colors.white }}>
            ¡Descarga Confirmada!
          </h1>

          <p className="text-xl mb-8" style={{ color: mainexus.colors.gray }}>
            Te enviamos los 10 prompts a tu email. Revisa tu bandeja de entrada (o spam).
          </p>

          <div className="bg-opacity-20 p-8 rounded-lg mb-8" style={{ backgroundColor: mainexus.colors.lilac }}>
            <p className="font-semibold mb-4" style={{ color: mainexus.colors.white }}>
              Próximos pasos:
            </p>
            <ol className="text-left space-y-3 max-w-md mx-auto">
              <li style={{ color: mainexus.colors.gray }}>
                <strong>1. Descarga el PDF</strong> - Tendrás los 10 prompts listos
              </li>
              <li style={{ color: mainexus.colors.gray }}>
                <strong>2. Copia uno</strong> - Prueba HOY en tu trabajo
              </li>
              <li style={{ color: mainexus.colors.gray }}>
                <strong>3. Ve los resultados</strong> - En tu próxima reunión
              </li>
            </ol>
          </div>

          <p style={{ color: mainexus.colors.gray }} className="mb-8">
            ¿Quieres aprender más sobre IA para tu rol?
          </p>

          <Link href="/mainexus">
            <button
              className="px-8 py-4 rounded-lg font-bold text-lg transition hover:opacity-90"
              style={{
                backgroundColor: mainexus.colors.magenta,
                color: mainexus.colors.white,
              }}
            >
              Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
