import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface LoginFormInputs {
  email: string;
  password: string;
}

const AdminLogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate('/admin/dashboard');
    }
  }, [currentUser, navigate]);

  const onSubmit = async (data: LoginFormInputs) => {
    setLoginError('');
    setLoading(true);
    
    try {
      await login(data.email, data.password);
      navigate('/admin/dashboard');
    } catch (error: any) {
      setLoginError(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h2 className="text-3xl font-extrabold mb-6 text-primary-700">Admin Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input className="input-field" type="email" {...register('email', { required: true })} />
          {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
        </div>
        <div>
          <label className="block mb-2 font-medium">Password</label>
          <input className="input-field" type="password" {...register('password', { required: true })} />
          {errors.password && <span className="text-red-500 text-xs">Password is required</span>}
        </div>
        {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
        <button 
          type="submit" 
          className="btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
