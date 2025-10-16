@echo off
echo ========================================
echo WalletWhisperer - GitHub Deployment
echo ========================================
echo.
echo This will push your website to GitHub
echo Then you can deploy to Vercel
echo.
pause

echo.
echo Step 1: Initializing Git...
git init

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Creating commit...
git commit -m "WalletWhisperer website - ready for deployment"

echo.
echo Step 4: Setting main branch...
git branch -M main

echo.
echo ========================================
echo IMPORTANT: Add Your GitHub Repository
echo ========================================
echo.
echo 1. Go to https://github.com
echo 2. Create a new repository named: walletwhisperer-website
echo 3. Copy the repository URL
echo.
echo Example: https://github.com/YOUR_USERNAME/walletwhisperer-website.git
echo.
set /p REPO_URL="Paste your GitHub repository URL here: "

echo.
echo Adding remote repository...
git remote add origin %REPO_URL%

echo.
echo Step 5: Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo SUCCESS! Code pushed to GitHub
echo ========================================
echo.
echo Next Steps:
echo 1. Go to https://vercel.com
echo 2. Sign up with GitHub
echo 3. Import your repository
echo 4. Click Deploy
echo 5. Your site will be live in 2 minutes!
echo.
echo ========================================
pause
