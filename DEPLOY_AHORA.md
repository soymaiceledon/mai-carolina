# 🚀 DEPLOY EN VERCEL - AHORA (10 minutos)

## PASO 1: Ver localmente primero

Abre Terminal y corre:
```bash
cd ~/mai-carolina
npm install
npm run dev
```

Luego en navegador: **http://localhost:3000/mainexus**

Deberías ver la página con dos tabs (Profesionales / Emprendedores).

---

## PASO 2: Configurar API Keys

Abre el archivo `.env.local` que creé en tu carpeta mai-carolina.

### 2A - Resend API Key (Email)
1. Ve a https://resend.com
2. Click "Sign up"
3. Completa email + contraseña + verifica
4. Dashboard → API Keys → "Create API Key"
5. Copia la key (empieza con `re_`)
6. Pega en `.env.local` aquí:
   ```
   RESEND_API_KEY=re_XXXXX_aqui_tu_key
   ```

### 2B - Stripe Keys (Pagos)
1. Ve a https://stripe.com
2. Click "Sign up"
3. Completa datos
4. Dashboard → Developers (arriba) → API Keys
5. Verás dos keys:
   - **Secret Key** (empieza con `sk_test_`)
   - **Publishable Key** (empieza con `pk_test_`)
6. Copia en `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_XXXXX
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXX
   ```

**Guarda `.env.local` después de cambios.**

---

## PASO 3: Deploy en Vercel

1. Ve a https://vercel.com
2. Click "Sign up"
3. Opción: "Continue with GitHub"
   - Conecta tu cuenta GitHub
4. Después del login:
   - Click "New Project"
   - Busca y selecciona `mai-carolina`
   - Click "Import"
5. **Environment Variables** (importante):
   - En la página de configuración del proyecto, busca "Environment Variables"
   - Agrega estas 3:
     ```
     RESEND_API_KEY = re_tu_key
     STRIPE_SECRET_KEY = sk_test_tu_key
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_tu_key
     ```
6. Click "Deploy"

**Espera 2-3 minutos.**

Vercel te dará una URL como: `https://mai-carolina-xxxxx.vercel.app`

---

## PASO 4: Probar en Vercel

Abre: `https://tuurl.vercel.app/mainexus`

Deberías ver la página.

---

## OPCIONAL: Dominio Personalizado

En Vercel Dashboard → Settings → Domains:
- Click "Add Domain"
- Opción A: Comprar desde Vercel
- Opción B: Apuntar dominio propio

---

## ✅ Checklist

- [ ] Creé cuenta Resend
- [ ] Copié Resend API Key en `.env.local`
- [ ] Creé cuenta Stripe
- [ ] Copié Stripe keys en `.env.local`
- [ ] Guardé `.env.local`
- [ ] Creé cuenta Vercel
- [ ] Importé proyecto `mai-carolina`
- [ ] Agregué las 3 env vars en Vercel
- [ ] Hice click "Deploy"
- [ ] Esperé 2-3 minutos
- [ ] Probé en navegador: `https://tu-url.vercel.app/mainexus`

---

## 🆘 Si algo falla

**Error: "No tienes GitHub"**
→ Crea cuenta en https://github.com primero

**Error: "Environment variables not found"**
→ En Vercel, ve a Settings → Environment Variables
→ Verifica que las 3 keys estén ahí
→ Redeploy

**Error en email de Resend**
→ Verifica RESEND_API_KEY esté correcto
→ En Resend, verifica que el dominio esté verificado (si es producción)

**Error en pagos de Stripe**
→ Verifica que uses claves `sk_test_` y `pk_test_` (no `sk_live_`)
→ En Stripe, ve a Developers → API Keys

---

**¿Hiciste todo? Avísame cuando esté en Vercel y te muestro cómo probar los pagos.**
