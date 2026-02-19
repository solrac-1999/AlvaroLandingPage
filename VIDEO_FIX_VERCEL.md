# 🔧 Solución para Videos en Vercel

## 🚨 PROBLEMA PRINCIPAL IDENTIFICADO: Git LFS

Tus videos están almacenados en **Git LFS** (Large File Storage), lo que causa que no se descarguen correctamente durante el build en Vercel.

### Verificación:
```bash
git lfs ls-files
# Muestra: 7898e132ba * public/Hero.mp4
#          519a7599fe * public/Testimonio 1.mp4
#          etc...
```

---

## ✅ SOLUCIÓN COMPLETA IMPLEMENTADA

### 1. next.config.mjs
- Headers corregidos para archivos MP4
- Agregado `Accept-Ranges: bytes` para streaming
- Agregado `Cache-Control` para mejor performance

### 2. Hero.tsx & TestimonialsCarousel.tsx
- Agregado `playsInline` (requerido para iOS)
- Agregado `muted` (requerido para autoplay)
- Agregado `crossOrigin="anonymous"`
- Agregado `key` prop para forzar re-render
- Agregado manejo de errores `onError`

### 3. scripts/download-lfs.js (NUEVO)
Script que se ejecuta antes del build para descargar archivos Git LFS

### 4. package.json
Agregado script `prebuild` que ejecuta el download-lfs.js

### 5. vercel.json (NUEVO)
Configuración específica para Vercel con:
- `GIT_LFS_ENABLED: true`
- Headers correctos para videos
- Rutas específicas para archivos con espacios

---

## 🚀 PASOS PARA APLICAR LA SOLUCIÓN

### Paso 1: Commit y Push
```bash
git add next.config.mjs src/components/shipfast/Hero.tsx src/components/shipfast/TestimonialsCarousel.tsx scripts/download-lfs.js package.json vercel.json VIDEO_FIX_VERCEL.md
git commit -m "Fix: Video playback on Vercel - Git LFS support"
git push
```

### Paso 2: Configurar Variables de Entorno en Vercel (SI EL PREBUILD FALLA)

Si el script `prebuild` no puede descargar los archivos LFS, configura estas variables en tu dashboard de Vercel:

1. Ve a **Project Settings** → **Environment Variables**
2. Agrega:
   - `GIT_LFS_ENABLED` = `true`

### Paso 3: Alternativa - Deshabilitar Git LFS para los videos

Si el problema persiste, la solución más confiable es **quitar los videos de Git LFS**:

```bash
# 1. Quitar los archivos de Git LFS tracking
git lfs untrack "*.mp4"
git lfs untrack "public/Testimonio*"

# 2. Eliminar los archivos del índice de Git LFS
git rm --cached public/*.mp4

# 3. Re-agregar los archivos como archivos normales de git
git add public/*.mp4

# 4. Commit y push
git commit -m "Remove videos from Git LFS - track as normal files"
git push
```

**Nota**: Esto solo funciona si tus videos son menores a 100MB (límite de GitHub). Si son más grandes, usa la Opción 4.

---

## 🔍 DEBUGGING

### Verificar si los archivos son punteros LFS:
```bash
# Si el archivo es muy pequeño (< 1KB), es un puntero LFS
ls -lh public/Hero.mp4

# Ver contenido (debería mostrar texto, no datos de video)
head -c 200 public/Hero.mp4
```

### Verificar URL directa en Vercel:
```
https://tu-dominio.vercel.app/Hero.mp4
```

Debería descargar el video, no mostrar un archivo de texto pequeño.

### Revisar logs de build en Vercel:
En tu dashboard de Vercel, revisa los logs de build buscando:
- "Downloading LFS objects"
- "Smudge error"
- "Error loading video"

---

## 📱 Compatibilidad

Los cambios realizados aseguran compatibilidad con:
- ✅ Chrome/Edge (desktop y móvil)
- ✅ Safari (desktop y iOS)
- ✅ Firefox
- ✅ Android Chrome

---

## 🆘 Si Nada Funciona - Opción 4: CDN Externo

Si los videos son muy grandes (>100MB) o Git LFS sigue causando problemas, la mejor solución es usar un CDN externo:

### Opciones recomendadas:
1. **Cloudinary** (tiene plan gratuito)
2. **Mux.com** (especializado en video)
3. **AWS S3 + CloudFront**
4. **Vimeo** (para videos privados)

### Ejemplo con Cloudinary:
1. Sube tus videos a Cloudinary
2. Cambia las URLs en el código:
   ```tsx
   // Antes
   src="/Hero.mp4"
   
   // Después
   src="https://res.cloudinary.com/tu-cuenta/video/upload/v1234567890/Hero.mp4"
   ```

Esta es la solución más confiable para videos grandes en producción.
