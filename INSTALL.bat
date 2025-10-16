@echo off
echo ========================================
echo WalletWhisperer Website Installation
echo ========================================
echo.
echo This will:
echo 1. Install all dependencies
echo 2. Start the development server
echo 3. Open your browser
echo.
pause

echo.
echo Installing dependencies...
echo This may take 2-3 minutes...
echo.

call npm install

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ========================================
    echo ERROR: Installation failed!
    echo ========================================
    echo.
    echo Please check:
    echo 1. Node.js is installed (node --version)
    echo 2. You have internet connection
    echo 3. You're in the correct directory
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Starting development server...
echo Your website will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
pause

start http://localhost:3000

call npm run dev
