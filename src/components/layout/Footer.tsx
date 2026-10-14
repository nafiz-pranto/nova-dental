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
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#1E3730] text-[#FCFBF8] border-t border-[#29483F] font-sans">
      {/* Upper Footer: Consultation Invitation Banner */}
      <div className="border-b border-[#29483F] relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#B49A6A]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#B49A6A] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isBn ? 'শান্ত ও যত্নে ভরা প্রিমিয়াম সেবা' : 'Quiet Luxury & Restorative Dentistry'}</span>
              </span>
              <h3 className="font-serif-atelier text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-[#FCFBF8]">
                {isBn
                  ? 'আপনার হাসির স্বাভাবিক সৌন্দর্য ও স্বাস্থ্য সুরক্ষায় আমরা প্রস্তুত।'
                  : 'Experience modern dental care planned around comfort, precision, and trust.'}
              </h3>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 lg:justify-end">
              <button
                onClick={() => navigate('/appointment')}
                className="px-6 py-3.5 bg-[#B49A6A] hover:bg-[#A38959] text-[#29483F] text-xs font-semibold uppercase tracking-wider rounded-2xs transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                {isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Request Consultation'}
              </button>

              {CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber ? (
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#29483F] hover:bg-[#34584E] text-[#FCFBF8] border border-[#34584E] text-xs font-semibold uppercase tracking-wider rounded-2xs transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#A5B5A5]" />
                  <span>WhatsApp</span>
                </a>
              ) : (
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3.5 bg-[#29483F] hover:bg-[#34584E] text-[#FCFBF8] border border-[#34584E] text-xs font-semibold uppercase tracking-wider rounded-2xs transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#A5B5A5]" />
                  <span>WhatsApp ({isBn ? 'ডেমো' : 'Demo'})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4 inline-flex group">
              <div className="w-9 h-9 rounded-2xs bg-[#FCFBF8] text-[#29483F] flex items-center justify-center font-serif text-lg font-bold border border-[#B49A6A]/60">
                N
              </div>
              <span className="font-serif-atelier text-xl font-medium text-[#FCFBF8] group-hover:text-[#B49A6A] transition-colors">
                {isBn ? CLINIC_CONFIG.brand.nameBn : CLINIC_CONFIG.brand.nameEn}
              </span>
            </Link>
            <p className="text-xs text-[#A5B5A5] leading-relaxed max-w-sm mb-6 font-light">
              {isBn ? CLINIC_CONFIG.brand.taglineBn : CLINIC_CONFIG.brand.taglineEn}
            </p>
            <div className="p-3.5 bg-[#29483F] rounded-xs border border-[#34584E] text-[11px] text-[#E7E2D8] flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {isBn
                  ? 'ইউরোপীয় ক্লাস-বি ভ্যাকুয়াম স্টেরিলাইজেশন প্রটোকল কঠোরভাবে অনুসরণ করা হয়।'
                  : 'Hospital-grade EN 13060 Class-B vacuum sterilization verified for all instruments.'}
              </span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#B49A6A] mb-4">
              {isBn ? 'ক্লিনিক ঠিকানা ও সময়' : 'Studio Location & Hours'}
            </h4>
            <ul className="space-y-3.5 text-xs text-[#E7E2D8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {isBn ? CLINIC_CONFIG.brand.addressBn : CLINIC_CONFIG.brand.addressEn}
                  <span className="block text-[11px] text-[#A5B5A5] mt-1">
                    {isBn ? CLINIC_CONFIG.brand.landmarkBn : CLINIC_CONFIG.brand.landmarkEn}
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B49A6A] shrink-0" />
                {CLINIC_CONFIG.brand.isRealPhoneConfigured && CLINIC_CONFIG.brand.configuredRealPhone ? (
                  <a href={`tel:${CLINIC_CONFIG.brand.configuredRealPhone}`} className="hover:text-white transition-colors">
                    {CLINIC_CONFIG.brand.configuredRealPhone}
                  </a>
                ) : (
                  <span className="text-[#A5B5A5]">
                    {isBn ? CLINIC_CONFIG.brand.phoneDisplayBn : CLINIC_CONFIG.brand.phoneDisplayEn}
                  </span>
                )}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <div>
                  <span className="block">{isBn ? CLINIC_CONFIG.brand.hours.weekdayBn : CLINIC_CONFIG.brand.hours.weekdayEn}</span>
                  <span className="block text-[11px] text-[#A5B5A5] mt-0.5">
                    {isBn ? CLINIC_CONFIG.brand.hours.weekendBn : CLINIC_CONFIG.brand.hours.weekendEn}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Treatment Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#B49A6A] mb-4">
              {isBn ? 'চিকিৎসা ক্ষেত্রসমূহ' : 'Curated Disciplines'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A5B5A5]">
              {CLINIC_CONFIG.services.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/services/${svc.id}`}
                  className="hover:text-[#FCFBF8] transition-colors py-1 flex items-center gap-1 group"
                >
                  <span className="text-[#B49A6A] text-[10px] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>{isBn ? svc.titleBn : svc.titleEn}</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#29483F] flex items-center justify-between text-[11px] text-[#A5B5A5]">
              <span>Banani 11, Dhaka</span>
              <span className="font-mono text-[10px]">VERIFIED CLINICAL PROTOCOL</span>
            </div>
          </div>
        </div>

        {/* Lower Legal & Demo Notice */}
        <div className="mt-12 pt-8 border-t border-[#29483F] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#A5B5A5]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} NOVA Dental Studio.</span>
            <span className="text-[#34584E]">|</span>
            <span>{isBn ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</span>
          </div>

          <div className="text-center md:text-right text-[#A5B5A5]/80">
            <span>{isBn ? 'ক্লায়েন্ট প্রেজেন্টেশন ও এজেন্সি ডেমো সংস্করণ' : 'Agency Presentation Demo Prototype'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
