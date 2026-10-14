import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { CLINIC_CONFIG } from '../config/clinicData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RouteSeo } from '../components/seo/RouteSeo';
import { Button } from '../components/ui/Button';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles, 
  MapPin,
  Heart,
  Lock
} from 'lucide-react';

export const AppointmentPage: React.FC = () => {
  const { isBn } = useLanguage();
  const { queryParams, navigate } = useRouter();

  const initialService = queryParams.service || 'smile-design';
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('afternoon');
  const [patientName, setPatientName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [shortNote, setShortNote] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  // Validate Bangladesh phone: 01XXXXXXXXX (11 digits) or +8801XXXXXXXXX (14 chars)
  const validateBdPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-]/g, '');
    const bdRegex = /^(?:\+?880|0)1[3-9]\d{8}$/;
    return bdRegex.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!patientName.trim()) {
      setNameError(isBn ? 'অনুগ্রহ করে আপনার নাম লিখুন।' : 'Please enter your full name.');
      hasError = true;
    } else {
      setNameError(null);
    }

    if (!phoneNumber.trim()) {
      setPhoneError(isBn ? 'অনুগ্রহ করে আপনার মোবাইল নম্বর লিখুন।' : 'Please enter your contact phone number.');
      hasError = true;
    } else if (!validateBdPhone(phoneNumber)) {
      setPhoneError(
        isBn 
          ? 'সঠিক ১১-ডিজিটের বাংলাদেশি মোবাইল নম্বর দিন (যেমন: ০১৭XXXXXXXX বা +৮৮০১৭XXXXXXXX)।' 
          : 'Please enter a valid 11-digit Bangladesh phone number (e.g. 017XXXXXXXX or +88017XXXXXXXX).'
      );
      hasError = true;
    } else {
      setPhoneError(null);
    }

    if (hasError) return;

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setPatientName('');
    setPhoneNumber('');
    setShortNote('');
    setNameError(null);
    setPhoneError(null);
  };

  const activeServiceObj = CLINIC_CONFIG.services.find(s => s.id === selectedService) || CLINIC_CONFIG.services[0];

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <RouteSeo
        titleEn="Reserve a Private Dental Consultation | NOVA Dental Studio Banani"
        titleBn="ব্যক্তিগত ডেন্টাল পরামর্শ অ্যাপয়েন্টমেন্ট | নোভা ডেন্টাল স্টুডিও"
        descriptionEn="Reserve your private discovery consultation in Banani 11, Dhaka. Unhurried 1-on-1 pacing, digital diagnostics, and verified Class-B sterilization."
        descriptionBn="বনানী ১১, ঢাকায় আপনার প্রাইভেট ডেন্টাল ভিজিট নিশ্চিত করুন। নিরিবিলি ১-অন-১ পরামর্শ, ডিজিটাল থ্রি-ডি স্ক্যান ও সম্পূর্ণ ফি স্বচ্ছতা।"
        canonicalPath="/appointment"
      />

      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          {
            labelEn: 'Appointment Request',
            labelBn: 'অ্যাপয়েন্টমেন্ট অনুরোধ',
          },
        ]}
        className="mb-8"
      />

      {/* Hero Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#777D77] mb-3">
          {isBn ? 'ব্যক্তিগত ওয়ান-অন-ওয়ান পরামর্শ' : 'Private Consultation Discovery'}
        </p>

        <h1 className="font-serif-atelier text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29483F] tracking-tight leading-tight mb-4 text-balance">
          {isBn
            ? 'বনানী ১১ স্টুডিওতে আপনার পরামর্শ সময়সূচি নির্ধারণ করুন'
            : 'Schedule Your Private Consultation in Banani'}
        </h1>

        <p className="text-base text-[#343A36] font-light leading-relaxed">
          {isBn
            ? 'আমরা ভিড়মুক্ত পরিবেশে প্রতি ঘণ্টায় শুধুমাত্র একজন রোগীকে নিবেদিত সময় বরাদ্দ করি। চিকিৎসা শুরুর পূর্বেই খোলামেলা আলোচনা ও লিখিত খরচের স্পষ্ট বিবরণ প্রদান করা হয়।'
            : 'We reserve dedicated private time exclusively for your appointment with zero waiting room chaos and absolute confidentiality.'}
        </p>
      </div>

      {/* Main Grid: Form Left (7 cols), Context Right (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        {/* Left Column: Booking Form Container */}
        <div className="lg:col-span-7">
          <div className="bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs p-7 sm:p-10 shadow-md">
            {isSubmitted ? (
              /* Honest Demo Simulation Confirmation */
              <div className="text-center py-8 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#E7E2D8] text-[#29483F] flex items-center justify-center mx-auto mb-4 border border-[#B49A6A]">
                  <CheckCircle2 className="w-10 h-10 text-[#29483F]" />
                </div>

                <span className="inline-block px-3 py-1 bg-[#F6F3EC] text-[#29483F] text-[10px] font-mono uppercase tracking-widest rounded-sm mb-3 border border-[#E7E2D8]">
                  DEMO SIMULATION RECEIVED
                </span>

                <h2 className="font-serif-atelier text-2xl font-normal text-[#29483F] mb-3">
                  {isBn ? 'অনুরোধ ফর্ম সফলভাবে যাচাইকৃত!' : 'Request Form Validated Successfully!'}
                </h2>

                <div className="bg-[#F6F3EC] p-5 rounded-sm border border-[#E7E2D8] text-sm text-[#29483F] font-medium text-center mb-6 shadow-xs leading-relaxed">
                  {isBn
                    ? `ধন্যবাদ, ${patientName}! এটি ক্লায়েন্ট ও টিম পর্যালোচনার জন্য একটি ডেমো ইন্টারফেস। কোনো আসল অ্যাপয়েন্টমেন্ট ডাটাবেজে রেকর্ড করা হয়নি।`
                    : `Thank you, ${patientName}! This is a client presentation demonstration. No live appointment database record was created.`}
                </div>

                <div className="bg-[#F6F3EC] p-5 rounded-sm border border-[#E7E2D8] text-xs text-[#777D77] text-left space-y-2 mb-6">
                  <p className="font-semibold text-[#29483F] uppercase tracking-wider text-[10px]">
                    {isBn ? 'প্রদত্ত অনুরোধের বিবরণ (সিমুলেশন):' : 'Submitted Discovery Details (Simulation):'}
                  </p>
                  <p>
                    <span className="font-medium text-[#29483F]">{isBn ? 'রোগীর নাম:' : 'Patient Name:'}</span> {patientName}
                  </p>
                  <p>
                    <span className="font-medium text-[#29483F]">{isBn ? 'মোবাইল নম্বর:' : 'Phone Number:'}</span> {phoneNumber}
                  </p>
                  <p>
                    <span className="font-medium text-[#29483F]">{isBn ? 'চিকিৎসা বিভাগ:' : 'Discipline:'}</span>{' '}
                    {isBn ? activeServiceObj.titleBn : activeServiceObj.titleEn}
                  </p>
                  <p>
                    <span className="font-medium text-[#29483F]">{isBn ? 'পছন্দের সময়:' : 'Preferred Slot:'}</span>{' '}
                    {preferredTime} {preferredDate ? `(${preferredDate})` : ''}
                  </p>
                </div>

                <div className="text-[11px] text-[#777D77] mb-6 flex items-start gap-2 justify-center">
                  <Lock className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                  <span>
                    {isBn
                      ? 'অনবোর্ডিংয়ের সময় এটি সরাসরি ক্লিনিকের প্রাতিষ্ঠানিক হোয়াটসঅ্যাপ বা ম্যানেজমেন্ট সিস্টেমে সংযুক্ত করা হবে।'
                      : 'During live onboarding, this connects directly to the verified practice CRM or clinic phone.'}
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  onClick={handleReset}
                  className="w-full justify-center"
                >
                  {isBn ? 'নতুন ডেমো অনুরোধ পাঠান' : 'Submit Another Test Request'}
                </Button>
              </div>
            ) : (
              /* Interactive Request Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#E7E2D8] pb-4 mb-2 flex items-center justify-between">
                  <h2 className="font-serif-atelier text-xl font-medium text-[#29483F]">
                    {isBn ? 'পরামর্শ অনুরোধের বিবরণ' : 'Discovery Request Form'}
                  </h2>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#777D77]">
                    STEP 1 OF 1
                  </span>
                </div>

                {/* Treatment Category */}
                <div>
                  <label htmlFor="appointment-service-select" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'চিকিৎসা বা আগ্রহের ক্ষেত্র' : 'Clinical Discipline'} *
                  </label>
                  <select
                    id="appointment-service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] focus:outline-none cursor-pointer"
                  >
                    {CLINIC_CONFIG.services.map((svc) => (
                      <option key={svc.id} value={svc.id}>
                        {isBn ? svc.titleBn : svc.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Patient Full Name */}
                <div>
                  <label htmlFor="appointment-patient-name" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'আপনার পূর্ণ নাম' : 'Full Name'} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#777D77] absolute left-3 top-3.5" />
                    <input
                      id="appointment-patient-name"
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder={isBn ? 'যেমন: তাসনিম আহমেদ' : 'e.g. Asif Chowdhury'}
                      className={`w-full text-xs pl-9 pr-3 py-3 bg-[#F6F3EC] border rounded-sm text-[#29483F] focus:ring-1 focus:ring-[#B49A6A] outline-none transition-colors ${
                        nameError ? 'border-red-600 bg-red-50/20' : 'border-[#E7E2D8] focus:border-[#B49A6A]'
                      }`}
                    />
                  </div>
                  {nameError && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{nameError}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number with BD Validation */}
                <div>
                  <label htmlFor="appointment-phone-number" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'বাংলাদেশি মোবাইল নম্বর' : 'Phone Number (BD)'} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#777D77] absolute left-3 top-3.5" />
                    <input
                      id="appointment-phone-number"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="017XXXXXXXX"
                      className={`w-full text-xs pl-9 pr-3 py-3 bg-[#F6F3EC] border rounded-sm text-[#29483F] focus:ring-1 focus:ring-[#B49A6A] outline-none transition-colors ${
                        phoneError ? 'border-red-600 bg-red-50/20' : 'border-[#E7E2D8] focus:border-[#B49A6A]'
                      }`}
                    />
                  </div>
                  {phoneError ? (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{phoneError}</span>
                    </p>
                  ) : (
                    <p className="mt-1 text-[10px] text-[#777D77]">
                      {isBn ? '১১-সংখ্যার বাংলাদেশি মোবাইল নম্বর লিখুন (যেমন: ০১৭XXXXXXXX)' : '11-digit Bangladesh phone number (e.g. 017XXXXXXXX)'}
                    </p>
                  )}
                </div>

                {/* Preferred Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appointment-date-picker" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                      {isBn ? 'পছন্দের তারিখ (ঐচ্ছিক)' : 'Preferred Date (Optional)'}
                    </label>
                    <input
                      id="appointment-date-picker"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="appointment-time-slot" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                      {isBn ? 'পছন্দের সময় স্লট' : 'Preferred Slot'}
                    </label>
                    <select
                      id="appointment-time-slot"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] outline-none cursor-pointer"
                    >
                      <option value="morning">{isBn ? 'সকাল (১০:০০ AM - ১:০০ PM)' : 'Morning (10:00 AM - 1:00 PM)'}</option>
                      <option value="afternoon">{isBn ? 'দুপুর (২:০০ PM - ৫:০০ PM)' : 'Afternoon (2:00 PM - 5:00 PM)'}</option>
                      <option value="evening">{isBn ? 'সন্ধ্যা (৫:৩০ PM - ৮:৩০ PM)' : 'Evening (5:30 PM - 8:30 PM)'}</option>
                    </select>
                  </div>
                </div>

                {/* Notes or Prior Anxiety */}
                <div>
                  <label htmlFor="appointment-clinical-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#777D77] mb-1.5">
                    {isBn ? 'চিকিৎসাভীতি বা বিশেষ কোনো লক্ষণ (ঐচ্ছিক)' : 'Anxiety / Clinical Notes (Optional)'}
                  </label>
                  <textarea
                    id="appointment-clinical-notes"
                    rows={3}
                    value={shortNote}
                    onChange={(e) => setShortNote(e.target.value)}
                    placeholder={
                      isBn
                        ? 'আপনার পূর্ববর্তী অভিজ্ঞতা, দাঁতের সংবেদনশীলতা বা বিশেষ কোনো সুবিধা...'
                        : 'Any prior sensitivity, dental anxiety, or questions you wish to clarify...'
                    }
                    className="w-full text-xs p-3 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm text-[#29483F] focus:border-[#B49A6A] outline-none"
                  />
                </div>

                {/* Privacy and Trust Assurance */}
                <div className="p-4 bg-[#F6F3EC] rounded-sm border border-[#E7E2D8] flex items-start gap-2.5 text-[11px] text-[#777D77] leading-relaxed">
                  <Lock className="w-3.5 h-3.5 text-[#B49A6A] shrink-0 mt-0.5" />
                  <span>
                    {isBn
                      ? 'আপনার ফোন নম্বর ও স্বাস্থ্য তথ্য কঠোরভাবে গোপন থাকবে। কোনো অনাকাঙ্ক্ষিত বাণিজ্যিক কল বা এসএমএস পাঠানো হবে না।'
                      : 'We maintain strict medical confidentiality. Zero third-party marketing or spam communication.'}
                  </span>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full cursor-pointer focus:ring-2 focus:ring-[#B49A6A]"
                  >
                    {isBn ? 'পরামর্শ সময়সূচির অনুরোধ পাঠান' : 'Submit Consultation Request'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Practice Environment & Location Context */}
        <div className="lg:col-span-5 space-y-6">
          {/* Selected Discipline Preview Card */}
          <div className="p-7 bg-[#FCFBF8] border border-[#E7E2D8] rounded-sm shadow-2xs">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#B49A6A] block mb-1 font-bold">
              SELECTED DISCIPLINE
            </span>
            <h3 className="font-serif-atelier text-xl font-medium text-[#29483F] mb-3">
              {isBn ? activeServiceObj.titleBn : activeServiceObj.titleEn}
            </h3>
            <p className="text-xs text-[#777D77] leading-relaxed font-light mb-4">
              {isBn ? activeServiceObj.summaryBn : activeServiceObj.summaryEn}
            </p>

            <div className="pt-4 border-t border-[#E7E2D8] space-y-2 text-xs text-[#343A36]">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <span>{isBn ? 'কনজারভেটিভ প্রাকৃতিক দাঁত সংরক্ষণ' : 'Preservation-first clinical philosophy'}</span>
              </div>
              <div className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <span>{isBn ? 'রেইজ-হ্যান্ড পজ নিশ্চয়তা (সম্পূর্ণ স্বাচ্ছন্দ্য)' : 'Raise-Hand Pause guarantee throughout'}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <span>{isBn ? 'চিকিৎসা শুরুর পূর্বেই লিখিত হিসাব' : 'Itemized written plan before care starts'}</span>
              </div>
            </div>
          </div>

          {/* Location & Pacing Architecture */}
          <div className="p-7 bg-[#FCFBF8] border border-[#E7E2D8] rounded-sm shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#B49A6A] shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#777D77] block font-semibold">
                  BANANI 11 ATELIER
                </span>
                <p className="text-xs font-medium text-[#29483F]">
                  {isBn ? CLINIC_CONFIG.brand.addressBn : CLINIC_CONFIG.brand.addressEn}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#777D77] leading-relaxed font-light mb-4">
              {isBn
                ? 'আমরা ভিড়মুক্ত ক্লিনিক্যাল পরিবেশে বিশ্বাস করি। প্রতিটি অ্যাপয়েন্টমেন্টে শুধুমাত্র ১ জন রোগীর জন্য নিবেদিত সময় নির্ধারিত থাকে।'
                : 'Dedicated one-on-one clinician time in a private, daylight suite with elevator access and on-site parking.'}
            </p>

            <div className="pt-3 border-t border-[#E7E2D8] flex items-center justify-between text-xs text-[#29483F]">
              <span className="text-[#777D77]">
                {isBn ? 'সাপ্তাহিক সময়সূচি:' : 'Studio Hours:'}
              </span>
              <span className="font-semibold text-[#29483F]">
                ১০:০০ AM - ৮:৩০ PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
