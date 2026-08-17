#!/bin/bash
cd ~/mai-carolina

echo "🔧 PUSHING FINAL STRIPE FIX TO GITHUB 🔧"
echo ""

# Actualizar el archivo con la corrección
git add app/api/mainexus-payment/route.ts

# Hacer commit
git commit -m "🔧 Fix TypeScript: Remover apiVersion inválida de Stripe client" || echo "Ya committeado"

# Push
echo "🚀 Haciendo push..."
git push origin main -v

echo ""
echo "✅ FIX COMPLETADO - Vercel se reconstruirá en 2-3 minutos"
echo ""
echo "Presiona cualquier tecla para cerrar..."
read
