@echo off
title APLICAR MEJORAS Y PARCHES AL ROSTER — APEX
chcp 65001 >nul
pushd "%~dp0\.."

echo =================================================================
echo   🛠️ APLICADOR DE MEJORAS Y PARCHES DE ROSTER — APEX
echo =================================================================
echo.
echo Este proceso leera todos los parches generados por la auditoria,
echo creara una copia de seguridad automatica de characters.js y
echo fusionara todas las formas, tecnicas, pasivas, combos y sinergias.
echo.
pause
node src/scripts/applyEnrichmentPatches.js

popd
pause
