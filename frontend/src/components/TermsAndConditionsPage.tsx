import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
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
          {/* Left Section: Terms and Conditions Content */}
          <div className="max-w-[872px] mb-8 md:mb-0">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{ height: 'auto' }}>
              Terms and Conditions
            </h1>
            <div className="space-y-6 text-white">
              <p className="text-lg">
                Welcome to Yono Game! These terms and conditions outline the rules and regulations for the use of Yono Game's services.
              </p>

              <h2 className="text-3xl font-bold">1. Acceptance of Terms</h2>
              <p className="text-lg">
                By accessing or using Yono Game, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you may not use our services.
              </p>

              <h2 className="text-3xl font-bold">2. User Responsibilities</h2>
              <p className="text-lg">
                You agree to use Yono Game responsibly and not to engage in any activity that may harm the game, other users, or third parties.
              </p>

              <h2 className="text-3xl font-bold">3. Intellectual Property</h2>
              <p className="text-lg">
                All content, including but not limited to graphics, logos, and game design, is the property of Yono Game and is protected by intellectual property laws.
              </p>

              <h2 className="text-3xl font-bold">4. Limitation of Liability</h2>
              <p className="text-lg">
                Yono Game shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services.
              </p>

              <h2 className="text-3xl font-bold">5. Changes to Terms</h2>
              <p className="text-lg">
                Yono Game reserves the right to modify these terms and conditions at any time. Your continued use of the services constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* Right Section: Image or Illustration */}
          {/* <div className="relative flex justify-center items-center">
            <img
              src="https://via.placeholder.com/450" // Replace with your image or illustration
              alt="Terms and Conditions"
              className="w-[200px] md:w-[350px] lg:w-[450px] h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div> */}
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

export default TermsAndConditionsPage;