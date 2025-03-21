import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImagePlus, ArrowLeft } from 'lucide-react';

export const AddGame: React.FC = () => {
  const navigate = useNavigate();
  const [gameName, setGameName] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-white flex items-center gap-2 hover:text-gray-200"
        >
          <ArrowLeft size={24} />
          Back
        </button>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
          {imagePreview ? (
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="text-center">
              <ImagePlus size={40} className="mx-auto mb-2 text-gray-500" />
              <span className="text-sm text-gray-500">Add Image</span>
            </div>
          )}
        </div>

        <input
          type="text"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          placeholder="Add Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={() => navigate('/generate-landing')}
          className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};