import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
      url: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/87gs0z4i_DSC_3564.jpeg',
      alt: 'Elegant corridor with artistic details',
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
  ];

  // Navigation functions wrapped with useCallback for stable references
  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const goToPrevious = useCallback((e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  const goToNext = useCallback((e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, goToPrevious, goToNext]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

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
                onClick={() => openLightbox(index)}
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

      {/* Lightbox Carousel Modal */}
      {selectedIndex !== null && images[selectedIndex] && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-60 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-light z-60">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-60 hidden md:block"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div 
            className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              style={{ userSelect: 'none' }}
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-60 hidden md:block"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Mobile Swipe Hint (optional) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm md:hidden">
            ← Swipe to navigate →
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
