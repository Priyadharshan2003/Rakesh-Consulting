// This is a setup script to create your first admin user
// You can run this script once to create your admin account

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export const createAdminUser = async (email: string, password: string) => {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Add user to Firestore with admin role
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      role: 'admin',
      createdAt: Timestamp.now(),
      displayName: email.split('@')[0]
    });
    
    console.log('Admin user created successfully!');
    console.log('Email:', email);
    console.log('User ID:', user.uid);
    
    return user;
  } catch (error: any) {
    console.error('Error creating admin user:', error.message);
    throw error;
  }
};

// Example usage:
// To create an admin user, call this function in the browser console:
// import { createAdminUser } from './utils/createAdmin';
// createAdminUser('admin@yourcompany.com', 'your-secure-password')
//   .then(user => console.log('Admin created:', user.uid))
//   .catch(error => console.error('Failed:', error.message));

// Alternatively, use the setupAdmin.ts script which reads credentials from adminCredentials.json:
// import { setupAdmin } from './utils/setupAdmin';
// setupAdmin();
