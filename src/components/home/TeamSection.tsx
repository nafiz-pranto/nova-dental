import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { AbstractClinicianShield } from '../ui/StudioArtwork';
import { Calendar, Quote, Award } from 'lucide-react';

export const TeamSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isBn } = useLanguage();

  return (
    <section id="team" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC] border-b border-[#D7E3EB]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Demo Indicator */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#D7E3EB] gap-6">
          <SectionHeading
            eyebrow={isBn ? 'চিকিৎসক দল ও ক্লিনিক্যাল দর্শন' : 'Clinical Leadership & Care Philosophy'}
            title={isBn ? 'প্রাকৃতিক দাঁত সংরক্ষণ ও সহানুভূতিশীল চিকিৎসায় নিবেদিত' : 'Master Clinicians Committed to Biological Preservation'}
            subtitle={
              isBn
                ? 'আমরা বিশ্বাস করি প্রতিটি রোগীর নিজস্ব প্রয়োজন ও সংবেদনশীলতা রয়েছে। প্রাকৃতিক দাঁত সংরক্ষণ ও আন্তর্জাতিক মানে সহানুভূতিশীল সেবাই আমাদের মূল অঙ্গীকার।'
                : 'Guided by conservative dentistry: protecting healthy natural enamel whenever possible, backed by continuous post-graduate clinical training.'
            }
          />

          {/* Honest Demo Presentation Notice */}
          <div className="px-3 py-1.5 bg-[#E4EEF5] border border-[#D7E3EB] rounded-md text-xs text-[#263746] self-start lg:self-end flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#365469]" />
            <span className="font-semibold">{isBn ? 'নমুনা চিকিৎসক প্রোফাইল' : 'Sample Clinician Layout'}</span>
            <span className="text-[#627482]"> • {isBn ? 'অনবোর্ডিংয়ে ক্লিনিকের আসল তথ্য যুক্ত হবে' : 'Client credentials added at launch'}</span>
          </div>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CLINIC_CONFIG.teamMembers.map((doc, idx) => (
            <div
              key={doc.id}
              className="bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#65869C] hover:shadow-md transition-all duration-300 relative group"
            >
              <div>
                <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                  {/* Clinician Shield / Portrait Frame */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 shadow-xs border border-[#A9C0D0] relative bg-[#365469]">
                    <AbstractClinicianShield
                      monogram={idx === 0 ? 'SK' : 'TA'}
                      specialtyEn={idx === 0 ? 'Restorative & Aesthetic' : 'Implant & Oral Surgery'}
                      specialtyBn={idx === 0 ? 'রিস্টোরেটিভ ও এস্থেটিক' : 'ইমপ্লান্ট ও সার্জারি'}
                      isBn={isBn}
                    />
                    <div className="absolute bottom-1 right-1 bg-[#365469] px-1.5 py-0.5 rounded border border-[#65869C]/50 text-[9px] uppercase font-mono text-[#FFFFFF]">
                      {idx === 0 ? 'Lead BDS' : 'Surgeon'}
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E4EEF5] text-[#365469] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#D7E3EB]">
                      <Award className="w-3.5 h-3.5 text-[#65869C]" />
                      <span>{isBn ? doc.roleBn : doc.roleEn}</span>
                    </div>

                    <h3 className="font-serif-atelier text-xl sm:text-2xl font-bold text-[#263746] mb-1 leading-snug group-hover:text-[#365469] transition-colors">
                      {isBn ? doc.titleBn : doc.titleEn}
                    </h3>

                    <p className="text-xs text-[#627482] font-mono mb-3">
                      {isBn ? doc.qualificationsBn : doc.qualificationsEn}
                    </p>

                    <p className="text-xs text-[#263746] leading-relaxed">
                      {isBn ? doc.bioBn : doc.bioEn}
                    </p>
                  </div>
                </div>

                {/* Chairside Philosophy Quote */}
                <div className="my-5 p-4 rounded-xl bg-[#E4EEF5] border border-[#D7E3EB] text-xs sm:text-sm text-[#263746] italic leading-relaxed relative">
                  <Quote className="w-4 h-4 text-[#65869C] absolute top-3 right-3 opacity-60 not-italic" />
                  <p className="pr-6">{isBn ? doc.quoteBn : doc.quoteEn}</p>
                </div>

                {/* Clinical Focus Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {(idx === 0
                    ? (isBn ? ['ডিজিটাল স্মাইল ডিজাইন', 'সিরামিক ভিনিয়ার্স', 'বায়োমিমেটিক ফিলিং'] : ['Digital Smile Design', 'Porcelain Veneers', 'Biomimetic Inlays'])
                    : (isBn ? ['গাইডেড থ্রি-ডি ইমেজিং', 'সিবিসিটি সার্জিক্যাল গাইড', 'ফুল-মাউথ রিহ্যাবিলিটেশন'] : ['Guided 3D Implantology', 'CBCT Guided Stents', 'Full-Mouth Restoration'])
                  ).map((item, i) => (
                    <span key={i} className="text-[11px] text-[#627482] bg-[#F7FAFC] px-2.5 py-1 rounded-md border border-[#D7E3EB]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Booking Action */}
              <div className="pt-4 border-t border-[#D7E3EB] flex items-center justify-between">
                <span className="text-xs text-[#627482] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65869C]" />
                  <span>{isBn ? 'সরাসরি অ্যাপয়েন্টমেন্ট স্লট খালি' : 'Dedicated Consultation Slots'}</span>
                </span>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 bg-[#365469] hover:bg-[#284051] text-[#FFFFFF] text-xs font-semibold rounded-md transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#A9C0D0]" />
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
