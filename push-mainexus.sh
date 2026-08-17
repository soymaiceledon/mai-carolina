#!/bin/bash
set -e

# Ir a mai-carolina
cd ~/mai-carolina

echo "🚀 PUSHING MAI NEXUS TO GITHUB 🚀"
echo ""

# Limpiar locks si existen
echo "🔧 Limpiando locks de git..."
find .git -name "*.lock" -delete 2>/dev/null || true
sleep 1

# Configurar git
echo "⚙️  Configurando git..."
git config user.name "Mai Celedon"
git config user.email "soymaiceledon@gmail.com"

# Verificar estado
echo ""
echo "📊 Estado del repositorio:"
git status | head -15

# Hacer commit si hay cambios
echo ""
echo "📝 Intentando hacer commit..."
if git diff-index --quiet HEAD --; then
    echo "✅ No hay cambios nuevos para committear (ya está sincronizado)"
else
    git add -A
    git commit -m "✨ MAI NEXUS: Landing page + auditor digital + pricing + email + Stripe"
    echo "✅ Commit realizado exitosamente"
fi

# Hacer push
echo ""
echo "🚀 Haciendo push a GitHub..."
git push origin main -v

echo ""
echo "✅ ¡PUSH COMPLETADO EXITOSAMENTE!"
echo "🎉 MAI NEXUS está en GitHub"
echo "⏳ Vercel está reconstruyendo automáticamente..."
echo ""
echo "Presiona cualquier tecla para cerrar esta ventana..."
read
