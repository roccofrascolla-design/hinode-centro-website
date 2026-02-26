import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, DollarSign, Cigarette, PartyPopper, Volume2, PawPrint, User } from 'lucide-react';

const HouseRules = () => {
  const { t } = useLanguage();

  const rules = [
    {
      icon: Clock,
      title: t.houseRules.checkinTitle,
      text: t.houseRules.checkinTime,
      color: '#4A7C9E',
    },
    {
      icon: Clock,
      title: t.houseRules.checkoutTitle,
      text: t.houseRules.checkoutTime,
      color: '#6B9DC1',
    },
    {
      icon: DollarSign,
      title: t.houseRules.depositTitle,
      text: t.houseRules.depositText,
      color: '#C9B8A3',
    },
    {
      icon: Cigarette,
      title: t.houseRules.smokingTitle,
      text: t.houseRules.smokingText,
      color: '#E8DCC5',
    },
    {
      icon: PartyPopper,
      title: t.houseRules.partiesTitle,
      text: t.houseRules.partiesText,
      color: '#4A7C9E',
    },
    {
      icon: Volume2,
      title: t.houseRules.quietTitle,
      text: t.houseRules.quietText,
      color: '#6B9DC1',
    },
    {
      icon: PawPrint,
      title: t.houseRules.petsTitle,
      text: t.houseRules.petsText,
      color: '#C9B8A3',
    },
    {
      icon: User,
      title: t.houseRules.ageTitle,
      text: t.houseRules.ageText,
      color: '#E8DCC5',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.houseRules.title}
          </h2>
        </div>

        {/* Rules Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => {
            const IconComponent = rule.icon;
            return (
              <div
                key={index}
                className="bg-[#F5EFE7]/30 rounded-lg p-6 hover:bg-[#E8DCC5]/40 transition-colors duration-300"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${rule.color}15` }}
                >
                  <IconComponent size={24} style={{ color: rule.color }} />
                </div>
                <h3
                  className="text-lg font-light text-gray-900 mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {rule.title}
                </h3>
                <p
                  className="text-sm text-gray-700 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {rule.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseRules;