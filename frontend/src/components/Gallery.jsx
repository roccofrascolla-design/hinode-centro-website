import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/8tqcd618_DSC_1389.jpeg',
      alt: 'Rooftop terrace with sea view',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/8ek42vx1_DSC_3536.jpeg',
      alt: 'Living area with kitchenette',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/1f2ipoxl_DSC_3551.jpeg',
      alt: 'Bedroom with sea blue accents',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/uz270r2i_DSC_3603.jpeg',
      alt: 'Elegant sitting area',
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/xm0tns05_DSC_3617.jpeg',
      alt: 'Interior detail',
    },
    {
      url: 'https://images.unsplash.com/photo-1661100193729-5b60a36d6d61',
      alt: 'Vieste sunset coastline',
    },
    {
      url: 'https://images.unsplash.com/photo-1660892544428-72a8cf4148c2',
      alt: 'Pizzomunno beach',
    },
    {
      url: 'https://images.pexels.com/photos/28236505/pexels-photo-28236505.jpeg',
      alt: 'Historic center white buildings',
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
