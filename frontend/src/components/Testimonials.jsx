import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#F3EFE9]/30">
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

        {/* Reviews Grid - 2 columns */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.testimonials.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#C2A878] text-[#C2A878]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-base md:text-lg text-gray-700 font-light leading-relaxed mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                "{review.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-[#D8D2C8]">
                <div className="w-10 h-10 rounded-full bg-[#C2A878] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white text-lg font-light"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p
                    className="text-base font-light text-gray-900"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {review.author}
                  </p>
                  <p
                    className="text-sm font-light text-gray-600"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {review.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking.com Badge */}
        <div className="text-center mt-12">
          <p
            className="text-sm text-gray-600 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Verified reviews from Booking.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
