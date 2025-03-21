import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Coins as Coin, Check, Copy } from 'lucide-react';

export const GenerateLanding: React.FC = () => {
  const navigate = useNavigate();
  const [downloadLink, setDownloadLink] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    if (downloadLink) {
      setIsSuccess(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('https://your-landing-page.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto flex flex-col items-center gap-8 text-center">
        <div className="w-24 h-24 rounded-full bg-pink-500 flex items-center justify-center mt-12">
          <Check size={48} className="text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-white">Successful</h2>
        
        <button
          onClick={handleCopy}
          className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          {copied ? 'Copied!' : 'Copy the new landing page link'}
          <Copy size={20} />
        </button>
      </div>
    );
  }

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
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold">Get Y</span>
            <Coin size={32} className="text-yellow-400" />
            <span className="text-3xl font-bold">ur</span>
          </div>
          <h1 className="text-3xl font-bold">Game On</h1>
        </div>

        <input
          type="text"
          value={downloadLink}
          onChange={(e) => setDownloadLink(e.target.value)}
          placeholder="Paste here..."
          className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
        >
          Paste game download link
        </button>
      </div>
    </div>
  );
};