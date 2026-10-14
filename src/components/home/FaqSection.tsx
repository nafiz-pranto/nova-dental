import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { isBn } = useLanguage();
  const [openId, setOpenId] = useState<string>('anxiety');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const categories = [
    { id: 'all', labelEn: 'All Questions', labelBn: 'সকল প্রশ্ন' },
    { id: 'comfort', labelEn: 'Comfort & Pain Relief', labelBn: 'ভীতি ও ব্যথাহীন চিকিৎসা' },
    { id: 'cost', labelEn: 'Pricing & Written Plans', labelBn: 'খরচ ও স্বচ্ছতা' },
    { id: 'safety', labelEn: 'Sterilization & Hygiene', labelBn: 'জীবাণুমুক্তকরণ ও সুরক্ষা' },
  ];

  const filteredFaqs = CLINIC_CONFIG.faqs.filter((faq) => {
    if (categoryFilter === 'all') return true;
    if (categoryFilter === 'comfort') return faq.id === 'anxiety' || faq.id === 'timing';
    if (categoryFilter === 'cost') return faq.id === 'hidden-costs' || faq.id === 'pricing';
    if (categoryFilter === 'safety') return faq.id === 'hygiene' || faq.id === 'sterilization';
    return true;
  });

  return (
    <section id="faq" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#E4EEF5] border-b border-[#D7E3EB] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionHeading
            align="center"
            eyebrow={isBn ? 'স্বচ্ছ তথ্য ও মানসিক শান্তি' : 'Practical Clarity & Reassurance'}
            title={isBn ? 'রোগীদের সচরাচর জিজ্ঞাসিত প্রশ্নাবলি' : 'Frequently Asked Questions'}
            subtitle={
              isBn
                ? 'আপনার যেকোনো দ্বিধা বা সংশয় দূর করতে আমরা আন্তরিক। স্বচ্ছ তথ্যই একটি দীর্ঘমেয়াদী আস্থার ভিত্তি।'
                : 'Clear, compassionate answers regarding procedural comfort, infection control standards, and fee transparency.'
            }
          />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                categoryFilter === cat.id
                  ? 'bg-[#365469] text-[#FFFFFF] shadow-2xs font-bold'
                  : 'bg-[#FFFFFF] text-[#627482] hover:text-[#263746] border border-[#D7E3EB]'
              }`}
            >
              {isBn ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#FFFFFF] border transition-all duration-200 rounded-xl overflow-hidden shadow-2xs ${
                  isOpen ? 'border-[#65869C]' : 'border-[#D7E3EB] hover:border-[#A9C0D0]'
                }`}
              >
                <button
                  id={`home-faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#F7FAFC] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-panel-${faq.id}`}
                >
                  <span className="font-serif-atelier text-base sm:text-lg font-bold text-[#263746] leading-snug">
                    {isBn ? faq.questionBn : faq.questionEn}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#365469] text-[#FFFFFF]' : 'bg-[#E4EEF5] text-[#365469]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`home-faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`home-faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm text-[#263746] leading-relaxed border-t border-[#D7E3EB] bg-[#FFFFFF] animate-in fade-in duration-200"
                  >
                    <p className="mb-3">{isBn ? faq.answerBn : faq.answerEn}</p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#65869C]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isBn ? 'নোভা ক্লিনিক্যাল কেয়ার প্রোটোকল' : 'NOVA Clinical Care Protocol'}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
