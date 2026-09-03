@echo off
title APLICAR MEJORAS Y PARCHES AL ROSTER - APEX v2.0
cd /d "%~dp0"

echo =================================================================
echo   APLICADOR Y FUSIONADOR DE PARCHES DE ROSTER - APEX
echo =================================================================
echo.
echo Este proceso:
echo  1. Detecta todos los parches generados (apex_golden_enriched_*.json)
echo  2. Crea un backup de seguridad automatico de characters.js
echo  3. Fusiona de forma atomica formas, arsenales, sinergias y Ki
echo  4. Verifica la integridad sintactica del archivo resultante
echo.
pause

echo.
echo [*] Fusionando parches al roster maestro...
node src\scripts\applyEnrichmentPatches.js

if errorlevel 1 goto error_patch

echo.
echo =================================================================
echo   PARCHES APLICADOS CORRECTAMENTE
echo =================================================================
echo.
set /p DEPLOY="Deseas desplegar los cambios a Vercel ahora mismo? (S/N) [Enter=S]: "
if "%DEPLOY%"=="" set DEPLOY=S
if /i "%DEPLOY%"=="S" (
    echo.
    echo [*] Iniciando despliegue a Vercel en produccion...
    call DESPLEGAR_A_VERCEL.bat
)
goto fin

:error_patch
echo.
echo [ERROR] Ocurrio un error al fusionar los parches. Revisa el log superior.

:fin
pause