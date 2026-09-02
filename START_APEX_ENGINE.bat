@echo off
title APEX Engine - Servidor de Inicio
color 0A
echo ========================================================
echo        INICIANDO MOTOR APEX POWERSCALING ENGINE
echo ========================================================
echo.

pushd "%~dp0"

echo [0/2] Cerrando instancias previas y liberando puertos...
taskkill /F /IM node.exe >nul 2>&1

echo [1/2] Iniciando Servidor Backend y Web unificada (Puerto 3001)...
start "APEX Backend & Web (3001)" cmd /k "node server.cjs"

echo [2/2] Iniciando Servidor Frontend de Desarrollo (Puerto 5173)...
start "APEX Frontend Dev (5173)" cmd /k "npx vite --host 0.0.0.0 --port 5173"

timeout /t 3 /nobreak >nul

echo Abriendo navegador en http://localhost:5173 ...
start http://localhost:5173

echo.
echo ¡APEX Engine esta en ejecucion!
echo Puedes dejar las ventanas minimizadas o cerrarlas cuando termines.
echo Para APAGAR completamente la aplicacion, ejecuta STOP_APEX_ENGINE.bat
echo.
popd
pause
