# Mai Carolina — Web de marca personal

Next.js 16 (App Router) + TypeScript + Tailwind v4. Editorial tech luxury: negro
`#0B0B0B`, marfil `#F5F1E8`, gris `#8A8A8A`, dorado `#C6A15B`. Títulos en Playfair
Display, texto en DM Sans.

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Para producción:

```bash
npm run build
npm run start
```

## Estructura

```
app/                    páginas (App Router)
  page.tsx              inicio
  sobre-mi/ servicios/ reto-10-dias/ asesoria/ recursos-gratis/
  blog/ blog/[slug]/ blog/categoria/[categoria]/
  contacto/ privacidad/ terminos/ gracias/
  api/lead/ api/contact/    captura de formularios (simulada, ver lib/leads.ts)
  sitemap.ts robots.ts icon.tsx not-found.tsx loading.tsx
components/             UI reutilizable (Header, Footer, Logo, forms, secciones del home en components/sections/)
config/site.ts          ← TODO lo editable: nombre, contacto, precios, redes, textos, imágenes
data/                    servicios, reto, testimonios, recursos, blog (arrays editables)
lib/                     utils, slugs, storage de leads
public/images/           fotos reales de marca
```

## Qué editar y dónde

| Quiero cambiar… | Archivo |
|---|---|
| WhatsApp, email, Calendly, redes sociales | `config/site.ts` → `contact` / `social` |
| Precios (reto, asesoría) | `config/site.ts` → `pricing` |
| Textos de SEO / meta | `config/site.ts` → `seo` |
| Servicios y su contenido | `data/services.ts` |
| Calendario del reto de 10 días, bonos, FAQ | `data/challenge.ts` |
| Testimonios (hay 3 placeholders marcados como pendientes) | `data/testimonials.ts` |
| Recursos gratuitos (solo el diagnóstico está "disponible") | `data/resources.ts` |
| Artículos del blog (los 3 actuales son de demostración) | `data/blog.ts` |
| Fotos | ver siguiente sección |
| Logo | `components/Logo.tsx` (ver siguiente sección) |

## Imágenes

Las fotos reales de marca ya están en `public/images/` y cada una se usa **una
sola vez** en todo el sitio (sin repetir):

| Archivo | Usada en |
|---|---|
| `mai-office.png` | Hero del inicio |
| `mai-conferencia.png` | Sección Autoridad (inicio) |
| `mai-office-hero.png` | Sección Autoridad (inicio) |
| `mai-podcast.png` | Sección Podcast (inicio) |
| `mai-reto-10-dias.png` | Teaser del reto (inicio) |
| `mai-reto-page-hero.png` | Hero de `/reto-10-dias` |
| `mai-about.png` | `/sobre-mi` |

Si reemplazas una foto, mantén el mismo nombre de archivo (o actualiza la ruta
en `config/site.ts` → `images`). Si una imagen referenciada no existe (por
ejemplo `public/images/blog/*.jpg`, usadas por los artículos de demo), el
componente `BrandPhoto` muestra automáticamente un placeholder elegante con el
nombre del archivo que falta — no rompe el diseño. Este mismo componente es el
que usarías para añadir fotos reales al blog más adelante.

## Logo

`components/Logo.tsx` es una versión tipográfica temporal ("MAI" + descriptor)
construida con CSS, tal como pedía el brief. Para reemplazarla por un SVG real:

1. Agrega `public/images/logo-mai.svg` (fondo claro) y `logo-mai-white.svg` (fondo oscuro).
2. Sustituye el contenido de `Logo.tsx` por un `<Image src="..." />` que elija
   el archivo según el prop `variant`.

El favicon (`app/icon.tsx`) genera un ícono "MAI" dorado sobre negro con
`next/og` — reemplázalo por un `favicon.svg`/`icon.png` real cuando lo tengas.

## Captura de leads + correo de bienvenida

`app/api/lead/route.ts` y `app/api/contact/route.ts` guardan los envíos en
`data/leads.local.json` (ignorado por git) vía `lib/leads.ts` — sigue siendo un
stub de desarrollo, **no** una base de datos de producción, pero ya envía
correo real cuando hay credenciales:

1. Copia `.env.example` → `.env.local`.
2. Crea una cuenta en [resend.com](https://resend.com) (plan gratis alcanza
   para empezar), verifica tu dominio y genera un API key.
3. Completa `RESEND_API_KEY` y `MAIL_FROM` en `.env.local`.
4. Reinicia `npm run dev`. Sin tocar código, el formulario del diagnóstico
   gratis ya manda el correo de bienvenida (texto editable en `lib/email.ts`).

Mientras esas dos variables no existan, el formulario sigue guardando el lead
con normalidad — solo no se envía el correo (`welcomed: false` en la
respuesta). No hace falta decidir todavía si además quieres un CRM/newsletter
completo (ConvertKit, Brevo, MailerLite): eso es un paso aparte, más adelante,
para gestionar la lista — Resend aquí solo cubre el correo transaccional de
bienvenida.

## Calendly

En `config/site.ts` → `contact.calendlyUrl` hay un placeholder
(`"REEMPLAZAR_CON_URL_REAL"`). Mientras no lo cambies, `/asesoria` muestra un
bloque "Calendly pendiente de conectar" con un botón de contacto directo en su
lugar — apenas pongas la URL real (ej. `https://calendly.com/tuusuario/asesoria`),
el iframe se activa solo.

## Pagos (Stripe Payment Links)

**Reto de 10 días ($97)** — cobro directo con Stripe Payment Links, sin
backend:

1. En tu dashboard de Stripe: Payment Links → Create → precio fijo $97 USD.
2. Copia la URL y pégala en `config/site.ts` → `payments.retoPaymentLink`.
3. Los dos botones "Quiero entrar al reto" en `/reto-10-dias` usan ese link
   automáticamente. Mientras el valor siga en `"REEMPLAZAR..."`, los botones
   llevan a `/contacto` en su lugar (con un aviso visible, nunca un link roto).

**Asesoría 1 a 1 ($47)** — dos formas de cobrar, elige una:

- **Recomendada**: activa el cobro nativo de Calendly (Calendly → Integrations
  → Stripe, requiere plan Standard o superior). La persona paga al momento de
  agendar, en un solo paso, sin código adicional de mi parte.
- **Alternativa**: crea otro Payment Link en Stripe para $47 y complétalo en
  `payments.asesoriaPaymentLink`. Si prefieres este camino, dime y conecto un
  botón de "pagar antes de agendar" en `/asesoria` (hoy ese campo existe en la
  config pero todavía no está enlazado en la página).

Los otros dos servicios (Sistema digital base, Implementación premium) no
tienen precio fijo — sus CTA siguen yendo a `/contacto` para cotizar, que es
lo correcto mientras el alcance se defina por propuesta.

## SEO

`app/sitemap.ts` y `app/robots.ts` se generan automáticamente a partir de las
rutas y de `data/blog.ts`. Cada página exporta su propio `metadata` (título,
descripción, canonical). Actualiza `config/site.ts` → `domain` con el dominio
real antes de publicar — todo el `metadataBase`, sitemap y Open Graph se arman
a partir de ese valor.

## Estado del contenido

Todo lo marcado como pendiente es intencional (para no inventar datos):

- 3 testimonios con placeholder "Testimonio pendiente de aprobación."
- Cifras de autoridad (`config/site.ts` → `authorityStats`) en `null` hasta
  que tengas los números reales.
- 3 artículos de blog marcados como "Contenido de muestra — demostración."
- 5 de los 6 recursos gratuitos están en "Próximamente".
- Foto de portada de los artículos de blog: placeholder (no se reutilizó
  ninguna foto de marca para no repetir imágenes en el sitio).
