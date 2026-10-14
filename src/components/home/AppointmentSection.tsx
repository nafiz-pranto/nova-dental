import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Car, 
  AlertCircle,
  Lock,
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';

export const AppointmentSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();
  const [quickName, setQuickName] = useState<string>('');
  const [quickPhone, setQuickPhone] = useState<string>('');
  const [quickService, setQuickService] = useState<string>('smile-design');
  const [preferredTime, setPreferredTime] = useState<string>('morning');
  const [comfortNote, setComfortNote] = useState<string>('standard');
  const [quickSubmitted, setQuickSubmitted] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [showDemoCallNotice, setShowDemoCallNotice] = useState<boolean>(false);

  // Validate Bangladesh phone (+8801... or 01...)
  const validateBdPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-]/g, '');
    return /^(?:\+?880|0)1[3-9]\d{8}$/.test(cleaned);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim()) {
      setErrorText(isBn ? 'অনুগ্রহ করে আপনার নাম প্রদান করুন।' : 'Please enter your full name.');
      return;
    }
    if (!quickPhone.trim()) {
      setErrorText(isBn ? 'অনুগ্রহ করে আপনার মোবাইল নম্বর প্রদান করুন।' : 'Please enter your phone number.');
      return;
    }
    if (!validateBdPhone(quickPhone)) {
      setErrorText(
        isBn 
          ? 'সঠিক ১১-ডিজিটের বাংলাদেশি মোবাইল নম্বর দিন (যেমন: ০১৭XXXXXXXX বা +৮৮০১৭XXXXXXXX)।' 
          : 'Please enter a valid 11-digit Bangladesh phone number (e.g. 017XXXXXXXX or +88017XXXXXXXX).'
      );
      return;
    }

    setErrorText(null);
    setQuickSubmitted(true);
  };

  const isRealPhone = CLINIC_CONFIG.brand.isRealPhoneConfigured && CLINIC_CONFIG.brand.configuredRealPhone;
  const isRealWhatsApp = CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber;

  return (
    <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC] border-b border-[#D7E3EB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Location, Hours, Contact Details */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={isBn ? 'ব্যক্তিগত পরামর্শ ও অবস্থান' : 'Private Consultation & Studio'}
              title={isBn ? 'আমরা বনানী ১১, ঢাকায় আপনার সেবায় প্রস্তুত' : 'Reserve Your Exclusive Session in Banani'}
              subtitle={
                isBn
                  ? 'আমরা প্রতি ঘণ্টায় শুধুমাত্র একজন রোগীকে নিবেদিত সময় বরাদ্দ করি। ভিড়মুক্ত ও শান্ত পরিবেশে আপনার সুস্বাস্থ্যই আমাদের লক্ষ্য।'
                  : 'We reserve dedicated private time exclusively for your appointment with zero waiting room chaos and absolute confidentiality.'
              }
            />

            <div className="mt-8 space-y-4">
              {/* Banani 11 Studio Address card */}
              <div className="p-6 bg-[#FFFFFF] border border-[#D7E3EB] rounded-xl shadow-2xs hover:border-[#65869C] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E4EEF5] text-[#365469] border border-[#D7E3EB] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#65869C] block mb-1">
                      {isBn ? 'ক্লিনিক অবস্থান' : 'Banani Studio Address'}
                    </span>
                    <p className="text-sm font-semibold text-[#263746] leading-snug">
                      {isBn ? CLINIC_CONFIG.brand.addressBn : CLINIC_CONFIG.brand.addressEn}
                    </p>
                    <p className="text-xs text-[#627482] mt-2 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#65869C] shrink-0" />
                      <span>{isBn ? CLINIC_CONFIG.brand.landmarkBn : CLINIC_CONFIG.brand.landmarkEn}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="p-6 bg-[#FFFFFF] border border-[#D7E3EB] rounded-xl shadow-2xs hover:border-[#65869C] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E4EEF5] text-[#365469] border border-[#D7E3EB] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#65869C] block mb-1">
                      {isBn ? 'পরামর্শ ও সেবা সময়সূচি' : 'Private Practice Hours'}
                    </span>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between items-center text-[#263746]">
                        <span className="font-medium">{isBn ? 'শনিবার – বৃহস্পতিবার' : 'Saturday – Thursday'}</span>
                        <span className="font-bold text-[#365469]">১০:০০ AM – ৮:৩০ PM</span>
                      </div>
                      <div className="flex justify-between items-center text-[#627482]">
                        <span>{isBn ? 'শুক্রবার (পূর্বনির্ধারিত অ্যাপয়েন্টমেন্ট)' : 'Friday (By Prior Booking)'}</span>
                        <span>৩:০০ PM – ৮:৩০ PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Phone & WhatsApp Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Box */}
                {isRealPhone ? (
                  <a
                    href={`tel:${CLINIC_CONFIG.brand.configuredRealPhone}`}
                    className="p-4 bg-[#FFFFFF] border border-[#D7E3EB] hover:border-[#365469] rounded-xl flex items-center gap-3 transition-colors shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#365469]" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-[#627482]">
                        {isBn ? 'ফোন কল' : 'Direct Call'}
                      </span>
                      <span className="text-xs font-bold text-[#263746]">
                        {CLINIC_CONFIG.brand.configuredRealPhone}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowDemoCallNotice(true)}
                      className="w-full text-left p-4 bg-[#FFFFFF] border border-[#D7E3EB] hover:border-[#65869C] rounded-xl flex items-center gap-3 transition-colors shadow-2xs cursor-pointer"
                    >
                      <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#365469]" />
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-semibold text-[#627482]">
                          {isBn ? 'ফোন নম্বর' : 'Studio Phone'}
                        </span>
                        <span className="text-xs font-semibold text-[#263746]">
                          {isBn ? CLINIC_CONFIG.brand.phoneDisplayBn : CLINIC_CONFIG.brand.phoneDisplayEn}
                        </span>
                      </div>
                    </button>
                    {showDemoCallNotice && (
                      <div className="absolute left-0 bottom-full mb-2 w-64 bg-[#365469] text-[#FFFFFF] p-3 rounded-lg border border-[#A9C0D0] text-xs shadow-xl z-20">
                        <p>{isBn ? CLINIC_CONFIG.brand.demoPhoneNoticeBn : CLINIC_CONFIG.brand.demoPhoneNoticeEn}</p>
                        <button
                          onClick={() => setShowDemoCallNotice(false)}
                          className="mt-1 text-xs text-[#A9C0D0] font-bold underline cursor-pointer"
                        >
                          {isBn ? 'বুঝেছি' : 'Dismiss'}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* WhatsApp Box */}
                {isRealWhatsApp ? (
                  <a
                    href={`https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#FFFFFF] border border-[#D7E3EB] hover:border-[#365469] rounded-xl flex items-center gap-3 transition-colors shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#65869C]" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-[#627482]">
                        WhatsApp
                      </span>
                      <span className="text-xs font-bold text-[#263746]">
                        {isBn ? 'সরাসরি চ্যাট' : 'Direct Chat'}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="p-4 bg-[#FFFFFF] border border-[#D7E3EB] rounded-xl flex items-center gap-3 shadow-2xs">
                    <div className="w-9 h-9 rounded-md bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#65869C]" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-semibold text-[#627482]">
                        WhatsApp
                      </span>
                      <span className="text-xs font-medium text-[#263746]">
                        {isBn ? 'ডেমো প্রোটোটাইপ' : 'Demo Setup'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D7E3EB]">
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#65869C] block mb-1">
                    {isBn ? 'অনলাইন অ্যাপয়েন্টমেন্ট অনুরোধ' : 'CONFIDENTIAL PATIENT DISCOVERY'}
                  </span>
                  <h3 className="font-serif-atelier text-2xl font-bold text-[#263746]">
                    {isBn ? 'পরামর্শ সময়সূচির অনুরোধ জানান' : 'Request Private Consultation'}
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#E4EEF5] rounded-md text-xs text-[#365469] border border-[#D7E3EB]">
                  <Lock className="w-3.5 h-3.5 text-[#65869C]" />
                  <span>{isBn ? 'গোপনীয়তা সুরক্ষিত' : 'Strictly Confidential'}</span>
                </div>
              </div>

              {quickSubmitted ? (
                /* Honest Demo Submission Confirmation */
                <div className="text-center py-8 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#E4EEF5] text-[#365469] flex items-center justify-center mx-auto mb-4 border border-[#D7E3EB]">
                    <CheckCircle2 className="w-8 h-8 text-[#365469]" />
                  </div>

                  <span className="inline-block px-3 py-1 bg-[#E4EEF5] text-[#365469] text-xs font-semibold rounded-md mb-3 border border-[#D7E3EB]">
                    {isBn ? 'ডেমো অনুরোধ যাচাইকৃত' : 'DEMO SIMULATION RECEIVED'}
                  </span>

                  <h4 className="font-serif-atelier text-2xl font-bold text-[#263746] mb-3">
                    {isBn ? 'অনুরোধ ফর্ম সফলভাবে যাচাইকৃত!' : 'Request Form Validated Successfully!'}
                  </h4>

                  <div className="bg-[#F7FAFC] p-4 rounded-xl border border-[#D7E3EB] text-xs sm:text-sm text-[#263746] max-w-lg mx-auto mb-6 text-left space-y-2">
                    <p className="font-semibold text-[#365469]">
                      {isBn
                        ? `ধন্যবাদ, ${quickName}! এটি একটি ক্লায়েন্ট প্রেজেন্টেশন ডেমো ইন্টারফেস। কোনো আসল অ্যাপয়েন্টমেন্ট ডাটাবেজে সংরক্ষিত হয়নি।`
                        : `Thank you, ${quickName}! This is a client presentation demonstration. No live appointment database record was created.`}
                    </p>
                    <p className="text-[#627482] text-xs">
                      {isBn
                        ? `মোবাইল নম্বর: ${quickPhone} • নির্বাচিত সেবা: ${CLINIC_CONFIG.services.find(s => s.id === quickService)?.titleBn || quickService}`
                        : `Contact: ${quickPhone} • Selected Discipline: ${CLINIC_CONFIG.services.find(s => s.id === quickService)?.titleEn || quickService}`}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setQuickSubmitted(false);
                      setQuickName('');
                      setQuickPhone('');
                    }}
                    className="px-5 py-2.5 bg-[#365469] text-[#FFFFFF] text-xs font-semibold rounded-md hover:bg-[#284051] transition-colors cursor-pointer"
                  >
                    {isBn ? 'নতুন অনুরোধ পাঠান' : 'Submit Another Test Request'}
                  </button>
                </div>
              ) : (
                /* Interactive Request Form */
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  {errorText && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-lg flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorText}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div>
                      <label htmlFor="quick-name" className="block text-xs font-semibold text-[#263746] mb-1.5">
                        {isBn ? 'আপনার পূর্ণ নাম' : 'Full Name'} *
                      </label>
                      <input
                        id="quick-name"
                        type="text"
                        required
                        value={quickName}
                        onChange={(e) => setQuickName(e.target.value)}
                        placeholder={isBn ? 'যেমন: রাফিদ হাসান' : 'e.g. Sarah Khan'}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Patient Phone */}
                    <div>
                      <label htmlFor="quick-phone" className="block text-xs font-semibold text-[#263746] mb-1.5">
                        {isBn ? 'বাংলাদেশি মোবাইল নম্বর' : 'Phone Number (BD)'} *
                      </label>
                      <input
                        id="quick-phone"
                        type="tel"
                        required
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        placeholder="017XXXXXXXX"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="quick-service" className="block text-xs font-semibold text-[#263746] mb-1.5">
                      {isBn ? 'চিকিৎসা বা আগ্রহের ক্ষেত্র' : 'Clinical Area of Interest'}
                    </label>
                    <select
                      id="quick-service"
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors cursor-pointer"
                    >
                      {CLINIC_CONFIG.services.map((svc) => (
                        <option key={svc.id} value={svc.id}>
                          {isBn ? svc.titleBn : svc.titleEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Time & Comfort Request */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quick-time" className="block text-xs font-semibold text-[#263746] mb-1.5">
                        {isBn ? 'পছন্দের সময় স্লট' : 'Preferred Time'}
                      </label>
                      <select
                        id="quick-time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="morning">{isBn ? 'সকাল (১০:০০ AM – ১:০০ PM)' : 'Morning (10:00 AM – 1:00 PM)'}</option>
                        <option value="afternoon">{isBn ? 'দুপুর (২:০০ PM – ৫:০০ PM)' : 'Afternoon (2:00 PM – 5:00 PM)'}</option>
                        <option value="evening">{isBn ? 'সন্ধ্যা (৫:৩০ PM – ৮:৩০ PM)' : 'Evening (5:30 PM – 8:30 PM)'}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quick-comfort" className="block text-xs font-semibold text-[#263746] mb-1.5">
                        {isBn ? 'বিশেষ স্বাচ্ছন্দ্য অগ্রাধিকার' : 'Comfort Preferences'}
                      </label>
                      <select
                        id="quick-comfort"
                        value={comfortNote}
                        onChange={(e) => setComfortNote(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="standard">{isBn ? 'স্বাভাবিক পরামর্শ সেশন' : 'Standard 1-on-1 Consultation'}</option>
                        <option value="anxiety">{isBn ? 'উদ্বেগ/ভীতি সংবেদনশীল যত্ন' : 'Anxiety-Sensitive Pacing'}</option>
                        <option value="detailed">{isBn ? 'উন্নত স্মাইল সিমুলেশন' : 'Digital 3D Smile Simulation'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-center gap-2 text-xs text-[#627482] pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#365469] shrink-0" />
                    <span>
                      {isBn
                        ? 'আপনার তথ্য সম্পূর্ণ গোপন রাখা হয়। কোনো অনাকাঙ্ক্ষিত কল বা বিজ্ঞাপন পাঠানো হয় না।'
                        : 'Your clinical inquiries remain strictly private with zero marketing spam.'}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#365469] hover:bg-[#284051] text-[#FFFFFF] font-semibold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#A9C0D0]" />
                    <span>{isBn ? 'পরামর্শ অনুরোধ জমা দিন' : 'Submit Consultation Request'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
