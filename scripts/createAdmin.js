// A simple script to create an admin user directly

// Load environment variables
require('dotenv').config();

// Import Firebase modules
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, setDoc, Timestamp } = require('firebase/firestore');
const path = require('path');
const fs = require('fs');

// Get credentials
const credentialsPath = path.join(__dirname, '../src/utils/adminCredentials.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function createAdmin() {
  try {
    console.log('Creating admin user with these credentials:');
    console.log('Email:', credentials.email);
    console.log('Password: [hidden]');
    
    // Create the admin user
    const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
    const user = userCredential.user;
    
    // Add user to Firestore with admin role
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      role: 'admin',
      createdAt: Timestamp.now(),
      displayName: credentials.email.split('@')[0]
    });
    
    console.log('✅ Admin created successfully!');
    console.log('Admin User ID:', user.uid);
    console.log('Admin Email:', credentials.email);
    
    return user;
  } catch (error) {
    console.error('❌ Failed to create admin:', error);
    throw error;
  }
}

// Execute the function
createAdmin()
  .then(() => {
    console.log('Admin creation process completed.');
    setTimeout(() => process.exit(0), 3000); // Give Firebase operations time to complete
  })
  .catch((error) => {
    console.error('Error in admin creation process:', error);
    process.exit(1);
  });
