# Firebase Authentication Setup for Rakesh Consulting

## Prerequisites

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project" or "Add project"
   - Enter project name (e.g., "rakesh-consulting")
   - Enable Google Analytics (optional)

2. **Enable Authentication**
   - In Firebase Console, go to "Authentication" > "Sign-in method"
   - Enable "Email/Password" provider
   - Click "Save"

3. **Enable Firestore Database**
   - In Firebase Console, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" (we'll add security rules later)
   - Select a location for your database

4. **Get Firebase Configuration**
   - Go to Project Settings (gear icon) > "General" tab
   - Scroll down to "Your apps" section
   - Click "Add app" > Web app (</>) icon
   - Register your app with a nickname
   - Copy the Firebase configuration object

## Environment Setup

1. **Create Environment File**
   ```bash
   cp .env.example .env
   ```

2. **Update .env file with your Firebase configuration**
   ```env
   REACT_APP_API_KEY=your_api_key_here
   REACT_APP_AUTH_DOMAIN=your_project_id.firebaseapp.com
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_project_id.appspot.com
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   REACT_APP_MEASUREMENT_ID=your_measurement_id
   ```

## Creating Your First Admin User

### Method 1: Using the Setup Script (Recommended)

1. **Edit the admin creation script**
   - Open `src/utils/createAdmin.ts`
   - Change the email and password to your desired admin credentials
   - Uncomment the last line: `createAdminUser();`

2. **Run the script** (you'll need to import and call it from a component temporarily)

### Method 2: Using Firebase Console

1. **Create user in Authentication**
   - Go to Firebase Console > Authentication > Users
   - Click "Add user"
   - Enter email and password
   - Note the User UID

2. **Add admin role in Firestore**
   - Go to Firebase Console > Firestore Database
   - Create a collection called "users"
   - Add a document with the User UID as the document ID
   - Add fields:
     ```
     email: "admin@example.com"
     role: "admin"
     createdAt: (current timestamp)
     ```

## Security Rules Setup

1. **Deploy Firestore Security Rules**
   - Install Firebase CLI: `npm install -g firebase-tools`
   - Login: `firebase login`
   - Initialize: `firebase init firestore`
   - Replace the rules in `firestore.rules` with the provided rules
   - Deploy: `firebase deploy --only firestore:rules`

## Database Schema

### Collections Structure

```
users/
  {userUID}/
    email: string
    role: "admin"
    createdAt: timestamp

contacts/
  {autoID}/
    name: string
    email: string
    phone: string
    message: string
    submittedAt: timestamp

careers/
  {autoID}/
    name: string
    email: string
    phone: string
    position: string
    resume: string (file URL)
    submittedAt: timestamp

homepage/
  content/
    hero: {
      title: string
      subtitle: string
      backgroundImage: string
    }
    about: {
      description: string
      gstNumber: string
    }
    features: array of {
      title: string
      description: string
      icon: string
    }

settings/
  general/
    siteName: string
    companyEmail: string
    companyPhone: string
    companyAddress: string
    gstNumber: string
```

## Admin Features

### Authentication Features
- ✅ Admin login with email/password
- ✅ Protected admin dashboard route
- ✅ Auto-redirect if already logged in
- ✅ Logout functionality
- ✅ Auth state persistence

### Admin Dashboard Features (To be implemented)
- [ ] View contact form submissions
- [ ] View career applications
- [ ] Edit homepage content
- [ ] Update GST number
- [ ] Manage site settings

## Usage

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Access admin login**
   - Navigate to `http://localhost:3000/admin`
   - Enter your admin credentials
   - You'll be redirected to the dashboard upon successful login

3. **Admin Dashboard**
   - Access at `http://localhost:3000/admin/dashboard`
   - Protected route - requires authentication
   - Shows admin email and logout button

## Security Notes

- Environment variables are used for Firebase configuration
- Firestore security rules restrict admin-only operations
- Authentication state is managed globally
- Protected routes prevent unauthorized access
- Admin role is stored in Firestore for authorization

## Next Steps

1. Set up your Firebase project and environment variables
2. Create your first admin user
3. Deploy Firestore security rules
4. Implement additional admin dashboard features
5. Add form submission handlers for contact and career forms

## Troubleshooting

### Common Issues

1. **Firebase not initialized**
   - Check if all environment variables are set correctly
   - Ensure Firebase project is properly configured

2. **Authentication not working**
   - Verify Email/Password provider is enabled in Firebase Console
   - Check if user exists and has correct role in Firestore

3. **Permission denied errors**
   - Ensure Firestore security rules are deployed
   - Check if user has admin role in users collection
