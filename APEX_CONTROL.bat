@echo off
title APEX Engine - Panel de Control
:menu
cls
color 0B
echo ========================================================
echo        PANEL DE CONTROL - APEX POWERSCALING ENGINE
echo ========================================================
echo.
echo [1] ENCENDER APEX Engine (Backend 3001 + Frontend 5173 + Browser)
echo [2] APAGAR APEX Engine (Detener todos los procesos)
echo [3] REINICIAR APEX Engine (Apagar y volver a encender)
echo [4] Abrir pagina web en navegador (http://localhost:5173)
echo [5] Salir
echo.
set /p opt="Selecciona una opcion (1-5): "

if "%opt%"=="1" (
    call START_APEX_ENGINE.bat
    goto menu
)
if "%opt%"=="2" (
    call STOP_APEX_ENGINE.bat
    goto menu
)
if "%opt%"=="3" (
    echo Reiniciando APEX Engine...
    call STOP_APEX_ENGINE.bat
    timeout /t 2 /nobreak >nul
    call START_APEX_ENGINE.bat
    goto menu
)
if "%opt%"=="4" (
    start http://localhost:5173
    goto menu
)
if "%opt%"=="5" (
    exit
)

echo Opcion invalida.
timeout /t 1 /nobreak >nul
goto menu
