@echo off
title APEX Engine - Apagado
color 0C
echo ========================================================
echo        DETENIENDO SERVIDORES DE APEX ENGINE
echo ========================================================
echo.

echo [1/2] Cerrando procesos en puerto 3001 (Backend Node)...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001 ^| findstr LISTENING') do taskkill /f /pid %%a >nul 2>&1

echo [2/2] Cerrando procesos en puerto 5173 (Frontend Vite)...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do taskkill /f /pid %%a >nul 2>&1

echo.
echo ¡Servidores de APEX Engine DETENIDOS con exito!
echo.
pause
