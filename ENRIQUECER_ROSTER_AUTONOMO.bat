@echo off
title ENRIQUECEDOR AUTONOMO APEX
cd /d "%~dp0"
node src\scripts\interactiveEnricher.js
pause