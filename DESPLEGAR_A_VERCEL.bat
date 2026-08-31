@echo off
title DESPLEGAR APEX A VERCEL
color 0a
echo ========================================================
echo   ?? DESPLEGANDO APEX ENGINE A VERCEL (819 LUCHADORES)
echo ========================================================
echo.
cd /d "%~dp0"
echo Subiendo el bundle de 819 personajes a https://apex-engine-six.vercel.app ...
echo.
call npx vercel --prod --yes
echo.
echo ========================================================
echo   ? DESPLIEGUE FINALIZADO EN https://apex-engine-six.vercel.app/
echo ========================================================
pause
