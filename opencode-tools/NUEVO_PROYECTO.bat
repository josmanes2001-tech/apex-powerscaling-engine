@echo off
title CREAR NUEVO PROYECTO PARA OPENCODE
chcp 65001 >nul
pushd "%~dp0\.."
node src/scripts/createNewProject.js
popd
pause