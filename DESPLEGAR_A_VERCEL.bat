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
set "TOKEN="
for /f "delims=" %%i in ('node -e "const fs=require('fs'); if(fs.existsSync('.env.local')){ const m=fs.readFileSync('.env.local','utf8').match(/^VERCEL_TOKEN=(.*)$/m); if(m) console.log(m[1].trim()); }"') do set "TOKEN=%%i"
if "%TOKEN%"=="" if not "%VERCEL_TOKEN%"=="" set "TOKEN=%VERCEL_TOKEN%"

if not "%TOKEN%"=="" (
    npx vercel --prod --yes --token %TOKEN%
) else (
    npx vercel --prod --yes
)

echo.
echo ========================================================
echo   Vercel actualizado: https://apex-engine-six.vercel.app/
echo ========================================================
echo.
pause