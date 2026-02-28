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
          ? 'bg-white/98 backdrop-blur-md shadow-sm py-6 lg:py-7'
          : 'bg-transparent py-12 lg:py-14'
      }`}
    >
      <div className="container mx-auto px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo - Image (LARGER SIZE) */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center group mr-32 lg:mr-40"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/98qi2bg7_logo%20hinode.jpg"
              alt="Hinode Centro"
              className={`h-20 lg:h-24 w-auto transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-100'
              } group-hover:opacity-80`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-1 justify-end">
            {/* Navigation Links - with filled background container (LARGER SPACING) */}
            <div className={`flex items-center space-x-20 px-10 py-4 rounded-sm backdrop-blur-md border transition-all duration-300 mr-16 ${
              isScrolled
                ? 'bg-white/90 border-[#D8D2C8]'
                : 'bg-white/10 border-white/20'
            }`}>
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
                  className={`text-base font-light tracking-[0.12em] transition-all duration-300 relative group ${
                    isScrolled ? 'text-[#3A3A3A] hover:text-[#C2A878]' : 'text-white hover:text-white'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.nav[item.key]}
                  <span className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-[#C2A878]' : 'bg-white'
                  }`}></span>
                </button>
              ))}
            </div>
            
            {/* Right Section: CTA + Language - with extra spacing */}
            <div className="flex items-center ml-20">
              {/* CTA Button (LARGER) */}
              <button
                onClick={() => scrollToSection('booking')}
                className="px-10 py-4 bg-[#C2A878] text-white text-base font-light tracking-[0.12em] rounded-sm hover:bg-[#2E4A5B] transition-all duration-300 hover:shadow-lg hover:scale-105 mr-10"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.nav.booking}
              </button>

              {/* Language Toggle - 4 languages (LARGER) */}
              <div className="flex items-center space-x-1 border rounded-sm overflow-hidden"
                style={{
                  borderColor: isScrolled ? '#D8D2C8' : 'rgba(255,255,255,0.5)'
                }}
              >
                {['it', 'en', 'fr', 'de'].map((lang, index) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 py-3 text-sm font-medium tracking-[0.14em] transition-all duration-300 ${
                      language === lang
                        ? 'bg-[#C2A878] text-white'
                        : isScrolled
                        ? 'text-[#3A3A3A] hover:bg-[#F3EFE9]'
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
                      ? 'bg-[#C2A878] text-white'
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
                  className="text-left text-sm font-light tracking-wide text-gray-700 hover:text-[#C2A878] transition-colors py-2"
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
