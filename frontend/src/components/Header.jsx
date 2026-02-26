import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
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
          ? 'bg-white/98 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6 lg:py-7'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex flex-col items-start group"
          >
            <span
              className={`text-2xl lg:text-3xl font-light tracking-[0.15em] transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } group-hover:text-[#4A7C9E]`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              HINODE
            </span>
            <span
              className={`text-[10px] lg:text-xs tracking-[0.25em] transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CENTRO
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {/* Navigation Links */}
            <div className="flex items-center space-x-10 mr-12">
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
                  className={`text-sm font-light tracking-[0.08em] transition-all duration-300 hover:text-[#4A7C9E] relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.nav[item.key]}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#4A7C9E] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
            
            {/* Right Section: CTA + Language */}
            <div className="flex items-center space-x-6">
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('booking')}
                className="px-7 py-2.5 bg-[#4A7C9E] text-white text-sm font-light tracking-[0.08em] rounded-sm hover:bg-[#3d6682] transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.nav.booking}
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`px-4 py-2 text-xs font-medium tracking-[0.12em] border rounded-sm transition-all duration-300 ${
                  isScrolled
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    : 'border-white/50 text-white hover:bg-white/10'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {language === 'it' ? 'EN' : 'IT'}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 text-xs font-medium tracking-wider border rounded-sm transition-all ${
                isScrolled
                  ? 'border-gray-300 text-gray-700'
                  : 'border-white/50 text-white'
              }`}
            >
              {language === 'it' ? 'EN' : 'IT'}
            </button>
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
