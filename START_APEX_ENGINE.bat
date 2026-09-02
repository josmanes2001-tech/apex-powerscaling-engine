@echo off
title APEX Engine - Servidor de Inicio
color 0A
chcp 65001 >nul
echo ========================================================
echo        INICIANDO MOTOR APEX POWERSCALING ENGINE
echo ========================================================
echo.

pushd "%~dp0"

echo [0/2] Liberando puertos y cerrando procesos huérfanos...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001 ^| findstr LISTENING 2^>nul') do taskkill /F /PID %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING 2^>nul') do taskkill /F /PID %%a >nul 2>&1

echo [1/2] Iniciando Servidor Backend y API (Puerto 3001)...
start "APEX Backend & Web (3001)" cmd /k "node server.cjs"

echo [2/2] Iniciando Servidor Frontend (Puerto 5173)...
start "APEX Frontend Dev (5173)" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul

echo Abriendo navegador en http://localhost:5173 ...
start http://localhost:5173

echo.
echo ========================================================
echo   ¡APEX Engine está en ejecución!
echo   Local: http://localhost:5173/
echo ========================================================
echo.
popd
pause
