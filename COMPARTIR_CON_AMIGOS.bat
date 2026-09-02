@echo off
title APEX Engine - Enlace Seguro para Amigos (Cloudflare)
color 0B
echo ========================================================
echo        GENERANDO ENLACE SEGURO GLOBAL PARA AMIGOS
echo ========================================================
echo.

cd /d "Z:\apex-powerscaling-engine"

echo [1/2] Verificando que el servidor APEX este encendido...
netstat -ano | findstr :3001 >nul
if %errorlevel% neq 0 (
    echo El servidor no estaba encendido. Iniciando servidor en puerto 3001...
    start /min "APEX Server" cmd /k "node server.cjs"
    timeout /t 2 /nobreak >nul
)

echo [2/2] Creando tunel HTTPS seguro de Cloudflare...
echo.
echo ========================================================
echo  COPIA EL ENLACE QUE APARECE ABAJO (https://...trycloudflare.com)
echo  Y PASASELO A TUS AMIGOS POR WHATSAPP / DISCORD / TELEGRAM
echo ========================================================
echo.
echo Presiona Ctrl+C para apagar el tunel cuando terminen de jugar.
echo.

cloudflared.exe tunnel --url http://localhost:3001
popd
pause
