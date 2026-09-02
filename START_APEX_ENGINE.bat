@echo off
title APEX Engine
color 0A
cd /d "%~dp0"

echo ========================================================
echo        INICIANDO APEX POWERSCALING ENGINE
echo ========================================================
echo.

echo [1/2] Iniciando Servidor Backend (Puerto 3001)...
start "APEX Backend (3001)" cmd /k "node server.cjs"

echo [2/2] Iniciando Servidor Frontend (Puerto 5173)...
start "APEX Frontend (5173)" cmd /k "npx vite --host 0.0.0.0 --port 5173"

echo.
echo Esperando a que el servidor de desarrollo cargue...
timeout /t 10 /nobreak >nul

echo Abriendo navegador en http://localhost:5173 ...
start http://localhost:5173

echo.
echo ========================================================
echo   APEX Engine esta en ejecucion
echo   Local: http://localhost:5173/
echo   (Si el navegador carga antes de tiempo, pulsa F5)
echo ========================================================
echo.
pause
