import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { 
  ArrowUpRight, 
  MessageCircle, 
  ShieldCheck, 
  Scan, 
  Clock, 
  PhoneCall,
  CheckCircle2,
  Sparkles,
  Heart
} from 'lucide-react';

export const HeroSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  // High-resolution dentist and patient photography (bundled asset + fallback)
  const heroPrimaryImage = '/hero_dentist_consultation.jpg';
  const heroFallbackImage = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=85';

  const isRealWhatsApp = CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber;
  const isRealPhone = CLINIC_CONFIG.brand.isRealPhoneConfigured && CLINIC_CONFIG.brand.configuredRealPhone;

  return (
    <section className="relative w-full bg-[#F7FAFC] text-[#263746] overflow-hidden border-b border-[#D7E3EB]">
      {/* Subtle Ambient Background Gradient */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#E4EEF5]/70 blur-3xl pointer-events-none -z-10" 
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Editorial Content & Direct Actions */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            
            {/* 1. Location & Clinic Eyebrow */}
            <div className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-wider font-semibold text-[#65869C] mb-4">
              <span className="w-5 h-0.5 bg-[#65869C]" aria-hidden="true" />
              <span className="text-[#365469]">
                {isBn ? 'বনানী ১১, ঢাকা' : 'Banani 11, Dhaka'}
              </span>
              <span className="text-[#A9C0D0]" aria-hidden="true">·</span>
              <span>
                {isBn ? 'প্রাইভেট ডেন্টাল স্টুডিও' : 'Private Dental Care'}
              </span>
              <span className="hidden sm:inline text-[#A9C0D0]" aria-hidden="true">·</span>
              <span className="hidden sm:inline normal-case text-[#627482] font-normal">
                {isBn ? 'প্রতি রোগীর জন্য নিবেদিত সময়' : '1-on-1 Dedicated Time'}
              </span>
            </div>

            {/* 2. Bold, Warm Bengali Headline with Controlled Visual Hierarchy */}
            <h1 className="font-serif-atelier text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold leading-[1.2] text-[#263746] tracking-tight mb-4">
              {isBn ? (
                <>
                  <span className="block text-[#365469]">আপনার সুন্দর হাসির যত্নে,</span>
                  <span className="text-[#65869C]">পাশে আছি আমরা</span>
                </>
              ) : (
                <>
                  <span className="block text-[#365469]">Caring Dental Excellence</span>
                  <span className="text-[#65869C]">for Your Confident Smile</span>
                </>
              )}
            </h1>

            {/* 3. Short Supporting Copy */}
            <p className="text-base sm:text-lg text-[#627482] font-normal leading-relaxed mb-8 max-w-xl">
              {isBn ? (
                'আপনার ও আপনার পরিবারের জন্য যত্নশীল ডেন্টাল সেবা। বনানী ১১, ঢাকায় শান্ত ও কোলাহলমুক্ত পরিবেশে অভিজ্ঞ চিকিৎসকের ১-অন-১ তত্ত্বাবধানে আধুনিক প্রযুক্তির নির্ভুল চিকিৎসা।'
              ) : (
                'Unhurried, compassionate dental care for you and your family in Banani 11, Dhaka. Modern digital precision and European sterilization in a calm, welcoming environment.'
              )}
            </p>

            {/* 4. Action Buttons (Primary Deep Blue + Secondary Call/WhatsApp) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8">
              {/* Primary Appointment Button */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#365469] hover:bg-[#284051] text-[#FFFFFF] font-semibold text-sm sm:text-base rounded-md shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <span>{isBn ? CLINIC_CONFIG.hero.primaryCtaBn : CLINIC_CONFIG.hero.primaryCtaEn}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFFFFF]" />
              </button>

              {/* Secondary WhatsApp / Call Button */}
              {isRealWhatsApp ? (
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#FFFFFF] hover:bg-[#E4EEF5] border border-[#D7E3EB] hover:border-[#65869C] text-[#365469] font-medium text-sm sm:text-base rounded-md shadow-2xs transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#65869C]" />
                  <span>{isBn ? CLINIC_CONFIG.hero.secondaryCtaBn : CLINIC_CONFIG.hero.secondaryCtaEn}</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#FFFFFF] hover:bg-[#E4EEF5] border border-[#D7E3EB] hover:border-[#65869C] text-[#365469] font-medium text-sm sm:text-base rounded-md shadow-2xs transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#65869C]" />
                  <span>
                    {isBn ? CLINIC_CONFIG.hero.secondaryCtaBn : CLINIC_CONFIG.hero.secondaryCtaEn}
                    <span className="text-xs text-[#627482] font-normal ml-1">
                      ({isBn ? 'ডেমো' : 'Demo'})
                    </span>
                  </span>
                </button>
              )}
            </div>

            {/* 5. Row of 3 Genuine Patient Benefit Indicators */}
            <div className="pt-6 border-t border-[#D7E3EB] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#E4EEF5] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#365469]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#263746] leading-tight">
                    {isBn ? 'প্রতি ঘণ্টায় ১ জন রোগী' : '1 Patient / Hour'}
                  </span>
                  <span className="text-[11px] text-[#627482] leading-tight">
                    {isBn ? 'ভিড়মুক্ত শান্ত পরিবেশ' : 'No crowded rush'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#E4EEF5] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#365469]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#263746] leading-tight">
                    {isBn ? 'ক্লাস-বি অটোক্লেভ' : 'Class-B Autoclave'}
                  </span>
                  <span className="text-[11px] text-[#627482] leading-tight">
                    {isBn ? 'ইউরোপীয় স্টেরিলাইজেশন' : 'EN 13060 sterile'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#E4EEF5] flex items-center justify-center shrink-0 mt-0.5">
                  <Scan className="w-4 h-4 text-[#365469]" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#263746] leading-tight">
                    {isBn ? 'ডিজিটাল ৩ডি স্ক্যান' : 'Digital 3D Scan'}
                  </span>
                  <span className="text-[11px] text-[#627482] leading-tight">
                    {isBn ? 'কোনো অস্বস্তিকর পেস্ট নেই' : 'Comfortable optical scan'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Authentic High-Quality Photograph */}
          {/* Visible on BOTH Mobile and Desktop */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#D7E3EB] bg-[#E4EEF5] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] xl:aspect-[4/3]">
              
              {/* Dentist and Patient Photo */}
              <img
                src={imageFailed ? heroFallbackImage : heroPrimaryImage}
                onError={() => setImageFailed(true)}
                alt="Female dentist warmly consulting with a smiling patient in high-end modern dental clinic"
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
                loading="eager"
              />

              {/* Gentle Soft Overlay Gradient at bottom for text readability */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-gradient-to-t from-[#263746]/80 via-transparent to-transparent pointer-events-none" 
              />

              {/* Floating Assurance Card on the Photograph */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#D7E3EB] p-4 sm:p-5 rounded-xl shadow-md text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#365469]" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#365469]">
                    {isBn ? 'ব্যক্তিগত ১-অন-১ কনসালটেশন' : '1-on-1 Consultation'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#263746] font-medium leading-snug mb-2">
                  {isBn 
                    ? 'কোনো তাড়াহুড়ো নেই — প্রতিটি রোগীর হাসির যত্ন ও সঠিক চিকিৎসায় নিবেদিত মনোযোগ।' 
                    : 'Unhurried chairside conversation and thorough digital diagnostics before any treatment begins.'
                  }
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#D7E3EB] text-[11px] text-[#627482]">
                  <span>{isBn ? 'শনিবার – বৃহস্পতিবার খোলা' : 'Open Sat – Thu'}</span>
                  <span className="text-[#365469] font-bold">১০:০০ AM - ৮:৩০ PM</span>
                </div>
              </div>

            </div>

            {/* Subtle decorative accent pill behind photo */}
            <div 
              aria-hidden="true" 
              className="absolute -bottom-3 -right-3 w-32 h-32 rounded-2xl bg-[#E4EEF5] -z-10 border border-[#D7E3EB]" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};
