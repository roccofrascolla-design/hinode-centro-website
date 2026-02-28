import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/0yfrjq5g_DSC_3618.jpeg',
      alt: 'Panoramic sea view from Hinode Centro',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/z0w881aj_DSC_3530.jpeg',
      alt: 'Living area with dining space',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/8ek42vx1_DSC_3536.jpeg',
      alt: 'Living area with fully equipped kitchenette',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/xm0tns05_DSC_3617.jpeg',
      alt: 'Stunning terrace view overlooking the sea',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/zi597i9f_DSC_3555.jpeg',
      alt: 'Elegant bedroom with blue accents',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/1f2ipoxl_DSC_3551.jpeg',
      alt: 'Cozy bedroom detail with refined decor',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/lcqfkd0g_DSC_3580.jpeg',
      alt: 'Modern bathroom with elegant finishes',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/h6uohd0o_DSC_3567.jpeg',
      alt: 'Spacious bedroom with natural light',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/uz270r2i_DSC_3603.jpeg',
      alt: 'Elegant sitting area',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/1d2r04jp_DSC_3584.jpeg',
      alt: 'Luxurious bathroom with modern amenities',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/8tqcd618_DSC_1389.jpeg',
      alt: 'Rooftop terrace with sea view',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/l2m63112_DSC_1395.jpeg',
      alt: 'Private terrace with seating and historic center views',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/pi04vzph_DSC_3545.jpeg',
      alt: 'Bright living space with dining area',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/k5sztf5m_DSC_3630.jpeg',
      alt: 'Historic center of Vieste with lighthouse',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/zjft6gai_450922855.jpg',
      alt: 'Spectacular coastal view of Vieste on the cliffs',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/283xch86_DSC_3635.jpeg',
      alt: 'Hinode brass nameplate',
    },
    {
      url: 'https://images.unsplash.com/photo-1661100193729-5b60a36d6d61',
      alt: 'Vieste sunset coastline',
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.gallery.title}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
