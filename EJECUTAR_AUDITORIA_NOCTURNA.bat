@echo off
title AUDITORIA NOCTURNA CONTINUA - APEX
cd /d "%~dp0"
node src\scripts\interactiveEnricher.js
pause