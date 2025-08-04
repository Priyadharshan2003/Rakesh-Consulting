// This is a setup script to create your first admin user
// You can run this script once to create your admin account

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

const createAdminUser = async () => {
  const email = 'admin@rakeshconsulting.com'; // Change this to your desired admin email
  const password = 'AdminPassword123!'; // Change this to a secure password
  
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Add user to Firestore with admin role
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      role: 'admin',
      createdAt: new Date(),
    });
    
    console.log('Admin user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User ID:', user.uid);
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
};

// Uncomment the line below and run this script once to create your admin user
createAdminUser();

export { createAdminUser };
