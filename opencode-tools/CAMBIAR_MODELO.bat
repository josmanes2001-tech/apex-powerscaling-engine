@echo off
title CAMBIAR MODELO DE IA EN OPENCODE
chcp 65001 >nul
pushd "%~dp0\.."
node src/scripts/selectOpenCodeModel.js
popd
pause