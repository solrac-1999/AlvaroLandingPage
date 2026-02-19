#!/usr/bin/env node

/**
 * Script para manejar archivos Git LFS antes del build en Vercel
 * 
 * Si Git LFS falla, este script muestra instrucciones para migrar a archivos normales
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando archivos de video...\n');

// Lista de archivos de video esperados
const videoFiles = [
  'public/Hero.mp4',
  'public/Testimonio 1.mp4',
  'public/Testimonio 2.mp4',
  'public/Testimonio 3.mp4',
  'public/Testimonio 4.mp4',
  'public/Testimonio 5.mp4',
  'public/Testimonio 6.mp4',
  'public/Testimonio 7.mp4',
  'public/Testimonio 8.mp4',
];

// Verificar si los archivos son punteros LFS (archivos pequeños) o archivos reales
function isLfsPointer(filePath) {
  try {
    const stats = fs.statSync(filePath);
    // Si el archivo es menor a 1KB, probablemente es un puntero LFS
    if (stats.size < 1024) {
      const content = fs.readFileSync(filePath, 'utf8');
      return content.startsWith('version https://git-lfs.github.com/spec/v1');
    }
    return false;
  } catch (error) {
    return false;
  }
}

// Verificar estado de los archivos
let lfsPointersFound = false;
const missingFiles = [];

for (const file of videoFiles) {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) {
    missingFiles.push(file);
  } else if (isLfsPointer(fullPath)) {
    console.log(`❌ ${file} es un PUNTERO LFS (no el video real)`);
    lfsPointersFound = true;
  } else {
    const stats = fs.statSync(fullPath);
    console.log(`✅ ${file} - ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  }
}

console.log('');

// Si encontramos punteros LFS, mostrar solución
if (lfsPointersFound) {
  console.log('🚨 PROBLEMA DETECTADO: Los videos están en Git LFS');
  console.log('');
  console.log('💡 SOLUCIÓN: Debes migrar los videos de Git LFS a archivos normales.');
  console.log('');
  console.log('📋 Pasos a seguir LOCALMENTE (en tu computadora):');
  console.log('');
  console.log('1. Ejecuta el script de migración:');
  console.log('   bash scripts/migrate-from-lfs.sh');
  console.log('');
  console.log('2. O manualmente:');
  console.log('   git lfs untrack "*.mp4"');
  console.log('   git rm --cached public/*.mp4');
  console.log('   git add public/*.mp4');
  console.log('   git commit -m "Remove videos from Git LFS"');
  console.log('   git push');
  console.log('');
  console.log('⚠️  NOTA: Si tus videos son >100MB cada uno, GitHub rechazará el push.');
  console.log('   En ese caso, usa un CDN externo (Cloudinary, Mux, etc.)');
  console.log('');
  process.exit(1); // Fallar el build para que el usuario vea el mensaje
}

if (missingFiles.length > 0) {
  console.log(`❌ Archivos faltantes: ${missingFiles.join(', ')}`);
  process.exit(1);
}

console.log('✅ Todos los archivos de video están disponibles correctamente\n');
process.exit(0);
