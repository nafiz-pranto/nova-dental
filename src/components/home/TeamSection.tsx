import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { AbstractClinicianShield } from '../ui/StudioArtwork';
import { Calendar, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const TeamSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();

  return (
    <section id="team" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F3EC] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Demo Indicator */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-6 border-b border-[#E7E2D8] gap-6">
          <SectionHeading
            eyebrow={isBn ? 'চিকিৎসক দল ও দর্শন' : 'Clinical Leadership & Philosophy'}
            title={isBn ? 'প্রাকৃতিক দাঁত সংরক্ষণ ও সহানুভূতিশীল চিকিৎসায় নিবেদিত' : 'Master Clinicians Committed to Biological Preservation'}
            subtitle={
              isBn
                ? 'আমরা বিশ্বাস করি প্রতিটি রোগীর নিজস্ব গল্প ও সংবেদনশীলতা রয়েছে। প্রাকৃতিক দাঁত সংরক্ষণ ও আন্তর্জাতিক মানে সহানুভূতিশীল সেবাই আমাদের মূল অঙ্গীকার।'
                : 'Guided by conservative dentistry: protecting healthy natural enamel whenever possible, backed by continuous post-graduate clinical training.'
            }
          />

          {/* Honest Demo Presentation Notice */}
          <div className="px-3.5 py-2 bg-[#E7E2D8] border border-[#D5CEC2] rounded-xs text-[11px] text-[#343A36] self-start lg:self-end flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B49A6A]"></span>
            <span className="font-semibold">{isBn ? 'নমুনা চিকিৎসক প্রোফাইল' : 'Sample Clinician Layout'}</span>
            <span className="text-[#777D77]"> • {isBn ? 'অনবোর্ডিংয়ে ক্লিনিকের আসল তথ্য যুক্ত হবে' : 'Client credentials added at launch'}</span>
          </div>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CLINIC_CONFIG.teamMembers.map((doc, idx) => (
            <div
              key={doc.id}
              className="bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs p-6 sm:p-9 flex flex-col justify-between hover:border-[#B49A6A] hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-start mb-6">
                  {/* Architectural Clinician Shield / Portrait Frame */}
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-xs overflow-hidden shrink-0 shadow-sm border border-[#B49A6A]/40 relative bg-[#29483F]">
                    <AbstractClinicianShield
                      monogram={idx === 0 ? 'SK' : 'TA'}
                      specialtyEn={idx === 0 ? 'Restorative & Aesthetic' : 'Implant & Oral Surgery'}
                      specialtyBn={idx === 0 ? 'রিস্টোরেটিভ ও এস্থেটিক' : 'ইমপ্লান্ট ও সার্জারি'}
                      isBn={isBn}
                    />
                    <div className="absolute bottom-1 right-1 bg-[#29483F] px-1.5 py-0.5 rounded-2xs border border-[#B49A6A]/50 text-[9px] uppercase font-mono text-[#B49A6A]">
                      {idx === 0 ? 'Lead BDS' : 'Surgeon'}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-2xs bg-[#E7E2D8] text-[#29483F] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#D5CEC2]">
                      <Award className="w-3 h-3 text-[#B49A6A]" />
                      <span>{isBn ? doc.roleBn : doc.roleEn}</span>
                    </div>

                    <h3 className="font-serif-atelier text-xl sm:text-2xl font-medium text-[#29483F] mb-1 leading-snug group-hover:text-[#1E3730] transition-colors">
                      {isBn ? doc.titleBn : doc.titleEn}
                    </h3>

                    <p className="text-xs text-[#777D77] font-mono mb-3">
                      {isBn ? doc.qualificationsBn : doc.qualificationsEn}
                    </p>

                    <p className="text-xs text-[#343A36] leading-relaxed font-light">
                      {isBn ? doc.bioBn : doc.bioEn}
                    </p>
                  </div>
                </div>

                {/* Chairside Philosophy Quote in Luxury Atelier Serif Box */}
                <div className="my-6 p-5 rounded-xs bg-[#F6F3EC] border border-[#E7E2D8] text-xs sm:text-sm text-[#343A36] italic font-light leading-relaxed relative">
                  <Quote className="w-4 h-4 text-[#B49A6A] absolute top-3 right-3 opacity-60 not-italic" />
                  <p className="pr-6">{isBn ? doc.quoteBn : doc.quoteEn}</p>
                </div>

                {/* Clinical Focus Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(idx === 0
                    ? (isBn ? ['ডিজিটাল স্মাইল ডিজাইন', 'সিরামিক ভিনিয়ার্স', 'বায়োমিমেটিক ফিলিং'] : ['Digital Smile Architecture', 'Porcelain Veneers', 'Biomimetic Inlays'])
                    : (isBn ? ['গাইডেড থ্রি-ডি ইমেজিং', 'সিবিসিটি সার্জিক্যাল গাইড', 'ফুল-মাউথ রিহ্যাবিলিটেশন'] : ['Guided 3D Implantology', 'CBCT Guided Stents', 'Full-Mouth Restoration'])
                  ).map((item, i) => (
                    <span key={i} className="text-[11px] text-[#777D77] bg-[#E7E2D8] px-2.5 py-1 rounded-2xs border border-[#D5CEC2]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Booking Action */}
              <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-between">
                <span className="text-[11px] text-[#777D77] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A5B5A5]"></span>
                  <span>{isBn ? 'সরাসরি অ্যাপয়েন্টমেন্ট স্লট খালি' : 'Dedicated Consultation Slots'}</span>
                </span>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-[#29483F] hover:bg-[#1E3730] text-[#FCFBF8] text-xs font-semibold uppercase tracking-wider rounded-2xs transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#B49A6A]" />
                  <span>{isBn ? 'পরামর্শ বুক করুন' : 'Book with Doctor'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
