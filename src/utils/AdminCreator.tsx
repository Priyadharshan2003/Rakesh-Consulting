import React, { useState } from 'react';
import { createAdminUser } from './createAdmin';
import credentials from './adminCredentials.json';

/**
 * This component provides a UI for creating an admin user
 * It uses credentials from the adminCredentials.json file by default
 * But also allows customizing the email and password
 */
const AdminCreator: React.FC = () => {
  // Initialize with credentials from JSON
  const [email, setEmail] = useState(credentials.email);
  const [password, setPassword] = useState(credentials.password);
  const [result, setResult] = useState<{success?: boolean; message: string}>({message: ''});
  const [loading, setLoading] = useState(false);

  const handleCreateAdmin = async () => {
    setLoading(true);
    setResult({message: 'Creating admin user...'});
    
    try {
      const user = await createAdminUser(email, password);
      setResult({
        success: true,
        message: `Admin user created successfully! Email: ${email}, ID: ${user.uid}`
      });
    } catch (error: any) {
      setResult({
        success: false,
        message: `Failed to create admin: ${error.message}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Admin User</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <button
        onClick={handleCreateAdmin}
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 disabled:bg-gray-400"
      >
        {loading ? 'Creating...' : 'Create Admin User'}
      </button>
      
      {result.message && (
        <div className={`mt-4 p-3 rounded ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {result.message}
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-600">
        <p>This tool uses credentials from <code>adminCredentials.json</code></p>
        <p>Default email: <code>{credentials.email}</code></p>
      </div>
    </div>
  );
};

export default AdminCreator;
