import React from 'react';
import { ServiceItem } from '../../types/clinic';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { X, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';

interface Props {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<Props> = ({ service, onClose, onBookService }) => {
  const { isBn } = useLanguage();

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#29483F]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FCFBF8] rounded-sm border border-[#E7E2D8] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#29483F] text-[#FCFBF8] px-6 py-5 flex items-start justify-between border-b border-[#34584E]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif-atelier text-[#B49A6A] font-light italic text-sm">
                #{service.number}
              </span>
              <Badge variant="dark">
                {isBn ? service.categoryBn : service.categoryEn}
              </Badge>
              <Badge variant="gold">
                {isBn ? service.tagBn : service.tagEn}
              </Badge>
            </div>
            <h3 className="font-serif-atelier text-xl sm:text-2xl font-normal text-[#FCFBF8] leading-snug">
              {isBn ? service.titleBn : service.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#A5B5A5] hover:text-[#FCFBF8] p-1 rounded-sm transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#777D77] mb-2">
              {isBn ? 'চিকিৎসা পরিচিতি ও দর্শন' : 'Clinical Overview'}
            </h4>
            <p className="text-sm text-[#343A36] leading-relaxed font-light">
              {isBn ? service.detailBn : service.detailEn}
            </p>
          </div>

          {/* Time Pacing Banner */}
          <div className="p-4 bg-[#F6F3EC] border border-[#E7E2D8] rounded-sm flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#B49A6A] shrink-0" />
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#777D77]">
                {isBn ? 'প্রত্যাশিত সময় ও সেশন' : 'Treatment Pacing'}
              </span>
              <span className="text-xs text-[#29483F] font-medium">
                {isBn ? service.durationBn : service.durationEn}
              </span>
            </div>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#777D77] mb-3">
              {isBn ? 'মূল চিকিৎসাগত সুবিধাসমূহ' : 'Key Clinical Advantages'}
            </h4>
            <ul className="space-y-2.5">
              {(isBn ? service.keyBenefitsBn : service.keyBenefitsEn).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#343A36]">
                  <CheckCircle2 className="w-4 h-4 text-[#29483F] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F6F3EC] border-t border-[#E7E2D8] flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onClose}>
            {isBn ? 'ফিরে যান' : 'Back'}
          </Button>
          <Button
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4 text-[#B49A6A]" />}
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
          >
            {isBn ? 'অ্যাপয়েন্টমেন্ট বুক করুন' : 'Schedule for this Procedure'}
          </Button>
        </div>
      </div>
    </div>
  );
};
