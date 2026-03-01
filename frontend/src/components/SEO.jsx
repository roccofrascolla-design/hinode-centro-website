import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Meta title
    const titles = {
      it: 'Hinode Centro – Luxury Sea View Apartment in Vieste | Centro Storico',
      en: 'Hinode Centro – Luxury Sea View Apartment in Vieste | Historic Center',
      fr: 'Hinode Centro – Appartement de Luxe Vue Mer à Vieste | Centre Historique',
      de: 'Hinode Centro – Luxus-Meerblick-Wohnung in Vieste | Historisches Zentrum',
      es: 'Hinode Centro – Apartamento de Lujo con Vista al Mar en Vieste | Centro Histórico',
    };
    const title = titles[language] || titles.en;
    document.title = title;

    // Meta description
    const descriptions = {
      it: 'Appartamento di lusso con vista mare nel centro storico di Vieste. Castello Svevo, spiagge a 5 minuti. Esperienza boutique autentica.',
      en: 'Luxury sea view apartment in Vieste historic center. Swabian Castle views, 5-min walk to beaches. Authentic boutique experience.',
      fr: 'Appartement de luxe vue mer dans le centre historique de Vieste. Vues sur le château, 5 minutes à pied des plages. Expérience boutique authentique.',
      de: 'Luxus-Meerblick-Wohnung im historischen Zentrum von Vieste. Schlossblick, 5 Gehminuten zu Stränden. Authentisches Boutique-Erlebnis.',
      es: 'Apartamento de lujo con vista al mar en el centro histórico de Vieste. Vistas al Castillo Suevo, 5 minutos andando a las playas. Experiencia boutique auténtica.',
    };
    const description = descriptions[language] || descriptions.en;

    // Update or create meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'hinode centro, vieste apartment, sea view vieste, luxury apartment puglia, centro storico vieste, vacation rental vieste, castello svevo, apartment near beach vieste');

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', 'https://castello-balcony.preview.emergentagent.com', 'property');
    updateMetaTag('og:image', 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/0yfrjq5g_DSC_3618.jpeg', 'property');
    updateMetaTag('og:locale', language === 'it' ? 'it_IT' : 'en_US', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', 'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/0yfrjq5g_DSC_3618.jpeg');

    // Structured Data - VacationRental Schema
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'VacationRental',
      name: 'Hinode Centro – Luxury Sea View Apartment in Vieste',
      description: description,
      image: [
        'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/0yfrjq5g_DSC_3618.jpeg',
        'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/z0w881aj_DSC_3530.jpeg',
        'https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/1f2ipoxl_DSC_3551.jpeg',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Santa Maria di Merino 1',
        addressLocality: 'Vieste',
        addressRegion: 'Puglia',
        postalCode: '71019',
        addressCountry: 'IT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.8828,
        longitude: 16.1768,
      },
      telephone: '+393405079259',
      email: 'hinodecentrovieste@gmail.com',
      url: 'https://castello-balcony.preview.emergentagent.com',
      numberOfRooms: 2,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: 50,
        unitCode: 'MTK',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Sea View', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Smart TV', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Washing Machine', value: true },
      ],
      occupancy: {
        '@type': 'QuantitativeValue',
        maxValue: 4,
      },
    };

    // Insert or update structured data script
    let scriptTag = document.getElementById('structured-data');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }
  }, [language]);

  const updateMetaTag = (name, content, attribute = 'name') => {
    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };

  return null;
};

export default SEO;
