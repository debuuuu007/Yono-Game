import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, ArrowLeft, Download } from 'lucide-react';
import axios from 'axios';

export const GameList: React.FC = () => {
  const navigate = useNavigate();
  interface Game {
    gameImage: string;
    gameName: string;
  }

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKENDURL}/game/getgames`);
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-white flex items-center gap-2 hover:text-gray-200"
        >
          <ArrowLeft size={24} />
          Back
        </button>
        <h1 className="text-3xl font-bold text-white">Game List</h1>
      </div>

      <div className="space-y-4">
        {games.map((game, index) => (
          <div key={index} className="bg-purple-900/50 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={game.gameImage} 
                alt={game.gameName} 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <span className="text-white font-medium">{game.gameName}</span>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => navigate(`/generate-landing/${index}`)}
                className="px-3 py-1 bg-green-500 text-white rounded-full text-sm hover:bg-green-600"
              >
                <Pencil size={16} />
              </button>
              <button 
                className="px-3 py-1 bg-red-500 text-white rounded-full text-sm hover:bg-red-600"
              >
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};