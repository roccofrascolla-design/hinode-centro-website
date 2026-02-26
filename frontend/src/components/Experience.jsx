import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sunrise, Footprints, Waves, Moon } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  const moments = [
    {
      icon: Sunrise,
      title: t.experience.moment1Title,
      text: t.experience.moment1Text,
      color: '#E8DCC5',
    },
    {
      icon: Footprints,
      title: t.experience.moment2Title,
      text: t.experience.moment2Text,
      color: '#C9B8A3',
    },
    {
      icon: Waves,
      title: t.experience.moment3Title,
      text: t.experience.moment3Text,
      color: '#6B9DC1',
    },
    {
      icon: Moon,
      title: t.experience.moment4Title,
      text: t.experience.moment4Text,
      color: '#4A7C9E',
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#F5EFE7]/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.experience.title}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 font-light mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.experience.subtitle}
          </p>
          <p
            className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.experience.intro}
          </p>
        </div>

        {/* Moments Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {moments.map((moment, index) => {
            const IconComponent = moment.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-lg p-8 lg:p-10 shadow-md hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${moment.color}20` }}
                  >
                    <IconComponent size={32} style={{ color: moment.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl md:text-3xl font-light text-gray-900 mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {moment.title}
                  </h3>
                  <p
                    className="text-base text-gray-700 font-light leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {moment.text}
                  </p>

                  {/* Decorative corner */}
                  <div
                    className="absolute top-0 right-0 w-0 h-0 group-hover:w-20 group-hover:h-20 transition-all duration-500 opacity-10 rounded-bl-full"
                    style={{ backgroundColor: moment.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Image Feature */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="relative overflow-hidden rounded-lg shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1660892544428-72a8cf4148c2"
              alt="Vieste beach and Pizzomunno"
              className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <p
                className="text-2xl md:text-3xl lg:text-4xl text-white font-light italic leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "A private balcony over the Adriatic. Where every moment becomes a memory."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
