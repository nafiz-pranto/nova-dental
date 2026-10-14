import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, Link } from '../context/RouterContext';
import { CLINIC_CONFIG } from '../config/clinicData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RouteSeo } from '../components/seo/RouteSeo';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Calendar 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { isBn } = useLanguage();
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = CLINIC_CONFIG.services.filter((svc) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'cosmetic') return svc.id === 'smile-design' || svc.id === 'orthodontics';
    if (activeCategory === 'restorative') return svc.id === 'dental-implants' || svc.id === 'root-canal';
    if (activeCategory === 'preventive') return svc.id === 'hygiene-preventive' || svc.id === 'family-pediatric';
    return true;
  });

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RouteSeo
        titleEn="Clinical Disciplines & Restorative Procedures | NOVA Dental Studio"
        titleBn="চিকিৎসা ক্ষেত্রসমূহ ও বিশেষায়িত সেবা | নোভা ডেন্টাল স্টুডিও"
        descriptionEn="Explore 6 core dental specializations: conservative smile design, invisible aligners, dental implants, root canal therapy, and preventive care."
        descriptionBn="নোভা ডেন্টাল স্টুডিওর ৬টি বিশেষায়িত চিকিৎসা: কনজারভেটিভ স্মাইল ডিজাইন, ইনভিজিবল অ্যালাইনার, ডেন্টাল ইমপ্লান্ট ও রুট ক্যানেল।"
        canonicalPath="/services"
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          {
            labelEn: 'Treatments & Clinical Disciplines',
            labelBn: 'চিকিৎসাসমূহ ও বিভাগ',
          },
        ]}
        className="mb-8"
      />

      {/* Hero Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#777D77] mb-3">
          {isBn ? 'বিশেষায়িত চিকিৎসা ক্ষেত্র' : 'Clinical Specializations'}
        </p>

        <h1 className="font-serif-atelier text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29483F] tracking-tight leading-tight mb-4 text-balance">
          {isBn
            ? 'প্রাকৃতিক দাঁতের সুরক্ষা ও আধুনিক নান্দনিক দন্ত্য সেবা'
            : 'Conservative Restorative Care & Architectural Smile Design'}
        </h1>

        <p className="text-base text-[#343A36] font-light leading-relaxed">
          {isBn
            ? 'আমরা প্রতিটি রোগীর চিকিৎসাকে একটি সমন্বিত পরিকল্পনায় দেখি। অপ্রয়োজনীয় প্রসিডিউর এড়িয়ে নিখুঁত ডিজিটাল প্রযুক্তির মাধ্যমে প্রাকৃতিক দাঁতের দীর্ঘমেয়াদী সুস্থতা নিশ্চিত করাই আমাদের লক্ষ্য।'
            : 'Every procedure at NOVA Dental Studio is grounded in conservative principles: preserving natural tooth enamel, eliminating procedural anxiety, and providing clear fee transparency.'}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E7E2D8] mb-10">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', labelEn: 'All Disciplines (06)', labelBn: 'সকল সেবাসমূহ (০৬)' },
            { id: 'cosmetic', labelEn: 'Smile Design & Aligners', labelBn: 'স্মাইল ও অ্যালাইনার' },
            { id: 'restorative', labelEn: 'Implants & Root Canals', labelBn: 'ইমপ্লান্ট ও রুট ক্যানেল' },
            { id: 'preventive', labelEn: 'Preventive & Family', labelBn: 'প্রতিরোধ ও পারিবারিক' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xs text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#29483F] text-[#FCFBF8] shadow-xs font-semibold'
                  : 'bg-[#FCFBF8] text-[#777D77] hover:text-[#29483F] border border-[#E7E2D8]'
              }`}
            >
              {isBn ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        <span className="text-xs text-[#777D77] font-mono">
          {isBn ? `প্রদর্শিত: ${filteredServices.length}টি সেবা` : `Showing ${filteredServices.length} of 6 Disciplines`}
        </span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs p-7 flex flex-col justify-between hover:border-[#B49A6A] hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              {/* Header Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif-atelier text-2xl font-light text-[#B49A6A] italic">
                  #{service.number}
                </span>
                <Badge variant="sage">
                  {isBn ? service.categoryBn : service.categoryEn}
                </Badge>
              </div>

              {/* Title */}
              <h2 className="font-serif-atelier text-xl sm:text-2xl font-medium text-[#29483F] mb-3 leading-snug group-hover:text-[#1E3730] transition-colors">
                {isBn ? service.titleBn : service.titleEn}
              </h2>

              {/* Tagline / Subtitle */}
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B49A6A] mb-3">
                {isBn ? service.tagBn : service.tagEn}
              </p>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#777D77] font-light leading-relaxed mb-6">
                {isBn ? service.summaryBn : service.summaryEn}
              </p>

              {/* Key Clinical Benefits */}
              <div className="space-y-2 mb-6 pt-4 border-t border-[#E7E2D8]">
                {(isBn ? service.keyBenefitsBn : service.keyBenefitsEn).slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#343A36]">
                    <span className="text-[#B49A6A] font-bold">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer: Duration & CTA */}
            <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-between">
              <span className="text-xs text-[#777D77] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A5B5A5]" />
                <span>{isBn ? service.durationBn : service.durationEn}</span>
              </span>

              <div className="flex items-center gap-2">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#29483F] hover:text-[#B49A6A] transition-colors"
                >
                  <span>{isBn ? 'সম্পূর্ণ প্রোটোকল' : 'Full Protocol'}</span>
                  <ArrowRight className="w-3 h-3 text-[#B49A6A] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance Bottom Strip */}
      <div className="mt-16 p-8 bg-[#E7E2D8] rounded-xs border border-[#D5CEC2] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-atelier text-lg font-medium text-[#29483F]">
              {isBn ? 'আন্তর্জাতিক মানের জীবাণুমুক্তকরণ সুরক্ষা' : 'Hospital-Grade Infection Control Guaranteed'}
            </h3>
            <p className="text-xs text-[#343A36] max-w-xl font-light mt-1">
              {isBn
                ? 'ইউরোপীয় ক্লাস-বি ভ্যাকুয়াম অটোক্লেভ দ্বারা প্রতিটি যন্ত্রাংশ সিলড প্যাকেটে জীবাণুমুক্ত করা হয়।'
                : 'All procedures utilize single-use bio-barriers and EN 13060 European Class-B sterilized instrument cassettes.'}
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => navigate('/appointment')}
          className="shrink-0"
        >
          {isBn ? 'পরামর্শ নির্ধারণ করুন' : 'Schedule Diagnostic Visit'}
        </Button>
      </div>
    </div>
  );
};
