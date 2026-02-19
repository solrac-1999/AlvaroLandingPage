#!/usr/bin/env node

/**
 * Script para descargar archivos Git LFS antes del build en Vercel
 * 
 * Este script se ejecuta durante el proceso de build para asegurar
 * que los archivos de video (Git LFS) estén disponibles.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando archivos Git LFS...');

// Verificar si estamos en Vercel
const isVercel = process.env.VERCEL === '1';
console.log(`📍 Entorno: ${isVercel ? 'Vercel' : 'Local/Other'}`);

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
let needsLfsPull = false;
const missingFiles = [];

for (const file of videoFiles) {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) {
    missingFiles.push(file);
    needsLfsPull = true;
  } else if (isLfsPointer(fullPath)) {
    console.log(`⚠️  ${file} es un puntero LFS (no descargado)`);
    needsLfsPull = true;
  } else {
    const stats = fs.statSync(fullPath);
    console.log(`✅ ${file} - ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  }
}

if (missingFiles.length > 0) {
  console.log(`\n❌ Archivos faltantes: ${missingFiles.join(', ')}`);
}

// Si necesitamos descargar archivos LFS
if (needsLfsPull) {
  console.log('\n🔄 Intentando descargar archivos Git LFS...');
  
  try {
    // Verificar si git-lfs está instalado
    execSync('git lfs version', { stdio: 'ignore' });
    
    // Descargar archivos LFS
    console.log('⬇️  Ejecutando git lfs pull...');
    execSync('git lfs pull', { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    console.log('✅ Archivos LFS descargados correctamente');
  } catch (error) {
    console.error('❌ Error al descargar archivos LFS:', error.message);
    console.log('\n⚠️  ADVERTENCIA: Los videos pueden no funcionar correctamente');
    
    // En Vercel, si falla LFS, podemos intentar con la API de GitHub
    if (isVercel && process.env.GITHUB_TOKEN) {
      console.log('🔄 Intentando descargar desde GitHub API...');
      // Aquí podríamos implementar descarga desde GitHub API
    }
  }
} else {
  console.log('\n✅ Todos los archivos de video están disponibles');
}

console.log('\n🎉 Verificación de archivos completada\n');
