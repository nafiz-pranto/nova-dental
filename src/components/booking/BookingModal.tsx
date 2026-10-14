import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { Button } from '../ui/Button';
import { 
  X, 
  Calendar, 
  User, 
  Phone, 
  CheckCircle2, 
  AlertCircle,
  Lock
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const { isBn } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>(preselectedServiceId || 'smile-design');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('afternoon');
  const [patientName, setPatientName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [shortNote, setShortNote] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  if (!isOpen) return null;

  // Validate Bangladesh phone
  const validateBdPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-]/g, '');
    return /^(?:\+?880|0)1[3-9]\d{8}$/.test(cleaned);
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#263746]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#FFFFFF] rounded-2xl border border-[#D7E3EB] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Modal Header */}
        <div className="bg-[#365469] text-[#FFFFFF] px-6 py-4 flex items-center justify-between border-b border-[#65869C]/40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E4EEF5] text-[#365469] flex items-center justify-center font-bold text-xs">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 id="booking-modal-title" className="font-serif-atelier text-lg font-bold text-[#FFFFFF] leading-tight">
                {isBn ? 'পরামর্শ অনুরোধ' : 'Request Consultation'}
              </h2>
              <span className="text-[11px] text-[#A9C0D0]">
                {isBn ? 'বনানী ১১, ঢাকা • ১-অন-১ নিবেদিত সময়' : 'Banani 11, Dhaka • Dedicated 1-on-1 Pacing'}
              </span>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-[#E4EEF5] hover:text-[#FFFFFF] p-1 rounded-md transition-colors cursor-pointer"
            aria-label={isBn ? 'বন্ধ করুন' : 'Close modal'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Honest Demo Confirmation */
            <div className="text-center py-6 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-[#E4EEF5] text-[#365469] flex items-center justify-center mx-auto mb-4 border border-[#D7E3EB]">
                <CheckCircle2 className="w-8 h-8 text-[#365469]" />
              </div>

              <span className="inline-block px-3 py-1 bg-[#E4EEF5] text-[#365469] text-xs font-semibold rounded-md mb-3 border border-[#D7E3EB]">
                {isBn ? 'ডেমো অনুরোধ যাচাইকৃত' : 'DEMO SIMULATION RECEIVED'}
              </span>

              <h3 className="font-serif-atelier text-xl font-bold text-[#263746] mb-3">
                {isBn ? 'অনুরোধ ফর্ম সফলভাবে যাচাইকৃত' : 'Request Validated for Client Review'}
              </h3>

              <div className="bg-[#F7FAFC] p-4 rounded-xl border border-[#D7E3EB] text-xs text-[#263746] text-left space-y-2 mb-6">
                <p className="font-semibold text-[#365469]">
                  {isBn
                    ? `ধন্যবাদ, ${patientName}! এটি একটি ক্লায়েন্ট প্রেজেন্টেশন ডেমো ইন্টারফেস। কোনো আসল অ্যাপয়েন্টমেন্ট ডাটাবেজে তৈরি হয়নি।`
                    : `Thank you, ${patientName}! This is a client presentation demonstration. No live appointment database record was created.`}
                </p>
                <div className="pt-2 border-t border-[#D7E3EB] text-xs text-[#627482] space-y-1">
                  <p>
                    <span className="font-medium text-[#263746]">{isBn ? 'মোবাইল নম্বর:' : 'Phone:'}</span> {phoneNumber}
                  </p>
                  <p>
                    <span className="font-medium text-[#263746]">{isBn ? 'নির্বাচিত সেবা:' : 'Selected Discipline:'}</span>{' '}
                    {CLINIC_CONFIG.services.find((s) => s.id === selectedService)?.titleEn || selectedService}
                  </p>
                </div>
              </div>

              <Button variant="primary" size="md" onClick={handleReset} className="w-full">
                {isBn ? 'সম্পন্ন / বন্ধ করুন' : 'Done & Close Modal'}
              </Button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Treatment Category */}
              <div>
                <label htmlFor="modal-service" className="block text-xs font-semibold text-[#263746] mb-1.5">
                  {isBn ? 'চিকিৎসা বা আগ্রহের ক্ষেত্র' : 'Clinical Discipline'}
                </label>
                <select
                  id="modal-service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full text-xs p-3 bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none cursor-pointer"
                >
                  {CLINIC_CONFIG.services.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {isBn ? svc.titleBn : svc.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-semibold text-[#263746] mb-1.5">
                    {isBn ? 'পছন্দের তারিখ (ঐচ্ছিক)' : 'Preferred Date (Optional)'}
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full text-xs p-3 bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-time" className="block text-xs font-semibold text-[#263746] mb-1.5">
                    {isBn ? 'পছন্দের সময়' : 'Preferred Slot'}
                  </label>
                  <select
                    id="modal-time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full text-xs p-3 bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none cursor-pointer"
                  >
                    <option value="morning">{isBn ? 'সকাল (১০:০০ AM - ১:০০ PM)' : 'Morning (10:00 AM - 1:00 PM)'}</option>
                    <option value="afternoon">{isBn ? 'দুপুর (২:০০ PM - ৫:০০ PM)' : 'Afternoon (2:00 PM - 5:00 PM)'}</option>
                    <option value="evening">{isBn ? 'সন্ধ্যা (৫:৩০ PM - ৮:৩০ PM)' : 'Evening (5:30 PM - 8:30 PM)'}</option>
                  </select>
                </div>
              </div>

              {/* Patient Full Name */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-[#263746] mb-1.5">
                  {isBn ? 'আপনার পূর্ণ নাম' : 'Full Name'} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#627482] absolute left-3 top-3.5" />
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={isBn ? 'যেমন: তাসনিম রহমান' : 'e.g. Sarah Khan'}
                    className={`w-full text-xs pl-9 pr-3 py-2.5 bg-[#F7FAFC] border rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors ${
                      nameError ? 'border-red-600 bg-red-50/20' : 'border-[#D7E3EB]'
                    }`}
                  />
                </div>
                {nameError && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{nameError}</span>
                  </p>
                )}
              </div>

              {/* Phone Number with BD Validation */}
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#263746] mb-1.5">
                  {isBn ? 'বাংলাদেশি মোবাইল নম্বর' : 'Phone Number (BD)'} *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#627482] absolute left-3 top-3.5" />
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className={`w-full text-xs pl-9 pr-3 py-2.5 bg-[#F7FAFC] border rounded-md text-[#263746] focus:border-[#365469] focus:outline-none transition-colors ${
                      phoneError ? 'border-red-600 bg-red-50/20' : 'border-[#D7E3EB]'
                    }`}
                  />
                </div>
                {phoneError && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{phoneError}</span>
                  </p>
                )}
              </div>

              {/* Comfort or Special Instructions */}
              <div>
                <label htmlFor="modal-note" className="block text-xs font-semibold text-[#263746] mb-1.5">
                  {isBn ? 'বিশেষ কোনো লক্ষণ বা স্বাচ্ছন্দ্য অনুরোধ (ঐচ্ছিক)' : 'Comfort / Clinical Notes (Optional)'}
                </label>
                <textarea
                  id="modal-note"
                  rows={2}
                  value={shortNote}
                  onChange={(e) => setShortNote(e.target.value)}
                  placeholder={
                    isBn
                      ? 'চিকিৎসাভীতি, পূর্ববর্তী সংবেদনশীলতা বা বিশেষ জিজ্ঞাসা...'
                      : 'Prior sensitivity, dental anxiety notes, or specific inquiry...'
                  }
                  className="w-full text-xs p-3 bg-[#F7FAFC] border border-[#D7E3EB] rounded-md text-[#263746] focus:border-[#365469] focus:outline-none"
                />
              </div>

              {/* Privacy Reassurance */}
              <div className="p-3 bg-[#E4EEF5] rounded-lg border border-[#D7E3EB] flex items-center gap-2 text-xs text-[#263746]">
                <Lock className="w-3.5 h-3.5 text-[#365469] shrink-0" />
                <span>
                  {isBn
                    ? 'আপনার তথ্য সম্পূর্ণ গোপন থাকবে। কোনো মার্কেটিং কল বা মেসেজ পাঠানো হয় না।'
                    : 'Confidential clinical inquiry. Zero marketing spam.'}
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  {isBn ? 'অনুরোধ জমা দিন' : 'Submit Consultation Request'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
