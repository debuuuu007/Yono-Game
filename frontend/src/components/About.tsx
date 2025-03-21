import React from 'react';
import gameCoin from '../assets/game-coin.png';
const About: React.FC = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(182.96deg, rgba(245, 63, 161, 0.3) -9.82%, rgba(245, 63, 161, 0) 117.56%)',
        backgroundColor: 'rgba(24, 22, 71, 1)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between pt-20 md:pt-40">
          {/* Left Section: About Content */}
          <div className="max-w-[872px] mb-8 md:mb-0">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{ height: 'auto' }}>
              About Yono Game
            </h1>
            <p className="text-lg text-white mb-8">
              Welcome to Yono, an exciting adventure game where you explore a vibrant world filled with mysteries, challenges, and treasures. 
              Embark on a journey as Yono, a young hero destined to restore balance to the land.
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Features</h2>
            <ul className="list-disc list-inside text-white mb-8">
              <li>Explore a beautifully crafted open world.</li>
              <li>Solve intricate puzzles to unlock secrets.</li>
              <li>Battle fierce enemies and uncover powerful artifacts.</li>
              <li>Experience a rich story with memorable characters.</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-lg text-white mb-8">
              Yono is developed by a passionate team of game designers, artists, and developers dedicated to creating immersive gaming experiences. 
              We hope you enjoy playing Yono as much as we enjoyed making it!
            </p>

            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-lg text-white">
              Have questions or feedback? Reach out to us at{' '}
              <a
                href="mailto:support@yonogame.com"
                className="text-pink-400 hover:underline"
              >
                support@yonogame.com
              </a>.
            </p>
          </div>

          {/* Right Section: Image or Carousel */}
          <div className="relative flex justify-center items-center">
            <img
              src={gameCoin} // Replace with your image or carousel
              alt="Yono Game"
              className="w-[200px] md:w-[350px] lg:w-[450px] h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative bottom-20 left-1/2 transform -translate-x-1/2">
        <button className="text-white animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </div>
 
  );
};

export default About;