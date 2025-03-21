import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil,  ArrowLeft, Download } from 'lucide-react';

export const GameList: React.FC = () => {
  const navigate = useNavigate();
  
  // Placeholder data - replace with actual data from backend
  const games = Array(6).fill({
    name: 'All Yono Games',
    imageUrl: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  });

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
                src={game.imageUrl} 
                alt={game.name} 
                className="w-16 h-16 rounded-lg object-cover"
              />
              <span className="text-white font-medium">{game.name}</span>
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
              {/* <button 
                className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm hover:bg-orange-600"
              >
                Back
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};