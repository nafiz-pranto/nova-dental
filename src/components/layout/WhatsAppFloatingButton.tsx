import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { MessageCircle, X, Info } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const { isBn } = useLanguage();
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  const isReal = CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber;
  const whatsappUrl = isReal 
    ? `https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}?text=${encodeURIComponent(isBn ? 'নমস্কার, আমি নোভা ডেন্টাল স্টুডিওতে একটি পরামর্শের জন্য যোগাযোগ করতে চাই।' : 'Hello, I would like to inquire about a dental consultation at NOVA Dental Studio.')}` 
    : undefined;

  const handleClick = (e: React.MouseEvent) => {
    if (!isReal) {
      e.preventDefault();
      setShowDemoNotice(true);
    }
  };

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-30 flex flex-col items-end pointer-events-auto">
      {/* Demo Notification Popover if clicked without real configured number */}
      {showDemoNotice && (
        <div className="mb-3 max-w-xs bg-[#FFFFFF] text-[#263746] p-3.5 rounded-xl border border-[#A9C0D0] shadow-2xl text-xs animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-[#365469] font-bold text-xs">
              <Info className="w-3.5 h-3.5 text-[#65869C]" />
              <span>{isBn ? 'হোয়াটসঅ্যাপ সংযোগ বিজ্ঞপ্তি' : 'WhatsApp Integration Note'}</span>
            </div>
            <button
              onClick={() => setShowDemoNotice(false)}
              className="text-[#627482] hover:text-[#263746] p-0.5 cursor-pointer"
              aria-label="Close notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#627482] leading-relaxed">
            {isBn ? CLINIC_CONFIG.brand.demoWhatsAppNoticeBn : CLINIC_CONFIG.brand.demoWhatsAppNoticeEn}
          </p>
        </div>
      )}

      {/* Button */}
      <div className="flex items-center group">
        <div className="hidden sm:block mr-3 px-3 py-1.5 bg-[#FFFFFF] text-[#263746] text-xs font-medium rounded-lg shadow-md border border-[#D7E3EB] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <span className="font-bold text-[#365469]">
            {isReal ? 'WhatsApp: ' : (isBn ? 'হোয়াটসঅ্যাপ (ডেমো): ' : 'WhatsApp (Demo): ')}
          </span>
          {isBn ? 'সরাসরি প্রশ্ন বা পরামর্শ' : 'Direct Patient Inquiry'}
        </div>

        {isReal ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp inquiry"
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#365469] text-[#FFFFFF] border border-[#65869C]/50 flex items-center justify-center shadow-lg hover:bg-[#284051] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6 text-[#FFFFFF]" />
          </a>
        ) : (
          <button
            type="button"
            onClick={handleClick}
            aria-label="Demonstration WhatsApp inquiry"
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#365469] text-[#FFFFFF] border border-[#65869C]/50 flex items-center justify-center shadow-lg hover:bg-[#284051] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 text-[#FFFFFF]" />
          </button>
        )}
      </div>
    </aside>
  );
};
