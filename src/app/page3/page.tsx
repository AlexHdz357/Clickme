'use client'
import React, { useState, useEffect } from 'react';

const Registration = () => {
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    // Only attempt to use localStorage in the browser
    if (typeof window !== 'undefined') {
      const savedUsers = localStorage.getItem('registeredUsers');
      return savedUsers ? JSON.parse(savedUsers) : [];
    }
    return [];
  });

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [registeredUsername, setRegisteredUsername] = useState('');

  // Save registered users to localStorage whenever the array changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    }
  }, [registeredUsers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;
    if (!passwordRegex.test(formData.password)) {
      setError('Password must: be at least 8 characters long, contain 1 uppercase letter, and 1 special character');
      return;
    }

    // Check for duplicate username
    const isDuplicateUsername = registeredUsers.some(
      user => user.username.toLowerCase() === formData.username.toLowerCase()
    );
    if (isDuplicateUsername) {
      setError('Username already exists');
      return;
    }

    // Check for duplicate email
    const isDuplicateEmail = registeredUsers.some(
      user => user.email.toLowerCase() === formData.email.toLowerCase()
    );
    if (isDuplicateEmail) {
      setError('Email already registered');
      return;
    }

    // Create new user object
    const newUser = {
      username: formData.username,
      email: formData.email,
      // Note: In a real app, never store plain text passwords
      password: formData.password,
      registeredAt: new Date().toISOString()
    };

    // Add new user to registered users
    setRegisteredUsers(prev => [...prev, newUser]);

    // Set success state
    setRegisteredUsername(formData.username);
    setSuccess(true);

    // Clear form
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-4 flex justify-between items-center border-b border-black">
        <div className="flex gap-28">
          <a href="/" className="text-black text-xl">☆</a>
          <a href="/" className="text-black">Home</a>
          <a href="/page2" className="text-black">Page 2</a>
          <a href="/page3" className="text-black">Page 3</a>
        </div>
        {registeredUsername && (
          <div className="text-black">
            Welcome, {registeredUsername}
          </div>
        )}
      </div>
      
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center relative">
            <button 
              onClick={handleCloseSuccess}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 border-4 border-green-500 rounded-full flex items-center justify-center">
                <svg 
                  className="h-8 w-8 text-green-500 animate-check" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <p className="text-green-600 mb-4 text-xl">Registration Successful!</p>
            <p className="text-gray-700 mb-4">Welcome, {registeredUsername}</p>
            <button
              onClick={handleCloseSuccess}
              className="px-4 py-2 border border-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      
      <div className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
        <div className="w-full max-w-sm px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Register</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            
            <div className="space-y-2 flex flex-col items-center">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="space-y-2 flex flex-col items-center">
              <button
                type="submit"
                className="w-64 px-4 py-2 border border-black transition-all duration-300 hover:bg-black hover:text-white mx-auto"
              >
                Register
              </button>
            </div>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-black hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;