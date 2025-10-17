@echo off
echo ========================================
echo WalletWhisperer - GitHub Deployment
echo ========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

echo Step 1: Adding all files...
git add .
echo.

echo Step 2: Committing changes...
git commit -m "WalletWhisperer website - ready for deployment"
echo.

REM Check if remote exists
git remote | findstr "origin" >nul
if %ERRORLEVEL% EQU 0 (
    echo Remote 'origin' already exists. Skipping...
) else (
    echo Step 3: Adding GitHub remote...
    git remote add origin https://github.com/martinshenry99/walletwhisperer-website.git
)
echo.

echo Step 4: Setting main branch...
git branch -M main
echo.

echo Step 5: Pushing to GitHub...
git push -u origin main
echo.

if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo SUCCESS! Code pushed to GitHub
    echo ========================================
    echo.
    echo Next Steps:
    echo 1. Go to https://vercel.com
    echo 2. Sign up with GitHub
    echo 3. Import: walletwhisperer-website
    echo 4. Click Deploy
    echo 5. Your site will be live in 2 minutes!
    echo.
) else (
    echo ========================================
    echo ERROR: Push failed
    echo ========================================
    echo.
    echo Possible solutions:
    echo 1. Make sure you created the repo on GitHub
    echo 2. Check your GitHub credentials
    echo 3. Try: git push -u origin main --force
    echo.
)

echo ========================================
pause
