import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-11-20",
});

export async function POST(request: NextRequest) {
  try {
    const { planName, email } = await request.json();

    if (!planName || !email) {
      return NextResponse.json(
        { error: "Plan y email son requeridos" },
        { status: 400 }
      );
    }

    // Mapping de planes a precios de Stripe
    const planPrices: Record<string, number> = {
      basic: 2900, // $29 USD en centavos
      pro: 7900, // $79 USD
      premium: 14900, // $149 USD
    };

    const priceInCents = planPrices[planName.toLowerCase()];
    if (!priceInCents) {
      return NextResponse.json(
        { error: "Plan no válido" },
        { status: 400 }
      );
    }

    // Crear Payment Link con Stripe
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `MAI NEXUS - Plan ${planName}`,
              description:
                planName === "basic"
                  ? "Página web simple + soporte básico"
                  : planName === "pro"
                    ? "Página web + Lead magnet + Contenido IA"
                    : "Página web + Contenido + Acompañamiento estratégico",
            },
            recurring: {
              interval: "month",
              interval_count: 1,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        plan: planName,
        email: email,
      },
      customer_email: email,
    });

    return NextResponse.json(
      {
        success: true,
        url: paymentLink.url,
        linkId: paymentLink.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Error al procesar el pago" },
      { status: 500 }
    );
  }
}
