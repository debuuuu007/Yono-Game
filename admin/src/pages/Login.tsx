import React, { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [state, setState] = useState<'Sign Up' | 'Login'>('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      if (state === 'Sign Up') {
        // Call backend register route
        const response = await axios.post(`${import.meta.env.VITE_BACKENDURL}/admin/register`, { fullname: name, email, password });
        if (response.status === 201) {
          alert('Sign up successful! Please log in.');
          setState('Login'); // Switch to login after sign-up
        }
      } else {
        // Call backend login route
        const response = await axios.post(`${import.meta.env.VITE_BACKENDURL}/admin/login`, { email, password });
        if (response.status === 200) {
          setIsAuthenticated(true);
          localStorage.setItem('isAuthenticated', 'true');
        }
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.errors?.[0]?.msg || 'An error occurred');
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen" 
      style={{ 
        background: 'linear-gradient(180deg, #050B27 0%, #000000 100%)',
        width: '100%',
        padding: '20px'
      }}
    >
      {/* Logo and Heading Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
          <Gamepad2 size={48} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-white text-center leading-tight">
          Get Your<br /><span className="text-blue-400">Game On</span>
        </h1>
      </div>

      {/* Login/Sign-Up Form */}
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white border-opacity-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
          </h2>
          
          {state === 'Sign Up' && (
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
            <div className="mt-2 flex items-center">
              <input 
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-sm text-gray-300">Show password</label>
            </div>
          </div>

          {errorMessage && (
            <div className="mb-6 p-3 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg">
              <p className="text-red-500 text-sm">{errorMessage}</p>
            </div>
          )}

          <button 
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
          >
            {state === 'Sign Up' ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <button 
                onClick={() => setState('Login')}
                className="text-blue-400 hover:text-blue-300 font-medium focus:outline-none"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setState('Sign Up')}
                className="text-blue-400 hover:text-blue-300 font-medium focus:outline-none"
              >
                Sign up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Login;