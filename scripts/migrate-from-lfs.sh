#!/bin/bash

# Script para migrar videos de Git LFS a archivos normales
# Ejecutar esto LOCALMENTE antes de hacer push a Vercel

echo "🎬 Migrando videos de Git LFS a archivos normales..."

# 1. Quitar tracking de Git LFS
echo "1️⃣  Quitando tracking de Git LFS..."
git lfs untrack "*.mp4"
git lfs untrack "public/Testimonio*"

# 2. Eliminar archivos del índice de Git (pero mantenerlos en disco)
echo "2️⃣  Eliminando archivos del índice de Git..."
git rm --cached public/*.mp4 2>/dev/null || true

# 3. Re-agregar archivos como binarios normales
echo "3️⃣  Re-agregando archivos como binarios normales..."
git add public/*.mp4

# 4. Verificar estado
echo "4️⃣  Verificando estado..."
echo "Archivos listos para commit:"
git status --short public/*.mp4

echo ""
echo "✅ Listo! Ahora ejecuta:"
echo "   git commit -m \"Migrate videos from Git LFS to normal files\""
echo "   git push"
echo ""
echo "⚠️  Nota: Si tus videos son >100MB cada uno, esto fallará en GitHub."
echo "   En ese caso, usa un CDN externo (Cloudinary, Mux, etc.)"
