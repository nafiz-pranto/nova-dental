import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, Link } from '../context/RouterContext';
import { CLINIC_CONFIG } from '../config/clinicData';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { RouteSeo } from '../components/seo/RouteSeo';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  FileText,
  AlertCircle
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
  const { isBn } = useLanguage();
  const { navigate } = useRouter();

  const service = CLINIC_CONFIG.services.find((s) => s.id === serviceId) || CLINIC_CONFIG.services[0];

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <RouteSeo
        titleEn={`${service.titleEn} Protocol & Patient Guide | NOVA Dental Studio`}
        titleBn={`${service.titleBn} পদ্ধতি ও রোগীর গাইড | নোভা ডেন্টাল স্টুডিও`}
        descriptionEn={`Clinical overview of ${service.titleEn} in Banani, Dhaka. Understand candidacy, treatment workflow, questions to ask, and scheduling.`}
        descriptionBn={`বনানী, ঢাকায় ${service.titleBn} সম্পর্কিত তথ্য, চিকিৎসার পর্যায়ক্রম, চিকিৎসকের সাথে পরামর্শের বিষয় ও অ্যাপয়েন্টমেন্ট প্রস্তুতি।`}
        canonicalPath={`/services/${service.id}`}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          'name': `${service.titleEn} (Sample Protocol Preview)`,
          'description': service.summaryEn,
          'bodyLocation': 'Mouth and Teeth',
          'followup': 'Follow-up consultation recommended per individualized plan',
          'howPerformed': service.processStepsEn.map((s) => `${s.stage}: ${s.title} - ${s.desc}`).join(' | '),
        }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          {
            labelEn: 'Treatments',
            labelBn: 'চিকিৎসাসমূহ',
            to: '/services',
          },
          {
            labelEn: service.titleEn,
            labelBn: service.titleBn,
          },
        ]}
        className="mb-8"
      />

      {/* Back to Treatments */}
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777D77] hover:text-[#29483F] mb-6 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5 text-[#B49A6A]" />
        <span>{isBn ? 'সকল চিকিৎসা তালিকায় ফিরে যান' : 'Back to All Procedures'}</span>
      </Link>

      {/* Hero Header */}
      <div className="border-b border-[#E7E2D8] pb-8 mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-serif-atelier text-[#B49A6A] font-light italic text-sm">
            #{service.number}
          </span>
          <Badge variant="sage">
            {isBn ? service.categoryBn : service.categoryEn}
          </Badge>
          <Badge variant="gold">
            {isBn ? service.tagBn : service.tagEn}
          </Badge>
        </div>

        <h1 className="font-serif-atelier text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29483F] mb-4 leading-tight">
          {isBn ? service.titleBn : service.titleEn}
        </h1>

        <p className="text-base sm:text-lg text-[#343A36] font-light leading-relaxed max-w-3xl mb-6">
          {isBn ? service.summaryBn : service.summaryEn}
        </p>

        {/* Quick Meta Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs text-xs">
          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#777D77] mb-0.5">
              {isBn ? 'চিকিৎসা সময়সীমা' : 'Treatment Pacing'}
            </span>
            <span className="font-medium text-[#29483F]">
              {isBn ? service.durationBn : service.durationEn}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#777D77] mb-0.5">
              {isBn ? 'পরামর্শ ও প্ল্যান' : 'Diagnostics Stage'}
            </span>
            <span className="font-medium text-[#29483F]">
              {isBn ? 'থ্রি-ডি ডিজিটাল স্ক্যান' : '3D Optical Scan'}
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#777D77] mb-0.5">
              {isBn ? 'খরচের স্বচ্ছতা' : 'Fee Transparency'}
            </span>
            <span className="font-medium text-[#29483F]">
              {isBn ? 'লিখিত খরচের বিবরণ' : 'Itemized written plan'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Details & Process Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          {/* Detailed Clinical Narrative */}
          <div>
            <h2 className="font-serif-atelier text-2xl font-normal text-[#29483F] mb-4">
              {isBn ? 'চিকিৎসা পদ্ধতি ও আমাদের দর্শন' : 'Clinical Overview & Preservative Approach'}
            </h2>
            <p className="text-sm text-[#343A36] leading-relaxed font-light mb-6">
              {isBn ? service.detailBn : service.detailEn}
            </p>

            {/* Key Advantages */}
            <div className="p-6 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#777D77]">
                {isBn ? 'মূল ক্লিনিক্যাল সুবিধাসমূহ' : 'Key Clinical Advantages'}
              </h3>
              <ul className="space-y-2.5">
                {(isBn ? service.keyBenefitsBn : service.keyBenefitsEn).map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#343A36]">
                    <CheckCircle2 className="w-4 h-4 text-[#29483F] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Step-by-Step Workflow Process */}
          <div>
            <h2 className="font-serif-atelier text-2xl font-normal text-[#29483F] mb-2">
              {isBn ? 'চিকিৎসার পর্যায়ক্রমিক ধাপ' : 'Procedural Workflow Stages'}
            </h2>
            <p className="text-xs text-[#777D77] mb-6 font-light">
              {isBn
                ? 'আমরা প্রতিটি ধাপের পূর্বে আপনাকে বিস্তারিত অবহিত করি যাতে কোনো বিভ্রান্তি না থাকে।'
                : 'Every phase is paced with patient consent and transparent review before advancing.'}
            </p>

            <div className="space-y-4">
              {(isBn ? service.processStepsBn : service.processStepsEn).map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-2xs bg-[#29483F] text-[#FCFBF8] flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                    {step.stage}
                  </div>
                  <div>
                    <h3 className="font-serif-atelier text-base font-medium text-[#29483F] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#777D77] leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Candidacy & Consultation Guide */}
          <div>
            <h2 className="font-serif-atelier text-2xl font-normal text-[#29483F] mb-3">
              {isBn ? 'এই চিকিৎসা কাদের জন্য উপযুক্ত?' : 'Who is this procedure designed for?'}
            </h2>
            <div className="p-5 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs text-xs text-[#343A36] leading-relaxed font-light">
              <p className="mb-2">
                {isBn
                  ? 'আমরা বিশ্বাস করি কোনো রোগীকেই অপ্রয়োজনীয় চিকিৎসায় অন্তর্ভুক্ত করা উচিত নয়। প্রথম পরামর্শের সময় থ্রি-ডি ইমেজিং এবং সরাসরি ওরাল এক্সামিনেশনের মাধ্যমে নিশ্চিত করা হয় এটি আপনার দীর্ঘমেয়াদী দাঁতের স্বাস্থ্যের অনুকূল কি না।'
                  : 'We strictly follow conservative guidelines: no unnecessary enamel removal, no aggressive over-treatment. Candidacy is determined collaboratively after your 3D optical diagnostic preview.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Schedule Action & Assurance */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-7 bg-[#FCFBF8] border border-[#E7E2D8] rounded-xs shadow-md sticky top-28">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B49A6A] font-bold block mb-1">
              RESERVE YOUR VISIT
            </span>
            <h3 className="font-serif-atelier text-xl font-medium text-[#29483F] mb-3">
              {isBn ? 'পরামর্শ সেশন নির্ধারণ করুন' : 'Schedule Discovery'}
            </h3>
            <p className="text-xs text-[#777D77] mb-6 leading-relaxed font-light">
              {isBn
                ? 'বনানী ১১ স্টুডিওতে আপনার জন্য নিরিবিলি ১-অন-১ সময় বরাদ্দ থাকবে।'
                : 'Dedicated one-on-one time with a clinician to discuss your goals.'}
            </p>

            <Button
              variant="primary"
              size="md"
              className="w-full mb-3 justify-center"
              onClick={() => navigate(`/appointment?service=${service.id}`)}
            >
              {isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Request Consultation'}
            </Button>

            <Link
              to="/contact"
              className="block text-center text-xs text-[#777D77] hover:text-[#29483F] py-2 transition-colors font-medium"
            >
              {isBn ? 'ক্লিনিকের ঠিকানা ও গুগল ম্যাপ' : 'View Banani Studio Location'}
            </Link>

            <div className="mt-6 pt-5 border-t border-[#E7E2D8] space-y-3 text-xs text-[#777D77]">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <span>{isBn ? 'ক্লাস-বি ভ্যাকুয়াম অটোক্লেভ সুরক্ষা' : 'Class-B European Sterilization'}</span>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#B49A6A] shrink-0 mt-0.5" />
                <span>{isBn ? 'চিকিৎসা শুরুর পূর্বেই লিখিত প্ল্যান' : 'Itemized written estimate upfront'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
