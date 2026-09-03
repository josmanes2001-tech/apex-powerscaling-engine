@echo off
chcp 65001 > nul
cls
echo ================================================================
echo   🛡️ APEX POWER SCALING — VERIFICADOR Y AUTO-CORRECTOR CANÓNICO
echo ================================================================
echo.
echo Ejecutando validación integral sobre la totalidad del roster activo...
node src/scripts/rosterCanonicalValidator.js
echo.
pause
