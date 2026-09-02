@echo off
title OPENCODE AGENTE IA (TERMINAL)
chcp 65001 >nul
set PATH=%APPDATA%\npm;%PATH%
pushd "%~dp0\.."

echo ========================================================
echo   💻 INICIANDO OPENCODE TUI (TERMINAL INTERACTIVA)
echo ========================================================
echo Conectado con OpenRouter API Key configurada.
echo Escribe tus instrucciones para modificar archivos.
echo.

where opencode >nul 2>nul
if %errorlevel% equ 0 (
    opencode .
) else (
    npx opencode-ai .
)
popd
pause