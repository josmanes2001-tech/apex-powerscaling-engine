@echo off
title APEX Engine - Servidor de Inicio
color 0A
echo ========================================================
echo        INICIANDO MOTOR APEX POWERSCALING ENGINE
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/2] Iniciando Servidor Backend (Puerto 3001)...
start "APEX Backend (3001)" cmd /k "node server.cjs"

timeout /t 2 /nobreak >nul

echo [2/2] Iniciando Frontend Vite (Puerto 5173)...
start "APEX Frontend (5173)" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul

echo Abriendo navegador en http://localhost:5173 ...
start http://localhost:5173

echo.
echo ¡APEX Engine esta en ejecucion!
echo Puedes dejar las ventanas minimizadas o cerrarlas cuando termines.
echo Para APAGAR completamente la aplicacion, ejecuta STOP_APEX_ENGINE.bat
echo.
pause
