import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter, Link } from '../../context/RouterContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { ServiceItem } from '../../types/clinic';
import { SectionHeading } from '../ui/SectionHeading';
import { StudioImage } from '../ui/StudioImage';
import { 
  ChevronRight, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBookingForService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBookingForService,
}) => {
  const { isBn } = useLanguage();
  const { navigate } = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredServices = CLINIC_CONFIG.services.filter((svc) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cosmetic') return svc.id === 'smile-design' || svc.id === 'orthodontics';
    if (activeFilter === 'restorative') return svc.id === 'dental-implants' || svc.id === 'root-canal';
    if (activeFilter === 'family') return svc.id === 'hygiene-preventive' || svc.id === 'family-pediatric';
    return true;
  });

  // Featured flagship service (Smile Design)
  const featuredService = CLINIC_CONFIG.services[0];

  const serviceImages: Record<string, string> = {
    'smile-design': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    'dental-implants': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    'root-canal': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    'orthodontics': 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    'hygiene-preventive': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
    'family-pediatric': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
  };

  return (
    <section id="services" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC] border-b border-[#D7E3EB]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#D7E3EB] gap-6">
          <SectionHeading
            eyebrow={isBn ? 'বিশেষায়িত চিকিৎসা ক্ষেত্র' : 'Curated Clinical Disciplines'}
            title={isBn ? 'প্রাকৃতিক দাঁত সংরক্ষণ ও উন্নত ডেন্টাল কেয়ার' : 'Modern Precision Meets Biological Conservation'}
            subtitle={
              isBn
                ? 'অনাবশ্যক চিকিৎসা পরিহার করে আপনার প্রাকৃতিক দাঁতের দীর্ঘমেয়াদী সুস্থতা ও মার্জিত হাসির সুরক্ষাই আমাদের মূল দর্শন।'
                : 'Conservative restorative dentistry planned with 3D digital precision, biocompatible materials, and relaxed chairside pacing.'
            }
          />

          {/* Filter Pills & View All Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start lg:self-end">
            <div className="flex flex-wrap gap-1 p-1 bg-[#E4EEF5] border border-[#D7E3EB] rounded-lg">
              {[
                { id: 'all', labelEn: 'All Services', labelBn: 'সকল সেবাসমূহ' },
                { id: 'cosmetic', labelEn: 'Smile & Aesthetics', labelBn: 'স্মাইল ডিজাইন' },
                { id: 'restorative', labelEn: 'Implants & Surgery', labelBn: 'ইমপ্লান্ট ও সংরক্ষণ' },
                { id: 'family', labelEn: 'Preventive & Family', labelBn: 'প্রতিরোধ ও পরিবার' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? 'bg-[#365469] text-[#FFFFFF] shadow-2xs font-bold'
                      : 'text-[#627482] hover:text-[#263746] hover:bg-[#FFFFFF]'
                  }`}
                >
                  {isBn ? f.labelBn : f.labelEn}
                </button>
              ))}
            </div>

            <Link
              to="/services"
              className="text-xs font-semibold uppercase tracking-wider text-[#365469] hover:text-[#263746] flex items-center gap-1.5 transition-colors pl-2 sm:border-l sm:border-[#D7E3EB]"
            >
              <span>{isBn ? 'সম্পূর্ণ গাইড' : 'View All Services'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#65869C]" />
            </Link>
          </div>
        </div>

        {/* 1. Flagship Signature Spotlight: Bespoke Smile Design */}
        {activeFilter === 'all' && (
          <div className="mb-12 p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#FFFFFF] border border-[#D7E3EB] hover:border-[#65869C] shadow-sm transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] uppercase font-semibold tracking-wider text-[#365469] bg-[#E4EEF5] px-2.5 py-1 rounded-md border border-[#D7E3EB]">
                    {isBn ? 'সিগনেচার স্মাইল ডিজাইন' : 'SIGNATURE FLAGSHIP PROTOCOL'}
                  </span>
                  <span className="text-xs text-[#627482]">#01</span>
                </div>

                <h3 className="font-serif-atelier text-2xl sm:text-3xl font-bold text-[#263746] mb-3 leading-tight">
                  {isBn ? featuredService.titleBn : featuredService.titleEn}
                </h3>

                <p className="text-sm text-[#627482] leading-relaxed mb-6">
                  {isBn ? featuredService.summaryBn : featuredService.summaryEn}
                </p>

                {/* 3 Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {(isBn ? featuredService.keyBenefitsBn : featuredService.keyBenefitsEn).map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#263746]">
                      <CheckCircle2 className="w-4 h-4 text-[#365469] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#D7E3EB]">
                  <button
                    onClick={() => onOpenBookingForService(featuredService.id)}
                    className="px-5 py-2.5 bg-[#365469] hover:bg-[#284051] text-[#FFFFFF] text-xs font-semibold rounded-md transition-all shadow-xs cursor-pointer flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#A9C0D0]" />
                    <span>{isBn ? 'পরামর্শ বুক করুন' : 'Reserve Consultation'}</span>
                  </button>

                  <button
                    onClick={() => onSelectService(featuredService)}
                    className="px-4 py-2.5 bg-[#E4EEF5] hover:bg-[#D7E3EB] text-[#365469] border border-[#D7E3EB] text-xs font-semibold rounded-md transition-all cursor-pointer"
                  >
                    {isBn ? 'ধাপগুলো দেখুন' : 'View Workflow'}
                  </button>

                  <Link
                    to={`/services/${featuredService.id}`}
                    className="text-xs font-semibold text-[#65869C] hover:text-[#365469] flex items-center gap-1 transition-colors"
                  >
                    <span>{isBn ? 'বিস্তারিত রোগীর গাইড' : 'Detailed Protocol Guide'}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#65869C]" />
                  </Link>
                </div>
              </div>

              {/* Right Column Image Representation */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-xl overflow-hidden border border-[#D7E3EB] aspect-[4/3] shadow-xs bg-[#E4EEF5]">
                  <StudioImage
                    src={serviceImages[featuredService.id]}
                    alt={featuredService.titleEn}
                    aspectRatio="aspect-4/3"
                    category={featuredService.id}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-[#365469]/90 backdrop-blur-xs text-[#FFFFFF] px-3 py-1.5 rounded-md text-[11px] tracking-wide font-medium border border-[#65869C]/30 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A9C0D0]" />
                  <span>{isBn ? featuredService.durationBn : featuredService.durationEn}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] border border-[#D7E3EB] hover:border-[#65869C] rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Image Thumbnail Frame */}
                <div className="rounded-lg overflow-hidden aspect-[16/9] mb-4 border border-[#D7E3EB] relative bg-[#E4EEF5]">
                  <StudioImage
                    src={serviceImages[service.id]}
                    alt={service.titleEn}
                    aspectRatio="aspect-16/9"
                    category={service.id}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#365469]/90 text-[#FFFFFF] px-2 py-0.5 rounded text-[10px] font-mono tracking-wider">
                    #{service.number}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-[#65869C] bg-[#E4EEF5] px-2 py-0.5 rounded border border-[#D7E3EB]">
                    {isBn ? service.categoryBn : service.categoryEn}
                  </span>
                  <span className="text-[11px] text-[#627482] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A9C0D0]" />
                    <span>{isBn ? service.durationBn : service.durationEn}</span>
                  </span>
                </div>

                <h3 className="font-serif-atelier text-lg sm:text-xl font-bold text-[#263746] mb-2 leading-snug group-hover:text-[#365469] transition-colors">
                  {isBn ? service.titleBn : service.titleEn}
                </h3>

                <p className="text-xs text-[#627482] leading-relaxed mb-5 line-clamp-3">
                  {isBn ? service.summaryBn : service.summaryEn}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#D7E3EB] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#365469] group-hover:text-[#263746] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{isBn ? 'চিকিৎসা ধাপসমূহ' : 'View Workflow'}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#65869C]" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBookingForService(service.id)}
                  className="text-xs font-medium text-[#627482] hover:text-[#365469] transition-colors cursor-pointer"
                  title={isBn ? 'পরামর্শ নির্ধারণ' : 'Schedule Consultation'}
                >
                  {isBn ? 'বুকিং' : 'Schedule'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
