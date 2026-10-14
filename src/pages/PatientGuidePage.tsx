import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { CLINIC_CONFIG } from '../config/clinicData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RouteSeo } from '../components/seo/RouteSeo';
import { Button } from '../components/ui/Button';
import { 
  ShieldCheck, 
  Clock, 
  FileText, 
  HelpCircle, 
  Plus, 
  Minus, 
  Calendar, 
  MessageCircle, 
  CheckCircle2, 
  Heart,
  Car
} from 'lucide-react';

export const PatientGuidePage: React.FC = () => {
  const { isBn } = useLanguage();
  const { navigate } = useRouter();
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('all');
  const [expandedFaqId, setExpandedFaqId] = useState<string>('anxiety');

  const filteredFaqs = CLINIC_CONFIG.faqs.filter((faq) => {
    if (activeFaqCategory === 'all') return true;
    return faq.category === activeFaqCategory;
  });

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <RouteSeo
        titleEn="Patient Guide & Practice FAQs | NOVA Dental Studio"
        titleBn="রোগীর গাইড ও সাধারণ জিজ্ঞাসা | নোভা ডেন্টাল স্টুডিও"
        descriptionEn="Prepare for your dental appointment in Banani. Complete guidance on patient comfort, upfront fee transparency, and sterilization."
        descriptionBn="আপনার ডেন্টাল ভিজিটের প্রস্তুতি গাইড। চিকিৎসাভীতি ব্যবস্থাপনা, খরচের স্বচ্ছতা এবং ইউরোপীয় ক্লাস-বি স্টেরিলাইজেশন প্রটোকল।"
        canonicalPath="/patient-guide"
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': CLINIC_CONFIG.faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.questionEn,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answerEn,
            },
          })),
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          {
            labelEn: 'Patient Guide & FAQs',
            labelBn: 'রোগীর গাইড ও সাধারণ জিজ্ঞাসা',
          },
        ]}
        className="mb-8"
      />

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#777D77] mb-3">
          {isBn ? 'নির্ঝঞ্ঝাট ও আরামদায়ক সেবা নির্দেশিকা' : 'Patient Experience & Practice Guide'}
        </p>

        <h1 className="font-serif-atelier text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29483F] tracking-tight leading-tight mb-4 text-balance">
          {isBn
            ? 'আপনার অ্যাপয়েন্টমেন্টের প্রস্তুতি ও প্রয়োজনীয় তথ্য'
            : 'Everything You Need to Know Before Your Visit'}
        </h1>

        <p className="text-base text-[#343A36] font-light leading-relaxed">
          {isBn
            ? 'আমরা জানি একটি ডেন্টাল ভিজিট অনেকের কাছেই ভীতি বা সংশয়ের কারণ হতে পারে। আমাদের প্রক্রিয়া এমনভাবে সাজানো যাতে আপনি শুরু থেকেই সম্পূর্ণ নিরাপদ ও স্বস্তিবোধ করেন।'
            : 'We design every appointment to remove procedural friction. Here is our practical overview of patient comfort protocols, cost transparency, and visit preparation.'}
        </p>
      </div>

      {/* Three Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs shadow-2xs">
          <div className="w-10 h-10 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center mb-4">
            <Heart className="w-5 h-5" />
          </div>
          <h2 className="font-serif-atelier text-lg font-medium text-[#29483F] mb-2">
            {isBn ? 'ভীতিহীন শান্ত পরিবেশ' : 'Zero-Anxiety Environment'}
          </h2>
          <p className="text-xs text-[#777D77] leading-relaxed font-light">
            {isBn
              ? 'ব্যথাহীন অ্যানেস্থেসিয়া, নয়েজ ক্যানসেলিং হেডফোন এবং যেকোনো সময় হাত তুলে কাজ থামানোর নিশ্চয়তা।'
              : 'Computerized gentle delivery, private suites, and an unconditional "Raise-Hand Pause" guarantee.'}
          </p>
        </div>

        <div className="p-6 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs shadow-2xs">
          <div className="w-10 h-10 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <h2 className="font-serif-atelier text-lg font-medium text-[#29483F] mb-2">
            {isBn ? 'লিখিত খরচের বিবরণ' : 'Upfront Fee Transparency'}
          </h2>
          <p className="text-xs text-[#777D77] leading-relaxed font-light">
            {isBn
              ? 'চিকিৎসা শুরুর পূর্বেই সব ধাপ এবং নির্দিষ্ট খরচের লিখিত বিবরণ প্রদান করা হয়। কোনো লুকানো চার্জ নেই।'
              : 'No surprises or hidden fees. You receive a clear, itemized written treatment plan before any care begins.'}
          </p>
        </div>

        <div className="p-6 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs shadow-2xs">
          <div className="w-10 h-10 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="font-serif-atelier text-lg font-medium text-[#29483F] mb-2">
            {isBn ? 'ক্লাস-বি স্টেরিলাইজেশন' : 'European Class-B Sterilization'}
          </h2>
          <p className="text-xs text-[#777D77] leading-relaxed font-light">
            {isBn
              ? 'ইউরোপীয় ইএন ১৩০৬০ মানদণ্ডে ৩-পালস ভ্যাকুয়াম অটোক্লেভে প্রতিটি ইনস্ট্রুমেন্ট সিলড প্যাকেটে জীবাণুমুক্ত।'
              : 'EN 13060 fractional vacuum autoclaving with individual chemical indicators on every instrument tray.'}
          </p>
        </div>
      </div>

      {/* Practical Visit Checklist */}
      <div className="p-8 bg-[#E7E2D8] border border-[#D5CEC2] rounded-xs mb-16">
        <h2 className="font-serif-atelier text-2xl font-normal text-[#29483F] mb-4">
          {isBn ? 'প্রথম ভিজিটের জন্য কিছু প্রস্তুতি' : 'How to Prepare for Your Discovery Consultation'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#343A36]">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#29483F] shrink-0 mt-0.5" />
            <span>
              {isBn
                ? 'পূর্বে কোনো এক্স-রে বা রিপোর্ট থাকলে সাথে আনতে পারেন (না থাকলেও আমাদের আধুনিক স্ক্যানার রয়েছে)'
                : 'Bring any recent radiographs or dental histories if available (or we can capture digital 3D scans)'}
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#29483F] shrink-0 mt-0.5" />
            <span>
              {isBn
                ? 'সময়মতো উপস্থিত হলে আমরা আপনাকে নিরিবিলি ব্যক্তিগত পরামর্শের সম্পূর্ণ সময় দিতে পারি'
                : 'Arrive 10 minutes early to enjoy unhurried tea or coffee in our private reception suite'}
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#29483F] shrink-0 mt-0.5" />
            <span>
              {isBn
                ? 'কোনো চিকিৎসা বাধ্যবাধকতা নেই—প্রথম সেশনটি মূলত আপনার মতামত ও লক্ষ্য বোঝার জন্য'
                : 'Zero immediate procedure obligation—the first appointment is purely for diagnostic understanding'}
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#29483F] shrink-0 mt-0.5" />
            <span>
              {isBn
                ? 'যেকোনো ওষুধ বা শারীরিক সংবেদনশীলতার তথ্য নির্দ্বিধায় চিকিৎসকের সাথে শেয়ার করুন'
                : 'Inform us freely about any dental anxiety, medical conditions, or medication allergies'}
            </span>
          </div>
        </div>
      </div>

      {/* Full FAQ Section */}
      <div className="mb-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E7E2D8] mb-8 gap-4">
          <div>
            <h2 className="font-serif-atelier text-2xl font-normal text-[#29483F]">
              {isBn ? 'সাধারণ জিজ্ঞাসা ও উত্তর' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-xs text-[#777D77] font-light">
              {isBn ? 'রোগীদের সবচেয়ে গুরুত্বপূর্ণ প্রশ্নসমূহের স্পষ্ট উত্তর' : 'Honest clarification regarding procedures, timing, and policies'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', labelEn: 'All', labelBn: 'সব' },
              { id: 'comfort', labelEn: 'Comfort', labelBn: 'আরাম' },
              { id: 'pricing', labelEn: 'Cost & Fees', labelBn: 'খরচ' },
              { id: 'hygiene', labelEn: 'Sterilization', labelBn: 'সুরক্ষা' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFaqCategory(f.id)}
                className={`px-3 py-1 rounded-xs text-xs font-medium transition-all cursor-pointer ${
                  activeFaqCategory === f.id
                    ? 'bg-[#29483F] text-[#FCFBF8] font-bold shadow-xs'
                    : 'bg-[#FCFBF8] text-[#777D77] hover:text-[#29483F] border border-[#E7E2D8]'
                }`}
              >
                {isBn ? f.labelBn : f.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#FCFBF8] border rounded-xs transition-all overflow-hidden ${
                  isOpen ? 'border-[#B49A6A]' : 'border-[#E7E2D8] hover:border-[#D5CEC2]'
                }`}
              >
                <button
                  id={`guide-faq-btn-${faq.id}`}
                  onClick={() => setExpandedFaqId(isOpen ? '' : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F6F3EC] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`guide-faq-panel-${faq.id}`}
                >
                  <span className="font-serif-atelier text-base font-medium text-[#29483F]">
                    {isBn ? faq.questionBn : faq.questionEn}
                  </span>
                  <div className={`w-7 h-7 rounded-xs flex items-center justify-center shrink-0 ${
                    isOpen ? 'bg-[#29483F] text-[#B49A6A]' : 'bg-[#E7E2D8] text-[#29483F]'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`guide-faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`guide-faq-btn-${faq.id}`}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#343A36] leading-relaxed font-light border-t border-[#E7E2D8] bg-[#FCFBF8] animate-in fade-in"
                  >
                    <p>{isBn ? faq.answerBn : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Scheduling Banner */}
      <div className="p-8 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <h3 className="font-serif-atelier text-xl font-normal text-[#29483F] mb-1">
            {isBn ? 'আপনার যেকোনো বিশেষ জিজ্ঞাসা আছে?' : 'Ready to Experience Unhurried Care?'}
          </h3>
          <p className="text-xs text-[#777D77] font-light">
            {isBn
              ? 'আমাদের ডেন্টাল কেয়ার কনসিয়ার্জের সাথে সরাসরি আলোচনা করতে পারেন।'
              : 'Schedule an introductory consultation at our Banani 11 studio.'}
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => navigate('/appointment')}
          className="shrink-0"
        >
          {isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Request Consultation'}
        </Button>
      </div>
    </div>
  );
};
