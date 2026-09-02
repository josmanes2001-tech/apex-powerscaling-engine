@echo off
title ESTADO DE ENRIQUECIMIENTO APEX
chcp 65001 >nul
pushd "%~dp0\.."

node src/scripts/checkAuditProgress.js

popd
echo.
pause
