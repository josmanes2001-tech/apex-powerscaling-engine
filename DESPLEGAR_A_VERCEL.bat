@echo off
title Sincronizador Apex Engine Vercel
color 0B
cd /d "%~dp0"

echo ========================================================
echo   SINCRONIZANDO APEX ENGINE (GITHUB + VERCEL)
echo ========================================================
echo.

echo [1/2] Guardando cambios locales...
git add .
git commit -m "feat: sync y despliegue limpio" 2>nul

echo [2/2] Subiendo a GitHub para despliegue automatico en Vercel...
git push origin main

echo.
echo ========================================================
echo   EXITO: Cambios enviados a GitHub
echo   Vercel actualizara la web en: https://apex-engine-six.vercel.app/
echo ========================================================
echo.
pause
