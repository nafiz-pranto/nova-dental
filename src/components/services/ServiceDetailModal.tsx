import React from 'react';
import { ServiceItem } from '../../types/clinic';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { X, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface Props {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<Props> = ({ service, onClose, onBookService }) => {
  const { isBn } = useLanguage();

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#263746]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FFFFFF] rounded-2xl border border-[#D7E3EB] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#365469] text-[#FFFFFF] px-6 py-5 flex items-start justify-between border-b border-[#65869C]/40">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif-atelier text-[#A9C0D0] font-bold text-sm">
                #{service.number}
              </span>
              <Badge variant="blue">
                {isBn ? service.categoryBn : service.categoryEn}
              </Badge>
              <Badge variant="subtle">
                {isBn ? service.tagBn : service.tagEn}
              </Badge>
            </div>
            <h3 className="font-serif-atelier text-xl sm:text-2xl font-bold text-[#FFFFFF] leading-snug">
              {isBn ? service.titleBn : service.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#E4EEF5] hover:text-[#FFFFFF] p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#65869C] mb-2">
              {isBn ? 'চিকিৎসা পরিচিতি ও দর্শন' : 'Clinical Overview'}
            </h4>
            <p className="text-sm text-[#263746] leading-relaxed">
              {isBn ? service.detailBn : service.detailEn}
            </p>
          </div>

          {/* Time Pacing Banner */}
          <div className="p-4 bg-[#E4EEF5] border border-[#D7E3EB] rounded-xl flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#365469] shrink-0" />
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#65869C]">
                {isBn ? 'প্রত্যাশিত সময় ও সেশন' : 'Treatment Pacing'}
              </span>
              <span className="text-xs text-[#263746] font-bold">
                {isBn ? service.durationBn : service.durationEn}
              </span>
            </div>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#65869C] mb-3">
              {isBn ? 'মূল চিকিৎসাগত সুবিধাসমূহ' : 'Key Clinical Advantages'}
            </h4>
            <ul className="space-y-2.5">
              {(isBn ? service.keyBenefitsBn : service.keyBenefitsEn).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#263746]">
                  <CheckCircle2 className="w-4 h-4 text-[#365469] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F7FAFC] border-t border-[#D7E3EB] flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={onClose}>
            {isBn ? 'ফিরে যান' : 'Back'}
          </Button>
          <Button
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4 text-[#A9C0D0]" />}
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
