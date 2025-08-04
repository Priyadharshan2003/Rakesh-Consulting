# Firebase Firestore Security Rules Documentation

## Overview
These security rules provide comprehensive protection for your Rakesh Consulting application's Firestore database.

## Rule Categories

### 1. **Helper Functions**
```javascript
// Check if user is admin
function isAdmin() {
  return request.auth != null && 
    exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
    get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
}

// Check if user is authenticated
function isAuthenticated() {
  return request.auth != null;
}
```

### 2. **Users Collection** (`/users/{userId}`)
- **Read**: Users can read their own data, admins can read all
- **Write**: Users can write their own data
- **Create**: Users can create their own profile with email validation

### 3. **Contact Forms** (`/contacts/{document}`)
- **Create**: Anyone can submit (with validation)
- **Read**: Admins only
- **Update/Delete**: Admins only
- **Validation**: Name, email, phone, message required

### 4. **Career Applications** (`/careers/{document}`)
- **Create**: Anyone can submit (with validation)
- **Read**: Admins only
- **Update/Delete**: Admins only
- **Validation**: Name, email, phone, position required

### 5. **Public Content Collections**
These are readable by everyone, writable by admins only:
- `/homepage/{document}` - Homepage content
- `/company/{document}` - Company information
- `/services/{document}` - Services offered
- `/testimonials/{document}` - Customer testimonials
- `/blog/{document}` - Blog posts (future feature)

### 6. **Admin-Only Collections**
These require admin authentication:
- `/settings/{document}` - Site settings
- `/admin_logs/{document}` - Admin action logs
- `/files/{document}` - File metadata

## Data Validation Rules

### Contact Form Validation
```javascript
{
  name: string (required, non-empty),
  email: string (required, valid email format),
  phone: string (required, non-empty),
  message: string (required, non-empty),
  submittedAt: timestamp (auto-set to request.time)
}
```

### Career Application Validation
```javascript
{
  name: string (required, non-empty),
  email: string (required, valid email format),
  phone: string (required, non-empty),
  position: string (required, non-empty),
  resume: string (optional, file URL),
  submittedAt: timestamp (auto-set to request.time)
}
```

### User Profile Validation
```javascript
{
  email: string (must match auth token email),
  role: string (admin/user),
  createdAt: timestamp
}
```

## Security Features

### ✅ **Input Validation**
- Email format validation using regex
- Required field validation
- Timestamp validation (prevents backdating)

### ✅ **Authentication Checks**
- All sensitive operations require authentication
- Admin role verification for privileged actions
- User can only modify their own data

### ✅ **Data Integrity**
- Prevents malicious data injection
- Enforces required fields
- Validates data types

### ✅ **Access Control**
- Public read for content collections
- Admin-only access for sensitive data
- User-specific access for personal data

### ✅ **Audit Trail**
- Admin action logging
- Timestamp tracking for all submissions
- User ID tracking for authenticated actions

## How to Deploy

### Method 1: Firebase CLI (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firestore (only needed once)
firebase init firestore

# Deploy rules
firebase deploy --only firestore:rules
```

### Method 2: Firebase Console
1. Go to Firebase Console > Firestore Database
2. Click "Rules" tab
3. Copy and paste the rules
4. Click "Publish"

## Testing Rules

### Test Valid Operations
```javascript
// These should SUCCEED:
// 1. Anonymous user reading homepage content
// 2. Anyone submitting contact form with valid data
// 3. Admin reading contact submissions
// 4. User reading their own profile

// These should FAIL:
// 1. Anonymous user reading contact submissions
// 2. Non-admin user accessing settings
// 3. Invalid email format in contact form
// 4. Missing required fields in submissions
```

### Firebase Emulator Testing
```bash
# Install and run Firestore emulator
firebase emulators:start --only firestore

# Test rules with emulator
firebase emulators:start --only firestore --import=./test-data
```

## Common Patterns

### Reading Public Content
```javascript
// Anyone can read
db.collection('homepage').doc('content').get()
db.collection('services').get()
db.collection('testimonials').get()
```

### Submitting Contact Form
```javascript
// Anyone can submit
db.collection('contacts').add({
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  message: "Hello!",
  submittedAt: firebase.firestore.FieldValue.serverTimestamp()
})
```

### Admin Operations (requires authentication)
```javascript
// Only admins can do these
db.collection('contacts').get() // Read submissions
db.collection('settings').doc('general').update({...}) // Update settings
db.collection('homepage').doc('content').update({...}) // Update content
```

## Troubleshooting

### Common Issues

**Permission Denied Errors:**
- Check if user is authenticated for admin operations
- Verify user has 'admin' role in users collection
- Ensure required fields are present in submissions

**Validation Errors:**
- Check email format (must be valid email)
- Ensure all required fields are present
- Verify timestamp is set correctly

**Rule Deployment Issues:**
- Use `firebase deploy --only firestore:rules`
- Check Firebase CLI is logged in: `firebase login`
- Verify project is selected: `firebase use your-project-id`

### Debug Tips

1. **Use Firebase Console Rules Playground**
   - Test rules before deployment
   - Simulate different user scenarios

2. **Check Browser Console**
   - Look for detailed error messages
   - Verify authentication state

3. **Enable Firestore Debug Logging**
   ```javascript
   firebase.firestore.setLogLevel('debug');
   ```

## Security Best Practices

### ✅ **Implemented**
- Principle of least privilege
- Input validation and sanitization
- Authentication requirement for sensitive data
- Admin role verification
- Timestamp validation
- Email format validation

### 🔒 **Additional Recommendations**
- Regular security audits
- Monitor failed permission attempts
- Implement rate limiting (Cloud Functions)
- Add data retention policies
- Enable audit logging
- Use security rules testing

## Rule Updates

When updating rules:
1. Test in Firebase Console Rules Playground
2. Deploy to staging environment first
3. Monitor for permission errors
4. Update documentation
5. Deploy to production

Remember: **Always test security rules thoroughly before deploying to production!**
