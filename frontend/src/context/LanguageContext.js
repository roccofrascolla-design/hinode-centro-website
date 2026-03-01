import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it'); // Italian as default

  useEffect(() => {
    // Check localStorage for saved preference
    const savedLang = localStorage.getItem('hinodeLang');
    if (savedLang && ['it', 'en', 'fr', 'de', 'es'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (['it', 'en', 'fr', 'de', 'es'].includes(newLang)) {
      setLanguage(newLang);
      localStorage.setItem('hinodeLang', newLang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
