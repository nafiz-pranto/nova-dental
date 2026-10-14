import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { ShieldCheck, Sparkles, FileText, CheckCircle2, ChevronRight, X, Lock } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { isBn } = useLanguage();
  const [activeModalPillar, setActiveModalPillar] = useState<number | null>(null);

  const pillars = [
    {
      index: '01',
      badgeEn: 'European EN 13060 Standard',
      badgeBn: 'ইউরোপীয় ইএন ১৩০৬০ মানদণ্ড',
      titleEn: 'Class-B Vacuum Autoclaving',
      titleBn: 'ক্লাস-বি ভ্যাকুয়াম অটোক্লেভ',
      descEn: 'Medical-grade 3-fraction vacuum sterilization for all instruments with chemical strip verification.',
      descBn: 'প্রতিটি যন্ত্রাংশ ভ্যাকুয়াম সিলযুক্ত প্যাকেটে সর্বোচ্চ তাপ ও চাপে জীবাণুমুক্ত করা হয়।',
      icon: <ShieldCheck className="w-5 h-5 text-[#B49A6A]" />,
      protocolEn: 'Instruments undergo ultrasonic cleaning, thermal disinfection, and Class-B fractional vacuum autoclaving at 134°C. Color-changing chemical indicators verify full steam penetration.',
      protocolBn: 'যন্ত্রপাতি প্রথমে আল্ট্রাসনিক ক্লিনারের মাধ্যমে পরিষ্কার করে ১৩৪° সেন্টিগ্রেডে ক্লাস-বি ভ্যাকুয়াম অটোক্লেভে সিল করা হয়। বিশেষ রাসায়নিক স্ট্রিপের মাধ্যমে জীবাণুমুক্তকরণের শতভাগ নিশ্চয়তা যাচাই করা হয়।',
    },
    {
      index: '02',
      badgeEn: 'Zero Cross-Contamination',
      badgeBn: 'সংক্রমণমুক্ত পরিবেশ',
      titleEn: 'Single-Use Clinical Bio-Barriers',
      titleBn: 'একক ব্যবহারযোগ্য বায়ো-ব্যারিয়ার',
      descEn: 'Medical grade protective barriers renewed across every clinical contact point prior to seating.',
      descBn: 'প্রতিটি রোগীর জন্য চেয়ার, হ্যান্ডপিস ও স্পর্শকাতর সব অংশে সম্পূর্ণ নতুন ডিসপোজেবল কভার প্রতিস্থাপন।',
      icon: <CheckCircle2 className="w-5 h-5 text-[#B49A6A]" />,
      protocolEn: 'High-touch surfaces are wrapped in medical-grade fluid-resistant barriers that are discarded after every appointment, followed by medical-grade virucidal surface misting.',
      protocolBn: 'সকল স্পর্শকাতর জায়গা ডিসপোজেবল প্রটেক্টিভ শিট দিয়ে আবৃত থাকে এবং প্রতিটি অ্যাপয়েন্টমেন্টের পর তা পরিবর্তন করে বিশেষ সারফেস ডিসইনফেক্টেন্ট স্প্রে করা হয়।',
    },
    {
      index: '03',
      badgeEn: '0.07mm Voxel Resolution',
      badgeBn: '০.০৭ মিমি নির্ভুল রেজোলিউশন',
      titleEn: 'Low-Dose Digital 3D Diagnostics',
      titleBn: 'ডিজিটাল লো-ডোজ থ্রি-ডি ইমেজিং',
      descEn: 'Comprehensive radiographic clarity with 85% reduced radiation and immediate chairside explanation.',
      descBn: 'ন্যূনতম রেডিয়েশনে চোয়াল ও দাঁতের নিখুঁত ত্রিমাত্রিক চিত্র এবং তাৎক্ষণিক স্ক্রিনে বুঝিয়ে দেওয়ার ব্যবস্থা।',
      icon: <Sparkles className="w-5 h-5 text-[#B49A6A]" />,
      protocolEn: 'Ultra-low-dose CBCT and digital optical intraoral scanning capture sub-millimeter anatomical detail without messy physical alginate impressions.',
      protocolBn: 'উন্নত সিবিসিটি এবং ডিজিটাল ইন্ট্রা-ওরাল স্ক্যানারের মাধ্যমে রোগীর কোনো অস্বস্তি ছাড়াই নিখুঁত থ্রি-ডি ডায়াগনস্টিক মডেল তৈরি করা হয়।',
    },
    {
      index: '04',
      badgeEn: 'Zero Surprise Guarantee',
      badgeBn: 'সম্পূর্ণ খরচ স্বচ্ছতা',
      titleEn: 'Itemized Written Treatment Roadmap',
      titleBn: 'চিকিৎসার পূর্বেই স্পষ্ট লিখিত প্ল্যান',
      descEn: 'Clear overview of procedure stages, timeline, and exact fees provided before care commences.',
      descBn: 'চিকিৎসা শুরুর পূর্বেই সব ধাপ, সময়সূচি ও চূড়ান্ত খরচের লিখিত বিবরণ প্রদান। কোনো লুকানো চার্জ নেই।',
      icon: <FileText className="w-5 h-5 text-[#B49A6A]" />,
      protocolEn: 'You receive a printed and digital treatment summary outlining each clinical stage, alternative conservative options, and exact transparent fees with zero hidden fees.',
      protocolBn: 'চিকিৎসা শুরুর পূর্বেই আপনি প্রতিটি ধাপের লিখিত ও ডিজিটাল সামারি পাবেন, যাতে বিকল্প কনজারভেটিভ চিকিৎসার সুবিধা ও নির্দিষ্ট খরচের উল্লেখ থাকে।',
    },
  ];

  return (
    <section className="bg-[#E7E2D8] border-b border-[#D5CEC2] py-14 lg:py-18 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#B49A6A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.10] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#D5CEC2] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[11px] uppercase tracking-widest font-semibold text-[#777D77]">
              <span className="w-2 h-2 rounded-full bg-[#B49A6A]"></span>
              <span>{isBn ? 'ক্লিনিক্যাল নীতি ও সুরক্ষা মান' : 'Clinical Standards & Safety Architecture'}</span>
            </div>
            <h2 className="font-serif-atelier text-2xl sm:text-3xl font-medium text-[#29483F] leading-snug">
              {isBn
                ? 'হাসপাতাল-গ্রেড জীবাণুমুক্তকরণ ও সম্পূর্ণ চিকিৎসা স্বচ্ছতা'
                : 'Hospital-Grade Infection Control & Absolute Procedural Clarity'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#777D77] max-w-md font-light leading-relaxed">
            {isBn
              ? 'আমরা বিশ্বাস করি রোগী তখনই সম্পূর্ণ আশ্বস্ত হতে পারেন যখন ক্লিনিকের প্রতিটি প্রক্রিয়া আন্তর্জাতিক মান ও বৈজ্ঞানিক নীতি মেনে পরিচালিত হয়।'
              : 'Our protocols follow strict European clinical infection control standards so you can receive care with complete peace of mind.'}
          </p>
        </div>

        {/* 4 Architectural Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF8] p-6 rounded-xs border border-[#E7E2D8] hover:border-[#B49A6A] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Numeral & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-atelier text-2xl font-light text-[#B49A6A] italic">
                    {pillar.index}
                  </span>
                  <div className="w-10 h-10 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center border border-[#B49A6A]/40 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                </div>

                {/* Badge */}
                <span className="inline-block text-[10px] uppercase font-semibold tracking-wider text-[#777D77] bg-[#F6F3EC] px-2 py-0.5 rounded-2xs mb-2 border border-[#E7E2D8]">
                  {isBn ? pillar.badgeBn : pillar.badgeEn}
                </span>

                {/* Title */}
                <h3 className="font-serif-atelier text-lg font-medium text-[#29483F] mb-2 leading-snug group-hover:text-[#1E3730] transition-colors">
                  {isBn ? pillar.titleBn : pillar.titleEn}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#777D77] leading-relaxed mb-4 font-light">
                  {isBn ? pillar.descBn : pillar.descEn}
                </p>
              </div>

              {/* Verified Protocol Trigger */}
              <button
                type="button"
                onClick={() => setActiveModalPillar(idx)}
                className="pt-3 border-t border-[#E7E2D8] text-[11px] font-semibold text-[#29483F] flex items-center justify-between group-hover:text-[#B49A6A] transition-colors w-full cursor-pointer text-left"
              >
                <span>{isBn ? 'প্রোটোকল বিশদ দেখুন' : 'Verify Clinical Protocol'}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#B49A6A] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Verification Modal */}
      {activeModalPillar !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29483F]/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FCFBF8] border border-[#E7E2D8] max-w-lg w-full rounded-sm shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-4 right-4 p-1 text-[#777D77] hover:text-[#29483F] rounded-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center">
                {pillars[activeModalPillar].icon}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#B49A6A] font-bold block">
                  STANDARD {pillars[activeModalPillar].index}
                </span>
                <h3 className="font-serif-atelier text-xl font-medium text-[#29483F]">
                  {isBn ? pillars[activeModalPillar].titleBn : pillars[activeModalPillar].titleEn}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#343A36] leading-relaxed mb-6 font-light">
              {isBn ? pillars[activeModalPillar].protocolBn : pillars[activeModalPillar].protocolEn}
            </p>

            <div className="p-3 bg-[#F6F3EC] rounded-xs border border-[#E7E2D8] flex items-center justify-between text-xs text-[#777D77]">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#B49A6A]" />
                <span>{isBn ? 'ইউরোপীয় ক্লাস-বি মানদণ্ডে পরীক্ষিত' : 'Audited Hospital-Grade Standard'}</span>
              </span>
              <button
                onClick={() => setActiveModalPillar(null)}
                className="text-xs font-semibold text-[#29483F] hover:underline cursor-pointer"
              >
                {isBn ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
