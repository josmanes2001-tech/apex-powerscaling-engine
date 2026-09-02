@echo off
title SINCRONIZACION CONTINUA EN VIVO -> VERCEL (APEX ENGINE)
chcp 65001 >nul
pushd "%~dp0"
echo ========================================================
echo   INICIANDO WATCH & AUTO-DEPLOY A VERCEL EN VIVO
echo ========================================================
node src/scripts/watchAndSync.js
popd
pause