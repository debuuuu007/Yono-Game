import React from 'react';
import { cardsData } from '../assets/assets';

const Games: React.FC = () => {
  return (
    <div 
      className="flex flex-col items-center justify-between pt-20" 
      style={{ 
        background: 'linear-gradient(359.71deg, #050B27 4.71%, #000000 98.07%)', 
        width: '100%', 
        minHeight: '100vh', 
        position: 'relative'
      }}
    >
      <div className="grid grid-cols-4 gap-4 mt-8">
        {cardsData.map((card) => (
          <div 
            key={card.id} 
            className="flex flex-col items-center p-4 rounded-lg" 
            style={{ 
              background: 'linear-gradient(180deg, #000C34 0%, #000000 100%)', 
              boxShadow: '0px 2px 48px 0px rgba(0, 0, 0, 0.08)', 
              width: '213px', 
              height: '304px', 
              borderRadius: '16px'
            }}
          >
            <img src={card.image} alt="Game Coin" className="w-24 h-24" />
            <h3 className="text-white mt-2">{card.title}</h3>
            <div className="flex items-center mt-2">
              <img src={card.giftImage} alt="Gift" className="w-4 h-4 mr-2" />
              <p 
                className="text-white" 
                style={{ 
                  fontFamily: 'Roboto', 
                  fontWeight: 700, 
                  fontSize: '10px', 
                  lineHeight: '11.72px', 
                  letterSpacing: '1px', 
                  color: 'rgba(174, 255, 0, 1)', 
                  width: '112px', 
                  height: '12px'
                }}
              >
                {card.bonus}
              </p>
            </div>
            <div className="flex items-center mt-2">
              <img src={card.dollarImage} alt="Dollar" className="w-4 h-4 mr-2" />
              <p 
                className="text-white" 
                style={{ 
                  fontFamily: 'Roboto', 
                  fontWeight: 700, 
                  fontSize: '10px', 
                  lineHeight: '11.72px', 
                  letterSpacing: '1px', 
                  color: 'rgba(174, 255, 0, 1)', 
                  width: '112px', 
                  height: '12px'
                }}
              >
                {card.minWithdraw}
              </p>
            </div>
            <a 
              href={card.downloadLink} 
              className="mt-4 px-4 py-2 rounded-lg" 
              style={{ 
                width: '141px', 
                height: '22px', 
                backgroundColor: 'rgba(174, 255, 0, 1)', 
                borderRadius: '10px', 
                borderWidth: '1px', 
                backdropFilter: 'blur(74px)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'Roboto', 
                  fontWeight: 800, 
                  fontSize: '12px', 
                  lineHeight: '14.06px', 
                  letterSpacing: '1px', 
                  color: 'rgba(255, 255, 255, 1)', 
                  width: '73px', 
                  height: '14px'
                }}
              >
                DOWNLOAD
              </span>
            </a>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Games;

