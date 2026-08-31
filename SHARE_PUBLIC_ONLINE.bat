@echo off
title APEX ENGINE - TUNEL PUBLICO GRATIS
color 0b
echo ========================================================
echo   ⚡ APEX ENGINE - GENERADOR DE ENLACE PUBLICO ONLINE
echo ========================================================
echo.
echo Creando tunel seguro HTTPS para acceder desde cualquier movil o PC...
echo.
cd /d "%~dp0"
npx --yes untun@latest tunnel --port 5173
pause
