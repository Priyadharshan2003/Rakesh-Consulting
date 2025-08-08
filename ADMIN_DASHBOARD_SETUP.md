# Rakesh Consulting - Admin Dashboard Setup

## ✅ Completed Features

### 🔥 Firebase Integration
- **Contact Form Submissions**: All contact form data is automatically stored in Firestore
- **Career Applications**: Career application forms with file uploads are stored in Firestore and Firebase Storage
- **Admin Dashboard**: Comprehensive admin panel with real-time data from Firebase
- **File Uploads**: Resume and CV uploads are stored in Firebase Storage
- **Security Rules**: Proper Firestore and Storage security rules implemented

### 📊 Admin Dashboard Features
- **Overview Tab**: Analytics dashboard showing submission statistics
- **Contact Submissions**: View, manage, and update contact form submissions
- **Career Applications**: Review career applications with downloadable CVs
- **Homepage Content**: Edit homepage hero text, about section, and GST number
- **Status Management**: Change status of submissions (New, Contacted, Resolved, etc.)
- **Real-time Updates**: Dashboard updates in real-time as new submissions come in
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Setup Instructions

### 1. Prerequisites
```bash
# Install Node.js and npm (if not already installed)
# Download from https://nodejs.org/

# Install Firebase CLI globally
npm install -g firebase-tools
```

### 2. Firebase Setup
```bash
# Login to Firebase
firebase login

# Initialize Firebase in the project (if not already done)
firebase init

# Select:
# - Firestore: Configure security rules and indexes file
# - Storage: Configure security rules file
# - Hosting (optional): Configure files for Firebase Hosting
```

### 3. Environment Configuration
Ensure your `.env` file has all Firebase credentials:
```
REACT_APP_API_KEY=AIzaSyCm5IlqiRZMZ11SPNf-6AKYiWe-9LNRC14
REACT_APP_AUTH_DOMAIN=rakesh-consulting.firebaseapp.com
REACT_APP_PROJECT_ID=rakesh-consulting
REACT_APP_STORAGE_BUCKET=rakesh-consulting.firebasestorage.app
REACT_APP_MESSAGING_SENDER_ID=222337053886
REACT_APP_APP_ID=1:222337053886:web:2be3ff09b27cf31bfedaef
REACT_APP_MEASUREMENT_ID=G-DM0EWHVZXB
```

### 4. Deploy Firebase Rules
```bash
# Update Firestore rules
cp firestore.rules.new firestore.rules

# Deploy Firestore and Storage rules
firebase deploy --only firestore:rules,storage
```

### 5. Enable Firebase Services
In Firebase Console:

1. **Authentication**:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password" provider

2. **Firestore Database**:
   - Go to Firestore Database > Create database
   - Start in production mode
   - Choose your preferred region

3. **Storage**:
   - Go to Storage > Get started
   - Start in production mode
   - Choose your preferred region

### 6. Create Admin User
```bash
# Start the development server
npm start

# In browser console (F12), run:
# (Replace with your desired admin email and password)
import { createAdminUser } from './utils/createAdmin';
createAdminUser('admin@yourcompany.com', 'your-secure-password')
  .then(user => console.log('Admin created:', user.uid))
  .catch(error => console.error('Failed:', error.message));
```

### 7. Test the Application
1. **Test Contact Form**:
   - Go to `/contact`
   - Fill out and submit the form
   - Check if it appears in admin dashboard

2. **Test Career Application**:
   - Go to `/careers`
   - Fill out and submit the application with CV upload
   - Check if it appears in admin dashboard

3. **Test Admin Dashboard**:
   - Go to `/admin`
   - Login with your admin credentials
   - Verify all submitted data appears
   - Test status updates and content editing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/
│   ├── AdminDashboard.tsx    # 📊 Main admin interface
│   ├── Contact.tsx           # 📝 Contact form (Firebase integrated)
│   ├── Careers.tsx          # 💼 Career application form (Firebase integrated)
│   └── ...
├── services/
│   └── firebaseService.ts   # 🔥 Firebase CRUD operations
├── config/
│   └── firebase.ts         # 🔥 Firebase configuration
├── contexts/
│   └── AuthContext.tsx     # 🔐 Authentication context
└── utils/
    └── createAdmin.ts      # 👤 Admin user creation utility
```

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to Firebase Hosting (optional)
firebase deploy --only hosting
```

## 🛡️ Security Features

### Firestore Security Rules
- ✅ Anyone can submit forms (contact/career)
- ✅ Only admins can read submissions
- ✅ Only admins can update/delete submissions
- ✅ Only admins can edit homepage content
- ✅ Authentication required for admin actions

### Storage Security Rules
- ✅ Anyone can upload files for applications (10MB limit)
- ✅ Only PDF, DOC, DOCX files allowed
- ✅ Only admins can download uploaded files
- ✅ Only admins can delete files

## 🎯 Admin Dashboard Usage

### Navigation Tabs
1. **Overview**: View statistics and recent submissions
2. **Contact Submissions**: Manage contact form submissions
3. **Career Applications**: Review job applications
4. **Homepage Content**: Edit website content and GST number

### Managing Submissions
- **View Details**: Click "View Details" to see full submission
- **Change Status**: Click on status badge to update
- **Download Files**: Click download button to get uploaded files
- **Delete**: Remove submissions (with confirmation)

### Content Management
- **Edit Homepage**: Update hero title, subtitle, about description, GST number
- **Real-time Updates**: Changes are saved to Firebase and reflected immediately

## 🚀 Production Deployment

### Option 1: Firebase Hosting
```bash
npm run build
firebase deploy --only hosting
```

### Option 2: Other Hosting Services
```bash
npm run build
# Upload the 'build' folder to your hosting service
```

## 🔍 Troubleshooting

### Common Issues
1. **Permission Denied**: Check Firestore rules and user roles
2. **File Upload Fails**: Verify Storage rules and file types
3. **Admin Login Issues**: Ensure user has 'admin' role in Firestore
4. **Forms Not Submitting**: Check Firebase configuration and network

### Debug Steps
```bash
# Check Firebase connection
# In browser console:
console.log('Firebase config:', firebase.app().options);

# Check user authentication
console.log('Current user:', firebase.auth().currentUser);

# Check Firestore connection
firebase.firestore().doc('test/test').set({test: true});
```

## 📋 TODO / Future Enhancements

- [ ] Email notifications for new submissions
- [ ] Export submissions to CSV/Excel
- [ ] Bulk operations for submissions
- [ ] Advanced search and filtering
- [ ] Submission analytics charts
- [ ] Multi-admin support with different roles
- [ ] Automated backup system
- [ ] Mobile app for admin access

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify Firebase configuration
3. Ensure proper security rules are deployed
4. Check network connectivity

---

**🎉 Your Firebase-integrated Admin Dashboard is now ready!**

The system automatically stores all form submissions in Firebase, provides a comprehensive admin interface, and handles file uploads securely. All data is real-time synced and properly secured with Firebase rules.
