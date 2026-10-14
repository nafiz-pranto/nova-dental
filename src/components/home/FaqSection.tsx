import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { SectionHeading } from '../ui/SectionHeading';
import { Plus, Minus, HelpCircle, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

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
    if (categoryFilter === 'cost') return faq.id === 'hidden-costs';
    if (categoryFilter === 'safety') return faq.id === 'hygiene';
    return true;
  });

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#E7E2D8] border-b border-[#D5CEC2] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionHeading
            align="center"
            eyebrow={isBn ? 'স্বচ্ছ তথ্য ও মানসিক শান্তি' : 'Practical Clarity & Reassurance'}
            title={isBn ? 'রোগীদের সচরাচর জিজ্ঞাসিত প্রশ্নাবলি' : 'Frequently Clarified Questions'}
            subtitle={
              isBn
                ? 'আপনার যেকোনো দ্বিধা বা সংশয় দূর করতে আমরা আন্তরিক। স্বচ্ছ তথ্যই একটি দীর্ঘমেয়াদী আস্থার ভিত্তি।'
                : 'Clear, compassionate answers regarding procedural comfort, infection control standards, and fee transparency.'
            }
          />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs uppercase tracking-wider transition-all cursor-pointer ${
                categoryFilter === cat.id
                  ? 'bg-[#29483F] text-[#FCFBF8] shadow-xs'
                  : 'bg-[#FCFBF8] text-[#777D77] hover:text-[#29483F] border border-[#E7E2D8]'
              }`}
            >
              {isBn ? cat.labelBn : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#FCFBF8] border transition-all duration-200 rounded-xs overflow-hidden shadow-2xs ${
                  isOpen ? 'border-[#B49A6A]' : 'border-[#E7E2D8] hover:border-[#D5CEC2]'
                }`}
              >
                <button
                  id={`home-faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F6F3EC] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-panel-${faq.id}`}
                >
                  <span className="font-serif-atelier text-base sm:text-lg font-medium text-[#29483F] leading-snug">
                    {isBn ? faq.questionBn : faq.questionEn}
                  </span>
                  <div className={`w-8 h-8 rounded-xs flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#29483F] text-[#B49A6A]' : 'bg-[#E7E2D8] text-[#29483F]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`home-faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`home-faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#343A36] leading-relaxed font-light border-t border-[#E7E2D8] bg-[#FCFBF8] animate-in fade-in duration-200"
                  >
                    <p className="mb-3">{isBn ? faq.answerBn : faq.answerEn}</p>
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#777D77]">
                      <Sparkles className="w-3.5 h-3.5 text-[#B49A6A]" />
                      <span>{isBn ? 'ক্লিনিক্যাল স্বচ্ছতা নিশ্চিত' : 'Direct Clinical Consultation Available'}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Inquire Link */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#777D77]">
            {isBn ? 'আপনার কোনো ব্যক্তিগত প্রশ্ন বা উদ্বেগ আছে?' : 'Have a specific clinical inquiry or prior treatment anxiety?'}{' '}
            <a href="#contact" className="font-semibold text-[#29483F] hover:text-[#B49A6A] underline decoration-[#B49A6A]">
              {isBn ? 'আমাদের সাথে সরাসরি কথা বলুন' : 'Ask our team directly'}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
