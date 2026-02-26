import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#F5EFE7]/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.testimonials.title}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote size={64} className="text-[#4A7C9E]" />
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              <p
                className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-6 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{t.testimonials.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#4A7C9E] flex items-center justify-center">
                  <span
                    className="text-white text-xl font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    E
                  </span>
                </div>
                <div>
                  <p
                    className="text-lg font-light text-gray-900"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.testimonials.author}
                  </p>
                  <p
                    className="text-sm font-light text-gray-600"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t.testimonials.source}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#E8DCC5]/20 to-transparent rounded-tl-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
