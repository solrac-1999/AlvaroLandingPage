# 🔧 Solución para Videos en Vercel

## Cambios Realizados

### 1. next.config.mjs
- ✅ Headers corregidos para archivos MP4
- ✅ Agregado `Accept-Ranges: bytes` para streaming
- ✅ Agregado `Cache-Control` para mejor performance
- ✅ Headers específicos para Hero.mp4 y Testimonios

### 2. Hero.tsx
- ✅ Agregado `playsInline` (requerido para iOS)
- ✅ Agregado `muted` (requerido para autoplay)
- ✅ Agregado `crossOrigin="anonymous"`
- ✅ Agregado `key` prop para forzar re-render
- ✅ Agregado manejo de errores `onError`

### 3. TestimonialsCarousel.tsx
- ✅ Agregados mismos atributos que Hero.tsx
- ✅ `key` prop dinámica basada en `currentIndex`

---

## ⚠️ Pasos Importantes para Vercel

### 1. Verificar que los videos estén en el repositorio
Asegúrate de que los archivos MP4 estén en la carpeta `public/` y sean trackeados por git:

```bash
# Verificar que los archivos existen
ls -la public/*.mp4

# Verificar que están en git
git ls-files | grep "\.mp4"
```

### 2. Configuración de Vercel (vercel.json)
Si tienes un archivo `vercel.json`, asegúrate de incluir:

```json
{
  "version": 2,
  "routes": [
    {
      "src": "/(.*\\.mp4)$",
      "headers": {
        "Accept-Ranges": "bytes",
        "Content-Type": "video/mp4",
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      "continue": true
    }
  ]
}
```

### 3. Verificar límites de tamaño en Vercel
Vercel tiene límites en el tamaño de archivos estáticos:
- **Hobby Plan**: 250MB por archivo
- **Pro Plan**: 500MB por archivo

Verifica que tus videos no excedan estos límites:
```bash
ls -lh public/*.mp4
```

### 4. Re-desplegar en Vercel
Después de hacer los cambios:

```bash
# Commit y push
git add .
git commit -m "Fix: Video playback on Vercel"
git push

# O si usas Vercel CLI
vercel --prod
```

### 5. Verificar en el navegador
Abre la consola del navegador (F12) y verifica:
- No hay errores 404 en los videos
- Los headers de respuesta incluyen `Accept-Ranges: bytes`
- El Content-Type es `video/mp4`

---

## 🔍 Debugging

Si los videos aún no funcionan:

1. **Verifica la URL directa**:
   ```
   https://tu-dominio.vercel.app/Hero.mp4
   ```

2. **Revisa los headers**:
   ```bash
   curl -I https://tu-dominio.vercel.app/Hero.mp4
   ```

3. **Verifica en móvil**:
   - iOS requiere `playsInline` y `muted` para autoplay
   - Algunos navegadores móviles bloquean videos grandes

4. **Alternativa: Usar CDN externo**:
   Si los videos son muy grandes, considera subirlos a:
   - Cloudinary
   - AWS S3 + CloudFront
   - Mux.com

---

## 📱 Compatibilidad

Los cambios realizados aseguran compatibilidad con:
- ✅ Chrome/Edge (desktop y móvil)
- ✅ Safari (desktop y iOS)
- ✅ Firefox
- ✅ Android Chrome
