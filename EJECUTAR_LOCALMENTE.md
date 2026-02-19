# 🚨 PASOS A EJECUTAR LOCALMENTE (en tu computadora)

El build en Vercel falló porque los videos siguen siendo punteros Git LFS. 
Debes migrarlos a archivos normales LOCALMENTE antes de hacer push.

---

## 📋 PASOS (Ejecutar en tu terminal local)

### 1. Ve a la carpeta del proyecto
```bash
cd /ruta/a/tu/proyecto
```

### 2. Ejecuta el script de migración
```bash
bash scripts/migrate-from-lfs.sh
```

### 3. Si el script funciona correctamente, verás:
```
🎬 Migrando videos de Git LFS a archivos normales...
1️⃣  Quitando tracking de Git LFS...
2️⃣  Eliminando archivos del índice de Git...
3️⃣  Re-agregando archivos como binarios normales...
4️⃣  Verificando estado...
✅ Listo! Ahora ejecuta:
   git commit -m "Migrate videos from Git LFS to normal files"
   git push
```

### 4. Haz commit y push
```bash
git commit -m "Migrate videos from Git LFS to normal files for Vercel"
git push
```

### 5. Re-deploy automático en Vercel
El push activará un nuevo deploy en Vercel y los videos funcionarán.

---

## ⚠️ Si los videos son >100MB cada uno

GitHub rechazará el push. En ese caso, tienes dos opciones:

### Opción A: Usar GitHub LFS (pero con configuración diferente)
NO recomendado porque ya vimos que no funciona bien con Vercel.

### Opción B: Usar CDN Externo (RECOMENDADO)
Sube los videos a Cloudinary y cambia las URLs:

1. Crea cuenta gratuita en https://cloudinary.com
2. Sube tus videos
3. Modifica las URLs en el código:

**Hero.tsx:**
```tsx
// Cambiar esto:
src="/Hero.mp4"
// Por esto:
src="https://res.cloudinary.com/TU_USUARIO/video/upload/v1234567890/Hero.mp4"
```

**TestimonialsCarousel.tsx:**
```tsx
// Cambiar esto:
src={`/Testimonio ${currentIndex + 1}.mp4`}
// Por esto:
src={`https://res.cloudinary.com/TU_USUARIO/video/upload/v1234567890/Testimonio ${currentIndex + 1}.mp4`}
```

---

## 🔍 Verificar que funcionó

Después del deploy en Vercel:
1. Abre tu sitio
2. Los videos deberían reproducirse
3. Si no funcionan, revisa la consola (F12) para errores

---

## ❓ Problemas comunes

### "bash: scripts/migrate-from-lfs.sh: No such file"
Asegúrate de estar en la carpeta raíz del proyecto:
```bash
pwd  # Debe mostrar .../alvaroPersonal
```

### "git lfs command not found"
Instala Git LFS:
```bash
# macOS
brew install git-lfs

# Windows
# Descarga desde https://git-lfs.github.com

# Linux
sudo apt-get install git-lfs
```

### Los archivos siguen siendo punteros después del script
Prueba manualmente:
```bash
git lfs untrack "*.mp4"
git rm --cached public/*.mp4
git add public/*.mp4
git status  # Debe mostrar los archivos como "modified" o "new file"
git commit -m "Remove videos from Git LFS"
git push
