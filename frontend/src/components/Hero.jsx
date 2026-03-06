import React from 'react';
import { useLanguage } from '../context/LanguageContext';

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            {/* Main Title */}
            <div className="space-y-6">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-wider"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t.hero.titleLine1}
              </h1>
              <p
                className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed tracking-wide"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.subtitle}
              </p>
            </div>

            {/* Supporting Text */}
            {t.hero.supportingText && (
              <p
                className="text-base md:text-lg text-white/85 font-light max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.supportingText}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <button
                onClick={() => scrollToSection('booking')}
                className="px-10 py-5 bg-white text-gray-900 text-base font-medium tracking-wide rounded-sm hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] w-full sm:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.cta}
              </button>
              <button
                onClick={() => scrollToSection('apartment')}
                className="px-10 py-5 bg-transparent text-white text-base font-light tracking-wide rounded-sm border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Trust Line - Subtle */}
            {t.hero.trustLine && (
              <p
                className="text-xs md:text-sm text-white/70 font-light tracking-wider pt-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.hero.trustLine}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
