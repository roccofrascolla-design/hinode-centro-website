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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-white/75 backdrop-blur-md'
      }`}
      style={{
        borderBottom: '1px solid rgba(200, 200, 200, 0.2)',
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-5">
          {/* Logo - Cropped transparent version */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center flex-shrink-0 pl-6 lg:pl-7"
          >
            <img
              src="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/5q1u2533_Progetto%20senza%20titolo.png"
              alt="Hinode Centro"
              className="h-10 lg:h-[65px] w-auto"
              style={{ 
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                objectFit: 'contain',
              }}
            />
          </button>

          {/* Desktop Navigation - SIMPLE & CLEAN */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Menu Links with proper spacing */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('apartment')}
              className="text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Apartment
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] transition-colors duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact
            </button>
          </nav>

          {/* Right Section: Book Now + Language */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Book Now Button */}
            <button
              onClick={() => scrollToSection('booking')}
              className="px-6 py-2.5 bg-[#C2A878] text-white text-[15px] font-normal rounded-sm hover:bg-[#2E4A5B] transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.nav.booking}
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1 border border-[#D8D2C8] rounded-sm overflow-hidden">
              {['IT', 'EN', 'FR', 'DE', 'ES'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang.toLowerCase())}
                  className={`px-3 py-2 text-xs font-medium transition-colors duration-300 ${
                    language === lang.toLowerCase()
                      ? 'bg-[#C2A878] text-white'
                      : 'text-[#3A3A3A] hover:bg-[#F3EFE9]'
                  }`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 border border-[#D8D2C8] rounded-sm overflow-hidden">
              {['IT', 'EN', 'FR', 'DE', 'ES'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang.toLowerCase())}
                  className={`px-2 py-1 text-xs font-medium ${
                    language === lang.toLowerCase()
                      ? 'bg-[#C2A878] text-white'
                      : 'text-[#3A3A3A]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#3A3A3A]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#D8D2C8]">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] py-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('apartment')}
                className="text-left text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] py-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Apartment
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] py-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] py-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-left text-[15px] font-normal text-[#3A3A3A] hover:text-[#C2A878] py-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="mt-2 px-6 py-2.5 bg-[#C2A878] text-white text-[15px] font-normal rounded-sm"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.nav.booking}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
