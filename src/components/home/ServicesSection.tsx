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
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Layers,
  Calendar,
  CheckCircle2
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
    <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F6F3EC] border-b border-[#E7E2D8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-8 border-b border-[#E7E2D8] gap-6">
          <SectionHeading
            eyebrow={isBn ? 'বিশেষায়িত চিকিৎসা ক্ষেত্র' : 'Curated Clinical Disciplines'}
            title={isBn ? 'প্রাকৃতিক দাঁত সংরক্ষণ ও উন্নত স্মাইল আর্কিটেকচার' : 'Architectural Precision Meets Biological Conservation'}
            subtitle={
              isBn
                ? 'অনাবশ্যক ও অতিরিক্ত চিকিৎসা পরিহার করে আপনার প্রাকৃতিক দাঁতের দীর্ঘমেয়াদী সুস্থতা ও মার্জিত হাসির সুরক্ষাই আমাদের মূল নীতি।'
                : 'Conservative restorative dentistry planned with 3D precision, premium biomimetic materials, and relaxed chairside pacing.'
            }
          />

          {/* Filter Pills & View All Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start lg:self-end">
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#E7E2D8] border border-[#D5CEC2] rounded-xs">
              {[
                { id: 'all', labelEn: 'All Disciplines', labelBn: 'সকল সেবাসমূহ' },
                { id: 'cosmetic', labelEn: 'Smile & Aesthetics', labelBn: 'স্মাইল ডিজাইন' },
                { id: 'restorative', labelEn: 'Implants & Surgery', labelBn: 'ইমপ্লান্ট ও সার্জারি' },
                { id: 'family', labelEn: 'Preventive & Family', labelBn: 'প্রতিরোধ ও পরিবার' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-2xs transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? 'bg-[#29483F] text-[#FCFBF8] shadow-xs font-semibold'
                      : 'text-[#777D77] hover:text-[#29483F] hover:bg-[#F6F3EC]'
                  }`}
                >
                  {isBn ? f.labelBn : f.labelEn}
                </button>
              ))}
            </div>

            <Link
              to="/services"
              className="text-xs font-semibold uppercase tracking-wider text-[#29483F] hover:text-[#B49A6A] flex items-center gap-1.5 transition-colors pl-2 sm:border-l sm:border-[#D5CEC2]"
            >
              <span>{isBn ? 'সম্পূর্ণ গাইড' : 'View All Protocols'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B49A6A]" />
            </Link>
          </div>
        </div>

        {/* 1. Flagship Signature Spotlight: Bespoke Smile Design */}
        {activeFilter === 'all' && (
          <div className="mb-14 p-6 sm:p-10 lg:p-12 rounded-xs bg-[#FCFBF8] border border-[#E7E2D8] hover:border-[#B49A6A] shadow-sm transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#B49A6A] bg-[#F6F3EC] px-2.5 py-1 rounded-2xs border border-[#E7E2D8]">
                    SIGNATURE FLAGSHIP PROTOCOL
                  </span>
                  <span className="text-xs text-[#777D77]">#01</span>
                </div>

                <h3 className="font-serif-atelier text-2xl sm:text-3xl lg:text-4xl font-medium text-[#29483F] mb-4 leading-tight">
                  {isBn ? featuredService.titleBn : featuredService.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#777D77] leading-relaxed mb-6 font-light">
                  {isBn ? featuredService.summaryBn : featuredService.summaryEn}
                </p>

                {/* 3 Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {(isBn ? featuredService.keyBenefitsBn : featuredService.keyBenefitsEn).map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#343A36]">
                      <CheckCircle2 className="w-4 h-4 text-[#29483F] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#E7E2D8]">
                  <button
                    onClick={() => onOpenBookingForService(featuredService.id)}
                    className="px-6 py-3 bg-[#29483F] hover:bg-[#1E3730] text-[#FCFBF8] text-xs font-semibold uppercase tracking-wider rounded-2xs transition-all shadow-xs cursor-pointer flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#B49A6A]" />
                    <span>{isBn ? 'পরামর্শ বুক করুন' : 'Reserve Diagnostic Session'}</span>
                  </button>

                  <button
                    onClick={() => onSelectService(featuredService)}
                    className="px-5 py-3 bg-[#F6F3EC] hover:bg-[#E7E2D8] text-[#29483F] border border-[#E7E2D8] text-xs font-medium uppercase tracking-wider rounded-2xs transition-all cursor-pointer"
                  >
                    {isBn ? 'ধাপগুলো দেখুন' : 'View Workflow'}
                  </button>

                  <Link
                    to={`/services/${featuredService.id}`}
                    className="text-xs font-semibold text-[#777D77] hover:text-[#29483F] flex items-center gap-1 transition-colors"
                  >
                    <span>{isBn ? 'বিস্তারিত রোগীর গাইড' : 'Detailed Protocol Guide'}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#B49A6A]" />
                  </Link>
                </div>
              </div>

              {/* Right Column Image Representation */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-xs overflow-hidden border border-[#E7E2D8] aspect-4/3 sm:aspect-16/11 shadow-sm bg-[#E7E2D8]">
                  <StudioImage
                    src={serviceImages[featuredService.id]}
                    alt={featuredService.titleEn}
                    aspectRatio="aspect-4/3"
                    category={featuredService.id}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-3 left-3 bg-[#29483F]/90 backdrop-blur-xs text-[#FCFBF8] px-3 py-1.5 rounded-2xs text-[10px] tracking-wider uppercase font-mono border border-[#E7E2D8]/20 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#B49A6A]" />
                  <span>{isBn ? featuredService.durationBn : featuredService.durationEn}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Grid of Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FCFBF8] border border-[#E7E2D8] hover:border-[#B49A6A] rounded-xs p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Image Thumbnail Frame */}
                <div className="rounded-2xs overflow-hidden aspect-16/9 mb-5 border border-[#E7E2D8] relative bg-[#E7E2D8]">
                  <StudioImage
                    src={serviceImages[service.id]}
                    alt={service.titleEn}
                    aspectRatio="aspect-16/9"
                    category={service.id}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#29483F]/90 text-[#FCFBF8] px-2 py-0.5 rounded-2xs text-[10px] font-mono tracking-wider">
                    #{service.number}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#B49A6A] bg-[#F6F3EC] px-2 py-0.5 rounded-2xs border border-[#E7E2D8]">
                    {isBn ? service.categoryBn : service.categoryEn}
                  </span>
                  <span className="text-[11px] text-[#777D77] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A5B5A5]" />
                    <span>{isBn ? service.durationBn : service.durationEn}</span>
                  </span>
                </div>

                <h3 className="font-serif-atelier text-xl font-medium text-[#29483F] mb-2 leading-snug group-hover:text-[#1E3730] transition-colors">
                  {isBn ? service.titleBn : service.titleEn}
                </h3>

                <p className="text-xs text-[#777D77] font-light leading-relaxed mb-5 line-clamp-3">
                  {isBn ? service.summaryBn : service.summaryEn}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#E7E2D8] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#29483F] group-hover:text-[#B49A6A] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{isBn ? 'চিকিৎসা ধাপসমূহ' : 'View Workflow'}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#B49A6A]" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBookingForService(service.id)}
                  className="text-xs font-medium text-[#777D77] hover:text-[#29483F] transition-colors cursor-pointer"
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
