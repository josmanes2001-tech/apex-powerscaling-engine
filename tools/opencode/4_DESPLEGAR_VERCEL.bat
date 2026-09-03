@echo off
title Desplegar Apex Engine a Vercel
color 0B
cd /d "%~dp0"

echo ========================================================
echo   DESPLEGANDO APEX ENGINE -> VERCEL (PRODUCCION)
echo ========================================================
echo.

echo [1/2] Guardando cambios locales y subiendo a GitHub...
git add .
git commit -m "feat: sync y despliegue"
git push origin main

echo.
echo [2/2] Desplegando a Vercel via CLI...
set TOKEN=
if exist ".env.local" (
    for /f "tokens=1,2 delims==" %%a in (.env.local) do (
        if "%%a"=="VERCEL_TOKEN" set TOKEN=%%b
    )
)
if "%TOKEN%"=="" set TOKEN=%VERCEL_TOKEN%
if "%TOKEN%"=="" (
    npx vercel --prod --yes
) else (
    npx vercel --prod --yes --token %TOKEN%
)

echo.
echo ========================================================
echo   Vercel actualizado: https://apex-engine-six.vercel.app/
echo ========================================================
echo.
pause