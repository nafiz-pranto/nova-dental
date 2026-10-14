import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_CONFIG } from '../config/clinicData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RouteSeo } from '../components/seo/RouteSeo';
import { Button } from '../components/ui/Button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Car, 
  CheckCircle2, 
  AlertCircle,
  Lock,
  Info
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
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#777D77] mb-3">
          {isBn ? 'ক্লিনিক অবস্থান ও যোগাযোগের তথ্য' : 'Studio Location & Communication'}
        </p>

        <h1 className="font-serif-atelier text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29483F] tracking-tight leading-tight mb-4 text-balance">
          {isBn
            ? 'বনানী ১১, ঢাকায় শান্ত ও নিরাপদ পরিবেশে স্বাগতম'
            : 'Visit NOVA Dental Studio in Banani 11'}
        </h1>

        <p className="text-base text-[#343A36] font-light leading-relaxed">
          {isBn
            ? 'আমরা অত্যন্ত পরিকল্পিতভাবে প্রতি ঘণ্টায় নির্দিষ্ট ১ জন রোগীর জন্য সময় বরাদ্দ করি। ভিড়মুক্ত ও শান্ত পরিবেশে আপনার হাসি সুরক্ষায় আমাদের দরজা সর্বদা উন্মুক্ত।'
            : 'Located conveniently in Banani 11 with private elevator access, sanitized suites, and dedicated on-site patient parking.'}
        </p>
      </div>

      {/* Layout Grid: Details & Map Left, Form Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Column: Direct Address & Hours */}
        <div className="lg:col-span-6 space-y-8">
          {/* Banani Studio Location Card */}
          <div className="p-7 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-sm bg-[#29483F] text-[#B49A6A] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#777D77] block mb-1">
                  {isBn ? 'ক্লিনিক ঠিকানা' : 'Banani Studio Address'}
                </span>
                <p className="font-serif-atelier text-lg font-medium text-[#29483F] mb-2 leading-snug">
                  {address}
                </p>
                <div className="flex items-start gap-2 text-xs text-[#777D77] font-light mb-4">
                  <Car className="w-3.5 h-3.5 text-[#B49A6A] shrink-0 mt-0.5" />
                  <span>{landmark}</span>
                </div>

                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29483F] hover:text-[#B49A6A] transition-colors"
                >
                  <span>{isBn ? 'গুগল ম্যাপে দিকনির্দেশনা দেখুন' : 'Get Google Maps Directions'}</span>
                  <ExternalLink className="w-3 h-3 text-[#B49A6A]" />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="p-7 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#29483F] text-[#B49A6A] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#777D77] block mb-1">
                  {isBn ? 'ক্লিনিকের সময়সূচি' : 'Consultation Hours'}
                </span>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-[#29483F]">
                    <span className="font-medium">{isBn ? 'শনিবার – বৃহস্পতিবার' : 'Saturday – Thursday'}</span>
                    <span className="font-semibold text-[#343A36]">{isBn ? CLINIC_CONFIG.brand.hours.weekdayBn : CLINIC_CONFIG.brand.hours.weekdayEn}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#777D77]">
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
                className="p-5 bg-[#FCFBF8] border border-[#E7E2D8] rounded-sm flex items-center gap-3 hover:border-[#29483F] transition-colors shadow-2xs"
              >
                <Phone className="w-5 h-5 text-[#B49A6A]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#777D77] block font-semibold">
                    {isBn ? 'সরাসরি ফোন' : 'Studio Phone'}
                  </span>
                  <span className="text-xs font-semibold text-[#29483F]">
                    {CLINIC_CONFIG.brand.configuredRealPhone}
                  </span>
                </div>
              </a>
            ) : (
              <div className="p-5 bg-[#FCFBF8] border border-[#E7E2D8] rounded-sm flex items-center gap-3 shadow-2xs">
                <Phone className="w-5 h-5 text-[#B49A6A]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#777D77] block font-semibold">
                    {isBn ? 'ফোন নম্বর' : 'Phone'}
                  </span>
                  <span className="text-xs font-semibold text-[#29483F]">
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
                className="p-5 bg-[#FCFBF8] border border-[#E7E2D8] rounded-sm flex items-center gap-3 hover:border-[#29483F] transition-colors shadow-2xs"
              >
                <MessageCircle className="w-5 h-5 text-[#A5B5A5]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#777D77] block font-semibold">
                    WhatsApp
                  </span>
                  <span className="text-xs font-semibold text-[#29483F]">
                    {isBn ? 'সরাসরি চ্যাট' : 'Direct Inquiries'}
                  </span>
                </div>
              </a>
            ) : (
              <div className="p-5 bg-[#FCFBF8] border border-[#E7E2D8] rounded-sm flex items-center gap-3 shadow-2xs">
                <MessageCircle className="w-5 h-5 text-[#A5B5A5]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#777D77] block font-semibold">
                    WhatsApp
                  </span>
                  <span className="text-xs font-semibold text-[#29483F]">
                    {isBn ? 'ডেমো সেটআপ' : 'Demo Setup'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Patient Inquiry Form */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs shadow-md">
            <h2 className="font-serif-atelier text-2xl font-normal text-[#29483F] mb-2">
              {isBn ? 'আমাদের সরাসরি বার্তা পাঠান' : 'Direct Confidential Inquiry'}
            </h2>
            <p className="text-xs text-[#777D77] mb-6 font-light leading-relaxed">
              {isBn
                ? 'আপনার যেকোনো প্রশ্ন বা পরামর্শের বিষয়ে সরাসরি আমাদের ডেন্টাল কেয়ার টিমের সাথে যোগাযোগ করুন।'
                : 'Send your query directly to our concierge team. We prioritize your privacy and scheduling needs.'}
            </p>

            {formSubmitted ? (
              /* Honest Demo Simulation Response */
              <div className="p-8 bg-[#FCFBF8] border border-[#E7E2D8] rounded-sm text-center animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-[#E7E2D8] text-[#29483F] flex items-center justify-center mx-auto mb-4 border border-[#B49A6A]">
                  <CheckCircle2 className="w-8 h-8 text-[#29483F]" />
                </div>

                <span className="inline-block px-2.5 py-0.5 bg-[#F6F3EC] text-[#29483F] text-[10px] font-mono uppercase tracking-widest rounded-sm mb-3 border border-[#E7E2D8]">
                  DEMO FORM PROCESSED
                </span>

                <h3 className="font-serif-atelier text-xl font-normal text-[#29483F] mb-2">
                  {isBn ? 'বার্তা ফর্ম সফলভাবে যাচাইকৃত' : 'Inquiry Validated Successfully'}
                </h3>

                <div className="p-4 bg-[#F6F3EC] border border-[#E7E2D8] rounded-xs text-xs sm:text-sm text-[#29483F] font-medium leading-relaxed mb-5">
                  {isBn
                    ? `ধন্যবাদ, ${senderName}! এটি একটি প্রেজেন্টেশন ডেমো ইন্টারফেস। কোনো বাহ্যিক সার্ভার বা ইমেইলে বার্তা পাঠানো হয়নি।`
                    : `Thank you, ${senderName}! This is a client presentation prototype. No live external email or CRM dispatch occurred.`}
                </div>

                <div className="text-[11px] text-[#777D77] mb-6 space-y-1">
                  <p>
                    <Lock className="w-3.5 h-3.5 text-[#B49A6A] inline mr-1" />
                    {isBn ? 'প্রদত্ত ফোন নম্বর:' : 'Submitted Contact:'} <span className="font-mono text-[#29483F]">{senderPhone}</span>
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setFormSubmitted(false);
                    setSenderName('');
                    setSenderPhone('');
                    setSenderMessage('');
                  }}
                >
                  {isBn ? 'নতুন বার্তা পাঠান' : 'Send Another Test Inquiry'}
                </Button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {validationError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-sender-name" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'আপনার পূর্ণ নাম' : 'Full Name'} *
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={isBn ? 'যেমন: তাসনিম আহমেদ' : 'e.g. Asif Chowdhury'}
                    className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-sender-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'বাংলাদেশি মোবাইল নম্বর' : 'Phone Number (BD)'} *
                  </label>
                  <input
                    id="contact-sender-phone"
                    type="tel"
                    required
                    value={senderPhone}
                    onChange={(e) => setSenderPhone(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-topic-select" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'বিষয়ের ধরন' : 'Inquiry Topic'}
                  </label>
                  <select
                    id="contact-topic-select"
                    value={senderTopic}
                    onChange={(e) => setSenderTopic(e.target.value)}
                    className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] outline-none cursor-pointer"
                  >
                    <option value="general">{isBn ? 'সাধারণ জিজ্ঞাসা' : 'General Question'}</option>
                    <option value="pricing">{isBn ? 'খরচ ও পেমেন্ট স্বচ্ছতা' : 'Fee Transparency & Planning'}</option>
                    <option value="anxiety">{isBn ? 'ভীতি ও বিশেষ স্বাচ্ছন্দ্য কেয়ার' : 'Dental Anxiety & Gentle Care'}</option>
                    <option value="corporate">{isBn ? 'কর্পোরেট / এক্সিকিউটিভ কেয়ার' : 'Corporate Dental Privilege'}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message-body" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'আপনার বার্তা (ঐচ্ছিক)' : 'Message (Optional)'}
                  </label>
                  <textarea
                    id="contact-message-body"
                    rows={3}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder={
                      isBn
                        ? 'আপনার জিজ্ঞাসা বা প্রত্যাশার বিবরণ লিখুন...'
                        : 'Describe your question or scheduling preference...'
                    }
                    className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#777D77] pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#B49A6A] shrink-0 mt-0.5" />
                  <span>
                    {isBn
                      ? 'আপনার ফোন নম্বর ও বার্তা কঠোরভাবে গোপন রাখা হয়।'
                      : 'Your information remains confidential with zero third-party sharing.'}
                  </span>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full">
                    {isBn ? 'বার্তা পাঠান' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
