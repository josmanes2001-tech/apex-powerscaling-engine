@echo off
setlocal

netstat -ano | findstr :4096 | findstr LISTENING >nul
if %errorlevel% neq 0 (
    start /min "OpenCode-Web-Server" cmd /c "opencode web --port 4096 --hostname 0.0.0.0"
    timeout /t 2 /nobreak >nul
)

if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --app=http://localhost:4096 --window-size=1440,920
    goto :fin
)

if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app=http://localhost:4096 --window-size=1440,920
    goto :fin
)

if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --app=http://localhost:4096 --window-size=1440,920
    goto :fin
)

if exist "C:\Program Files\Microsoft\Edge\Application\msedge.exe" (
    start "" "C:\Program Files\Microsoft\Edge\Application\msedge.exe" --app=http://localhost:4096 --window-size=1440,920
    goto :fin
)

start http://localhost:4096

:fin
endlocal
exit /b 0
