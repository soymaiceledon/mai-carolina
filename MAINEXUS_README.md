# 🚀 MAI NEXUS - Página de Venta

**Eslogan**: Conecta. Automatiza. Crece con IA.

---

## ✨ Estructura

```
/app/mainexus/
├── page.tsx                    → Página de venta (TECH/FUTURISTA ✓)
├── descarga-gratis/page.tsx    → Captura de leads (profesionales)
├── auditor/page.tsx            → Auditor digital interactivo ✓
└── gracias/page.tsx            → Página de agradecimiento

/config/
└── mainexus.ts                 → Configuración centralizada

/app/api/
├── mainexus-lead/route.ts      → Captura leads + Resend email ✓
└── mainexus-payment/route.ts   → Stripe Payment Links ✓

/lib/
└── leadmagnet-profesionales.ts → 10 Prompts en PDF
```

---

## 🎨 Identidad Visual

- **Colores**:
  - Magenta: `#F53D96` (primario, CTA)
  - Lilac: `#B894FF` (secundario)
  - Midnight: `#060A18` (fondo)
  - White: `#FFFFFF` (texto)
  - Gray: `#B7BDD1` (texto secundario)

- **Tipografía**: 
  - Títulos: Sora SemiBold
  - Texto: Inter Regular

---

## 📄 Contenido

### Profesionales (Curso $97)
- **Problema**: Confusión ChatGPT vs IA real
- **Solución**: Curso 30 días, paso a paso
- **Lead Magnet**: 10 prompts efectivos
- **Beneficios**:
  - Domina IA en 30 días
  - Sube tu valor en la empresa
  - Implementa sin depender de nadie

### Emprendedores (Página web $29-149/mes)
- **Problema**: Sin presencia digital
- **Solución**: Página web + Contenido + Acompañamiento
- **Lead Magnet**: Auditor digital (2 minutos)
- **Beneficios**:
  - Página que genera leads 24/7
  - Contenido sin trabajar
  - Creces sin depender de agencias

---

## 🔧 Cómo usar

### Desarrollo local
```bash
cd ~/mai-carolina
npm install
npm run dev
```

Abre: `http://localhost:3000/mainexus`

### Ver secciones
- `/mainexus` → Página principal
- `/mainexus/descarga-gratis` → Captura de leads
- `/mainexus/gracias` → Agradecimiento

---

## 📋 Próximos pasos

### URGENTE (AHORA)
- [x] ✓ Página profesional tech/futurista completa
- [x] ✓ Conectar Resend (emails) - Endpoint `/api/mainexus-lead` creado
- [x] ✓ Crear Payment Links Stripe - Endpoint `/api/mainexus-payment` creado
- [ ] Configurar variables de entorno (.env.local)
- [ ] Crear auditor digital (emprendedores)

### IMPORTANTE (SEMANA 1)
- [ ] Subir a Vercel
- [ ] Contenido redes (Mai Carolina videos)
- [ ] Primeras campañas email
- [ ] Pruebas E2E en localhost

---

## 💾 Editar contenido

Todos los textos, precios y colores están en `config/mainexus.ts`. Cambiar cualquier cosa ahí actualiza TODA la página automáticamente.

Ejemplo:
```typescript
// Cambiar precio del plan Basic
pricing: {
  plans: [
    {
      name: "Basic",
      price: 29, // ← CAMBIAR AQUÍ
      ...
    }
  ]
}
```

---

## 🎯 Meta

**Día 15 (del lanzamiento)**:
- Página en vivo ✓
- 2 Lead magnets funcionando ✓
- 5-10 primeras ventas capturadas
- $500-1,200 en ingresos iniciales

---

**Construido con**: Next.js 16 + TypeScript + Tailwind + React  
**Tema**: Oscuro + Gradientes (Magenta → Lilac)  
**Enfoque**: VENDER, no educar
