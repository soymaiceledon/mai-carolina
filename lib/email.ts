/**
 * Email transaccional vía Resend (mismo proveedor que ya usa GameLobby).
 * Si no hay RESEND_API_KEY / MAIL_FROM configuradas, no hace nada — el
 * formulario sigue guardando el lead normalmente, solo no llega el correo.
 * Activar: agrega ambas env vars y este envío se activa solo, sin tocar código.
 */

type WelcomeEmailInput = {
  name: string;
  email: string;
};

export async function sendWelcomeEmail({ name, email }: WelcomeEmailInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;

  if (!apiKey || !from) return false;

  const firstName = name.trim().split(" ")[0] || name.trim();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: email,
      subject: "Tu diagnóstico gratuito está en camino",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #0B0B0B;">
          <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 11px; color: #C6A15B;">Mai Carolina</p>
          <h1 style="font-size: 22px; margin: 12px 0;">Hola ${firstName},</h1>
          <p style="line-height: 1.6;">
            Gracias por pedir tu diagnóstico gratuito. En los próximos días te escribo con la hoja
            de ruta inicial para tu negocio: qué trabajar primero entre oferta, marca, contenido,
            web, automatización o captación.
          </p>
          <p style="line-height: 1.6;">
            Mientras tanto, si quieres avanzar más rápido, puedes agendar una asesoría 1 a 1
            conmigo.
          </p>
          <p style="margin-top: 24px;">— Mai Carolina</p>
        </div>
      `,
    }),
  });

  return res.ok;
}
