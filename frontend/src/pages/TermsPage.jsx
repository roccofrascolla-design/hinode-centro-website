import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
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
            {t.legal.termsTitle}
          </h1>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p className="text-gray-600 mb-6">{t.legal.termsIntro}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.bookingTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.bookingText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.paymentTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.paymentText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.cancellationTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.cancellationText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.checkinTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.checkinText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.responsibilityTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.responsibilityText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.liabilityTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.liabilityText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.forceTitle}
            </h2>
            <p className="text-gray-600 mb-6">{t.legal.forceText}</p>

            <h2 className="text-2xl font-light text-gray-900 mt-8 mb-4">
              {t.legal.contactTitle}
            </h2>
            <p className="text-gray-600 mb-2">{t.legal.contactTermsText}</p>
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

export default TermsPage;
