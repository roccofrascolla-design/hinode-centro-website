import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        {/* Video Background - Aerial View */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/vujy3i5h_450922855.jpg"
        >
          {/* Primary video source - Aerial view of Vieste */}
          <source
            src="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/4r0h5q6x_7031055_Above_Aerial_1280x720.mp4"
            type="video/mp4"
          />
          {/* Fallback image for browsers that don't support video */}
          <img
            src="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/vujy3i5h_450922855.jpg"
            alt="Vieste aerial view"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto space-y-10 animate-fade-in">
            {/* Main Title - Two Lines */}
            <div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-[0.05em] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t.hero.titleLine1}
              </h1>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white/95 leading-relaxed tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t.hero.titleLine2}
              </h2>
            </div>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t.hero.subtitle}
            </p>

            {/* Trust Line - Subtle Above CTAs */}
            {t.hero.trustLine && (
              <p
                className="text-xs md:text-sm text-white/75 font-light tracking-wide mt-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.trustLine}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button
                onClick={() => scrollToSection('booking')}
                className="px-8 py-4 bg-[#C2A878] text-white text-base font-light tracking-wide rounded-sm hover:bg-[#2E4A5B] transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.cta}
              </button>
              <button
                onClick={() => scrollToSection('apartment')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-base font-light tracking-wide rounded-sm border border-white/30 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('why-choose')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
