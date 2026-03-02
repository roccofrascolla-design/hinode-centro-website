import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, MessageCircle, Check } from 'lucide-react';
import { toast } from 'sonner';

const Booking = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '2',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare payload for Formspree
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        checkIn: formData.checkin,
        checkOut: formData.checkout,
        guests: formData.guests,
        message: formData.message || 'No additional message',
        pageUrl: window.location.href,
        language: language,
      };
      
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/mvzbnvor', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (response.ok) {
        // Success
        toast.success(t.booking.successMessage || 'Request sent! We will contact you soon.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkin: '',
          checkout: '',
          guests: '2',
          message: '',
        });
      } else {
        // Error response from Formspree
        throw new Error('Formspree error');
      }
    } catch (error) {
      // Show error message
      console.error('Booking submission error:', error);
      toast.error(t.booking.errorMessage || 'Something went wrong. Please try again or email us at hinodecentrovieste@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '+393405079259';
  const whatsappMessage = encodeURIComponent(
    t.language === 'it'
      ? 'Ciao! Vorrei informazioni su Hinode Centro – Luxury Sea View Apartment in Vieste.'
      : 'Hello! I would like information about Hinode Centro – Luxury Sea View Apartment in Vieste.'
  );

  return (
    <section id="booking" className="py-20 lg:py-32 bg-gradient-to-b from-[#F3EFE9]/30 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t.booking.title}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t.booking.subtitle}
          </p>
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.booking.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C2A878] flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <p
                  className="text-sm text-gray-700 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form and WhatsApp */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-10">
            <h3
              className="text-3xl font-light text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t.booking.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.booking.namePlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-transparent transition-all text-gray-900"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.booking.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-transparent transition-all text-gray-900"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.booking.phonePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-transparent transition-all text-gray-900"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="date"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleChange}
                    placeholder={t.booking.checkinPlaceholder}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-transparent transition-all text-gray-900"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleChange}
                    placeholder={t.booking.checkoutPlaceholder}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-transparent transition-all text-gray-900"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>
              </div>
              <div>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-transparent transition-all text-gray-900"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.booking.messagePlaceholder}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C2A878] focus:border-transparent transition-all resize-none text-gray-900"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#C2A878] text-white font-light tracking-wide rounded-sm hover:bg-[#2E4A5B] transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Send size={20} />
                <span>{isSubmitting ? (t.booking.sending || 'Sending...') : t.booking.submit}</span>
              </button>
            </form>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center">
              <p
                className="text-2xl font-light text-gray-700 mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {t.booking.orText}
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#25D366] text-white font-light tracking-wide rounded-sm hover:bg-[#20ba5a] transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <MessageCircle size={24} />
                <span>{t.booking.whatsappText}</span>
              </a>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <img
                src="https://customer-assets.emergentagent.com/job_castello-balcony/artifacts/k5sztf5m_DSC_3630.jpeg"
                alt="Historic center of Vieste with lighthouse"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
