@echo off
title CONFIGURAR OPENROUTER EN OPENCODE
chcp 65001 >nul
set PATH=%APPDATA%\npm;%PATH%
cd /d "%~dp0"
pushd "%~dp0\.."

echo ========================================================
echo   CONFIGURACION DE CLAVES OPENROUTER (OPENCODE)
echo ========================================================
echo.
echo Estado actual de credenciales:
npx opencode-ai providers list
echo.
echo ========================================================
echo Para vincular o actualizar tu clave API de OpenRouter:
echo ========================================================
echo 1. Selecciona OpenRouter en el siguiente menu.
echo 2. Pega tu API Key de OpenRouter (comienza por sk-or-...).
echo.
npx opencode-ai providers login
popd
pause