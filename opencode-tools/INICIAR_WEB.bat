@echo off
title OPENCODE WEB — APEX POWER SCALING
chcp 65001 >nul
pushd "%~dp0\.."
node src/scripts/launchOpenCodeWeb.js
popd
pause