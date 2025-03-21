import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TowerControl } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md flex flex-col items-center gap-6 p-8">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-white">
            <h1 className="text-3xl font-bold">Get Y</h1>
            <TowerControl className="w-8 h-8 -mt-1" />
            <h1 className="text-3xl font-bold">ur</h1>
          </div>
          <h1 className="text-3xl font-bold text-white">Game On</h1>
        </div>
        
        <div className="w-full space-y-4 mt-8">
          <button 
            onClick={() => navigate('/games')}
            className="w-full py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
          >
            See List
          </button>
          
          <button 
            onClick={() => navigate('/add-game')}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
          >
            Add Game
          </button>
          
          <button 
            onClick={handleLogout}
            className="w-full py-4 bg-blue-400 hover:bg-blue-500 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};