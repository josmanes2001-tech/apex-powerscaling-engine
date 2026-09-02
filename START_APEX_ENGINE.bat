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
start "APEX Frontend (5173)" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul

echo Abriendo navegador en http://localhost:5173 ...
start http://localhost:5173

echo.
echo ========================================================
echo   APEX Engine esta en ejecucion
echo   Local: http://localhost:5173/
echo ========================================================
echo.
pause
