import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye, MapPin, Home, Heart } from 'lucide-react';

const WhyChoose = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Eye,
      title: t.whyChoose.feature1Title,
      text: t.whyChoose.feature1Text,
      color: '#4A7C9E',
    },
    {
      icon: MapPin,
      title: t.whyChoose.feature2Title,
      text: t.whyChoose.feature2Text,
      color: '#C9B8A3',
    },
    {
      icon: Home,
      title: t.whyChoose.feature3Title,
      text: t.whyChoose.feature3Text,
      color: '#6B9DC1',
    },
    {
      icon: Heart,
      title: t.whyChoose.feature4Title,
      text: t.whyChoose.feature4Text,
      color: '#E8DCC5',
    },
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#F5EFE7]/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.whyChoose.title}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <IconComponent size={32} style={{ color: feature.color }} />
                </div>

                {/* Content */}
                <h3
                  className="text-2xl font-light text-gray-900 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base text-gray-600 font-light leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {feature.text}
                </p>

                {/* Decorative element */}
                <div
                  className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500 rounded-l-lg"
                  style={{ backgroundColor: feature.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
