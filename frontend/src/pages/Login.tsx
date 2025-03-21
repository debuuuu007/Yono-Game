// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import gameCoinImage from '../assets/game-coin.png'; // Import the image

// const Login: React.FC = () => {
//   const [state, setState] = useState<'Sign Up' | 'Login'>('Login');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     setErrorMessage('');

//     if (state === 'Sign Up') {
//       // Simulate sign-up by saving user data to local storage
//       const user = { name, email, password };
//       localStorage.setItem('user', JSON.stringify(user));
//       localStorage.setItem('isAuthenticated', 'true');
//       alert('Sign up successful! Please log in.');
//       setState('Login'); // Switch to login after sign-up
//     } else {
//       // Simulate login by checking local storage
//       const storedUser = localStorage.getItem('user');
//       if (storedUser) {
//         const user = JSON.parse(storedUser);
//         if (user.email === email && user.password === password) {
//           localStorage.setItem('isAuthenticated', 'true');
//           navigate('/games'); // Redirect to dashboard
//         } else {
//           setErrorMessage('Invalid email or password.');
//         }
//       } else {
//         setErrorMessage('No user found. Please sign up.');
//       }
//     }
//   };

//   return (
//     <div 
//       className="flex flex-col items-center justify-center min-h-screen" 
//       style={{ 
//         background: 'linear-gradient(180deg, #050B27 0%, #000000 100%)', 
//         width: '100%', 
//         padding: '20px' 
//       }}
//     >
//       {/* Logo and Heading Section */}
//       <div className="flex flex-col items-center mb-8">
//         <img 
//           src={gameCoinImage} // Use the imported image
//           alt="Game Coin" 
//           className="w-24 h-24 mb-4" // Adjust size as needed
//         />
//         <h1 className="text-4xl md:text-7xl font-bold text-white text-center leading-tight">
//           Get Your<br /><span className="text-blue-400">Game On</span>
//         </h1>
//       </div>

//       {/* Login/Sign-Up Form */}
//       <div className="w-full md:w-auto">
//         <form 
//           onSubmit={handleSubmit} 
//           className="flex flex-col bg-white p-8 rounded-lg shadow-lg" 
//           style={{ width: '300px' }}
//         >
//           <p className="text-2xl font-semibold mb-6 text-center">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
//           <p className="text-center mb-6">{state === 'Sign Up' ? 'Sign up to continue.' : 'Log in to continue.'}</p>
          
//           {state === 'Sign Up' && (
//             <div className="flex flex-col mb-6">
//               <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           )}
          
//           <div className="flex flex-col mb-6">
//             <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email Id</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex flex-col mb-6">
//             <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">Password</label>
//             <input
//               type={showPassword ? 'text' : 'password'}
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div className="mt-2">
//               <input 
//                 type="checkbox" 
//                 onChange={() => setShowPassword(!showPassword)} 
//               /> Show Password
//             </div>
//           </div>
          
//           {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          
//           <button 
//             type="submit" 
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {state === 'Sign Up' ? 'Create Account' : 'Log in'}
//           </button>
//         </form>
//         <p className="text-center mt-4 text-white">
//           {state === 'Sign Up' ? (
//             <>Already have an account? <span onClick={() => setState('Login')} className="text-blue-400 underline cursor-pointer">Login here</span></>
//           ) : (
//             <>Don't have an account? <span onClick={() => setState('Sign Up')} className="text-blue-400 underline cursor-pointer">Sign up here</span></>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [state, setState] = useState<'Sign Up' | 'Login'>('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

       if (state === 'Sign Up') {
      // Simulate sign-up by saving user data to local storage
      const user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isAuthenticated', 'true');
      alert('Sign up successful! Please log in.');
      setState('Login'); // Switch to login after sign-up
    } else {
      // Simulate login by checking local storage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          localStorage.setItem('isAuthenticated', 'true');
          navigate('/games'); // Redirect to dashboard
        } else {
          setErrorMessage('Invalid email or password.');
        }
      } else {
        setErrorMessage('No user found. Please sign up.');
      }
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