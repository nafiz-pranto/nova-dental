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
      descEn: 'Medical-grade 3-fraction vacuum sterilization for all instruments with chemical indicator verification.',
      descBn: 'প্রতিটি যন্ত্রাংশ ভ্যাকুয়াম সিলযুক্ত প্যাকেটে সর্বোচ্চ তাপ ও চাপে জীবাণুমুক্ত করা হয়।',
      icon: <ShieldCheck className="w-5 h-5 text-[#365469]" />,
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
      icon: <CheckCircle2 className="w-5 h-5 text-[#365469]" />,
      protocolEn: 'High-touch surfaces are wrapped in medical-grade fluid-resistant barriers that are discarded after every appointment, followed by medical-grade virucidal surface misting.',
      protocolBn: 'সকল স্পর্শকাতর জায়গা ডিসপোজেবল প্রটেক্টিভ শিট দিয়ে আবৃত থাকে এবং প্রতিটি অ্যাপয়েন্টমেন্টের পর তা পরিবর্তন করে বিশেষ সারফেস ডিসইনফেক্টেন্ট স্প্রে করা হয়।',
    },
    {
      index: '03',
      badgeEn: '0.07mm Voxel Resolution',
      badgeBn: '০.০৭ মিমি নির্ভুল রেজোলিউশন',
      titleEn: 'Low-Dose Digital 3D Diagnostics',
      titleBn: 'ডিজিটাল লো-ডোজ থ্রি-ডি ইমেজিং',
      descEn: 'Comprehensive radiographic clarity with 85% reduced radiation and immediate chairside review.',
      descBn: 'ন্যূনতম রেডিয়েশনে চোয়াল ও দাঁতের নিখুঁত ত্রিমাত্রিক চিত্র এবং তাৎক্ষণিক স্ক্রিনে বুঝিয়ে দেওয়ার ব্যবস্থা।',
      icon: <Sparkles className="w-5 h-5 text-[#365469]" />,
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
      icon: <FileText className="w-5 h-5 text-[#365469]" />,
      protocolEn: 'You receive a printed and digital treatment summary outlining each clinical stage, alternative conservative options, and exact transparent fees with zero hidden charges.',
      protocolBn: 'চিকিৎসা শুরুর পূর্বেই আপনি প্রতিটি ধাপের লিখিত ও ডিজিটাল সামারি পাবেন, যাতে বিকল্প কনজারভেটিভ চিকিৎসার সুবিধা ও নির্দিষ্ট খরচের উল্লেখ থাকে।',
    },
  ];

  return (
    <section className="bg-[#E4EEF5] border-b border-[#D7E3EB] py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#D7E3EB] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider font-semibold text-[#65869C]">
              <span className="w-2 h-2 rounded-full bg-[#365469]" />
              <span>{isBn ? 'ক্লিনিক্যাল নীতি ও সুরক্ষা মান' : 'Clinical Standards & Safety Architecture'}</span>
            </div>
            <h2 className="font-serif-atelier text-2xl sm:text-3xl font-bold text-[#263746] leading-snug">
              {isBn
                ? 'হাসপাতাল-গ্রেড জীবাণুমুক্তকরণ ও সম্পূর্ণ চিকিৎসা স্বচ্ছতা'
                : 'Hospital-Grade Infection Control & Absolute Procedural Clarity'}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#627482] max-w-md font-normal leading-relaxed">
            {isBn
              ? 'আমরা বিশ্বাস করি রোগী তখনই সম্পূর্ণ আশ্বস্ত হতে পারেন যখন ক্লিনিকের প্রতিটি প্রক্রিয়া আন্তর্জাতিক মান ও বৈজ্ঞানিক নীতি মেনে পরিচালিত হয়।'
              : 'Our protocols follow strict European clinical infection control standards so you can receive care with complete peace of mind.'}
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] p-6 rounded-xl border border-[#D7E3EB] hover:border-[#65869C] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Numeral & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-atelier text-2xl font-bold text-[#65869C]">
                    {pillar.index}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#E4EEF5] text-[#365469] flex items-center justify-center border border-[#D7E3EB] group-hover:bg-[#365469] group-hover:text-[#FFFFFF] transition-all">
                    {pillar.icon}
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="mb-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#65869C] bg-[#F7FAFC] border border-[#D7E3EB] px-2 py-0.5 rounded">
                    {isBn ? pillar.badgeBn : pillar.badgeEn}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-atelier text-base sm:text-lg font-bold text-[#263746] mb-2 leading-snug group-hover:text-[#365469] transition-colors">
                  {isBn ? pillar.titleBn : pillar.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#627482] leading-relaxed mb-4">
                  {isBn ? pillar.descBn : pillar.descEn}
                </p>
              </div>

              {/* Action Trigger */}
              <button
                type="button"
                onClick={() => setActiveModalPillar(idx)}
                className="pt-3 border-t border-[#D7E3EB] flex items-center justify-between text-xs font-semibold text-[#365469] hover:text-[#263746] transition-colors group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>{isBn ? 'প্রোটোকল বিস্তারিত' : 'View Protocol Details'}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#65869C]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Detail Modal */}
      {activeModalPillar !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#263746]/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveModalPillar(null)}
        >
          <div
            className="bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#65869C]">
                <ShieldCheck className="w-4 h-4 text-[#365469]" />
                <span>{isBn ? 'ক্লিনিক্যাল প্রোটোকল' : 'Clinical Verification Standard'}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalPillar(null)}
                className="p-1 rounded-md text-[#627482] hover:text-[#263746] hover:bg-[#E4EEF5] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif-atelier text-xl font-bold text-[#263746] mb-3">
              {isBn ? pillars[activeModalPillar].titleBn : pillars[activeModalPillar].titleEn}
            </h3>

            <p className="text-sm text-[#263746] leading-relaxed mb-5 bg-[#E4EEF5] p-4 rounded-lg border border-[#D7E3EB]">
              {isBn ? pillars[activeModalPillar].protocolBn : pillars[activeModalPillar].protocolEn}
            </p>

            <div className="pt-4 border-t border-[#D7E3EB] flex items-center justify-between text-xs text-[#627482]">
              <span>{isBn ? 'বনানী ১১, ঢাকা স্টুডিও' : 'Banani 11, Dhaka Studio'}</span>
              <button
                type="button"
                onClick={() => setActiveModalPillar(null)}
                className="px-4 py-2 bg-[#365469] text-[#FFFFFF] rounded-md font-semibold text-xs hover:bg-[#284051] transition-colors"
              >
                {isBn ? 'ঠিক আছে' : 'Close Details'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
