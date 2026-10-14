import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { Clock, HeartHandshake, CheckCircle2, Calendar } from 'lucide-react';

export const PatientJourneySection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();

  const journeySteps = [
    {
      step: '01',
      durationEn: '45 Minutes',
      durationBn: '৪৫ মিনিট',
      titleEn: 'Private Consultation & 3D Diagnostics',
      titleBn: 'ব্যক্তিগত পরামর্শ ও থ্রি-ডি ইমেজিং',
      descEn: 'Unhurried conversation in our private consultation suite. Complete optical 3D scan and diagnostic photos with zero judgment or pressure.',
      descBn: 'কোনো তাড়াহুড়ো নেই। শান্ত পরিবেশে নিরিবিলি আলোচনা, ডিজিটাল অপটিক্যাল থ্রি-ডি স্ক্যান ও ফটোগ্রাফির মাধ্যমে আপনার প্রত্যাশা ও স্বাস্থ্য পর্যালোচনা।',
      keyPointEn: 'Zero pressure · Thorough listening',
      keyPointBn: 'কোনো চাপ নেই · মনোযোগ দিয়ে শোনা',
    },
    {
      step: '02',
      durationEn: '30 Minutes',
      durationBn: '৩০ মিনিট',
      titleEn: 'Visual Smile Simulation & Written Cost Plan',
      titleBn: 'ডিজিটাল রূপরেখা ও লিখিত খরচের বিবরণ',
      descEn: 'See a simulated preview of planned results on screen. You receive an itemized, transparent written breakdown of all procedure phases with zero hidden surprises.',
      descBn: 'চিকিৎসা শুরুর পূর্বেই ডিজিটাল সিমুলেশনে সম্ভাব্য ফলাফল দেখুন। প্রতিটি ধাপের সময় ও চূড়ান্ত খরচের স্পষ্ট লিখিত কপি আপনার হাতে তুলে দেওয়া হয়।',
      keyPointEn: 'Itemized written plan · Zero hidden fees',
      keyPointBn: 'লিখিত হিসাব · কোনো গোপন চার্জ নেই',
    },
    {
      step: '03',
      durationEn: 'Planned Sessions',
      durationBn: 'নির্ধারিত সেশন',
      titleEn: 'Gentle Clinical Care with Patient-Led Pacing',
      titleBn: 'আরামদায়ক চিকিৎসা ও রোগীর সম্পূর্ণ নিয়ন্ত্রণ',
      descEn: 'Computer-assisted gentle numbing and calming acoustics. You stay in control with our signature "Raise-Hand Pause" guarantee throughout your appointment.',
      descBn: 'ব্যথাহীন আধুনিক অ্যানেস্থেসিয়া ও শান্ত পরিবেশ। আপনি যেকোনো সময় হাত তুলে কাজ স্থগিত করতে পারেন—আপনার স্বাচ্ছন্দ্যই আমাদের প্রধান অগ্রাধিকার।',
      keyPointEn: 'Raise-Hand Pause guarantee · Total comfort',
      keyPointBn: 'হাত তুলে থামানোর সুযোগ · সম্পূর্ণ আরাম',
    },
    {
      step: '04',
      durationEn: 'Ongoing Support',
      durationBn: 'দীর্ঘমেয়াদী সুরক্ষা',
      titleEn: 'Concierge Post-Care & Long-Term Wellness',
      titleBn: 'ডেডিকেটেড পোস্ট-কেয়ার ও নিয়মিত যত্ন',
      descEn: 'Direct personal WhatsApp continuity within 24 hours. Custom aftercare instructions and planned periodic reviews to protect your natural teeth for years to come.',
      descBn: 'চিকিৎসার পর সরাসরি হোয়াটসঅ্যাপ ফলো-আপ, বিশেষ আফটারকেয়ার গাইড এবং আপনার প্রাকৃতিক হাসির দীর্ঘমেয়াদী সুরক্ষায় নিয়মিত চেকআপ পরামর্শ।',
      keyPointEn: 'Direct WhatsApp chat · Periodic review',
      keyPointBn: 'সরাসরি হোয়াটসঅ্যাপ সাপোর্ট · নিয়মিত চেকআপ',
    },
  ];

  return (
    <section id="journey" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#E4EEF5] border-b border-[#D7E3EB] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionHeading
            align="center"
            eyebrow={isBn ? 'রোগী সেবা ও অভিজ্ঞতা' : 'The Patient Journey'}
            title={isBn ? 'শুরু থেকে শেষ পর্যন্ত: আপনার প্রতিটি ধাপ' : 'Predictable, Unhurried, & Completely Patient-Led'}
            subtitle={
              isBn
                ? 'আমরা জানি ডেন্টাল ক্লিনিক অনেকের জন্যই উদ্বেগের বিষয়। তাই আমাদের প্রতিটি অ্যাপয়েন্টমেন্ট পরিকল্পিত হয় সম্পূর্ণ স্বস্তিদায়ক ও বন্ধুত্বপূর্ণ অভিজ্ঞতায়।'
                : 'Every touchpoint is designed to eliminate anxiety, respect your schedule, and ensure you remain fully in control of every step.'
            }
          />
        </div>

        {/* 4 Steps Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#D7E3EB] hover:border-[#65869C] p-6 sm:p-7 rounded-xl flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Connecting line on desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-10 w-6 h-0.5 bg-[#A9C0D0] z-20 pointer-events-none" />
              )}

              <div>
                {/* Step Index & Time Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif-atelier text-3xl font-bold text-[#65869C]">
                    {step.step}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F7FAFC] text-[#627482] text-xs font-medium border border-[#D7E3EB]">
                    <Clock className="w-3 h-3 text-[#365469]" />
                    <span>{isBn ? step.durationBn : step.durationEn}</span>
                  </div>
                </div>

                <h3 className="font-serif-atelier text-base sm:text-lg font-bold text-[#263746] mb-2 leading-snug group-hover:text-[#365469] transition-colors">
                  {isBn ? step.titleBn : step.titleEn}
                </h3>

                <p className="text-xs text-[#627482] leading-relaxed mb-6">
                  {isBn ? step.descBn : step.descEn}
                </p>
              </div>

              {/* Verified Clinical Assurance Highlight */}
              <div className="pt-4 border-t border-[#D7E3EB]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#365469]">
                  <CheckCircle2 className="w-4 h-4 text-[#65869C] shrink-0" />
                  <span className="truncate">{isBn ? step.keyPointBn : step.keyPointEn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#D7E3EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#E4EEF5] text-[#365469] flex items-center justify-center shrink-0 border border-[#D7E3EB]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-atelier text-lg font-bold text-[#263746]">
                {isBn ? 'আপনার প্রথম পরামর্শ নির্ধারণ করুন' : 'Reserve Your Initial Consultation'}
              </h4>
              <p className="text-xs text-[#627482]">
                {isBn
                  ? 'কোনো চিকিৎসার চাপ ছাড়া সম্পূর্ণ নিরিবিলি খোলামেলা আলোচনা ও ডিজিটাল স্ক্যান।'
                  : 'Comprehensive diagnostic discovery, digital smile scan, and clear written options.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#365469] hover:bg-[#284051] text-[#FFFFFF] text-xs font-semibold rounded-md transition-all shadow-xs cursor-pointer whitespace-nowrap flex items-center gap-2 self-stretch sm:self-auto justify-center"
          >
            <Calendar className="w-4 h-4 text-[#A9C0D0]" />
            <span>{isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Schedule Discovery'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
