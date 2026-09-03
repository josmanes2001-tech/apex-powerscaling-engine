@echo off
title Actualizar Modelos y Diagnostico OpenCode
color 0E
cd /d "C:\Users\Jose Luis"

echo ===============================================================================
echo     SINCRONIZACION Y ACTUALIZACION DE MODELOS (OPENROUTER + GEMINI)
echo ===============================================================================
echo.

echo [1/3] Comprobando version y actualizando OpenCode si hay nueva release...
call opencode upgrade

echo.
echo [2/3] Verificando credenciales activas...
call opencode providers list

echo.
echo [3/3] Modelos recomendados y disponibles actualmente:
echo.
echo --- GEMINI (GOOGLE) ---
call opencode models google | findstr /i "gemini-2.5 gemini-3 flash pro"
echo.
echo --- OPENROUTER (GRATIS / FREE) ---
call opencode models openrouter | findstr /i "free"
echo.

echo ===============================================================================
echo   TODO AL DIA. Puedes abrir http://localhost:4096 para usarlos.
echo ===============================================================================
pause
