@echo off
title AUDITORIA NOCTURNA Y ENRIQUECEDOR AUTÓNOMO — APEX
chcp 65001 >nul
pushd "%~dp0\.."
node src/scripts/interactiveEnricher.js
popd
