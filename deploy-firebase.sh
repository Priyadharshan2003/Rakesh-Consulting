#!/bin/bash
# Deploy Firebase Rules and Functions

echo "🚀 Deploying Firebase configuration..."

# Deploy Firestore rules
echo "📝 Deploying Firestore rules..."
firebase deploy --only firestore:rules

# Deploy Storage rules  
echo "📁 Deploying Storage rules..."
firebase deploy --only storage

echo "✅ Firebase deployment complete!"
echo ""
echo "If you see CORS errors, try these steps:"
echo "1. Make sure your Firebase project is properly configured"
echo "2. Check that storage bucket exists: gs://rakesh-consulting.firebasestorage.app"
echo "3. Run: firebase deploy --only storage"
echo "4. Wait 5-10 minutes for rules to propagate"
