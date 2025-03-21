import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const navigateToAbout = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/About');
  };

  const navigateToContact = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/Contact');
  };

  const navigateToT_C = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/T&C');
  };

  return (
    <footer className="bg-navy-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="w-full flex items-center justify-between border border-gray-600 rounded-md px-4 py-2 text-sm focus:outline-none"
            >
              <span>{selectedLanguage.name}</span>
              <ChevronDown size={16} />
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="absolute left-0 mt-1 w-full bg-navy-900 border border-gray-600 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {languages.map((language) => (
                    <li key={language.code}>
                      <button
                        onClick={() => selectLanguage(language)}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-navy-800"
                      >
                        {language.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Support Links */}
          {/* <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </div> */}

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a onClick={navigateToAbout} className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a onClick={navigateToContact} className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a onClick={navigateToT_C} className="text-gray-300 hover:text-white">
                  T&C
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Odading. All rights reserved</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Term and Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;