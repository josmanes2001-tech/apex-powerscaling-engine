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

echo [2/2] Subiendo a repositorio conectado en Vercel (Nigh061tmare/Apex)...
git push vercel-origin main
git push origin main 2>nul

echo.
echo ========================================================
echo   EXITO: Cambios enviados al repositorio de Vercel
echo   Vercel actualizara la web en: https://apex-engine-six.vercel.app/
echo ========================================================
echo.
pause
