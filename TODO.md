# Plan de Mejora de Legibilidad y CTAs

## ✅ Problemas identificados y resueltos:

1. **Tema "blackyellow" tenía muy bajo contraste:**
   - ❌ Texto base-content: `#FFD700` (amarillo) sobre fondo `#0a0a0a`
   - ✅ Nuevo tema "darkmodern" con texto `#F5F5F5` (blanco cálido)

2. **Botones CTA con problemas visuales:**
   - ❌ Iconos con `bg-black` y texto amarillo (bajo contraste)
   - ✅ Iconos con `bg-white` y colores originales (WhatsApp verde, Instagram rosa)

## ✅ Cambios realizados:

### 1. `tailwind.config.ts`
- Renombrado tema de "blackyellow" a "darkmodern"
- Cambiado `base-content` de `#FFD700` a `#F5F5F5`
- Actualizados colores secundarios para mejor contraste

### 2. `src/config/config.ts`
- Actualizado `theme: "darkmodern"`

### 3. `src/config/config.types.ts`
- Agregado `"darkmodern"` al tipo Theme

### 4. `src/components/shipfast/CTA.tsx`
- Cambiado fondo de iconos de `bg-black` a `bg-white`
- Colores de iconos específicos:
  - WhatsApp: `#25D366` (verde oficial)
  - Email: `#4B5563` (gris oscuro)
  - Instagram: `#E4405F` (rosa oficial)
- Mejorada visibilidad del texto con `text-primary-content` y `opacity-90`

## Resultado esperado:
- ✅ Texto legible con alto contraste (blanco sobre negro)
- ✅ CTAs visualmente atractivos y claros
- ✅ Iconos con colores de marca reconocibles
- ✅ Mantiene la identidad visual con amarillo como acento

