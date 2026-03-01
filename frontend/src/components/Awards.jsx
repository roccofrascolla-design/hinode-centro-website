import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Awards = () => {
  const { t } = useLanguage();
  
  // Safe fallback
  const awards = t.awards || { title: '', subtitle: '' };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F3EFE9]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-light text-center mb-4 text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {awards.title}
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm md:text-base text-center text-gray-600 font-light mb-12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {awards.subtitle}
          </p>

          {/* Award Card - Premium Refined Design */}
          <div className="flex justify-center">
            <div 
              className="relative bg-white rounded-xl shadow-sm border border-gray-200/50 p-8 md:p-10 max-w-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Award Image */}
              <img
                src="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/ryuri28t_Social-Media_TRA-2026.png"
                alt="Booking.com Traveller Review Awards 2026 - 9.8/10"
                className="w-full max-w-[220px] md:max-w-[260px] mx-auto object-contain"
              />
              
              {/* Optional subtle overlay text */}
              <div className="mt-4 text-center">
                <p 
                  className="text-xs text-gray-500 font-light tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Booking.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
