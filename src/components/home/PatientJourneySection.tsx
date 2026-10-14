import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { Clock, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Calendar } from 'lucide-react';

export const PatientJourneySection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();

  const journeySteps = [
    {
      step: '01',
      durationEn: '45 Minutes',
      durationBn: '৪৫ মিনিট',
      titleEn: 'Private Consultation & 3D Diagnostics',
      titleBn: 'ব্যক্তিগত পরামর্শ ও থ্রি-ডি ইমেজিং',
      descEn: 'Unhurried conversation over tea or coffee in our private consultation suite. Complete optical 3D scan and diagnostic photos with zero judgment or pressure.',
      descBn: 'কোনো তাড়াহুড়ো নেই। চা বা কফির সাথে নিরিবিলি আলোচনা, ডিজিটাল অপটিক্যাল থ্রি-ডি স্ক্যান ও ফটোগ্রাফির মাধ্যমে আপনার প্রত্যাশা শোনা হয়।',
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
      descEn: 'Computer-assisted gentle numbing and noise-canceling audio. You stay in control with our signature "Raise-Hand Pause" guarantee throughout your appointment.',
      descBn: 'ব্যথাহীন আধুনিক অ্যানেস্থেসিয়া ও শান্ত পরিবেশ। আপনি যেকোনো সময় হাত তুলে কাজ স্থগিত করতে পারেন—আপনার স্বাচ্ছন্দ্যই আমাদের প্রধান অগ্রাধিকার।',
      keyPointEn: 'Raise-Hand Pause guarantee · Total comfort',
      keyPointBn: 'হাত তুলে থামানোর সুযোগ · সম্পূর্ণ আরাম',
    },
    {
      step: '04',
      durationEn: 'Ongoing Support',
      durationBn: 'দীর্ঘমেয়াদী সুরক্ষা',
      titleEn: 'Concierge Post-Care & Long-Term Warranty',
      titleBn: 'ডেডিকেটেড পোস্ট-কেয়ার ও দীর্ঘমেয়াদী যত্ন',
      descEn: 'Direct personal WhatsApp continuity within 24 hours. Custom aftercare kits and planned annual reviews to protect your investment for years to come.',
      descBn: 'চিকিৎসার পর ২৪ ঘণ্টার মধ্যে সরাসরি ফলো-আপ, বিশেষ আফটারকেয়ার কিট এবং আপনার প্রাকৃতিক হাসির দীর্ঘমেয়াদী সুরক্ষায় নিয়মিত চেকআপ পরামর্শ।',
      keyPointEn: '24/7 Concierge chat · Comprehensive warranty',
      keyPointBn: 'সরাসরি হোয়াটসঅ্যাপ সাপোর্ট · নিয়মিত চেকআপ',
    },
  ];

  return (
    <section id="journey" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#E7E2D8] border-b border-[#D5CEC2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeading
            align="center"
            eyebrow={isBn ? 'রোগী সেবা ও অভিজ্ঞতা' : 'The Concierge Patient Journey'}
            title={isBn ? 'শুরু থেকে শেষ পর্যন্ত: আপনার প্রতিটি ধাপ' : 'Predictable, Unhurried, & Completely Patient-Led'}
            subtitle={
              isBn
                ? 'আমরা জানি ডেন্টাল ক্লিনিক অনেকের জন্যই অস্বস্তিকর। তাই আমাদের প্রতিটি অ্যাপয়েন্টমেন্ট পরিকল্পিত হয় সম্পূর্ণ নির্ঝঞ্ঝাট ও বন্ধুত্বপূর্ণ অভিজ্ঞতায়।'
                : 'Every touchpoint is designed to eliminate anxiety, respect your valuable schedule, and ensure you remain fully in control of every step.'
            }
          />
        </div>

        {/* 4 Steps Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FCFBF8] border border-[#E7E2D8] hover:border-[#B49A6A] p-7 rounded-xs flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Connecting line on desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-12 w-6 h-0.5 bg-[#B49A6A]/40 z-20 pointer-events-none"></div>
              )}

              <div>
                {/* Step Index & Time Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-atelier text-3xl font-light text-[#B49A6A] italic">
                    {step.step}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-2xs bg-[#F6F3EC] text-[#777D77] text-[10px] font-semibold border border-[#E7E2D8]">
                    <Clock className="w-3 h-3 text-[#B49A6A]" />
                    <span>{isBn ? step.durationBn : step.durationEn}</span>
                  </div>
                </div>

                <h3 className="font-serif-atelier text-lg font-medium text-[#29483F] mb-3 leading-snug group-hover:text-[#1E3730] transition-colors">
                  {isBn ? step.titleBn : step.titleEn}
                </h3>

                <p className="text-xs text-[#777D77] font-light leading-relaxed mb-6">
                  {isBn ? step.descBn : step.descEn}
                </p>
              </div>

              {/* Verified Clinical Assurance Highlight */}
              <div className="pt-4 border-t border-[#E7E2D8]">
                <div className="flex items-center gap-2 text-[11px] font-medium text-[#29483F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B49A6A] shrink-0" />
                  <span className="truncate">{isBn ? step.keyPointBn : step.keyPointEn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Concierge Booking Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xs bg-[#FCFBF8] border border-[#E7E2D8] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-atelier text-lg font-medium text-[#29483F]">
                {isBn ? 'আপনার প্রথম পরামর্শ বুকিং করুন' : 'Reserve Your Introductory Visit'}
              </h4>
              <p className="text-xs text-[#777D77] font-light">
                {isBn
                  ? 'কোনো চিকিৎসা বাধ্যবাধকতা ছাড়া সম্পূর্ণ নিরিবিলি খোলামেলা আলোচনা ও ডিজিটাল স্ক্যান।'
                  : 'Comprehensive diagnostic discovery, digital smile scan, and full transparent options.'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 bg-[#29483F] hover:bg-[#1E3730] text-[#FCFBF8] text-xs font-semibold uppercase tracking-wider rounded-2xs transition-all shadow-xs cursor-pointer whitespace-nowrap flex items-center gap-2 self-stretch sm:self-auto justify-center"
          >
            <Calendar className="w-4 h-4 text-[#B49A6A]" />
            <span>{isBn ? 'অ্যাপয়েন্টমেন্ট নির্ধারণ করুন' : 'Schedule Discovery'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
