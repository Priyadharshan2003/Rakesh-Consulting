# Firebase Deployment Instructions

## Prerequisites
1. Install Firebase CLI globally:
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```
   firebase login
   ```

## Initial Setup
1. Initialize Firebase in your project (if not already done):
   ```
   firebase init
   ```
   
   Select:
   - Firestore
   - Storage
   - Hosting (if you want to deploy the app)

## Deploy Firestore Rules
1. Update your firestore.rules with the content from firestore.rules.new:
   ```
   cp firestore.rules.new firestore.rules
   ```

2. Deploy Firestore rules:
   ```
   firebase deploy --only firestore:rules
   ```

## Deploy Storage Rules
1. Deploy storage rules:
   ```
   firebase deploy --only storage
   ```

## Create Admin User
Before using the admin dashboard, you need to create an admin user:

1. Go to Firebase Console > Authentication
2. Add a new user with email and password
3. Note down the user's UID
4. Go to Firestore Database
5. Create a new collection called 'users'
6. Add a document with the user's UID as the document ID
7. Set the document data:
   ```json
   {
     "email": "admin@yourcompany.com",
     "role": "admin",
     "createdAt": [current timestamp]
   }
   ```

## Environment Variables
Make sure your .env file has all the required Firebase configuration:

```
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
```

## Enable Firebase Services
In Firebase Console:

1. **Authentication**:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password"

2. **Firestore Database**:
   - Go to Firestore Database
   - Create database in production mode
   - Choose your region

3. **Storage**:
   - Go to Storage
   - Get started
   - Choose your region

4. **Security Rules**:
   - Deploy the rules using the commands above

## Test the Application
1. Build and start the React app:
   ```
   npm run build
   npm start
   ```

2. Test form submissions:
   - Go to /contact and submit a contact form
   - Go to /careers and submit a career application

3. Test admin dashboard:
   - Go to /admin and login with your admin credentials
   - Check if submissions appear in the dashboard

## Troubleshooting
- If you get permission denied errors, check your Firestore rules
- If file uploads fail, check your Storage rules
- Make sure your admin user has the correct role in Firestore
- Check browser console for any Firebase-related errors

## Production Deployment
For production deployment:

1. Build the app:
   ```
   npm run build
   ```

2. Deploy to Firebase Hosting (optional):
   ```
   firebase deploy --only hosting
   ```

Or deploy to your preferred hosting service using the build folder.
