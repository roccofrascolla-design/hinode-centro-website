import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#C2A878] hover:text-[#2E4A5B] transition-colors mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">{t.legal.backToHome}</span>
          </button>

          {/* Title */}
          <h1
            className="text-4xl lg:text-5xl font-light text-gray-900 mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.legal.privacyTitle}
          </h1>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p className="text-gray-600 mb-6">{t.legal.privacyIntro}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.dataControllerTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.dataControllerText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.dataCollectedTitle}
            </h2>
            <p className="text-gray-600 mb-4">{t.legal.dataCollectedText}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>{t.legal.dataCollectedItem1}</li>
              <li>{t.legal.dataCollectedItem2}</li>
              <li>{t.legal.dataCollectedItem3}</li>
              <li>{t.legal.dataCollectedItem4}</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.purposeTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.purposeText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.retentionTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.retentionText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.sharingTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.sharingText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.rightsTitle}
            </h2>
            <p className="text-gray-600 mb-4">{t.legal.rightsText}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>{t.legal.rightsItem1}</li>
              <li>{t.legal.rightsItem2}</li>
              <li>{t.legal.rightsItem3}</li>
              <li>{t.legal.rightsItem4}</li>
            </ul>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.cookiesTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.cookiesText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.contactTitle}
            </h2>
            <p className="text-gray-600 mb-2">{t.legal.contactText}</p>
            <p className="text-gray-600">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:hinodecentrovieste@gmail.com"
                className="text-[#C2A878] hover:text-[#2E4A5B] transition-colors"
              >
                hinodecentrovieste@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
