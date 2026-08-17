import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, type } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos" },
        { status: 400 }
      );
    }

    // Guardar lead en consola (en prod: base de datos)
    console.log("Lead capturado:", { name, email, type, timestamp: new Date() });

    // Enviar email con Resend si la API key está disponible
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "MAI NEXUS <noreply@mainexus.app>",
          to: email,
          subject: "✓ Tu guía de 10 prompts está lista",
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #060A18; color: #FFFFFF; }
                  .container { max-width: 600px; margin: 0 auto; padding: 2rem; }
                  .header { text-align: center; margin-bottom: 2rem; }
                  .content { background: rgba(245, 61, 150, 0.08); border: 1px solid rgba(245, 61, 150, 0.2); border-radius: 12px; padding: 2rem; margin-bottom: 2rem; }
                  .cta { text-align: center; margin: 2rem 0; }
                  .button { background: linear-gradient(90deg, #F53D96, #D4537E); color: white; padding: 1rem 2rem; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600; }
                  .footer { text-align: center; font-size: 0.85rem; color: #B7BDD1; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>MAI NEXUS</h1>
                    <p style="color: #B894FF;">Conecta. Automatiza. Crece con IA.</p>
                  </div>

                  <div class="content">
                    <h2 style="margin-top: 0;">¡Hola ${name}!</h2>
                    <p>Tu guía <strong>10 Prompts Efectivos para Profesionales</strong> está lista para descargar.</p>
                    <p>Estos prompts son diseñados específicamente para implementarlos en tu rol y ver resultados inmediatos.</p>
                  </div>

                  <div class="cta">
                    <a href="${process.env.NEXT_PUBLIC_URL || "https://mainexus.app"}/descargas/10-prompts.pdf" class="button">
                      Descargar PDF
                    </a>
                  </div>

                  <div style="background: rgba(184, 148, 255, 0.08); border: 1px solid rgba(184, 148, 255, 0.2); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
                    <h3 style="margin-top: 0; color: #B894FF;">Próximos pasos:</h3>
                    <ol style="color: #B7BDD1;">
                      <li>Descarga el PDF</li>
                      <li>Lee el primer prompt hoy</li>
                      <li>Cópialo y pruébalo en tu trabajo</li>
                      <li>Mañana: segundo prompt</li>
                    </ol>
                  </div>

                  <p style="color: #B7BDD1; font-size: 0.9rem;">
                    ¿Quieres aprender más? Tenemos un curso de 30 días que te enseña a implementar 3 sistemas de IA en tu empresa.
                  </p>

                  <div class="footer">
                    <p>MAI NEXUS © 2026 | mainexusllc@gmail.com</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
      } catch (emailError) {
        console.warn("Resend email error (non-blocking):", emailError);
        // No bloqueamos si hay error en email - el lead se captura igual
      }
    }

    return NextResponse.json(
      { success: true, message: "Lead capturado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
