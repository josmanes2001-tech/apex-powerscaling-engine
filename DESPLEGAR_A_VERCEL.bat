@echo off
title SINCRONIZADOR APEX ENGINE
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================================
echo   SINCRONIZANDO APEX ENGINE (GITHUB + VERCEL)
echo ========================================================
echo.

git add .
git commit -m "feat: sync y despliegue limpio" 2>nul
git push origin main

echo.
echo ========================================================
echo   ✅ ¡CAMBIOS ENVIADOS A GITHUB CON ÉXITO!
echo   🌐 Vercel actualizará la web en https://apex-engine-six.vercel.app/
echo ========================================================
echo.
pause
