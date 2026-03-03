import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#F3EFE9] to-[#D8D2C8] py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3
                className="text-3xl font-light text-gray-900 tracking-wider"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                HINODE
              </h3>
              <span
                className="text-sm tracking-widest text-gray-700"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CENTRO
              </span>
            </div>
            <p
              className="text-sm text-gray-600 font-light leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-light text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {[
                { key: 'home', id: 'hero' },
                { key: 'apartment', id: 'apartment' },
                { key: 'location', id: 'location' },
                { key: 'experience', id: 'experience' },
                { key: 'gallery', id: 'gallery' },
                { key: 'booking', id: 'booking' },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-gray-600 hover:text-[#C2A878] transition-colors font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.nav[item.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-light text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#C2A878] mt-1 flex-shrink-0" />
                <span
                  className="text-sm text-gray-600 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Via Santa Maria di Merino 1, Vieste (FG), Puglia, Italia
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-[#C2A878] mt-1 flex-shrink-0" />
                <a
                  href="mailto:hinodecentrovieste@gmail.com"
                  className="text-sm text-gray-600 hover:text-[#C2A878] transition-colors font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  hinodecentrovieste@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-[#C2A878] mt-1 flex-shrink-0" />
                <a
                  href="tel:+393405079259"
                  className="text-sm text-gray-600 hover:text-[#C2A878] transition-colors font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  +39 340 507 9259
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4
              className="text-lg font-light text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <button
                  onClick={() => navigate('/privacy')}
                  className="text-sm text-gray-600 hover:text-[#C2A878] transition-colors font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/terms')}
                  className="text-sm text-gray-600 hover:text-[#C2A878] transition-colors font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <p
                  className="text-xs text-gray-500 font-light mt-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  CIN: IT071060C200112106
                </p>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-[#C2A878] hover:shadow-md transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-[#C2A878] hover:shadow-md transition-all"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-400/30">
          <p
            className="text-center text-sm text-gray-600 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
