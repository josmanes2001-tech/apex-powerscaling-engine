@echo off
title ENRIQUECEDOR AUTONOMO APEX
pushd "%~dp0\.."
node src\scripts\interactiveEnricher.js
popd
pause
