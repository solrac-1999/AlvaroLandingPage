# Plan de Corrección de Paths

## Problema
- tsconfig.json tiene `"@/*": ["./src/*"]` 
- Pero los imports usan `@/libs/*` y `@/models/*`
- Los archivos están en `/libs/` y `/models/` (raíz), no en `/src/libs/` ni `/src/models/`

## Solución
Mover `libs` y `models` de la raíz a `/src/`

## Pasos
1. [ ] Mover `/libs/` a `/src/libs/`
2. [ ] Mover `/models/` a `/src/models/`
3. [ ] Verificar que funciona `yarn dev`

