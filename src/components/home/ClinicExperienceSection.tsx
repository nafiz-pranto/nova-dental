import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { StudioImage } from '../ui/StudioImage';
import { Volume2, Scan, ShieldCheck, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const ClinicExperienceSection: React.FC = () => {
  const { isBn } = useLanguage();
  const [activeZone, setActiveZone] = useState<'acoustic' | 'diagnostic' | 'sterilization'>('acoustic');

  const zones = {
    acoustic: {
      id: 'acoustic',
      tabTitleEn: 'Acoustic Calm Suite',
      tabTitleBn: 'অ্যাকোস্টিক প্রাইভেট স্যুট',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
      artworkType: 'acoustic' as const,
      eyebrowEn: 'Private Ergonomic Architecture',
      eyebrowBn: 'শব্দহীন ও আরামদায়ক কেবিন',
      headlineEn: 'Designed to Dissolve Dental Anxiety Before Care Begins',
      headlineBn: 'চিকিৎসা শুরুর পূর্বেই ভয় ও মানসিক চাপ দূর করার পরিবেশ',
      descEn: 'Private sound-dampened treatment rooms with memory foam pressure-relief seating, daylight-calibrated lighting, and ceiling displays for serene visual immersion.',
      descBn: 'শব্দহীন নিরিবিলি প্রাইভেট কেবিন, অর্থোপেডিক মেমোরি ফোম চেয়ার, মৃদু আলো এবং সিলিং ডিসপ্লে যাতে রোগী সম্পূর্ণ শান্ত ও স্বস্তিদায়ক পরিবেশে সেবা নিতে পারেন।',
      featuresEn: [
        'Acoustically isolated private operatory cabins',
        'Contoured ergonomic chair that relieves lumbar tension',
        'Ceiling-mounted relaxation visuals & noise-canceling audio',
        'Zero chemical clinic scent via active medical air filtration'
      ],
      featuresBn: [
        'শব্দহীন নিভৃত প্রাইভেট চিকিৎসা কক্ষ',
        'কোমরের চাপ কমানোর জন্য অর্থোপেডিক মেমোরি ফোম চেয়ার',
        'সিলিং ডিসপ্লে ও নয়েজ ক্যানসেলিং হেডফোনের মাধ্যমে রিলাক্সেশন',
        'মেডিকেল এয়ার ফিল্ট্রেশনের মাধ্যমে ক্লিনিক্যাল গন্ধমুক্ত বিশুদ্ধ বাতাস'
      ]
    },
    diagnostic: {
      id: 'diagnostic',
      tabTitleEn: 'Digital 3D Diagnostics',
      tabTitleBn: 'থ্রি-ডি ডিজিটাল ল্যাব',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
      artworkType: 'operatory' as const,
      eyebrowEn: 'Sub-Millimeter Imaging',
      eyebrowBn: '০.০৭ মিমি নিখুঁত স্ক্যানিং',
      headlineEn: 'Ultra Low-Dose 3D CBCT & Optical Intraoral Impression',
      headlineBn: 'ন্যূনতম রেডিয়েশনের থ্রি-ডি সিবিসিটি ও ডিজিটাল স্ক্যান',
      descEn: 'We eliminate messy alginate impression putty completely. High-speed optical 3D scanners capture 6,000 photos per second to generate a pristine digital twin of your teeth.',
      descBn: 'মুখে আঠালো পেস্ট বা অস্বস্তিকর ট্রের দিন শেষ। সেকেন্ডে ৬,০০০ ছবি ধারণকারী অত্যাধুনিক অপটিক্যাল স্ক্যানারে তাৎক্ষণিক নিখুঁত ত্রিমাত্রিক মডেল তৈরি হয়।',
      featuresEn: [
        'No unpleasant gag-inducing physical impression trays',
        '85% lower radiation exposure than standard dental radiographs',
        'Immediate chairside 3D model visualization on 4K display',
        'Sub-millimeter planning for dental implants and ceramic veneers'
      ],
      featuresBn: [
        'বমিভাব সৃষ্টিকারী কোনো পেস্ট বা ট্রের প্রয়োজন নেই',
        'প্রচলিত এক্স-রে এর তুলনায় ৮৫% কম রেডিয়েশন',
        'চেয়ারের পাশেই ৪কে মনিটরে ত্রিমাত্রিক দাঁতের মডেল দেখার সুযোগ',
        'ইমপ্লান্ট ও ভিনিয়ার্সের জন্য নিখুঁত ডিজিটাল পরিকল্পনা'
      ]
    },
    sterilization: {
      id: 'sterilization',
      tabTitleEn: 'Class-B Sterilization Theater',
      tabTitleBn: 'সেন্ট্রাল স্টেরিলাইজেশন থিয়েটার',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      artworkType: 'operatory' as const,
      eyebrowEn: 'Hospital-Grade EN 13060 Protocol',
      eyebrowBn: 'ইউরোপীয় ক্লাস-বি প্রটোকল',
      headlineEn: 'Visible Decontamination Suite with 100% Traceability',
      headlineBn: 'স্বচ্ছ কাচের জীবাণুমুক্তকরণ কেন্দ্র ও ১০০% নিরাপত্তা নিশ্চয়তা',
      descEn: 'Our sterilization center is enclosed in clean glass for complete patient visibility. Every single instrument undergoes rigorous 5-stage hospital-grade decontamination.',
      descBn: 'আমাদের সেন্ট্রাল স্টেরিলাইজেশন রুম সম্পূর্ণ স্বচ্ছ কাচ দিয়ে তৈরি, যাতে প্রতিটি রোগী নিজ চোখে ৫-ধাপের হাসপাতাল-গ্রেড জীবাণুমুক্তকরণ প্রক্রিয়া দেখতে পারেন।',
      featuresEn: [
        'Individual sterile instrument cassettes sealed with micro-indicators',
        'Fractionated 3-pulse vacuum autoclave exceeding European standards',
        'Physical barcode batch tracking for every patient tray',
        'Hospital-grade surface disinfection between every single visit'
      ],
      featuresBn: [
        'প্রতিটি রোগীর জন্য আলাদা ভ্যাকুয়াম-সিলযুক্ত ইনস্ট্রুমেন্ট ক্যাসেট',
        'ইউরোপীয় মানদণ্ডে ৩-পালস ভ্যাকুয়াম অটোক্লেভ স্টেরিলাইজেশন',
        'প্রতিটি ট্রে ও কিটের আলাদা বারকোড ট্র্যাক ও যাচাইকরণ',
        'প্রতিটি ভিজিটের পর স্পর্শকাতর স্থানে মেডিকেল গ্রেড ডিসইনফেকশন'
      ]
    }
  };

  const currentZone = zones[activeZone];

  return (
    <section id="experience" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#29483F] text-[#FCFBF8] relative overflow-hidden border-b border-[#34584E]">
      {/* Decorative architectural ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B49A6A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            isDark
            eyebrow={isBn ? 'ক্লিনিক পরিবেশ ও নকশা' : 'Sensory & Clinical Engineering'}
            title={isBn ? 'চিকিৎসার ভীতিহীন পরিবেশ: শান্ত ও আধুনিক স্টুডিও' : 'Architectural Calm Meets Advanced Diagnostics'}
            subtitle={
              isBn
                ? 'একটি হাসপাতালের ক্লিনিক্যাল উৎকর্ষ এবং একটি শান্ত নিভৃত লাউঞ্জের আরামদায়ক অনুভূতির নিখুঁত মেলবন্ধন।'
                : 'Engineered specifically for calm: acoustic dampening, hospital air turnover, and panoramic chairside 3D diagnostic previews.'
            }
          />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#34584E] pb-4">
          {(Object.keys(zones) as Array<keyof typeof zones>).map((zoneKey) => {
            const z = zones[zoneKey];
            const isActive = activeZone === zoneKey;
            return (
              <button
                key={z.id}
                onClick={() => setActiveZone(zoneKey)}
                className={`px-5 py-2.5 rounded-2xs text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#B49A6A] text-[#29483F] shadow-sm font-bold'
                    : 'bg-[#1E3730] text-[#A5B5A5] hover:text-[#FCFBF8] hover:bg-[#25423A]'
                }`}
              >
                {isBn ? z.tabTitleBn : z.tabTitleEn}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#1E3730] rounded-xs border border-[#34584E] p-6 sm:p-10 lg:p-12">
          {/* Left Details */}
          <div className="lg:col-span-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B49A6A] block mb-2 font-bold">
              {isBn ? currentZone.eyebrowBn : currentZone.eyebrowEn}
            </span>

            <h3 className="font-serif-atelier text-2xl sm:text-3xl font-normal text-[#FCFBF8] mb-4 leading-tight">
              {isBn ? currentZone.headlineBn : currentZone.headlineEn}
            </h3>

            <p className="text-xs sm:text-sm text-[#E7E2D8] font-light leading-relaxed mb-6">
              {isBn ? currentZone.descBn : currentZone.descEn}
            </p>

            <div className="space-y-3 mb-8">
              {(isBn ? currentZone.featuresBn : currentZone.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#A5B5A5]">
                  <CheckCircle2 className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#34584E] flex items-center justify-between text-[11px] text-[#A5B5A5]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B49A6A]" />
                <span>{isBn ? 'বায়োসেফটি স্ট্যান্ডার্ড নিশ্চিত' : 'Audited Biosafety Standard'}</span>
              </span>
              <span className="font-mono text-[#E7E2D8]">BANANI 11 · PROTOCOL</span>
            </div>
          </div>

          {/* Right Photographic Presentation */}
          <div className="lg:col-span-6">
            <div className="rounded-xs overflow-hidden border border-[#34584E] aspect-16/11 shadow-lg bg-[#29483F] relative">
              <StudioImage
                src={currentZone.image}
                alt={currentZone.headlineEn}
                aspectRatio="aspect-16/11"
                category={currentZone.artworkType}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3730]/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-3 left-3 bg-[#29483F]/90 backdrop-blur-xs text-[#FCFBF8] px-3 py-1.5 rounded-2xs text-[10px] uppercase font-mono tracking-wider border border-[#E7E2D8]/20 flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#B49A6A]" />
                <span>{isBn ? 'ক্লিনিক্যাল পরিবেশ প্রদর্শন' : 'Live Facility Environment'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
