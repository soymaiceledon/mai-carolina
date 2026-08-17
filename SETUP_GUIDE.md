# 🚀 MAI NEXUS - Setup Guide

## 1️⃣ Variables de entorno (.env.local)

Copia `.env.example` a `.env.local` y configura:

```bash
cp .env.example .env.local
```

Luego edita `.env.local` con:

### Resend (Email)
1. Ve a [resend.com](https://resend.com) y crea cuenta
2. Genera API Key en Dashboard
3. Copia en `RESEND_API_KEY=sk_test_...`
4. Verifica dominio (para producción)

### Stripe (Pagos)
1. Ve a [stripe.com](https://stripe.com) y crea cuenta
2. Ve a Dashboard → API Keys
3. Copia Secret Key en `STRIPE_SECRET_KEY=sk_test_...`
4. Copia Publishable Key en `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...`

### URL Pública
```
NEXT_PUBLIC_URL=http://localhost:3000  # Dev
NEXT_PUBLIC_URL=https://mainexus.app   # Producción
```

---

## 2️⃣ Deploy a Vercel

### Opción A: CLI (Recomendado)
```bash
npm install -g vercel
vercel login
vercel
```

Responde las preguntas:
- Proyecto: `mai-carolina`
- Framework: `Next.js`
- Output directory: `.next`

### Opción B: Git + Vercel UI
1. Push a GitHub: `git push origin main`
2. Ve a [vercel.com](https://vercel.com)
3. Importa repo
4. Agrega variables de entorno en Settings → Environment Variables

### Configurar variables en Vercel
En Vercel Dashboard → Project Settings → Environment Variables:
- `RESEND_API_KEY` (secret)
- `STRIPE_SECRET_KEY` (secret)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (public)
- `NEXT_PUBLIC_URL` → tu dominio en producción

---

## 3️⃣ Dominio Personalizado

### Opción A: Comprar en Vercel
1. Vercel Dashboard → Domains
2. Comprar `mainexus.app` o `mainexus.io`

### Opción B: Traer dominio propio
1. Compra en GoDaddy/Namecheap
2. Vercel Dashboard → Domains → Add Custom Domain
3. Apunta nameservers a Vercel

---

## 4️⃣ Testing en localhost

```bash
# Instalar dependencias
npm install

# Crear .env.local con claves de test
# (usa claves de Stripe/Resend en modo test)

# Correr dev server
npm run dev

# Abre http://localhost:3000/mainexus
```

### Probar captura de leads
- Click en "Descarga guía gratis"
- Llena formulario
- Verifica console para debug (en dev)
- Email llegará si Resend está configurado

### Probar pagos
- Click en "Comenzar con Pro"
- Usa tarjeta test de Stripe: `4242 4242 4242 4242`
- Expira: cualquier fecha futura
- CVC: cualquier número de 3 dígitos

---

## 5️⃣ Configuración de Resend

### Verificar dominio (importante para producción)
1. Resend Dashboard → Domains
2. Agrega `mainexus.app`
3. Copia registros DNS
4. Pega en proveedor de dominio
5. Espera propagación (10-30 min)

### Personalizar emails
Edita `/app/api/mainexus-lead/route.ts` para:
- Cambiar `from` email
- Personalizar HTML del email
- Agregar tracking

---

## 6️⃣ Monitoreo en Producción

### Logs de Vercel
```bash
vercel logs
```

### Ver errores en Resend
Resend Dashboard → Emails → Buscar por email

### Ver pagos en Stripe
Stripe Dashboard → Payments → Ver transacciones

---

## 📝 Checklist antes de lanzar

- [ ] `.env.local` completado con claves reales
- [ ] Vercel deployment exitoso
- [ ] Dominio apuntando a Vercel
- [ ] Email de lead magnet funciona
- [ ] Stripe payment link redirige correctamente
- [ ] SSL/HTTPS en producción
- [ ] Analytics configurado (opcional)
- [ ] Backups de base de datos (si aplica)

---

## 🆘 Troubleshooting

### "Error connecting to Resend"
→ Verifica `RESEND_API_KEY` en `.env.local`
→ Asegúrate de que la API key sea válida

### "Invalid Stripe key"
→ Verifica que uses `sk_test_` para desarrollo
→ Usa `sk_live_` solo en producción
→ Revisa formato (sin espacios)

### "Domain not found"
→ Propaga DNS (puede tomar horas)
→ Verifica que nameservers apunten a Vercel
→ En Vercel: Settings → Domains → Ver estado

### "Email no llega"
→ Verifica carpeta spam
→ Resend: verifica dominio está verificado
→ En logs: busca error específico

---

**Preguntas? Revisa [docs.resend.com](https://docs.resend.com) o [stripe.com/docs](https://stripe.com/docs)**
