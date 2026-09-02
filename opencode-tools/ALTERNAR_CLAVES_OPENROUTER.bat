@echo off
title ALTERNAR CLAVES DE OPENROUTER — APEX
chcp 65001 >nul
pushd "%~dp0"
node src/scripts/alternarClavesOpenRouter.js
popd
pause
