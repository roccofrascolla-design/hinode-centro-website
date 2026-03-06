import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhyChoose = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t.whyChoose.feature1Title,
      text: t.whyChoose.feature1Text,
    },
    {
      title: t.whyChoose.feature2Title,
      text: t.whyChoose.feature2Text,
    },
    {
      title: t.whyChoose.feature3Title,
      text: t.whyChoose.feature3Text,
    },
  ];

  return (
    <section id="why-choose" className="py-24 lg:py-40 bg-gradient-to-b from-white via-[#F3EFE9]/20 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.whyChoose.title}
          </h2>
          <p
            className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* Features - Cleaner Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 group"
            >
              {/* Title */}
              <h3
                className="text-3xl md:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#C2A878] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {feature.title}
              </h3>
              
              {/* Text */}
              <p
                className="text-base md:text-lg text-gray-600 font-light leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
