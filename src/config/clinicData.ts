import { ServiceItem, DoctorProfile, JourneyStep, FaqItem, TrustItem } from '../types/clinic';

export const CLINIC_CONFIG = {
  isDemo: true,
  demoNoticeEn: 'DEMO PROTOTYPE: NOVA Dental Studio is an original concept designed for client presentations. Doctor credentials, address, and sample procedures are illustrative mockups.',
  demoNoticeBn: 'ডেমো প্রোটোটাইপ: নোভা ডেন্টাল স্টুডিও ক্লায়েন্ট প্রেজেন্টেশনের জন্য একটি মূল কনসেপ্ট। প্রদর্শিত চিকিৎসক তথ্য, ঠিকানা ও সেবাসমূহ নির্দেশনামূলক নমুনা।',

  brand: {
    nameEn: 'NOVA Dental Studio',
    nameBn: 'নোভা ডেন্টাল স্টুডিও',
    shortWordmark: 'NOVA',
    taglineEn: 'Restorative Care & Architectural Smile Design',
    taglineBn: 'আস্থার সাথে আধুনিক দন্ত্য চিকিৎসা ও স্মাইল ডিজাইন',
    subtextEn: 'Dhaka, Bangladesh',
    subtextBn: 'ঢাকা, বাংলাদেশ',
    // REAL INTEGRATION GUARDS:
    // When real clinic contact details are provided by the client, set these flags and numbers.
    // If false or null, the UI renders clear non-functional demo placeholders.
    isRealPhoneConfigured: false,
    isRealWhatsAppConfigured: false,
    configuredRealPhone: null as string | null, // E.g. '+8801712345678'
    configuredRealWhatsAppNumber: null as string | null, // E.g. '8801712345678'

    phoneDisplayEn: '+880 17XX-XXXXXX (Demo)',
    phoneDisplayBn: '+৮৮০ ১৭XX-XXXXXX (ডেমো)',
    whatsappDisplayEn: '+880 17XX-XXXXXX (Demo WhatsApp)',
    whatsappDisplayBn: '+৮৮০ ১৭XX-XXXXXX (ডেমো হোয়াটসঅ্যাপ)',
    demoPhoneNoticeEn: 'Demo placeholder: Phone dialing is inactive until a verified clinic number is configured in clinicData.ts.',
    demoPhoneNoticeBn: 'ডেমো বিজ্ঞপ্তি: ক্লিনিকের আসল নম্বর যুক্ত না করা পর্যন্ত সরাসরি কল সংযোগটি নিষ্ক্রিয় রাখা হয়েছে।',
    demoWhatsAppNoticeEn: 'Demo placeholder: WhatsApp chat is inactive until a verified clinic WhatsApp number is configured.',
    demoWhatsAppNoticeBn: 'ডেমো বিজ্ঞপ্তি: ক্লিনিকের আসল হোয়াটসঅ্যাপ নম্বর যুক্ত না করা পর্যন্ত এই চ্যাট সংযোগটি নিষ্ক্রিয় রাখা হয়েছে।',

    email: 'concierge@novadentaldhaka.com (demo)',
    addressEn: 'Level 4, House 42, Road 11, Block D, Banani, Dhaka 1213',
    addressBn: 'লেভেল ৪, হাউস ৪২, রোড ১১, ব্লক ডি, বনানী, ঢাকা ১২১৩',
    landmarkEn: 'Opposite Kemal Ataturk Avenue junction, dedicated basement parking available with lift access',
    landmarkBn: 'কামাল আতাতুর্ক অ্যাভিনিউ সংযোগস্থলের বিপরীতে, নিবেদিত বেসমেন্ট পার্কিং ও লিফট সুবিধা',
    mapDirectionsUrl: 'https://maps.google.com/?q=Road+11+Banani+Dhaka',
    hours: {
      weekdayEn: 'Saturday – Thursday: 10:00 AM – 8:30 PM',
      weekdayBn: 'শনিবার – বৃহস্পতিবার: সকাল ১০:০০ – রাত ৮:৩০',
      weekendEn: 'Friday: 3:00 PM – 8:30 PM (By prior appointment)',
      weekendBn: 'শুক্রবার: বিকাল ৩:০০ – রাত ৮:৩০ (পূর্বনির্ধারিত অ্যাপয়েন্টমেন্ট)',
    },
  },

  // Planned Backend Integration Touchpoints (Documented for post-onboarding development)
  integrations: {
    crmEndpoint: '/api/v1/appointments (REST endpoint for clinic scheduling software)',
    whatsappApi: 'https://api.whatsapp.com/send (Configured upon client mobile verification)',
    smsGateway: 'Scheduled via Bangladesh SMS provider (SSL Wireless / Greenweb / Infobip)',
  },

  demoDisclaimer: {
    formSuccessEn: 'Demo request recorded in this preview; no appointment has been booked and no message has been sent.',
    formSuccessBn: 'এই প্রিভিউতে ডেমো অনুরোধটি রেকর্ড করা হয়েছে; কোনো অ্যাপয়েন্টমেন্ট বুক করা হয়নি এবং কোনো বার্তা পাঠানো হয়নি।',
    privacyNoteEn: 'Privacy Notice: This preview operates strictly locally in your browser. Submitted demo data is not stored in any external database, nor transmitted to third parties.',
    privacyNoteBn: 'গোপনীয়তা বিজ্ঞপ্তি: এই ডেমো প্রিভিউটি শুধুমাত্র আপনার ব্রাউজারে চালিত হয়। আপনার প্রদান করা তথ্য কোনো বহিরাগত সার্ভার বা ডাটাবেজে সংরক্ষণ বা তৃতীয় পক্ষের কাছে পাঠানো হয় না।',
  },

  navigation: [
    { id: 'home', labelEn: 'Home', labelBn: 'হোম', path: '/' },
    { id: 'services', labelEn: 'Treatments', labelBn: 'চিকিৎসাসমূহ', path: '/services' },
    { id: 'team', labelEn: 'The Studio & Team', labelBn: 'ক্লিনিক ও চিকিৎসক', path: '/team' },
    { id: 'guide', labelEn: 'Patient Guide', labelBn: 'রোগীর গাইড', path: '/patient-guide' },
    { id: 'contact', labelEn: 'Contact & Location', labelBn: 'যোগাযোগ', path: '/contact' },
    { id: 'appointment', labelEn: 'Book Consultation', labelBn: 'অ্যাপয়েন্টমেন্ট', path: '/appointment' },
  ],

  hero: {
    eyebrowEn: 'Banani, Dhaka • Private Dental Clinic',
    eyebrowBn: 'বনানী, ঢাকা • প্রাইভেট ডেন্টাল ক্লিনিক',
    headlineEn: 'Advanced Technology Meets Gentle, Trusted Dental Care',
    headlineBn: 'আধুনিক প্রযুক্তিতে নির্ভরযোগ্য ও প্রশান্তিময় ডেন্টাল সেবা',
    subheadEn:
      'Comfortable, compassionate dental care for you and your family, guided by experienced dental professionals in a calm, modern environment.',
    subheadBn:
      'অভিজ্ঞ ডেন্টাল পেশাজীবীদের যত্নে আপনার ও আপনার পরিবারের জন্য আরামদায়ক ও যত্নশীল ডেন্টাল কেয়ার।',
    primaryCtaEn: 'Request an Appointment',
    primaryCtaBn: 'অ্যাপয়েন্টমেন্ট নির্ধারণ করুন',
    secondaryCtaEn: 'WhatsApp Inquiry',
    secondaryCtaBn: 'হোয়াটসঅ্যাপে যোগাযোগ',
  },

  trustPillars: [
    {
      titleEn: 'Class-B Vacuum Autoclaving',
      titleBn: 'ক্লাস-বি ভ্যাকুয়াম অটোক্লেভ',
      descEn: 'Individual vacuum-sealed instrument cassettes tested with physical & chemical micro-indicators.',
      descBn: 'প্রতিটি যন্ত্রাংশ ভ্যাকুয়াম-সিলযুক্ত প্যাকেটে আন্তর্জাতিক মান অনুযায়ী জীবাণুমুক্ত করা হয়।',
      badgeEn: 'Sterilization Standard',
      badgeBn: 'জীবাণুমুক্তকরণ মান',
    },
    {
      titleEn: '100% Single-Use Barriers',
      titleBn: 'একক ব্যবহারযোগ্য বায়ো-ব্যারিয়ার',
      descEn: 'Medical grade disposable covers on all clinical contact points, renewed before every patient.',
      descBn: 'প্রতিটি রোগীর জন্য চেয়ারের স্পর্শকাতর অংশে সম্পূর্ণ নতুন ডিসপোজেবল কভার ব্যবহার।',
      badgeEn: 'Cross-Infection Control',
      badgeBn: 'সংক্রমণ প্রতিরোধ',
    },
    {
      titleEn: 'Low-Dose Digital 3D Imaging',
      titleBn: 'ডিজিটাল লো-ডোজ থ্রি-ডি ইমেজিং',
      descEn: 'High-resolution diagnosis with minimal radiographic exposure and instant chairside review.',
      descBn: 'ন্যূনতম রেডিয়েশন ও উচ্চ রেজোলিউশনের ডিজিটাল ইমেজিংয়ে তাৎক্ষণিক রোগ নির্ণয়।',
      badgeEn: 'Diagnostic Precision',
      badgeBn: 'নিখুঁত পরীক্ষা',
    },
    {
      titleEn: 'Transparent Written Plan',
      titleBn: 'চিকিৎসার পূর্বেই স্পষ্ট লিখিত প্ল্যান',
      descEn: 'No unexpected surprises. Complete review of procedures, timeline, and fees prior to care.',
      descBn: 'কোনো গোপন খরচ নেই। চিকিৎসা শুরুর আগেই সম্পূর্ণ খরচ ও ধাপ বিস্তারিত জানানো হয়।',
      badgeEn: 'Fee Clarity',
      badgeBn: 'স্বচ্ছতা',
    },
  ] as TrustItem[],

  services: [
    {
      id: 'smile-design',
      number: '01',
      titleEn: 'Bespoke Smile Design & Ceramic Veneers',
      titleBn: 'ডিজিটাল স্মাইল ডিজাইন ও সিরামিক ভিনিয়ার্স',
      categoryEn: 'Aesthetic Dentistry',
      categoryBn: 'নান্দনিক রূপান্তর',
      summaryEn: 'Harmonious smile enhancement customized to facial balance using minimally invasive, ultra-thin porcelain.',
      summaryBn: 'মুখমণ্ডলের স্বাভাবিক সৌন্দর্যের সাথে সামঞ্জস্য রেখে প্রাকৃতিক দাঁত অক্ষুণ্ন রেখে নিখুঁত সিরামিক স্তর স্থাপন।',
      detailEn: 'Digital 3D facial mapping and trial smiles allow you to review planned proportions before any preparation begins. Our clinical philosophy focuses on maximal conservation of healthy enamel.',
      detailBn: 'কোনো প্রস্তুতিমূলক কাজের আগেই ডিজিটাল ৩ডি ফেসিয়াল ম্যাপিং ও ট্রায়াল স্মাইলের মাধ্যমে সম্ভাব্য পরিবর্তন দেখার সুযোগ। প্রাকৃতিক এনামেল সর্বোচ্চ সুরক্ষাই আমাদের মূল নীতি।',
      tagEn: 'Conservative Aesthetics',
      tagBn: 'স্বাভাবিক দাঁত সুরক্ষিত',
      durationEn: '2–3 Planned Visits',
      durationBn: '২–৩ টি নির্ধারিত ভিজিট',
      keyBenefitsEn: [
        'Digital diagnostic pre-visualization before treatment commitment',
        'Biomimetic ceramics matched to your skin tone and tooth translucency',
        'Conserves natural healthy tooth structure with microscopic precision',
      ],
      keyBenefitsBn: [
        'চিকিৎসা শুরুর পূর্বেই ডিজিটাল সিমুলেশনে ফলাফল দেখার সুবিধা',
        'ত্বক ও দাঁতের স্বাভাবিক রঙের সাথে সামঞ্জস্যপূর্ণ বায়োমিমেটিক সিরামিক',
        'মাইক্রোস্কোপিক নির্ভুলতায় প্রাকৃতিক দাঁত অক্ষুণ্ন রাখার প্রচেষ্টা',
      ],
      candidacyEn: [
        'Individuals with chipped, unevenly worn, or discolored enamel that resists professional whitening',
        'Patients desiring correction of minor tooth spacing without extensive orthodontic movement',
        'Those seeking a natural-looking aesthetic refinement rather than artificial uniformity',
      ],
      candidacyBn: [
        'যাঁদের দাঁতে হালকা ভাঙা, অসম ক্ষয় বা স্থায়ী দাগ রয়েছে যা সাধারণ স্কেলিংয়ে যায় না',
        'দাঁতের মধ্যবর্তী ফাঁকা স্থান প্রাকৃতিক উপায়ে সুন্দর করতে আগ্রহী রোগী',
        'অস্বাভাবিক সাদার বদলে যারা প্রাকৃতিক ও মার্জিত হাসির রূপান্তর পছন্দ করেন',
      ],
      processStepsEn: [
        {
          stage: 'Phase 01',
          title: 'Aesthetic Assessment & 3D Imaging',
          desc: 'High-resolution photography, digital optical scans, and relaxed conversation regarding your personal goals.',
        },
        {
          stage: 'Phase 02',
          title: 'Digital Simulation & Trial Smile',
          desc: 'A temporary wax or composite mock-up placed non-invasively so you can evaluate the look and speech in person.',
        },
        {
          stage: 'Phase 03',
          title: 'Micro-Preparation & Master Ceramic Bonding',
          desc: 'Conservative enamel shaping followed by adhesive placement of custom hand-crafted porcelain ceramics.',
        },
      ],
      processStepsBn: [
        {
          stage: 'ধাপ ০১',
          title: 'নান্দনিক মূল্যায়ন ও থ্রি-ডি স্ক্যান',
          desc: 'উচ্চ রেজোলিউশন ফটোগ্রাফি, ডিজিটাল অপটিক্যাল স্ক্যান ও আপনার ব্যক্তিগত পছন্দ নিয়ে বিস্তারিত আলোচনা।',
        },
        {
          stage: 'ধাপ ০২',
          title: 'ডিজিটাল সিমুলেশন ও ট্রায়াল স্মাইল',
          desc: 'দাঁত স্পর্শ না করেই একটি অস্থায়ী ট্রায়াল সেট বসিয়ে আপনার মুখমণ্ডলে হাসির রূপ ও কথা বলার স্বাচ্ছন্দ্য পরীক্ষা।',
        },
        {
          stage: 'ধাপ ০৩',
          title: 'নিখুঁত সিরামিক স্তর প্রতিস্থাপন',
          desc: 'সুক্ষ্ম এনামেল প্রিপারেশন এবং বিশেষায়িত সিরামিক ভিনিয়ার্স স্থায়ীভাবে দাঁতের সাথে যুক্ত করা।',
        },
      ],
      questionsToAskEn: [
        'How much of my natural tooth enamel needs minimal adjustment for my specific bite?',
        'What is the expected maintenance schedule and nightguard recommendation?',
        'Can I preview the provisional smile before the master ceramics are fired?',
        'Are there composite resin alternatives suitable for my clinical situation?',
      ],
      questionsToAskBn: [
        'আমার নির্দিষ্ট বাইটের জন্য প্রাকৃতিক এনামেল কতটা প্রস্তুত করতে হবে?',
        'দীর্ঘস্থায়ী সুরক্ষার জন্য কী ধরনের যত্ন বা নাইটগার্ড প্রয়োজন হতে পারে?',
        'চূড়ান্ত সিরামিক তৈরির পূর্বে অস্থায়ী অবস্থায় এটি দেখার সুযোগ আছে কি?',
        'আমার দাঁতের ক্ষেত্রে কম্পোজিট বিকল্প কোনো ভূমিকা রাখবে কি?',
      ],
      serviceFaqsEn: [
        {
          q: 'Does getting veneers feel painful during preparation?',
          a: 'Gentle localized anesthesia is applied to ensure complete comfort. Most patients report feeling only mild vibration during the preparatory visit.',
        },
        {
          q: 'How long do ceramic veneers typically last with diligent care?',
          a: 'High-grade laboratory-crafted ceramic veneers routinely last 10 to 15+ years when supported by routine dental cleanings and mindful night-time care.',
        },
      ],
      serviceFaqsBn: [
        {
          q: 'ভিনিয়ার্স লাগানোর সময় কোনো ব্যথা অনুভূত হয় কি?',
          a: 'চিকিৎসার সময় আধুনিক লোকাল অ্যানেস্থেসিয়া প্রয়োগ করা হয় যাতে রোগী সম্পূর্ণ ব্যথামুক্ত থাকেন। শুধুমাত্র মৃদু ভাইব্রেশন অনুভূত হতে পারে।',
        },
        {
          q: 'সঠিক যত্নে সিরামিক ভিনিয়ার্স কত বছর টেকসই থাকে?',
          a: 'নিয়মিত ব্রাশ, ফ্লসিং এবং বছরে দুইবার ওরাল চেকআপে রাখলে উচ্চমানের সিরামিক ভিনিয়ার্স ১০ থেকে ১৫ বছরেরও বেশি সময় স্থায়ী থাকে।',
        },
      ],
    },
    {
      id: 'dental-implants',
      number: '02',
      titleEn: 'Guided 3D Implantology & Restorations',
      titleBn: 'গাইডেড থ্রি-ডি ডেন্টাল ইমপ্লান্ট ও প্রতিস্থাপন',
      categoryEn: 'Surgical & Restorative',
      categoryBn: 'সার্জিক্যাল ও স্থায়ী সমাধান',
      summaryEn: 'Computer-guided permanent tooth replacement using bio-compatible titanium and zirconia foundations.',
      summaryBn: 'কম্পিউটার-গাইডেড নিখুঁত প্লেসমেন্ট ও আন্তর্জাতিক মানের বায়োকম্প্যাটিবল উপাদান দিয়ে হারানো দাঁতের স্থায়ী সমাধান।',
      detailEn: 'Digital 3D CBCT imaging enables virtual implant placement prior to the clinical appointment. This surgical precision minimizes gum disruption, preserves bone volume, and provides lifelike chewing function.',
      detailBn: 'সিবিসিটি থ্রি-ডি স্ক্যানিংয়ের মাধ্যমে চিকিৎসার পূর্বেই ভার্চুয়াল পরিকল্পনা করা হয়। ফলে কাটিং হয় অতি সামান্য, রক্তপাত কম হয় এবং প্রাকৃতিক দাঁতের মতোই আজীবন চিবানোর শক্তি পাওয়া যায়।',
      tagEn: 'Permanent Bio-Integration',
      tagBn: 'স্থায়ী ও টেকসই',
      durationEn: 'Phased Treatment',
      durationBn: 'পর্যায়ক্রমিক চিকিৎসা',
      keyBenefitsEn: [
        'Restores independent chewing stability without grinding down neighboring healthy teeth',
        'Stimulates jawbone biology to help prevent progressive facial bone resorption',
        'Zirconia and titanium foundations engineered for lifelong biological stability',
      ],
      keyBenefitsBn: [
        'পাশের সুস্থ দাঁত না কেটে সম্পূর্ণ স্বাধীনভাবে হারানো দাঁত প্রতিস্থাপন',
        'চোয়ালের হাড়ের প্রাকৃতিক ঘনত্ব বজায় রাখতে সাহায্য করে',
        'আন্তর্জাতিক মানের বায়োকম্প্যাটিবল উপাদান যা শরীরের সাথে শতভাগ মানানসই',
      ],
      candidacyEn: [
        'Patients who have lost one or more natural teeth due to trauma, decay, or periodontal issues',
        'Individuals dissatisfied with loose or uncomfortable removable acrylic dentures',
        'Adults with adequate jawbone density or those eligible for guided bone regeneration',
      ],
      candidacyBn: [
        'যাঁরা আঘাত, ক্ষয় বা মাড়ির সমস্যার কারণে এক বা একাধিক দাঁত হারিয়েছেন',
        'আলগা বা অস্বস্তিকর ডেনচারের ঝামেলা থেকে স্থায়ী মুক্তি পেতে আগ্রহী ব্যক্তি',
        'যাদের চোয়ালের হাড় উপযুক্ত রয়েছে অথবা সামান্য বোন গ্রাফটিংয়ের মাধ্যমে প্রস্তুত সম্ভব',
      ],
      processStepsEn: [
        {
          stage: 'Phase 01',
          title: '3D CBCT Diagnostic Assessment',
          desc: 'Precise measurement of bone depth, nerve anatomy, and adjacent root positions.',
        },
        {
          stage: 'Phase 02',
          title: 'Guided Computer-Assisted Placement',
          desc: 'A custom surgical stent directs the implant into the precise planned millimeter and angle.',
        },
        {
          stage: 'Phase 03',
          title: 'Bio-Integration & Custom Ceramic Crown',
          desc: 'After natural bone integration (osseointegration), a custom screw-retained ceramic crown is seated.',
        },
      ],
      processStepsBn: [
        {
          stage: 'ধাপ ০১',
          title: 'থ্রি-ডি সিবিসিটি রোগ নির্ণয়',
          desc: 'চোয়ালের হাড়ের গভীরতা, নার্ভের অবস্থান ও পার্শ্ববর্তী দাঁতের নিখুঁত ডিজিটাল পরিমাপ।',
        },
        {
          stage: 'ধাপ ০২',
          title: 'কম্পিউটার-গাইডেড নির্ভুল প্লেসমেন্ট',
          desc: 'থ্রি-ডি গাইডের সাহায্যে পূর্বনির্ধারিত কোণ ও গভীরতায় ইমপ্লান্ট নির্ভুলভাবে স্থাপন।',
        },
        {
          stage: 'ধাপ ০৩',
          title: 'হাড়ের সমন্বয় ও সিরামিক ক্রাউন সংযোজন',
          desc: 'হাড়ের সাথে ইমপ্লান্ট সম্পূর্ণ মিশে যাওয়ার পর প্রাকৃতিক দেখতে সিরামিক দাঁত স্থাপন।',
        },
      ],
      questionsToAskEn: [
        'Is my current jawbone density sufficient, or is auxiliary bone preservation recommended?',
        'What is the realistic timeline between implant fixture placement and the final ceramic crown?',
        'What specific brand and international regulatory certifications are used for the implant components?',
        'How does medical history (e.g. diabetes or bone density treatments) influence healing?',
      ],
      questionsToAskBn: [
        'আমার বর্তমান চোয়ালের হাড় কি যথেষ্ট মজবুত, নাকি কোনো বোন প্রিজারভেশন প্রয়োজন?',
        'ইমপ্লান্ট বসানো থেকে শুরু করে চূড়ান্ত দাঁত পাওয়া পর্যন্ত কতটা সময় লাগতে পারে?',
        'ব্যবহৃত ইমপ্লান্টের আন্তর্জাতিক ব্র্যান্ড ও সার্টিফিকেশন কী?',
        'আমার ডায়াবেটিস বা অন্যান্য শারীরিক অবস্থা হিলিংয়ে কোনো প্রভাব ফেলবে কি?',
      ],
      serviceFaqsEn: [
        {
          q: 'Is dental implant surgery performed under general or local anesthesia?',
          a: 'Procedures are routinely performed under profound local anesthesia in private dental operatory suites. Most patients state it feels comparable to a gentle tooth extraction.',
        },
        {
          q: 'Can elderly patients receive dental implants safely?',
          a: 'Yes. General systemic health, controlled blood sugar, and bone quality matter far more than chronological age.',
        },
      ],
      serviceFaqsBn: [
        {
          q: 'ইমপ্লান্ট বসানোর সময় অজ্ঞান করার প্রয়োজন হয় কি?',
          a: 'না, এটি স্থানীয় অ্যানেস্থেসিয়ার মাধ্যমেই সম্পূর্ণ ব্যথামুক্তভাবে সম্পন্ন করা যায়। সাধারণ দাঁত তোলার মতোই সহজ অভিজ্ঞতা।',
        },
        {
          q: 'বয়স্ক ব্যক্তিদের কি ইমপ্লান্ট করা নিরাপদ?',
          a: 'হ্যাঁ, শারীরিক সুস্বাস্থ্য এবং ডায়াবেটিস নিয়ন্ত্রণে থাকলে যে কোনো প্রাপ্তবয়স্ক ব্যক্তি নিশ্চিন্তে ইমপ্লান্ট নিতে পারেন।',
        },
      ],
    },
    {
      id: 'hygiene-preventive',
      number: '03',
      titleEn: 'Gentle Guided Hygiene & Enamel Care',
      titleBn: 'ব্যথামুক্ত প্রতিরোধমূলক চিকিৎসা ও মাড়ির যত্ন',
      categoryEn: 'Preventive Care',
      categoryBn: 'প্রতিরোধ ও নিয়মিত যত্ন',
      summaryEn: 'Comfort-focused airflow polishing, microscopic tartar removal, and remineralization treatments.',
      summaryBn: 'বায়ো-ফিল্ম রিমুভাল, এনামেল সুরক্ষা এবং মাইক্রোস্কোপিক স্কেলিং যাতে ভিজিট হয় সম্পূর্ণ ব্যথাহীন ও আরামদায়ক।',
      detailEn: 'Warm-water ultrasonic scaling combined with fine air-polishing gently eliminates plaque biofilm and superficial coffee or tea stains without scratching enamel surfaces.',
      detailBn: 'কুসুম গরম পানির সুক্ষ্ম স্প্রে ও জেন্টল স্কেলিং সংবেদনশীলতা কমিয়ে দেয় এবং মাড়ি রাখে সুস্থ ও সতেজ। এনামেলের কোনো ক্ষতি না করেই চা-কফির দাগ দূর হয়।',
      tagEn: 'Zero-Discomfort Protocol',
      tagBn: 'সম্পূর্ণ আরামদায়ক',
      durationEn: '45–60 Minutes',
      durationBn: '৪৫–৬০ মিনিট',
      keyBenefitsEn: [
        'Warm water irrigation eliminates thermal sensitivity shock during scaling',
        'Microscopic evaluation uncovers microscopic early cavities before pain begins',
        'Restores fresh breath and eliminates bleeding gum inflammation',
      ],
      keyBenefitsBn: [
        'হালকা গরম পানির ব্যবহারে স্কেলিংয়ের সময় শিরশির ভাব উল্লেখযোগ্যভাবে কমে যায়',
        'প্রাথমিক পর্যায়ে ক্যাভিটি শনাক্ত করে বড় ধরনের চিকিৎসা এড়ানো সম্ভব হয়',
        'মাড়ি থেকে রক্ত পড়া বন্ধ করে এবং মুখে দীর্ঘস্থায়ী সতেজতা আনে',
      ],
      candidacyEn: [
        'Anyone seeking routine bi-annual oral wellness screening and dental prophylaxis',
        'Individuals with sensitive teeth who have previously avoided scaling due to cold-water discomfort',
        'Patients with active coffee, tea, or smoking stains seeking gentle surface polish',
      ],
      candidacyBn: [
        'প্রতি ৬ মাস অন্তর নিয়মিত সুস্থতা পরীক্ষা ও স্কেলিং করতে ইচ্ছুক যে কেউ',
        'দাঁত শিরশির করার ভয়ে যারা আগে স্কেলিং করতে দ্বিধাবোধ করেছেন',
        'চা, কফি বা তামাকজাতীয় দাগ নিরাপদে দূর করতে আগ্রহী রোগী',
      ],
      processStepsEn: [
        {
          stage: 'Phase 01',
          title: 'Periodontal Screening & Plaque Mapping',
          desc: 'Gentle measurement of gum pocket depths to check for early periodontitis.',
        },
        {
          stage: 'Phase 02',
          title: 'Warm Ultrasonic Tartar Dislodging',
          desc: 'Low-frequency micro-vibrations remove calculus without touching delicate root cementum.',
        },
        {
          stage: 'Phase 03',
          title: 'Airflow Polishing & Topical Mineral Seal',
          desc: 'Subtle glycine air-polish removes bio-film followed by protective fluoride application.',
        },
      ],
      processStepsBn: [
        {
          stage: 'ধাপ ০১',
          title: 'মাড়ি ও প্লাক মূল্যায়ন',
          desc: 'মাড়ির গভীরতা ও স্বাস্থ্য পরীক্ষা করে ইনফেকশনের লক্ষণ নিরীক্ষণ।',
        },
        {
          stage: 'ধাপ ০২',
          title: 'কুসুম গরম পানির আল্ট্রাসনিক স্কেলিং',
          desc: 'এনামেলের কোনো ক্ষতি না করে মৃদু কম্পনে জমে থাকা শক্ত পাথর ও প্লাক পরিষ্কার।',
        },
        {
          stage: 'ধাপ ০৩',
          title: 'এয়ার-পলিশিং ও এনামেল সুরক্ষা',
          desc: 'মসৃণ পলিশের মাধ্যমে দাগ দূরীকরণ এবং ফ্লুরাইড কোটিং প্রয়োগ।',
        },
      ],
      questionsToAskEn: [
        'What personalized homecare flossing tools match the tight contacts between my teeth?',
        'Are there any bleeding areas indicating localized gingival pockets?',
        'Is non-abrasive remineralizing toothpaste recommended for my sensitivity?',
      ],
      questionsToAskBn: [
        'আমার দাঁতের গঠনের সাথে কোন ধরনের ফ্লসিং বা ব্রাশ সবচেয়ে উপযোগী?',
        'মাড়ির কোথাও কি প্রদাহ বা পকেট তৈরির লক্ষণ দেখা যাচ্ছে?',
        'দাঁতের সংবেদনশীলতা রোধে কী ধরনের পেস্ট ব্যবহার করা উচিত?',
      ],
      serviceFaqsEn: [
        {
          q: 'Does dental scaling make teeth loose or thin?',
          a: 'No. This is a common misconception. Scaling removes harmful calculus and bacteria deposits, allowing the swollen gum to tighten firmly around the tooth roots.',
        },
        {
          q: 'How often should I schedule guided preventive hygiene?',
          a: 'For most adults with healthy gums, twice annually (every 6 months) is the gold standard for long-term health.',
        },
      ],
      serviceFaqsBn: [
        {
          q: 'স্কেলিং করলে কি দাঁত পাতলা বা আলগা হয়ে যায়?',
          a: 'একদমই না। এটি একটি প্রচলিত ভুল ধারণা। স্কেলিং শুধুমাত্র ক্ষতিকর পাথর ও জীবাণু দূর করে মাড়িকে দাঁতের সাথে মজবুতভাবে বসতে সাহায্য করে।',
        },
        {
          q: 'কত দিন পর পর স্কেলিং ও চেকআপ করানো উচিত?',
          a: 'সুস্থ মাড়ি ও দাঁতের জন্য প্রতি ৬ মাসে একবার নিয়মিত চেকআপ ও ক্লিন করা সবচেয়ে কার্যকর।',
        },
      ],
    },
    {
      id: 'root-canal',
      number: '04',
      titleEn: 'Microscopic Endodontics (Root Canal Care)',
      titleBn: 'মাইক্রোস্কোপিক রুট ক্যানেল ও দাঁত সংরক্ষণ',
      categoryEn: 'Tooth Preservation',
      categoryBn: 'দাঁত সংরক্ষণ চিকিৎসা',
      summaryEn: 'Precision disinfection and sealed restoration under magnification to save naturally compromised teeth.',
      summaryBn: 'আধুনিক ম্যাগনিফিকেশন ও রোটারি সিস্টেমের মাধ্যমে নিখুঁতভাবে ইনফেকশন দূর করে প্রাকৃতিক দাঁত রক্ষা করা।',
      detailEn: 'Modern rotary nickel-titanium instruments and electronic apex locators ensure thorough canal cleansing with minimal visit length. Our primary goal is always to save and restore your natural biological tooth.',
      detailBn: 'রোটারি নিকেল-টাইটানিয়াম ইন্সট্রুমেন্ট ও অ্যাপেক্স লোকেটরের সাহায্যে অতি দ্রুত ও ব্যথামুক্তভাবে রুট ক্যানেল পরিষ্কার করা হয়। অপ্রয়োজনীয় দাঁত ফেলে দেওয়া প্রতিরোধ করাই আমাদের দর্শন।',
      tagEn: 'Tooth-Saving Precision',
      tagBn: 'দাঁত রক্ষার প্রচেষ্টা',
      durationEn: '1–2 Focused Sessions',
      durationBn: '১–২ টি নির্ধারিত সেশন',
      keyBenefitsEn: [
        'Fast resolution of acute pulp inflammation and throbbing toothache',
        'Preserves your own biological root, jawbone integration, and sensory perception',
        'Hermetic three-dimensional bio-ceramic sealing prevents recurring reinfection',
      ],
      keyBenefitsBn: [
        'দাঁতের তীব্র ব্যথা ও ইনফেকশন থেকে দ্রুত নিশ্চিত মুক্তি',
        'প্রাকৃতিক দাঁতের শিকড় রক্ষা করে কৃত্রিম দাঁত লাগানোর খরচ ও জটিলতা বাঁচায়',
        'বায়ো-সেরামিক সিলিংয়ের মাধ্যমে পরবর্তীতে পুনরায় ইনফেকশন হওয়ার আশঙ্কা দূর',
      ],
      candidacyEn: [
        'Patients experiencing deep throbbing tooth pain, prolonged sensitivity to hot/cold, or pain on chewing',
        'Teeth with deep cavities approaching the internal dental nerve pulp',
        'Teeth traumatized by sports or vehicular accidents requiring conservative stabilization',
      ],
      candidacyBn: [
        'যাঁরা রাতে দাঁতের তীব্র ব্যথায় ঘুমাতে পারেন না বা গরম খেলে তীব্র শিরশির করে',
        'গভীর ক্যাভিটি যা দাঁতের ভেতরের নার্ভ পর্যন্ত পৌঁছে গেছে',
        'আঘাতপ্রাপ্ত দাঁত যা তুলে না ফেলে সংরক্ষণ করা সম্ভব',
      ],
      processStepsEn: [
        {
          stage: 'Phase 01',
          title: 'Pulp Anesthesia & Magnified Access',
          desc: 'Targeted profound numbing followed by microscopic opening under rubber dam isolation.',
        },
        {
          stage: 'Phase 02',
          title: 'Rotary Cleaning & Disinfection',
          desc: 'Flexible files shape and disinfect delicate micro-canals with warm antibacterial rinses.',
        },
        {
          stage: 'Phase 03',
          title: 'Hermetic Filling & Protective Crown',
          desc: 'Biocompatible gutta-percha seals the canals, topped with a durable ceramic crown to prevent fracture.',
        },
      ],
      processStepsBn: [
        {
          stage: 'ধাপ ০১',
          title: 'সম্পূর্ণ ব্যথানাশক ও ম্যাগনিফাইড অ্যাক্সেস',
          desc: 'রাবার ড্যামের সাহায্যে এলাকাটি জীবাণুমুক্ত রাখা এবং নির্ভুল নার্ভ অ্যানেস্থেসিয়া প্রয়োগ।',
        },
        {
          stage: 'ধাপ ০২',
          title: 'রোটারি জীবাণুমুক্তকরণ',
          desc: 'রোটারি ফাইলের মাধ্যমে ক্যানেলের ভেতরের ব্যাকটেরিয়া সম্পূর্ণ দূর করে ড্রায়িং।',
        },
        {
          stage: 'ধাপ ০৩',
          title: 'স্থায়ী সিলিং ও ক্যাপ সংযোজন',
          desc: 'বায়োকম্প্যাটিবল উপাদান দিয়ে ক্যানেল বন্ধ করা এবং দাঁতকে ভাঙা থেকে বাঁচাতে ক্যাপ পরানো।',
        },
      ],
      questionsToAskEn: [
        'Is a full protective ceramic crown required after endodontic treatment to prevent tooth fracture?',
        'Can this root canal procedure be completed in a single session?',
        'What mild tenderness can I anticipate over the first 48 hours while the ligament calms?',
      ],
      questionsToAskBn: [
        'চিকিৎসার পর দাঁত সুরক্ষিত রাখতে কি ক্যাপ বা ক্রাউন পরানো জরুরি?',
        'আমার ক্যানেলের ক্ষেত্রে কি এক সেশনেই চিকিৎসা সম্পন্ন করা সম্ভব?',
        'পরবর্তী ৪৮ ঘণ্টায় কী ধরনের মৃদু অনুভূতি হতে পারে এবং কীভাবে যত্ন নেব?',
      ],
      serviceFaqsEn: [
        {
          q: 'Does a root canal hurt more than having the tooth pulled?',
          a: 'Modern root canals relieve pain rather than causing it. With profound local anesthesia, the procedure feels identical to having a common composite filling placed.',
        },
        {
          q: 'Why should I save the tooth instead of simply extracting it?',
          a: 'Your natural tooth is superior to any replacement. Extracting a tooth causes adjacent teeth to drift and requires more complex bridges or implants to prevent bite collapse.',
        },
      ],
      serviceFaqsBn: [
        {
          q: 'রুট ক্যানেল চিকিৎসায় কি অনেক ব্যথা হয়?',
          a: 'না, এটি আধুনিক অ্যানাস্থেসিয়ার সাহায্যে অত্যন্ত আরামদায়কভাবে করা হয়। ইনফেকশনের কারণে যে তীব্র ব্যথা রোগী পাচ্ছিলেন, চিকিৎসা শুরুর সাথে সাথেই তা দূর হয়ে যায়।',
        },
        {
          q: 'দাঁত না তুলে রুট ক্যানেল করে রাখা কেন ভালো?',
          a: 'প্রাকৃতিক দাঁতের কোনো বিকল্প নেই। দাঁত ফেলে দিলে পাশের দাঁত হেলে পড়ে এবং খাবার চিবানো ব্যাহত হয়, যা পরবর্তীতে আরও ব্যয়বহুল চিকিৎসার সৃষ্টি করে।',
        },
      ],
    },
    {
      id: 'orthodontics',
      number: '05',
      titleEn: 'Clear Aligners & Aesthetic Orthodontics',
      titleBn: 'স্বচ্ছ অ্যালাইনার ও অর্থোডন্টিক সোজা করা',
      categoryEn: 'Alignment & Bite Correction',
      categoryBn: 'দাঁতের অবস্থান ও কামড় সংশোধন',
      summaryEn: 'Virtually invisible aligner trays to straighten crowded or spaced teeth with zero metallic bracket irritation.',
      summaryBn: 'মেটাল তারের ঝামেলা ছাড়াই অদৃশ্য স্বচ্ছ ট্রের মাধ্যমে আঁকাবাঁকা দাঁত সুন্দর ও সমান করার আধুনিক পদ্ধতি।',
      detailEn: 'Digital dental scanning creates a 3D simulation of your tooth movement from start to finish. Removable, BPA-free clear trays align your smile discreetly without wire pokes or food restrictions.',
      detailBn: 'অপটিক্যাল স্ক্যানার দিয়ে পুরো চিকিৎসার ডিজিটাল রূপরেখা আগেই দেখা যায়। খাবারের সময় খুলে রাখা যায় এবং সাধারণ চোখে বোঝা যায় না।',
      tagEn: 'Discreet Correction',
      tagBn: 'অদৃশ্য ও সুবিধাজনক',
      durationEn: 'Customized Timeline',
      durationBn: 'ব্যক্তিগত সময়সূচি',
      keyBenefitsEn: [
        'Removable trays permit effortless normal eating, brushing, and flossing',
        'Smooth medical polymers eliminate lip ulcerations common with metal brackets',
        'Digital milestone tracking lets you visualize progress before starting',
      ],
      keyBenefitsBn: [
        'খাওয়ার সময় ও ব্রাশ করার সময় সহজেই খুলে রাখা যায়',
        'মেটালের ধারালো তার না থাকায় মুখে বা ঠোঁটে ঘা হওয়ার ভয় থাকে না',
        'শুরু করার আগেই ডিজিটাল ট্র্যাকিংয়ে সমাপ্তির দিন পর্যন্ত দৃশ্যমান রূপরেখা',
      ],
      candidacyEn: [
        'Adults and teenagers with crowded, crooked, overlapping, or widely spaced teeth',
        'Working professionals who desire tooth alignment without prominent metal braces',
        'Individuals with mild-to-moderate bite discrepancies seeking comfortable correction',
      ],
      candidacyBn: [
        'আঁকাবাঁকা, ফাঁকা বা একটির ওপর আরেকটি ওঠা দাঁতের সমস্যায় ভুগছেন এমন যে কেউ',
        'কর্মজীবী ও শিক্ষার্থী যাঁরা মেটাল তারের দৃশ্যমানতা এড়াতে চান',
        'কামড়ের ছোটখাটো অসামঞ্জস্যতা ঠিক করতে আগ্রহী রোগী',
      ],
      processStepsEn: [
        {
          stage: 'Phase 01',
          title: 'Intraoral 3D Scan & Digital Staging',
          desc: 'Optical scanning creates a 3D digital model and step-by-step movement algorithm.',
        },
        {
          stage: 'Phase 02',
          title: 'Custom Aligner Series Delivery',
          desc: 'You receive calibrated trays changed every 1 to 2 weeks according to clinical instructions.',
        },
        {
          stage: 'Phase 03',
          title: 'Milestone Reviews & Retention',
          desc: 'Quick progress checks every 6–8 weeks, concluding with clear nighttime retainers.',
        },
      ],
      processStepsBn: [
        {
          stage: 'ধাপ ০১',
          title: 'থ্রি-ডি অপটিক্যাল স্ক্যান',
          desc: 'দাঁতের একটি নির্ভুল ডিজিটাল মডেল তৈরি এবং প্রতিটি ধাপের মুভমেন্ট নির্ধারণ।',
        },
        {
          stage: 'ধাপ ০২',
          title: 'কাস্টম অ্যালাইনার সেট প্রদান',
          desc: 'প্রতি ১-২ সপ্তাহ অন্তর পরিবর্তনযোগ্য মসৃণ স্বচ্ছ ট্রের সেট রোগীর কাছে হস্তান্তর।',
        },
        {
          stage: 'ধাপ ০৩',
          title: 'অগ্রগতি পর্যালোচনা ও রিটেইনার',
          desc: 'প্রতি ৬-৮ সপ্তাহে স্বল্প সময়ের চেকআপ এবং দাঁত চিরতরে সোজা রাখতে নাইট রিটেইনার।',
        },
      ],
      questionsToAskEn: [
        'How many hours per day must I wear the trays for optimal progress (typically 20–22 hours)?',
        'Will my alignment plan require small tooth-colored attachment composite buttons?',
        'What type of final retention is included to preserve the finished alignment?',
      ],
      questionsToAskBn: [
        'দৈনিক কত ঘণ্টা ট্রে পরে থাকতে হবে (সাধারণত ২০-২২ ঘণ্টা)?',
        'আমার দাঁতে কি কোনো ক্ষুদ্র কম্পোজিট অ্যাটাচমেন্টের প্রয়োজন হবে?',
        'চিকিৎসা শেষে দাঁত আগের জায়গায় ফিরে যাওয়া রোধে কী ধরনের রিটেইনার দেওয়া হবে?',
      ],
      serviceFaqsEn: [
        {
          q: 'Can other people notice that I am wearing clear aligners?',
          a: 'From conversational distance, clear aligners are virtually undetectable. They are custom-trimmed precisely to your gum margin.',
        },
        {
          q: 'Can I drink coffee or tea while wearing the aligners?',
          a: 'We advise removing the aligners while drinking hot or pigmented liquids to prevent staining and thermal tray warping.',
        },
      ],
      serviceFaqsBn: [
        {
          q: 'আমি অ্যালাইনার পরে থাকলে কি অন্যরা তা বুঝতে পারবে?',
          a: 'সাধারণ আলাপের দূরত্ব থেকে এটি প্রায় একেবারেই চোখে পড়ে না। এটি দাঁতের সাথে নিখুঁতভাবে বসে থাকে।',
        },
        {
          q: 'অ্যালাইনার পরে চা বা কফি পান করা যাবে কি?',
          a: 'গরম বা রঙিন পানীয় পানের সময় ট্রে খুলে রাখা শ্রেয় যাতে দাগ না পড়ে এবং ট্রের আকার নষ্ট না হয়।',
        },
      ],
    },
    {
      id: 'family-pediatric',
      number: '06',
      titleEn: 'Compassionate Pediatric & Family Dentistry',
      titleBn: 'শিশুদের বন্ধুত্বপূর্ণ ও পারিবারিক দন্ত্য চিকিৎসা',
      categoryEn: 'Family Wellness',
      categoryBn: 'পারিবারিক সুস্থতা',
      summaryEn: 'Child-friendly, fear-free introduction to oral health with fissure sealants, gentle cavity treatment, and education.',
      summaryBn: 'শিশুদের ভয় দূর করে বন্ধুত্বপূর্ণ পরিবেশে ক্যাভিটি প্রতিরোধ, সিল্যান্ট এবং সঠিক ব্রাশ করার প্রশিক্ষণ।',
      detailEn: 'Our clinicians prioritize patient-led pacing, friendly demonstrations, and positive reinforcement to build lifelong dental confidence without emotional distress or traumatic memories.',
      detailBn: 'শিশুদের মানসিক স্বস্তি নিশ্চিত করে ধৈর্য ও মমতার সাথে চিকিৎসা দেওয়া হয় যাতে ভবিষ্যতে দাঁতের চিকিৎসায় কোনো ফোবিয়া বা ভয় না জন্মায়।',
      tagEn: 'Fear-Free Milestones',
      tagBn: 'ভয়হীন সূচনা',
      durationEn: '30–45 Minutes',
      durationBn: '৩০–৪৫ মিনিট',
      keyBenefitsEn: [
        'Protective dental fissure sealants block cavity formation on chewing surfaces',
        'Gentle chairside demonstrations teach kids enjoyable oral hygiene routines',
        'Positive emotional reinforcement builds fear-free healthcare habits for life',
      ],
      keyBenefitsBn: [
        'প্রটেক্টিভ সিল্যান্ট যা শিশুদের দাঁতের খাঁজে ক্যাভিটি হওয়া প্রতিরোধ করে',
        'মজার ছলে সঠিক নিয়মে ব্রাশ করার প্রশিক্ষণ যা শিশুর নিয়মিত অভ্যাসে পরিণত হয়',
        'ইতিবাচক দৃষ্টিভঙ্গি যা দাঁতের ডাক্তার সম্পর্কে ভয় দূর করে আত্মবিশ্বাস জোগায়',
      ],
      candidacyEn: [
        'Children ready for their first dental milestone visit (typically around age 1 or after first tooth eruption)',
        'Children exhibiting early tooth decay, thumb-sucking habits, or bite misalignment',
        'Families seeking a single caring clinic environment for parents and children alike',
      ],
      candidacyBn: [
        'প্রথম দাঁত ওঠার পর যেসব শিশুর প্রথম রুটিন ওরাল চেকআপ প্রয়োজন',
        'শিশুর দাঁতে ক্যাভিটি, আঙুল চোষার অভ্যাস বা অসম কামড়ের সমস্যা দেখা দিলে',
        'একটি স্বস্তিদায়ক ক্লিনিকে পুরো পরিবারের চিকিৎসা নিশ্চিন্তে নিতে আগ্রহী অভিভাবক',
      ],
      processStepsEn: [
        {
          stage: 'Phase 01',
          title: 'Tell-Show-Do Acclimatization',
          desc: 'We introduce dental instruments playfully so the child feels inquisitive rather than frightened.',
        },
        {
          stage: 'Phase 02',
          title: 'Gentle Plaque Removal & Cavity Check',
          desc: 'Careful soft-brush polish and visual inspection of developing enamel surfaces.',
        },
        {
          stage: 'Phase 03',
          title: 'Protective Fluoride & Parent Briefing',
          desc: 'Topical tooth fortification and practical dietary/flossing recommendations for home.',
        },
      ],
      processStepsBn: [
        {
          stage: 'ধাপ ০১',
          title: 'খেলার ছলে পরিচিতি পর্ব',
          desc: 'শিশুর ভয় কাটাতে যন্ত্রপাতির সাথে বন্ধুসুলভ পরিচয় করিয়ে দেওয়া।',
        },
        {
          stage: 'ধাপ ০২',
          title: 'মৃদু পরীক্ষা ও ক্লিন',
          desc: 'নরম ব্রাশের সাহায্যে দাঁত পরিষ্কার এবং মাড়ি ও এনামেলের সুস্থতা নিরীক্ষণ।',
        },
        {
          stage: 'ধাপ ০৩',
          title: 'ফ্লুরাইড সুরক্ষা ও অভিভাবক পরামর্শ',
          desc: 'ক্যাভিটি প্রতিরোধী ফ্লুরাইড কোটিং এবং খাদ্যাভ্যাস ও যত্ন নিয়ে অভিভাবকদের পরামর্শ।',
        },
      ],
      questionsToAskEn: [
        'Are fissure sealants recommended for my child’s newly erupted permanent 6-year molars?',
        'How can we manage bedtime snacking or nighttime bottle habits to prevent baby bottle decay?',
        'When should an initial orthodontic assessment take place for jaw growth guidance?',
      ],
      questionsToAskBn: [
        'আমার শিশুর নতুন ওঠা স্থায়ী দাঁতে কি সিল্যান্ট দেওয়া উপযুক্ত হবে?',
        'রাতে দুধ বা খাবারের কারণে ক্যাভিটি হওয়া কীভাবে রোধ করব?',
        'শিশুর চোয়াল ও দাঁতের সঠিক বৃদ্ধির জন্য কখন অর্থোডন্টিক পরীক্ষা দরকার?',
      ],
      serviceFaqsEn: [
        {
          q: 'At what age should a child first visit the dental clinic?',
          a: 'Both international and local pediatric associations recommend a first dental visit by age 1 or within six months of the first baby tooth erupting.',
        },
        {
          q: 'What if my child feels very nervous or cries?',
          a: 'This is completely natural. We never force treatment on an upset child. We pace the visit gently, take breaks, and may turn the initial visit into an unhurried "happy visit" to build trust.',
        },
      ],
      serviceFaqsBn: [
        {
          q: 'শিশুকে কত বছর বয়সে প্রথম ডেন্টিস্টের কাছে আনা উচিত?',
          a: 'প্রথম দাঁত ওঠার ৬ মাসের মধ্যে বা ১ বছর বয়সে প্রথমবার ক্লিনিকে নিয়ে আসা সবচেয়ে ভালো। এতে ভবিষ্যতে দাঁত সুস্থ থাকে।',
        },
        {
          q: 'শিশু যদি খুব ভয় পায় বা কান্নাকাটি করে?',
          a: 'এটি খুবই স্বাভাবিক। আমরা শিশুকে কখনই জোর করি না। ধৈর্য ধরে গল্প করে তার ভয় দূর করা হয় যাতে সে পরিবেশের সাথে মানিয়ে নিতে পারে।',
        },
      ],
    },
  ] as ServiceItem[],

  journeySteps: [
    {
      step: '01',
      titleEn: 'Unrushed Consultation & 3D Diagnostics',
      titleBn: 'মনোযোগ দিয়ে কথা শোনা ও থ্রি-ডি পরীক্ষা',
      descriptionEn: 'We sit down, listen to your concerns, and capture low-dose digital images. No rush, no judgment.',
      descriptionBn: 'আপনার সমস্যা ও প্রত্যাশা ধৈর্য ধরে শোনা হয় এবং ডিজিটাল ইমেজিংয়ের মাধ্যমে বর্তমান অবস্থা পরীক্ষা করা হয়।',
      durationEn: '30 mins',
      durationBn: '৩০ মিনিট',
    },
    {
      step: '02',
      titleEn: 'Transparent Written Treatment Plan',
      titleBn: 'স্বচ্ছ ও বিস্তারিত লিখিত চিকিৎসা পরিকল্পনা',
      descriptionEn: 'You receive a clear breakdown of recommended procedures, alternate choices, timeline, and exact fee estimates.',
      descriptionBn: 'চিকিৎসার ধাপ, বিকল্প পদ্ধতি, প্রয়োজনীয় সময় ও খরচের পরিষ্কার লিখিত বিবরণ আপনার সামনে উপস্থাপন করা হয়।',
      durationEn: 'Discussion',
      durationBn: 'পরামর্শ',
    },
    {
      step: '03',
      titleEn: 'Gentle, Calming Chairside Care',
      titleBn: 'আরামদায়ক ও ব্যথামুক্ত চিকিৎসা পর্ব',
      descriptionEn: 'Private operatory suites, warm acoustics, and gentle anesthesia techniques keep you completely at ease.',
      descriptionBn: 'প্রাইভেট কেবিন, কোলাহলমুক্ত পরিবেশ এবং আধুনিক অ্যানেস্থেসিয়ার সাহায্যে সম্পূর্ণ নিশ্চিন্ত চিকিৎসা।',
      durationEn: 'Paced for comfort',
      durationBn: 'আপনার স্বস্তিমতো',
    },
    {
      step: '04',
      titleEn: 'Personalized Recovery & Preventive Review',
      titleBn: 'পরবর্তী যত্ন ও দীর্ঘস্থায়ী সুস্থতা পর্যালোচনা',
      descriptionEn: 'Clear post-care instructions, direct WhatsApp follow-up availability, and routine wellness schedules.',
      descriptionBn: 'চিকিৎসা-পরবর্তী নির্দেশনাবলী, সরাসরি হোয়াটসঅ্যাপে যোগাযোগ সুবিধা ও নিয়মিত ফলো-আপ গাইডলাইন।',
      durationEn: 'Ongoing Care',
      durationBn: 'নিয়মিত পাশে আছি',
    },
  ] as JourneyStep[],

  technology: [
    {
      titleEn: 'Acoustically Calmed Private Suites',
      titleBn: 'শব্দহীন ও একান্ত প্রাইভেট কেয়ার স্যুইট',
      descEn: 'Engineered room acoustics reduce high-pitch dental sounds to minimize subconscious tension and clinical anxiety.',
      descBn: 'যন্ত্রপাতির কর্কশ শব্দ হ্রাস করার অ্যাকোস্টিক ডিজাইন যাতে রোগী মানসিকভাবে শান্ত ও স্বস্তিতে থাকেন।',
    },
    {
      titleEn: 'Digital Intraoral 3D Scanner',
      titleBn: 'ডিজিটাল ইন্ট্রাওরাল থ্রি-ডি স্ক্যানার',
      descEn: 'Replaces messy impression putty with a fast, comfortable optical wand that captures teeth in true color 3D.',
      descBn: 'আঠালো ছাঁচ নেওয়ার অস্বস্তি দূর করে অপটিক্যাল স্ক্যানারের মাধ্যমে কয়েক সেকেন্ডে দাঁতের নিখুঁত থ্রি-ডি মডেল তৈরি।',
    },
    {
      titleEn: 'Class-B European Autoclave System',
      titleBn: 'ইউরোপীয় ক্লাস-বি স্টেরিলাইজেশন সিস্টেম',
      descEn: 'Medical vacuum sterilization destroying 100% of bacterial and viral pathogens on dental handpieces.',
      descBn: 'ভ্যাকুয়াম প্রযুক্তি যা প্রতিটি ড্রিল ও হ্যান্ডপিসের ভেতরের অংশ পর্যন্ত সম্পূর্ণ জীবাণুমুক্ত করে।',
    },
  ],

  teamMembers: [
    {
      id: 'sample-clinician-1',
      nameEn: 'Dr. Sarah Karim',
      nameBn: 'ডাঃ সারা করিম',
      titleEn: 'Dr. Sarah Karim, BDS, MSc (Sample Clinician)',
      titleBn: 'ডাঃ সারা করিম, বিডিএস, এমএসসি (নমুনা চিকিৎসক)',
      roleEn: 'Lead Restorative & Aesthetic Clinician',
      roleBn: 'প্রধান রিস্টোরেটিভ ও এস্থেটিক ডেন্টিস্ট',
      qualificationsEn: 'BDS, MSc Restorative Dentistry (Sample Profile for Demo)',
      qualificationsBn: 'বিডিএস, এমএসসি রিস্টোরেটিভ ডেন্টিস্ট্রি (ডেমো নমুনা প্রোফাইল)',
      bioEn: 'Focuses on conservative ceramic restorations and patient-paced gentle care. Committed to helping anxious individuals achieve optimal oral wellness without fear.',
      bioBn: 'প্রাকৃতিক দাঁত সংরক্ষণ এবং ভয়হীন চিকিৎসায় নিবেদিত। অপ্রয়োজনীয় কাজ পরিহার করে দীর্ঘমেয়াদী সুস্থতা নিশ্চিত করাই তাঁর দর্শন।',
      quoteEn: '“The finest dentistry is conservative. We never rush or overtreat; we preserve what is naturally yours with unhurried gentleness.”',
      quoteBn: '“প্রাকৃতিক দাঁতের চেয়ে সুন্দর আর কিছু হতে পারে না। অপ্রয়োজনীয় চিকিৎসা এড়িয়ে সুস্থ দাঁত আজীবন টিকিয়ে রাখাই আমাদের লক্ষ্য।”',
      isDemoSample: true,
      image: 'https://images.unsplash.com/photo-1594824813568-d8f9d0c64893?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'sample-clinician-2',
      nameEn: 'Dr. Tanvir Ahmed',
      nameBn: 'ডাঃ তানভীর আহমেদ',
      titleEn: 'Dr. Tanvir Ahmed, BDS, FCPS (Sample Clinician)',
      titleBn: 'ডাঃ তানভীর আহমেদ, বিডিএস, এফসিপিএস (নমুনা চিকিৎসক)',
      roleEn: 'Consultant Implantologist & Oral Surgeon',
      roleBn: 'কনসালট্যান্ট ইমপ্লান্টোলজিস্ট ও ওরাল সার্জন',
      qualificationsEn: 'BDS, FCPS (Oral & Maxillofacial Surgery) (Sample Profile for Demo)',
      qualificationsBn: 'বিডিএস, এফসিপিএস (ওরাল ও ম্যাক্সিলোফেসিয়াল সার্জারি) (ডেমো নমুনা প্রোফাইল)',
      bioEn: 'Dedicated to precision 3D computer-guided implant restorations, wisdom tooth preservation, and anxiety-free chairside surgical pacing.',
      bioBn: 'কম্পিউটার-গাইডেড ইমপ্লান্ট ও দ্রুত সেরে ওঠার মতো সুক্ষ্ম সার্জারিতে যত্নশীল ও মনোযোগী।',
      quoteEn: '“Careful digital planning beforehand makes implant appointments predictable, calm, and remarkably comfortable for the patient.”',
      quoteBn: '“সঠিক থ্রি-ডি প্ল্যানিং জটিল সার্জারিকেও খুব সহজ, নির্ভুল এবং আরামদায়ক অভিজ্ঞতায় রূপান্তর করে।”',
      isDemoSample: true,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    },
  ] as DoctorProfile[],

  faqs: [
    {
      id: 'anxiety',
      category: 'comfort',
      questionEn: 'I feel intense anxiety about dental visits. How does your clinic support nervous patients?',
      questionBn: 'দাঁতের চিকিৎসার কথা শুনলেই আমি আতঙ্কিত বোধ করি। আপনারা কীভাবে সাহায্য করেন?',
      answerEn: 'You are completely in control at all times. We use gentle, staged numbing protocols, explain every step beforehand, and agree on a pause signal (raising a hand) so treatment stops immediately whenever you need a breather. Our quiet private rooms and warm atmosphere are specifically designed to reduce nervous tension.',
      answerBn: 'চিকিৎসার পুরো নিয়ন্ত্রণ থাকবে আপনার হাতে। কাজ শুরুর আগেই হাত তুলে থামার সংকেত ঠিক করে নেওয়া হয়—হাত তুললেই ডাক্তার কাজ থামিয়ে আপনাকে সময় দেবেন। সুক্ষ্ম অ্যানাস্থেসিয়া ও শান্ত পরিবেশ আপনার ভয় সম্পূর্ণ দূর করবে।',
    },
    {
      id: 'pricing',
      category: 'pricing',
      questionEn: 'How do you handle fees and pricing transparency?',
      questionBn: 'চিকিৎসা খরচ ও পেমেন্ট পদ্ধতি কীভাবে নির্ধারিত হয়?',
      answerEn: 'Following your comprehensive consultation and digital assessment, you receive an itemized, written treatment proposal before any procedure begins. There are no surprise add-ons. For extensive smile designs or implant cases, flexible phased payment schedules are readily structured.',
      answerBn: 'পরীক্ষার পরই লিখিতভাবে প্রতিটি ধাপের খরচ স্পষ্টভাবে জানানো হয়। আপনার সম্মতি ছাড়া কোনো অতিরিক্ত ফি বা অনাকাঙ্ক্ষিত খরচ যোগ করা হয় না। দীর্ঘমেয়াদী চিকিৎসায় পর্যায়ক্রমিক পেমেন্টের সুবিধাও রয়েছে।',
    },
    {
      id: 'sterilization',
      category: 'sterilization',
      questionEn: 'How can I be certain instruments are completely sterile and safe?',
      questionBn: 'চিকিৎসার যন্ত্রপাতি শতভাগ জীবাণুমুক্ত কিনা তা কীভাবে নিশ্চিত হব?',
      answerEn: 'We adhere to hospital-grade European Class-B vacuum autoclaving. Each patient cassette is sealed in medical pouches that are opened exclusively in front of your eyes at chairside. All non-autoclavable contact points use fresh single-use barriers disposed of after every appointment.',
      answerBn: 'আমরা ইউরোপীয় ক্লাস-বি ভ্যাকুয়াম অটোক্লেভ পদ্ধতি অনুসরণ করি। সিল করা জীবাণুমুক্ত প্যাকেট সরাসরি আপনার চোখের সামনে খোলা হয় এবং প্রতি রোগীর পর স্পর্শকাতর অংশগুলোর ডিসপোজেবল কভার পরিবর্তন করা হয়।',
    },
    {
      id: 'consultation-prep',
      category: 'general',
      questionEn: 'What should I bring to my initial consultation in Banani?',
      questionBn: 'প্রথমবার আসার সময় আমার কী সঙ্গে আনা প্রয়োজন?',
      answerEn: 'Just bring any recent dental X-rays or medical history notes if you have them. If not, our in-house digital imaging will capture what is needed. We recommend arriving 10 minutes early to enjoy a relaxed herbal tea in our reception lounge.',
      answerBn: 'যদি আপনার কোনো পূর্ববর্তী এক্স-রে বা প্রেসক্রিপশন থাকে তা সাথে আনতে পারেন। না থাকলেও কোনো সমস্যা নেই, আমাদের এখানে সম্পূর্ণ আধুনিক ডিজিটাল পরীক্ষার ব্যবস্থা রয়েছে।',
    },
    {
      id: 'parking',
      category: 'general',
      questionEn: 'Is parking available at the Banani location?',
      questionBn: 'বনানী ক্লিনিকে গাড়ি পার্কিংয়ের সুবিধা আছে কি?',
      answerEn: 'Yes, our building features dedicated basement parking with security assistance. If you are taking a ride-share or walking, we are conveniently situated along Road 11 with elevator access directly to Level 4.',
      answerBn: 'হ্যাঁ, আমাদের বিল্ডিংয়ে নিজস্ব আন্ডারগ্রাউন্ড পার্কিং ও সিকিউরিটি সুবিধা রয়েছে। এছাড়াও রোড ১১ এর প্রধান অংশে হওয়ায় লিফটের মাধ্যমে সহজেই লেভেল ৪ এ পৌঁছানো যায়।',
    },
  ] as FaqItem[],
};
