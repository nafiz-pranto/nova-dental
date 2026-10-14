import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { 
  ArrowUpRight, 
  MessageCircle, 
  ShieldCheck, 
  Scan, 
  Clock, 
  Sparkles,
  MapPin,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

export const HeroSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  // Both local bundled image and reliable high-availability fallback
  const heroPrimaryImage = '/hero_dentist_consultation.jpg';
  const heroFallbackImage = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1400&q=85';

  const isRealWhatsApp = CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber;

  return (
    <section className="relative w-full bg-[#29483F] text-[#FCFBF8] overflow-hidden border-b border-[#34584E]">
      
      {/* Editorial Split Grid: Left Deep Muted Forest Green Panel + Right Full-Height Focal Photography */}
      <div className="w-full max-w-[1600px] mx-auto min-h-[620px] lg:min-h-[700px] xl:min-h-[740px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* ============================================================== */}
        {/* LEFT COLUMN: Muted Forest Green Editorial Authority Panel */}
        {/* ============================================================== */}
        <div className="lg:col-span-6 xl:col-span-5 relative z-10 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 bg-[#29483F] border-b lg:border-b-0 lg:border-r border-[#34584E]">
          
          {/* Subtle Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#B49A6A]/10 blur-3xl pointer-events-none" 
          />

          {/* TOP SECTION: Eyebrow + Bengali Headline + Supporting Editorial Narrative */}
          <div className="relative z-10">
            
            {/* 1. Atelier Eyebrow: Zero-Pill Typography with Muted Antique Gold Accent */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-2.5 text-xs tracking-wider uppercase font-medium text-[#B49A6A] mb-6">
              <span className="w-6 h-[1.5px] bg-[#B49A6A] shrink-0" aria-hidden="true" />
              <span className="font-semibold tracking-widest text-[#E7E2D8]">
                {isBn ? 'বনানী ১১, ঢাকা' : 'Banani 11, Dhaka'}
              </span>
              <span className="text-[#A5B5A5]/60" aria-hidden="true">/</span>
              <span className="text-[#A5B5A5] font-light">
                {isBn ? 'প্রাইভেট ডেন্টাল স্টুডিও' : 'Private Dental Studio'}
              </span>
              <span className="hidden sm:inline text-[#A5B5A5]/60" aria-hidden="true">·</span>
              <span className="hidden sm:inline text-[#E7E2D8]/80 normal-case tracking-normal text-[11px]">
                {isBn ? 'শান্ত ও ব্যক্তিগত যত্ন' : 'Unhurried Care'}
              </span>
            </div>

            {/* 2. Bold, Striking Bengali Headline with Muted Gold Emphasis & Controlled Breaks */}
            <h1 className="font-serif-atelier text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.35rem] font-medium leading-[1.2] sm:leading-[1.18] text-[#FCFBF8] tracking-tight mb-5">
              {isBn ? (
                <>
                  <span className="block text-[#FCFBF8]">আধুনিক প্রযুক্তিতে</span>
                  <span className="text-[#B49A6A] italic font-normal">নির্ভরযোগ্য ও যত্নশীল</span>
                  <span className="block mt-1 text-[#F6F3EC]">ডেন্টাল চিকিৎসা</span>
                </>
              ) : (
                <>
                  <span className="block text-[#FCFBF8]">Advanced Dentistry</span>
                  <span className="text-[#B49A6A] italic font-normal">Rooted in Care</span>
                  <span className="block mt-1 text-[#F6F3EC]">& Genuine Trust</span>
                </>
              )}
            </h1>

            {/* 3. Short Supporting Paragraph in Natural Bengali / English */}
            <p className="text-sm sm:text-base lg:text-[1.05rem] text-[#E7E2D8] font-normal leading-relaxed mb-8 max-w-xl">
              {isBn ? (
                'অভিজ্ঞ চিকিৎসকের সরাসরি ১-অন-১ তত্ত্বাবধানে, শান্ত ও নিরিবিলি পরিবেশে আপনার দাঁতের প্রাকৃতিক সৌন্দর্য ও দীর্ঘস্থায়ী সুস্থতা নিশ্চিত করুন।'
              ) : (
                'Dedicated one-on-one clinician time in a private, daylight suite. Minimally invasive restorative dentistry and digital precision tailored to your individual goals.'
              )}
            </p>

            {/* 4 & 5. Primary Muted Gold Appointment CTA + Secondary WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
              {/* Primary Muted Gold Button */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#B49A6A] hover:bg-[#A38959] text-[#29483F] font-semibold text-sm sm:text-base rounded-xs shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                <span>{isBn ? CLINIC_CONFIG.hero.primaryCtaBn : CLINIC_CONFIG.hero.primaryCtaEn}</span>
                <ArrowUpRight className="w-4 h-4 text-[#29483F]" />
              </button>

              {/* Secondary Outlined WhatsApp Button */}
              {isRealWhatsApp ? (
                <a
                  href={`https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-transparent border border-[#A5B5A5]/60 hover:border-[#B49A6A] text-[#FCFBF8] hover:text-[#B49A6A] text-sm font-medium rounded-xs transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#A5B5A5]" />
                  <span>{isBn ? CLINIC_CONFIG.hero.secondaryCtaBn : CLINIC_CONFIG.hero.secondaryCtaEn}</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-transparent border border-[#A5B5A5]/60 hover:border-[#B49A6A] text-[#FCFBF8] hover:text-[#B49A6A] text-sm font-medium rounded-xs transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#A5B5A5]" />
                  <span>
                    {isBn ? CLINIC_CONFIG.hero.secondaryCtaBn : CLINIC_CONFIG.hero.secondaryCtaEn}
                    <span className="text-[10px] text-[#A5B5A5] font-light ml-1">
                      ({isBn ? 'ডেমো' : 'Demo'})
                    </span>
                  </span>
                </button>
              )}
            </div>

            {/* 6. Row of 3 Patient Benefits Beneath CTAs */}
            <div className="pt-6 border-t border-[#34584E] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-[#FCFBF8] leading-tight">
                    {isBn ? 'প্রতি ঘণ্টায় ১ জন রোগী' : '1 Patient / Hour'}
                  </span>
                  <span className="text-[11px] text-[#A5B5A5] leading-tight">
                    {isBn ? 'ভিড়মুক্ত শান্ত পরিবেশ' : 'Zero waiting rush'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-[#FCFBF8] leading-tight">
                    {isBn ? 'ক্লাস-বি অটোক্লেভ' : 'Class-B Autoclave'}
                  </span>
                  <span className="text-[11px] text-[#A5B5A5] leading-tight">
                    {isBn ? 'ইউরোপীয় স্টেরিলাইজেশন' : 'EN 13060 standard'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Scan className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-[#FCFBF8] leading-tight">
                    {isBn ? 'থ্রি-ডি স্ক্যানিং' : 'Digital 3D Scan'}
                  </span>
                  <span className="text-[11px] text-[#A5B5A5] leading-tight">
                    {isBn ? 'কোনো অস্বস্তিকর পেস্ট নেই' : 'No gag-inducing putty'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Editorial Base Tagline */}
          <div className="pt-6 mt-6 border-t border-[#34584E]/70 flex items-center justify-between text-[11px] text-[#A5B5A5]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B49A6A]" />
              <span>{isBn ? 'আন্তর্জাতিক চিকিৎসা প্রোটোকল' : 'European Clinical Protocol'}</span>
            </span>
            <span className="font-mono text-[10px] text-[#A5B5A5]/80 uppercase tracking-wider">
              EST. BANANI · 2024
            </span>
          </div>

        </div>

        {/* ============================================================== */}
        {/* RIGHT COLUMN: Authentic High-Resolution Focal Photography */}
        {/* ============================================================== */}
        <div className="lg:col-span-6 xl:col-span-7 relative min-h-[420px] sm:min-h-[500px] lg:min-h-full bg-[#1E3730] overflow-hidden flex flex-col justify-end">
          
          {/* Main Hero Photograph */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={imageFailed ? heroFallbackImage : heroPrimaryImage}
              onError={() => setImageFailed(true)}
              alt="Female dentist warmly consulting a smiling patient in high-end modern dental clinic"
              className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98]"
              loading="eager"
            />
            {/* Subtle Gradient Overlays */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 bg-gradient-to-t from-[#29483F] via-transparent to-black/20 opacity-80 lg:opacity-60 pointer-events-none" 
            />
            <div 
              aria-hidden="true" 
              className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#29483F] to-transparent pointer-events-none" 
            />
          </div>

          {/* Floating Subtle Consultation Assurance Badge */}
          <div className="relative z-20 m-4 sm:m-8 lg:m-10 max-w-sm self-start sm:self-end">
            <div className="bg-[#29483F]/90 backdrop-blur-md border border-[#E7E2D8]/20 p-4 sm:p-5 rounded-xs shadow-2xl text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B49A6A]" />
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B49A6A] font-semibold">
                  {isBn ? 'ব্যক্তিগত ওয়ান-অন-ওয়ান সময়' : '1-on-1 Consultation'}
                </span>
              </div>
              <p className="font-serif-atelier text-sm sm:text-base text-[#FCFBF8] font-normal leading-snug mb-2">
                {isBn 
                  ? 'কোনো তাড়াহুড়ো নেই — প্রতিটি রোগীর হাসির জন্য নিবেদিত মনোযোগ ও সম্মান।' 
                  : 'An unhurried conversation over diagnostics before any treatment begins.'
                }
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#E7E2D8]/15 text-[11px] text-[#E7E2D8]">
                <span>{isBn ? 'সপ্তাহে ৬ দিন খোলা' : 'Open Sat – Thu'}</span>
                <span className="text-[#B49A6A] font-semibold">১০:০০ AM - ৮:৩০ PM</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
