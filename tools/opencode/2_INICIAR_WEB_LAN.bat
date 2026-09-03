@echo off
title OpenCode Web - Servidor Red Local y LAN
color 0B
cd /d "C:\Users\Jose Luis"

echo ===============================================================================
echo     OPENCODE WEB - ACCESO LOCAL Y RED (MINI PC + ESTE PC)
echo ===============================================================================
echo.

rem Deteccion automatica de rutas
if exist "D:\Vault Obsidian\apex-powerscaling-engine" (
    echo [*] Entorno activo: LOCAL MINI PC (D:\Vault Obsidian\apex-powerscaling-engine)
) else (
    echo [*] Entorno activo: RED SMB / ESTE PC (Z:\apex-powerscaling-engine)
)

netstat -ano | findstr :4096 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo [*] Servidor activo y escuchando en 0.0.0.0:4096.
) else (
    echo [*] Iniciando servidor OpenCode Web...
    start /min "OpenCode-Web-Server" cmd /c "opencode web --port 4096 --hostname 0.0.0.0"
    timeout /t 3 /nobreak >nul
)

echo.
echo ===============================================================================
echo   ENLACES DISPONIBLES:
echo ===============================================================================
echo   - Local (este equipo):            http://localhost:4096
echo   - Red Local (desde otro PC/movil): http://192.168.1.51:4096
echo   - Tailscale VPN:                  http://100.100.160.124:4096
echo ===============================================================================
echo.
echo Abriendo en navegador...
start http://localhost:4096

echo.
echo Presiona cualquier tecla para salir de este panel informativo.
pause >nul
