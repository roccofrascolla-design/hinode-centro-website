import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm py-5'
          : 'bg-transparent py-8 lg:py-9'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex flex-col items-start group mr-16"
          >
            <span
              className={`text-3xl lg:text-4xl font-light tracking-[0.18em] transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } group-hover:text-[#4A7C9E]`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              HINODE
            </span>
            <span
              className={`text-xs tracking-[0.28em] transition-colors duration-300 mt-0.5 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CENTRO
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-1 justify-end">
            {/* Navigation Links */}
            <div className="flex items-center space-x-14">
              {[
                { key: 'home', id: 'hero' },
                { key: 'apartment', id: 'apartment' },
                { key: 'location', id: 'location' },
                { key: 'experience', id: 'experience' },
                { key: 'gallery', id: 'gallery' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-[0.1em] transition-all duration-300 hover:text-[#4A7C9E] relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.nav[item.key]}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4A7C9E] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            
            {/* Right Section: CTA + Language - with extra spacing */}
            <div className="flex items-center ml-16">
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('booking')}
                className="px-8 py-3 bg-[#4A7C9E] text-white text-sm font-light tracking-[0.1em] rounded-sm hover:bg-[#3d6682] transition-all duration-300 hover:shadow-lg hover:scale-105 mr-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.nav.booking}
              </button>

              {/* Language Toggle - 4 languages */}
              <div className="flex items-center space-x-1 border rounded-sm overflow-hidden"
                style={{
                  borderColor: isScrolled ? '#d1d5db' : 'rgba(255,255,255,0.5)'
                }}
              >
                {['it', 'en', 'fr', 'de'].map((lang, index) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-2 text-xs font-medium tracking-[0.12em] transition-all duration-300 ${
                      language === lang
                        ? 'bg-[#4A7C9E] text-white'
                        : isScrolled
                        ? 'text-gray-700 hover:bg-gray-50'
                        : 'text-white hover:bg-white/10'
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-1 border rounded-sm overflow-hidden"
              style={{
                borderColor: isScrolled ? '#d1d5db' : 'rgba(255,255,255,0.5)'
              }}
            >
              {['it', 'en', 'fr', 'de'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-xs font-medium ${
                    language === lang
                      ? 'bg-[#4A7C9E] text-white'
                      : isScrolled
                      ? 'text-gray-700'
                      : 'text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {[
                { key: 'home', id: 'hero' },
                { key: 'apartment', id: 'apartment' },
                { key: 'location', id: 'location' },
                { key: 'experience', id: 'experience' },
                { key: 'gallery', id: 'gallery' },
                { key: 'booking', id: 'booking' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-light tracking-wide text-gray-700 hover:text-[#4A7C9E] transition-colors py-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.nav[item.key]}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
