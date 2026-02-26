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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex flex-col items-start group"
          >
            <span
              className={`text-2xl font-light tracking-wider transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } group-hover:text-[#4A7C9E]`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              HINODE
            </span>
            <span
              className={`text-xs tracking-widest transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              CENTRO
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                className={`text-sm font-light tracking-wide transition-colors hover:text-[#4A7C9E] ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.nav[item.key]}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('booking')}
              className="px-6 py-2.5 bg-[#4A7C9E] text-white text-sm font-light tracking-wide rounded-sm hover:bg-[#3d6682] transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.nav.booking}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 text-xs font-medium tracking-wider border rounded-sm transition-all ${
                isScrolled
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-white/50 text-white hover:bg-white/10'
              }`}
            >
              {language === 'it' ? 'EN' : 'IT'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
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
          <nav className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
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
