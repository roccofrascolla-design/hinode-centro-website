import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin } from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 lg:py-32 bg-gradient-to-b from-[#F5EFE7]/30 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.location.title}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 font-light mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.location.subtitle}
          </p>
          <p
            className="text-base text-gray-700 font-light leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.location.intro}
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Nearby Places */}
          <div className="space-y-6">
            <h3
              className="text-3xl md:text-4xl font-light text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.location.nearbyTitle}
            </h3>
            <div className="space-y-4">
              {t.location.nearby.map((place, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4A7C9E]/10 flex items-center justify-center">
                    <MapPin size={20} className="text-[#4A7C9E]" />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-lg font-light text-gray-900"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {place.name}
                    </p>
                    <p
                      className="text-sm text-gray-600 font-light"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {place.distance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Atmosphere */}
          <div className="space-y-6">
            <h3
              className="text-3xl md:text-4xl font-light text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.location.atmosphereTitle}
            </h3>
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/8tqcd618_DSC_1389.jpeg"
                alt="Vieste rooftop terrace view"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className="text-white font-light leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.location.atmosphereText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.8287!2d16.1768!3d41.8828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347d1c5e5e5e5e5%3A0x5e5e5e5e5e5e5e5!2sVieste%2C%20FG%2C%20Italy!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vieste Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
