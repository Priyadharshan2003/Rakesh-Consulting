// Admin user creation script
// This file will read admin credentials from adminCredentials.json
// and create an admin user in Firebase

import { createAdminUser } from './createAdmin';
import credentials from './adminCredentials.json';

// Function to create the admin user using JSON credentials
const setupAdmin = async () => {
  try {
    console.log('Creating admin user with credentials from JSON file...');
    const user = await createAdminUser(credentials.email, credentials.password);
    console.log('Admin user created successfully!');
    console.log('Email:', credentials.email);
    console.log('User ID:', user.uid);
  } catch (error: any) {
    console.error('Failed to create admin user:', error.message);
  }
};

// Export the function so it can be imported and called elsewhere
export { setupAdmin };

// Uncomment this line to run the setup directly from this file
// setupAdmin();
