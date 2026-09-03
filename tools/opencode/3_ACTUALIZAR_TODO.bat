@echo off
title Actualizar OpenCode y Modelos
color 0E
cd /d "C:\Users\Jose Luis"

echo ===============================================================================
echo     ACTUALIZACION DE OPENCODE Y DIAGNOSTICO DE MODELOS
echo ===============================================================================
echo.

echo [1/4] Actualizando OpenCode a la ultima version...
call opencode upgrade

echo.
echo [2/4] Verificando credenciales de OpenRouter y Google...
call opencode providers list

echo.
echo [3/4] Modelos Gemini (Google):
call opencode models google | findstr /i "gemini-2.5 gemini-3 flash pro"

echo.
echo [4/4] Modelos OpenRouter Gratuitos (:free):
call opencode models openrouter | findstr /i "free"

echo.
echo ===============================================================================
echo   SISTEMA AL DIA.
echo ===============================================================================
pause
