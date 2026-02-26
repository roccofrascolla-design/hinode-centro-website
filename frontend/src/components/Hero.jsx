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
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1661100193729-5b60a36d6d61"
        >
          {/* Primary video source - replace with actual video URL */}
          <source
            src="https://cdn.coverr.co/videos/coverr-calm-sea-waves-at-sunset-6273/1080p.mp4"
            type="video/mp4"
          />
          {/* Fallback image for browsers that don't support video */}
          <img
            src="https://images.unsplash.com/photo-1661100193729-5b60a36d6d61"
            alt="Vieste coastline at sunset"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button
                onClick={() => scrollToSection('booking')}
                className="px-8 py-4 bg-[#4A7C9E] text-white text-base font-light tracking-wide rounded-sm hover:bg-[#3d6682] transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
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
