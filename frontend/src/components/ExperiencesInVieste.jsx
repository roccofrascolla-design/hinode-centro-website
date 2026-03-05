import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ExperiencesInVieste = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/0yfrjq5g_DSC_3618.jpeg',
      titleKey: 'exp1Title',
      descKey: 'exp1Desc',
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/xm0tns05_DSC_3617.jpeg',
      titleKey: 'exp2Title',
      descKey: 'exp2Desc',
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/87gs0z4i_DSC_3564.jpeg',
      titleKey: 'exp3Title',
      descKey: 'exp3Desc',
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/zi597i9f_DSC_3555.jpeg',
      titleKey: 'exp4Title',
      descKey: 'exp4Desc',
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/uz270r2i_DSC_3603.jpeg',
      titleKey: 'exp5Title',
      descKey: 'exp5Desc',
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/z0w881aj_DSC_3530.jpeg',
      titleKey: 'exp6Title',
      descKey: 'exp6Desc',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F3EFE9]" id="experiences-vieste">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.experiencesVieste.title}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.experiencesVieste.subtitle}
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exp.image}
                  alt={t.experiencesVieste[exp.titleKey]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-light text-gray-900 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {t.experiencesVieste[exp.titleKey]}
                </h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.experiencesVieste[exp.descKey]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Micro-copy */}
        <div className="text-center mt-8">
          <p
            className="text-sm text-gray-500 italic"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.experiencesVieste.whatsappTip}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesInVieste;
