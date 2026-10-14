export type Language = 'en' | 'bn';

export interface ServiceProcessStep {
  stage: string;
  title: string;
  desc: string;
}

export interface ServiceDetailFaq {
  q: string;
  a: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  summaryEn: string;
  summaryBn: string;
  detailEn: string;
  detailBn: string;
  tagEn: string;
  tagBn: string;
  durationEn: string;
  durationBn: string;
  keyBenefitsEn: string[];
  keyBenefitsBn: string[];
  candidacyEn: string[];
  candidacyBn: string[];
  processStepsEn: ServiceProcessStep[];
  processStepsBn: ServiceProcessStep[];
  questionsToAskEn: string[];
  questionsToAskBn: string[];
  serviceFaqsEn: ServiceDetailFaq[];
  serviceFaqsBn: ServiceDetailFaq[];
}

export interface DoctorProfile {
  id: string;
  nameEn: string;
  nameBn: string;
  titleEn: string;
  titleBn: string;
  roleEn: string;
  roleBn: string;
  qualificationsEn: string;
  qualificationsBn: string;
  bioEn: string;
  bioBn: string;
  quoteEn: string;
  quoteBn: string;
  isDemoSample: boolean;
  image: string;
}

export interface JourneyStep {
  step: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  durationEn: string;
  durationBn: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionBn: string;
  answerEn: string;
  answerBn: string;
  category: 'general' | 'comfort' | 'pricing' | 'sterilization';
}

export interface TrustItem {
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  badgeEn: string;
  badgeBn: string;
}
