#!/bin/bash
cd ~/mai-carolina

echo "🔧 PUSHING STRIPE FIX TO GITHUB 🔧"
echo ""

# Actualizar package.json con stripe
git add package.json
git commit -m "🔧 Fix: Agregar dependency 'stripe' para payment routes" || echo "Ya committeado"

# Push
echo "🚀 Haciendo push..."
git push origin main -v

echo ""
echo "✅ FIX COMPLETADO - Vercel se reconstruirá en 2-3 minutos"
echo ""
echo "Presiona cualquier tecla para cerrar..."
read
