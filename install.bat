@echo off
echo ================================================
echo Asad Imran Shah Portfolio - Install Script
echo ================================================
echo.

REM Set Node options to work around SSL issues
set NODE_OPTIONS=--openssl-legacy-provider

echo Clearing npm cache...
call npm cache clean --force

echo.
echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ================================================
    echo NPM install failed. Try these alternatives:
    echo ================================================
    echo.
    echo 1. Use Yarn instead:
    echo    yarn install
    echo.
    echo 2. Update Node.js to latest version
    echo.
    echo 3. Try with strict SSL disabled:
    echo    npm config set strict-ssl false
    echo    npm install
    echo    npm config set strict-ssl true
    echo.
    echo 4. Install on Netlify (it will work there):
    echo    - Push code to GitHub
    echo    - Connect to Netlify
    echo    - Build command: npm run build
    echo    - Publish: out
    echo.
    pause
    exit /b 1
)

echo.
echo ================================================
echo Installation complete! Run: npm run dev
echo ================================================
pause
