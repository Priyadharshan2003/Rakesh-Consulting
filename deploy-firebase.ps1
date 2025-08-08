# Deploy Firebase Rules - PowerShell Script for Windows

Write-Host "🚀 Deploying Firebase configuration..." -ForegroundColor Green

# Check if Firebase CLI is installed
$firebaseCli = Get-Command firebase -ErrorAction SilentlyContinue
if (-not $firebaseCli) {
    Write-Host "❌ Firebase CLI not found. Installing..." -ForegroundColor Red
    npm install -g firebase-tools
}

# Check if user is logged in
Write-Host "📝 Checking Firebase authentication..." -ForegroundColor Yellow
firebase login --interactive

# Deploy Firestore rules
Write-Host "📝 Deploying Firestore rules..." -ForegroundColor Yellow
firebase deploy --only firestore:rules

# Deploy Storage rules  
Write-Host "📁 Deploying Storage rules..." -ForegroundColor Yellow
firebase deploy --only storage

Write-Host "✅ Firebase deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "If you see CORS errors, try these steps:" -ForegroundColor Cyan
Write-Host "1. Make sure your Firebase project is properly configured" -ForegroundColor White
Write-Host "2. Check that storage bucket exists: gs://rakesh-consulting.firebasestorage.app" -ForegroundColor White
Write-Host "3. Wait 5-10 minutes for rules to propagate" -ForegroundColor White
Write-Host "4. Try uploading a test file" -ForegroundColor White
