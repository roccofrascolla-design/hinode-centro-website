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

  const amenityCategories = [
    { title: t.apartment.amenitiesKitchen, items: t.apartment.amenities.kitchen },
    { title: t.apartment.amenitiesBedroom, items: t.apartment.amenities.bedroom },
    { title: t.apartment.amenitiesBathroom, items: t.apartment.amenities.bathroom },
    { title: t.apartment.amenitiesLiving, items: t.apartment.amenities.living },
    { title: t.apartment.amenitiesMedia, items: t.apartment.amenities.media },
    { title: t.apartment.amenitiesRoom, items: t.apartment.amenities.room },
    { title: t.apartment.amenitiesOutdoor, items: t.apartment.amenities.outdoor },
    { title: t.apartment.amenitiesGeneral, items: t.apartment.amenities.general },
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

        {/* Amenities - Categorized */}
        <div className="max-w-6xl mx-auto">
          <h3
            className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.apartment.amenitiesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenityCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-[#F5EFE7]/30 rounded-lg p-6"
              >
                <h4
                  className="text-lg font-light text-gray-900 mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {category.title}
                </h4>
                <div className="space-y-2">
                  {category.items.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4A7C9E] flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-white" />
                      </div>
                      <span
                        className="text-sm text-gray-700 font-light"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {amenity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apartment;