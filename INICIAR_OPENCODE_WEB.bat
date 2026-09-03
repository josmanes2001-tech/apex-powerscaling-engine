@echo off
title OpenCode Web - Antigravity Superior Server
color 0B
cd /d "C:\Users\Jose Luis"

echo ===============================================================================
echo     OPENCODE WEB - ANTIGRAVITY SUPERIOR & BRAINSTORM SUITE v2.0
echo ===============================================================================
echo.
echo [1/3] Detectando entorno y verificando servidor en puerto 4096...

rem Deteccion automatica de rutas de proyecto (Mini PC vs PC Principal)
if exist "D:\Vault Obsidian\apex-powerscaling-engine" (
    echo [*] Detectado entorno LOCAL MINI PC: D:\Vault Obsidian\apex-powerscaling-engine
    set "APEX_ACTIVE_PATH=D:\Vault Obsidian\apex-powerscaling-engine"
) else (
    echo [*] Detectado entorno RED SMB / ESTE PC: Z:\apex-powerscaling-engine
    set "APEX_ACTIVE_PATH=Z:\apex-powerscaling-engine"
)

netstat -ano | findstr :4096 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo [*] El servidor OpenCode ya esta corriendo activamente en el puerto 4096.
) else (
    echo [*] Arrancando servidor OpenCode Web (escuchando en 0.0.0.0:4096)...
    start /min "OpenCode-Web-Server" cmd /c "opencode web --port 4096 --hostname 0.0.0.0"
    timeout /t 3 /nobreak >nul
)

echo.
echo ===============================================================================
echo   ENLACES DE ACCESO EN VIVO:
echo ===============================================================================
echo   - Local (este PC o Mini PC):      http://localhost:4096
echo   - Red Local (desde otro PC/movil): http://192.168.1.51:4096
echo   - Remoto (via Tailscale VPN):      http://100.100.160.124:4096
echo ===============================================================================
echo.
echo [2/3] Agentes de Inteligencia Configurados:
echo   - build          : Antigravity Superior (Full Stack, terminal, verificacion)
echo   - brainstorm     : Super Brainstorming (MiniMax M3 Free / MoE divergente)
echo   - powerscaler    : APEX Grandmaster (Google Gemini 2.5 Flash / Ki Invariants)
echo   - deep_research  : Investigador Google & Web (Gemini Flash Latest)
echo   - nemotron_ultra : NVIDIA Nemotron 3 Ultra 550B Free (Razonamiento masivo)
echo.
echo [3/3] Abriendo interfaz en el navegador...
start http://localhost:4096

echo.
echo Puedes minimizar o dejar abierta esta consola. Presiona una tecla para salir.
pause >nul
