import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const Apartment = () => {
  const { t } = useLanguage();

  const spaces = [
    {
      title: t.apartment.livingTitle,
      text: t.apartment.livingText,
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/z0w881aj_DSC_3530.jpeg',
    },
    {
      title: t.apartment.bedroomTitle,
      text: t.apartment.bedroomText,
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/1f2ipoxl_DSC_3551.jpeg',
    },
    {
      title: t.apartment.bathroomTitle,
      text: t.apartment.bathroomText,
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/h6uohd0o_DSC_3567.jpeg',
    },
  ];

  return (
    <section id="apartment" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.apartment.title}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 font-light mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.apartment.subtitle}
          </p>
          <p
            className="text-base text-gray-700 font-light leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.apartment.intro}
          </p>
        </div>

        {/* Spaces */}
        <div className="max-w-6xl mx-auto space-y-16 mb-20">
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3
                  className="text-3xl md:text-4xl font-light text-gray-900 mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {space.title}
                </h3>
                <p
                  className="text-base text-gray-600 font-light leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {space.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.apartment.amenitiesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.apartment.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-[#F5EFE7]/30 rounded-lg hover:bg-[#E8DCC5]/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A7C9E] flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <span
                  className="text-base text-gray-700 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apartment;
