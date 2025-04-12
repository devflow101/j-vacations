'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, AuthProvider } from '../../lib/auth';
import Navbar from '../../components/Navbar';

function LoginForm() {
  const { login, isAuthenticated, error } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validation, setValidation] = useState({
    username: { valid: true, message: '' },
    password: { valid: true, message: '' }
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, router]);

  const validateForm = () => {
    let isValid = true;
    const newValidation = {
      username: { valid: true, message: '' },
      password: { valid: true, message: '' }
    };

    if (!username.trim()) {
      newValidation.username = {
        valid: false,
        message: 'Username is required'
      };
      isValid = false;
    }

    if (!password) {
      newValidation.password = {
        valid: false,
        message: 'Password is required'
      };
      isValid = false;
    }

    setValidation(newValidation);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await login(username, password);
      if (success) {
        router.push('/admin/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-[#1a365d]">
            J Vacations Admin
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to manage website content
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  validation.username.valid ? 'border-gray-300' : 'border-red-500'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#2196F3] focus:border-[#2196F3] focus:z-10 sm:text-sm`}
                placeholder="Admin Username"
              />
              {!validation.username.valid && (
                <p className="text-red-500 text-xs mt-1">{validation.username.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`appearance-none relative block w-full px-3 py-2 border ${
                  validation.password.valid ? 'border-gray-300' : 'border-red-500'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#2196F3] focus:border-[#2196F3] focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
              {!validation.password.valid && (
                <p className="text-red-500 text-xs mt-1">{validation.password.message}</p>
              )}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 text-sm">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isSubmitting 
                  ? 'bg-[#90caf9] cursor-not-allowed' 
                  : 'bg-[#2196F3] hover:bg-[#1976D2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2196F3]'
              }`}
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Back to <a href="/" className="text-[#2196F3] hover:underline">website</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <AuthProvider>
      <main className="min-h-screen">
        <Navbar />
        <LoginForm />
      </main>
    </AuthProvider>
  );
} 