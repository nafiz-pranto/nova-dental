import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_CONFIG } from '../config/clinicData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RouteSeo } from '../components/seo/RouteSeo';
import { Button } from '../components/ui/Button';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Car, 
  CheckCircle2, 
  AlertCircle,
  Lock
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { isBn } = useLanguage();
  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [senderTopic, setSenderTopic] = useState('general');
  const [senderMessage, setSenderMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Real contact details flags
  const isRealPhone = CLINIC_CONFIG.brand.isRealPhoneConfigured && CLINIC_CONFIG.brand.configuredRealPhone;
  const isRealWhatsApp = CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber;
  const address = isBn ? CLINIC_CONFIG.brand.addressBn : CLINIC_CONFIG.brand.addressEn;
  const landmark = isBn ? CLINIC_CONFIG.brand.landmarkBn : CLINIC_CONFIG.brand.landmarkEn;
  const mapDirectionsUrl = CLINIC_CONFIG.brand.mapDirectionsUrl || 'https://maps.google.com';

  // Validate Bangladesh phone
  const validateBdPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-]/g, '');
    return /^(?:\+?880|0)1[3-9]\d{8}$/.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim()) {
      setValidationError(isBn ? 'অনুগ্রহ করে আপনার নাম লিখুন।' : 'Please enter your name.');
      return;
    }
    if (!senderPhone.trim()) {
      setValidationError(isBn ? 'অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন।' : 'Please enter your mobile phone number.');
      return;
    }
    if (!validateBdPhone(senderPhone)) {
      setValidationError(
        isBn
          ? 'সঠিক ১১-ডিজিটের বাংলাদেশি মোবাইল নম্বর দিন (যেমন: ০১৭XXXXXXXX বা +৮৮০১৭XXXXXXXX)।'
          : 'Please enter a valid 11-digit Bangladesh phone number (e.g. 017XXXXXXXX or +88017XXXXXXXX).'
      );
      return;
    }

    setValidationError(null);
    setFormSubmitted(true);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RouteSeo
        titleEn="Contact, Location & Studio Directions | NOVA Dental Studio"
        titleBn="যোগাযোগ, ঠিকানা ও গুগল ম্যাপ ডিরেকশন | নোভা ডেন্টাল স্টুডিও"
        descriptionEn="Find NOVA Dental Studio in Banani 11, Dhaka. Access direct clinic coordinates, parking guidance, and client inquiry forms."
        descriptionBn="বনানী ১১, ঢাকায় নোভা ডেন্টাল স্টুডিওর অবস্থান। সরাসরি ডিরেকশন, পার্কিং সুবিধা ও অ্যাপয়েন্টমেন্ট যোগাযোগ ফর্ম।"
        canonicalPath="/contact"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'Dentist',
          'name': 'NOVA Dental Studio (Presentation Demo)',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': CLINIC_CONFIG.brand.addressEn,
            'addressLocality': 'Dhaka',
            'postalCode': '1213',
            'addressCountry': 'BD',
          },
          'telephone': CLINIC_CONFIG.brand.configuredRealPhone || '+8801700000000',
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          {
            labelEn: 'Contact & Location',
            labelBn: 'যোগাযোগ ও অবস্থান',
          },
        ]}
        className="mb-8"
      />

      {/* Hero Header */}
      <div className="max-w-3xl mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#65869C] mb-2">
          {isBn ? 'ক্লিনিক অবস্থান ও যোগাযোগের তথ্য' : 'Studio Location & Communication'}
        </p>

        <h1 className="font-serif-atelier text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263746] tracking-tight leading-tight mb-4 text-balance">
          {isBn
            ? 'বনানী ১১, ঢাকায় শান্ত ও নিরাপদ পরিবেশে স্বাগতম'
            : 'Visit NOVA Dental Studio in Banani 11'}
        </h1>

        <p className="text-base text-[#627482] leading-relaxed">
          {isBn
            ? 'আমরা অত্যন্ত পরিকল্পিতভাবে প্রতি ঘণ্টায় নির্দিষ্ট ১ জন রোগীর জন্য সময় বরাদ্দ করি। ভিড়মুক্ত ও শান্ত পরিবেশে আপনার হাসি সুরক্ষায় আমাদের দরজা সর্বদা উন্মুক্ত।'
            : 'Located conveniently in Banani 11 with private elevator access, sanitized suites, and dedicated on-site patient parking.'}
        </p>
      </div>

      {/* Layout Grid: Details & Map Left, Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
        {/* Left Column: Direct Address & Hours */}
        <div className="lg:col-span-6 space-y-6">
          {/* Banani Studio Location Card */}
          <div className="p-6 sm:p-7 bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl shadow-2xs">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0 border border-[#D7E3EB]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#65869C] block mb-1">
                  {isBn ? 'ক্লিনিক ঠিকানা' : 'Banani Studio Address'}
                </span>
                <p className="font-serif-atelier text-lg font-bold text-[#263746] mb-1.5 leading-snug">
                  {address}
                </p>
                <div className="flex items-start gap-2 text-xs text-[#627482] mb-3">
                  <Car className="w-3.5 h-3.5 text-[#65869C] shrink-0 mt-0.5" />
                  <span>{landmark}</span>
                </div>

                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#365469] hover:text-[#263746] transition-colors"
                >
                  <span>{isBn ? 'গুগল ম্যাপে দিকনির্দেশনা দেখুন' : 'Get Google Maps Directions'}</span>
                  <ExternalLink className="w-3 h-3 text-[#65869C]" />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="p-6 sm:p-7 bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0 border border-[#D7E3EB]">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#65869C] block mb-1">
                  {isBn ? 'ক্লিনিকের সময়সূচি' : 'Consultation Hours'}
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-[#263746]">
                    <span className="font-medium">{isBn ? 'শনিবার – বৃহস্পতিবার' : 'Saturday – Thursday'}</span>
                    <span className="font-bold text-[#365469]">{isBn ? CLINIC_CONFIG.brand.hours.weekdayBn : CLINIC_CONFIG.brand.hours.weekdayEn}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#627482]">
                    <span>{isBn ? 'শুক্রবার' : 'Friday'}</span>
                    <span>{isBn ? CLINIC_CONFIG.brand.hours.weekendBn : CLINIC_CONFIG.brand.hours.weekendEn}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Phone & WhatsApp Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {isRealPhone ? (
              <a
                href={`tel:${CLINIC_CONFIG.brand.configuredRealPhone}`}
                className="p-5 bg-[#FFFFFF] border border-[#D7E3EB] rounded-xl flex items-center gap-3 hover:border-[#365469] transition-colors shadow-2xs"
              >
                <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#365469]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#627482] block font-semibold">
                    {isBn ? 'সরাসরি ফোন' : 'Studio Phone'}
                  </span>
                  <span className="text-xs font-bold text-[#263746]">
                    {CLINIC_CONFIG.brand.configuredRealPhone}
                  </span>
                </div>
              </a>
            ) : (
              <div className="p-5 bg-[#FFFFFF] border border-[#D7E3EB] rounded-xl flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#365469]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#627482] block font-semibold">
                    {isBn ? 'ফোন নম্বর' : 'Phone'}
                  </span>
                  <span className="text-xs font-semibold text-[#263746]">
                    {isBn ? CLINIC_CONFIG.brand.phoneDisplayBn : CLINIC_CONFIG.brand.phoneDisplayEn}
                  </span>
                </div>
              </div>
            )}

            {isRealWhatsApp ? (
              <a
                href={`https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#FFFFFF] border border-[#D7E3EB] rounded-xl flex items-center gap-3 hover:border-[#365469] transition-colors shadow-2xs"
              >
                <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#65869C]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#627482] block font-semibold">
                    WhatsApp
                  </span>
                  <span className="text-xs font-bold text-[#263746]">
                    {isBn ? 'সরাসরি চ্যাট' : 'Direct Inquiries'}
                  </span>
                </div>
              </a>
            ) : (
              <div className="p-5 bg-[#FFFFFF] border border-[#D7E3EB] rounded-xl flex items-center gap-3 shadow-2xs">
                <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#65869C]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#627482] block font-semibold">
                    WhatsApp
                  </span>
                  <span className="text-xs font-medium text-[#263746]">
                    {isBn ? 'ডেমো সেটআপ' : 'Demo Setup'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Patient Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 lg:p-10 bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl shadow-sm">
            <h2 className="font-serif-atelier text-2xl font-bold text-[#263746] mb-2">
              {isBn ? 'আমাদের সরাসরি বার্তা পাঠান' : 'Direct Confidential Inquiry'}
            </h2>
            <p className="text-xs text-[#627482] mb-6 leading-relaxed">
              {isBn
                ? 'আপনার যেকোনো প্রশ্ন বা পরামর্শের বিষয়ে সরাসরি আমাদের ডেন্টাল কেয়ার টিমের সাথে যোগাযোগ করুন।'
                : 'Send your clinical inquiries or scheduling questions directly to our care concierge.'}
            </p>

            {formSubmitted ? (
              <div className="text-center py-8 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-[#E4EEF5] text-[#365469] flex items-center justify-center mx-auto mb-3 border border-[#D7E3EB]">
                  <CheckCircle2 className="w-7 h-7 text-[#365469]" />
                </div>
                <h3 className="font-serif-atelier text-xl font-bold text-[#263746] mb-2">
                  {isBn ? 'বার্তা যাচাইকরণ সম্পন্ন!' : 'Inquiry Form Validated!'}
                </h3>
                <p className="text-xs text-[#627482] mb-6 max-w-sm mx-auto leading-relaxed">
                  {isBn
                    ? `ধন্যবাদ, ${senderName}! এটি একটি ক্লায়েন্ট প্রেজেন্টেশন ডেমো। কোনো তথ্য বহিরাগত ডাটাবেজে সংরক্ষণ করা হয়নি।`
                    : `Thank you, ${senderName}! This client preview operates strictly locally. No live message transmission took place.`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setSenderName('');
                    setSenderPhone('');
                    setSenderMessage('');
                  }}
                  className="px-5 py-2.5 bg-[#365469] text-[#FFFFFF] text-xs font-semibold rounded-md hover:bg-[#284051] transition-colors cursor-pointer"
                >
                  {isBn ? 'নতুন বার্তা লিখুন' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {validationError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="sender-name" className="block text-xs font-semibold text-[#263746] mb-1.5">
                    {isBn ? 'আপনার পূর্ণ নাম' : 'Your Full Name'} *
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={isBn ? 'যেমন: রাফিদ হাসান' : 'e.g. Sarah Khan'}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sender-phone" className="block text-xs font-semibold text-[#263746] mb-1.5">
                    {isBn ? 'বাংলাদেশি মোবাইল নম্বর' : 'Phone Number (BD)'} *
                  </label>
                  <input
                    id="sender-phone"
                    type="tel"
                    required
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sender-topic" className="block text-xs font-semibold text-[#263746] mb-1.5">
                    {isBn ? 'বিষয় বা আগ্রহ' : 'Topic of Inquiry'}
                  </label>
                  <select
                    id="sender-topic"
                    value={senderTopic}
                    onChange={(e) => setSenderTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none cursor-pointer"
                  >
                    <option value="general">{isBn ? 'সাধারণ পরামর্শ বা অ্যাপয়েন্টমেন্ট তথ্য' : 'General Consultation / Timing'}</option>
                    <option value="smile">{isBn ? 'ডিজিটাল স্মাইল ডিজাইন ও ভিনিয়ার্স' : 'Smile Design & Aesthetics'}</option>
                    <option value="implants">{isBn ? 'ডেন্টাল ইমপ্লান্ট ও সার্জারি' : 'Dental Implants & Surgery'}</option>
                    <option value="aligners">{isBn ? 'স্বচ্ছ অ্যালাইনার চিকিৎসা' : 'Clear Aligners'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="sender-message" className="block text-xs font-semibold text-[#263746] mb-1.5">
                    {isBn ? 'আপনার বার্তা বা জিজ্ঞাসা (ঐচ্ছিক)' : 'Your Message / Inquiry (Optional)'}
                  </label>
                  <textarea
                    id="sender-message"
                    rows={3}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder={isBn ? 'আপনার প্রশ্ন বিস্তারিত লিখুন...' : 'Write your inquiry here...'}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#627482] pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#365469] shrink-0" />
                  <span>{isBn ? 'আপনার তথ্য সম্পূর্ণ গোপনীয় রাখা হয়।' : 'Confidential inquiry. No marketing spam.'}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#365469] hover:bg-[#284051] text-[#FFFFFF] font-semibold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm cursor-pointer"
                >
                  {isBn ? 'বার্তা পাঠান' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
