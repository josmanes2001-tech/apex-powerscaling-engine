@echo off
title SINCRONIZAR TODO - APEX ENGINE
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================================
echo   SINCRONIZANDO APEX ENGINE (GITHUB + VERCEL)
echo ========================================================
echo.

echo [1/2] Guardando cambios y preparando commit limpio...
git add .
git commit -m "feat: sync y despliegue limpio" 2>nul

echo.
echo [2/2] Subiendo a GitHub...
git push origin main

echo.
node src/scripts/autoDeployVercel.js
pause
