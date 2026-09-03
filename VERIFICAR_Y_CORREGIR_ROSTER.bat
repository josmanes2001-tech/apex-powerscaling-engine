@echo off
chcp 65001 > nul
cls
echo ================================================================
echo   🛡️ APEX POWER SCALING — VERIFICADOR Y AUTO-CORRECTOR CANÓNICO
echo ================================================================
echo.
echo Ejecutando validación integral sobre los 769 personajes...
node src/scripts/rosterCanonicalValidator.js
echo.
pause
