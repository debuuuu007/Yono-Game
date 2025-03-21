import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide header when scrolling down
    } else {
      setIsVisible(true); // Show header when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const navigateToGames = () => {
    navigate('/games');
  };
  const navigateToAbout = () => {
    navigate('/About');
  };
  const navigateToContact = () => {
    navigate('/Contact');
  };
  const navigateToT_C = () => {
    navigate('/T&C');
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-4 flex justify-between items-center bg-transparent backdrop-blur-md transition-transform duration-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="text-white text-xl md:text-2xl font-bold">Logo</div>
      <nav className="flex items-center gap-4 md:gap-8">
        <a href="/" className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">Home</a>
        <a onClick={navigateToAbout} className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">About</a>
        <a  onClick={navigateToT_C}
         className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">T&C</a>
        <a onClick={navigateToContact}
         className="text-white hover:text-pink-500 transition-colors text-sm md:text-base">Contact</a>
        <button 
          onClick={navigateToGames} 
          className="bg-red-500 text-white px-4 md:px-6 py-2 rounded-full hover:bg-red-600 transition-colors text-sm md:text-base"
        >
          All Apps
        </button>
      </nav>
    </header>
  );
};

export default Header;