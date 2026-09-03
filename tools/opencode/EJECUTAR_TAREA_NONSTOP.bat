@echo off
title OpenCode Non-Stop Autonomous Task Runner
color 0C
cd /d "C:\Users\Jose Luis\opencode-tools"

echo ===============================================================================
echo     OPENCODE - EJECUTOR DE TAREAS AUTONOMAS EN BUCLE (NON-STOP)
echo ===============================================================================
echo.
echo Este modo permite dejar a los agentes de OpenCode trabajando solos en bucle
echo hasta que completen la tarea, sin que se detengan.
echo.
echo Puedes escribir tu tarea ahora, o presionar ENTER para usar TAREA_ACTIVA.txt:
set /p USER_TASK="Escribe la mision (o presiona ENTER): "

echo.
echo Iniciando bucle autonomo supervisado...
powershell -NoProfile -ExecutionPolicy Bypass -File "runner_autonomo.ps1" -Prompt "%USER_TASK%"

echo.
echo ===============================================================================
echo   EJECUCION FINALIZADA. Revisa los logs en opencode-tools\logs
echo ===============================================================================
pause
