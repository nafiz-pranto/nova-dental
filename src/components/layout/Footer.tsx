import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter, Link } from '../../context/RouterContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export const Footer: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#263746] text-[#FFFFFF] border-t border-[#365469] font-sans">
      {/* Upper Footer: Consultation Invitation Banner */}
      <div className="bg-[#365469] border-b border-[#263746]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A9C0D0] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBn ? 'শান্ত ও যত্নে ভরা প্রিমিয়াম সেবা' : 'Gentle Care & Restorative Dentistry'}</span>
              </span>
              <h3 className="font-serif-atelier text-2xl sm:text-3xl font-bold leading-tight text-[#FFFFFF]">
                {isBn
                  ? 'আপনার সুন্দর হাসির যত্নে ও সুস্থতায় পাশে আছি আমরা।'
                  : 'Experience modern dental care planned around comfort, precision, and trust.'}
              </h3>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 lg:justify-end">
              <button
                onClick={() => navigate('/appointment')}
                className="px-6 py-3 bg-[#FFFFFF] hover:bg-[#E4EEF5] text-[#365469] text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                {isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Request Consultation'}
              </button>

              {CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber ? (
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#263746] hover:bg-[#1E313E] text-[#FFFFFF] border border-[#65869C]/50 text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#A9C0D0]" />
                  <span>WhatsApp</span>
                </a>
              ) : (
                <button
                  onClick={() => navigate('/contact')}
                  className="px-5 py-3 bg-[#263746] hover:bg-[#1E313E] text-[#FFFFFF] border border-[#65869C]/50 text-xs font-semibold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#A9C0D0]" />
                  <span>WhatsApp ({isBn ? 'ডেমো' : 'Demo'})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex group">
              <div className="w-9 h-9 rounded-md bg-[#FFFFFF] text-[#365469] flex items-center justify-center font-serif text-lg font-bold border border-[#A9C0D0]">
                N
              </div>
              <span className="font-serif-atelier text-xl font-bold text-[#FFFFFF] group-hover:text-[#A9C0D0] transition-colors">
                {isBn ? CLINIC_CONFIG.brand.nameBn : CLINIC_CONFIG.brand.nameEn}
              </span>
            </Link>
            <p className="text-xs text-[#E4EEF5] leading-relaxed max-w-sm mb-5 font-normal">
              {isBn ? CLINIC_CONFIG.brand.taglineBn : CLINIC_CONFIG.brand.taglineEn}
            </p>
            <div className="p-3 bg-[#365469] rounded-lg border border-[#65869C]/40 text-xs text-[#E4EEF5] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#A9C0D0] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {isBn
                  ? 'ইউরোপীয় ক্লাস-বি ভ্যাকুয়াম স্টেরিলাইজেশন প্রটোকল কঠোরভাবে অনুসরণ করা হয়।'
                  : 'Hospital-grade EN 13060 Class-B vacuum sterilization verified for all instruments.'}
              </span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#A9C0D0] mb-3">
              {isBn ? 'ক্লিনিক ঠিকানা ও সময়' : 'Studio Location & Hours'}
            </h4>
            <ul className="space-y-3 text-xs text-[#E4EEF5]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A9C0D0] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {isBn ? CLINIC_CONFIG.brand.addressBn : CLINIC_CONFIG.brand.addressEn}
                  <span className="block text-[11px] text-[#A9C0D0]/80 mt-0.5">
                    {isBn ? CLINIC_CONFIG.brand.landmarkBn : CLINIC_CONFIG.brand.landmarkEn}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A9C0D0] shrink-0" />
                {CLINIC_CONFIG.brand.isRealPhoneConfigured && CLINIC_CONFIG.brand.configuredRealPhone ? (
                  <a href={`tel:${CLINIC_CONFIG.brand.configuredRealPhone}`} className="hover:text-white transition-colors">
                    {CLINIC_CONFIG.brand.configuredRealPhone}
                  </a>
                ) : (
                  <span className="text-[#E4EEF5]/90">
                    {isBn ? CLINIC_CONFIG.brand.phoneDisplayBn : CLINIC_CONFIG.brand.phoneDisplayEn}
                  </span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#A9C0D0] shrink-0 mt-0.5" />
                <div>
                  <span className="block">{isBn ? CLINIC_CONFIG.brand.hours.weekdayBn : CLINIC_CONFIG.brand.hours.weekdayEn}</span>
                  <span className="block text-[11px] text-[#A9C0D0]/80 mt-0.5">
                    {isBn ? CLINIC_CONFIG.brand.hours.weekendBn : CLINIC_CONFIG.brand.hours.weekendEn}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Treatment Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#A9C0D0] mb-3">
              {isBn ? 'চিকিৎসা ক্ষেত্রসমূহ' : 'Curated Disciplines'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E4EEF5]">
              {CLINIC_CONFIG.services.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/services/${svc.id}`}
                  className="hover:text-[#FFFFFF] transition-colors py-1 flex items-center gap-1 group"
                >
                  <span className="text-[#A9C0D0] text-xs group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>{isBn ? svc.titleBn : svc.titleEn}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#365469] flex items-center justify-between text-[11px] text-[#A9C0D0]">
              <span>বনানী ১১, ঢাকা</span>
              <span className="font-mono text-[10px]">VERIFIED CLINICAL PROTOCOL</span>
            </div>
          </div>
        </div>

        {/* Lower Legal & Demo Notice */}
        <div className="mt-10 pt-6 border-t border-[#365469] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A9C0D0]/80">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} NOVA Dental Studio.</span>
            <span>|</span>
            <span>{isBn ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</span>
          </div>

          <div className="text-center md:text-right">
            <span>{isBn ? 'ক্লায়েন্ট প্রেজেন্টেশন ও এজেন্সি ডেমো সংস্করণ' : 'Agency Presentation Demo Prototype'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
