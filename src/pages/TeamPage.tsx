import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { CLINIC_CONFIG } from '../config/clinicData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RouteSeo } from '../components/seo/RouteSeo';
import { Button } from '../components/ui/Button';
import { AbstractClinicianShield } from '../components/ui/StudioArtwork';
import { 
  Sparkles, 
  Quote 
} from 'lucide-react';

export const TeamPage: React.FC = () => {
  const { isBn } = useLanguage();
  const { navigate } = useRouter();

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RouteSeo
        titleEn="Clinical Team & Practice Philosophy | NOVA Dental Studio"
        titleBn="চিকিৎসক দল ও সেবা দর্শন | নোভা ডেন্টাল স্টুডিও"
        descriptionEn="Meet our dental team and explore our gentle restorative philosophy. Sample clinician profiles awaiting verified clinic credentials."
        descriptionBn="আমাদের চিকিৎসাদল ও যত্নশীল সেবা দর্শন। বনানী স্টুডিওর নমুনা চিকিৎসক প্রোফাইল ও আধুনিক প্রযুক্তি পরিচিতি।"
        canonicalPath="/team"
      />

      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          {
            labelEn: 'The Studio & Clinicians',
            labelBn: 'ক্লিনিক ও চিকিৎসক দল',
          },
        ]}
        className="mb-8"
      />

      {/* Hero Header */}
      <div className="max-w-3xl mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#65869C] mb-2">
          {isBn ? 'চিকিৎসা দর্শন ও পরিবেশ' : 'Practice Philosophy & Clinicians'}
        </p>

        <h1 className="font-serif-atelier text-3xl sm:text-4xl lg:text-5xl font-bold text-[#263746] tracking-tight leading-tight mb-4 text-balance">
          {isBn
            ? 'যত্নশীল মন ও নিখুঁত দক্ষতার সম্মিলন'
            : 'Dedicated to Conservative Dentistry & Unhurried Care'}
        </h1>

        <p className="text-base text-[#627482] leading-relaxed">
          {isBn
            ? 'আমরা বিশ্বাস করি প্রতিটি রোগীর নিজস্ব গল্প ও উদ্বেগ রয়েছে। আমাদের লক্ষ্য কেবল দাঁতের চিকিৎসা নয়, বরং একটি নির্ঝঞ্ঝাট ও শান্ত অভিজ্ঞতার মাধ্যমে সুস্থ ও আত্মবিশ্বাসী হাসি ফিরিয়ে দেওয়া।'
            : 'We believe restorative dentistry requires active listening, clinical precision, and profound respect for healthy natural tooth structure.'}
        </p>
      </div>

      {/* Honest Demo Presentation Indicator */}
      <div className="mb-10 p-4 bg-[#E4EEF5] border border-[#D7E3EB] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#365469]" />
          <span className="font-semibold text-[#263746]">
            {isBn ? 'ক্লায়েন্ট ডেমো প্রেজেন্টেশন সংস্করণ' : 'Agency Presentation Demo Layout'}
          </span>
          <span className="text-[#627482] hidden sm:inline">•</span>
          <span className="text-[#627482]">
            {isBn ? 'অনবোর্ডিংয়ের সময় আসল নিবন্ধিত চিকিৎসকদের তথ্য যুক্ত করা হবে' : 'Sample profiles illustrating clinical credentials and layout'}
          </span>
        </div>

        <span className="text-xs font-mono text-[#65869C]">
          DEMO PREVIEW
        </span>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        {CLINIC_CONFIG.teamMembers.map((doc, idx) => (
          <div
            key={doc.id}
            className="bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#65869C] shadow-2xs hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                {/* Portrait Frame / Shield */}
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

                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E4EEF5] text-[#365469] text-[11px] font-bold uppercase tracking-wider mb-2 border border-[#D7E3EB]">
                    <Sparkles className="w-3 h-3 text-[#65869C]" />
                    <span>{isBn ? doc.roleBn : doc.roleEn}</span>
                  </div>

                  <h2 className="font-serif-atelier text-2xl font-bold text-[#263746] mb-1 leading-snug">
                    {isBn ? doc.titleBn : doc.titleEn}
                  </h2>

                  <p className="text-xs text-[#627482] font-mono mb-3">
                    {isBn ? doc.qualificationsBn : doc.qualificationsEn}
                  </p>

                  <p className="text-xs text-[#263746] leading-relaxed">
                    {isBn ? doc.bioBn : doc.bioEn}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="my-5 p-4 rounded-xl bg-[#E4EEF5] border border-[#D7E3EB] text-xs sm:text-sm text-[#263746] italic leading-relaxed relative">
                <Quote className="w-4 h-4 text-[#65869C] absolute top-3 right-3 opacity-60 not-italic" />
                <p className="pr-6">{isBn ? doc.quoteBn : doc.quoteEn}</p>
              </div>

              {/* Focus areas */}
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-wider text-[#65869C] font-semibold block">
                  {isBn ? 'বিশেষত্ব ও ক্লিনিক্যাল আগ্রহ' : 'Clinical Focus Areas'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(idx === 0
                    ? (isBn ? ['ডিজিটাল স্মাইল ডিজাইন', 'সিরামিক ভিনিয়ার্স', 'বায়োমিমেটিক ফিলিং'] : ['Digital Smile Design', 'Porcelain Veneers', 'Biomimetic Inlays'])
                    : (isBn ? ['গাইডেড থ্রি-ডি ইমেজিং', 'সিবিসিটি সার্জিক্যাল গাইড', 'ফুল-মাউথ রিহ্যাবিলিটেশন'] : ['Guided 3D Implantology', 'CBCT Guided Stents', 'Full-Mouth Restoration'])
                  ).map((item, i) => (
                    <span key={i} className="text-xs text-[#627482] bg-[#F7FAFC] px-2.5 py-1 rounded-md border border-[#D7E3EB]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D7E3EB] flex items-center justify-between">
              <span className="text-xs text-[#627482] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#65869C]" />
                <span>{isBn ? 'সপ্তাহে ৬ দিন পরামর্শ' : 'Available by Appointment'}</span>
              </span>

              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/appointment')}
              >
                {isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Book with Doctor'}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Practice Philosophy Principles */}
      <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#D7E3EB] rounded-2xl mb-12 shadow-2xs">
        <h3 className="font-serif-atelier text-2xl font-bold text-[#263746] mb-6 text-center">
          {isBn ? 'আমাদের তিনটি মূল চিকিৎসা নীতি' : 'Core Tenets of Our Clinical Practice'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-[#E4EEF5] rounded-xl border border-[#D7E3EB]">
            <span className="font-serif-atelier text-2xl text-[#65869C] font-bold block mb-2">01</span>
            <h4 className="font-serif-atelier text-base font-bold text-[#263746] mb-2">
              {isBn ? 'কনজারভেটিভ প্রিজারভেশন' : 'Enamel Conservation'}
            </h4>
            <p className="text-xs text-[#627482] leading-relaxed">
              {isBn
                ? 'দাঁতের মূল প্রাকৃতিক এনামেল যতখানি সম্ভব অক্ষত রেখে সর্বনিম্ন কাটাছেঁড়ায় আধুনিক চিকিৎসা।'
                : 'Minimally invasive restorative principles that protect and save natural tooth structures wherever viable.'}
            </p>
          </div>

          <div className="p-5 bg-[#E4EEF5] rounded-xl border border-[#D7E3EB]">
            <span className="font-serif-atelier text-2xl text-[#65869C] font-bold block mb-2">02</span>
            <h4 className="font-serif-atelier text-base font-bold text-[#263746] mb-2">
              {isBn ? 'পেস নিয়ন্ত্রণের অধিকার' : 'Patient-Led Pacing'}
            </h4>
            <p className="text-xs text-[#627482] leading-relaxed">
              {isBn
                ? 'চিকিৎসা চলাকালে যেকোনো মুহূর্তে হাত তুলে পজ দেওয়ার শতভাগ স্বাধীনতা ও শান্ত পরিবেশ।'
                : 'Our "Raise-Hand Pause" guarantee gives you complete authority during every minute in the operatory.'}
            </p>
          </div>

          <div className="p-5 bg-[#E4EEF5] rounded-xl border border-[#D7E3EB]">
            <span className="font-serif-atelier text-2xl text-[#65869C] font-bold block mb-2">03</span>
            <h4 className="font-serif-atelier text-base font-bold text-[#263746] mb-2">
              {isBn ? 'লিখিত খরচের স্বচ্ছতা' : 'Transparent Written Fees'}
            </h4>
            <p className="text-xs text-[#627482] leading-relaxed">
              {isBn
                ? 'চিকিৎসার শুরুতে সব ধাপ এবং সম্ভাব্য ব্যয়ের লিখিত প্ল্যান, যাতে কোনো গোপন চার্জ না থাকে।'
                : 'Every diagnostic phase culminates in an itemized printed summary with zero surprise additions.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
