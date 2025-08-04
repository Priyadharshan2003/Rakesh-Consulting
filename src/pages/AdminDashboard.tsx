import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin');
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-primary-700">Admin Dashboard</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, {currentUser?.email}</span>
          <button 
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Homepage Content & GST Number</h3>
        <p className="text-gray-500 mb-2">Edit homepage hero, about, and GST number (Firestore integration required).</p>
        {/* TODO: Add editable form here */}
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">View Form Submissions</h3>
        <p className="text-gray-500 mb-2">View contact and career application submissions (Firestore integration required).</p>
        {/* TODO: List submissions here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
