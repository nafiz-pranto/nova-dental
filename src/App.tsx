import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloatingButton } from './components/layout/WhatsAppFloatingButton';
import { HeroSection } from './components/home/HeroSection';
import { TrustStrip } from './components/home/TrustStrip';
import { ServicesSection } from './components/home/ServicesSection';
import { ClinicExperienceSection } from './components/home/ClinicExperienceSection';
import { PatientJourneySection } from './components/home/PatientJourneySection';
import { TeamSection } from './components/home/TeamSection';
import { FaqSection } from './components/home/FaqSection';
import { AppointmentSection } from './components/home/AppointmentSection';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { TeamPage } from './pages/TeamPage';
import { PatientGuidePage } from './pages/PatientGuidePage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { BookingModal } from './components/booking/BookingModal';
import { ServiceDetailModal } from './components/services/ServiceDetailModal';
import { ServiceItem } from './types/clinic';
import { CLINIC_CONFIG } from './config/clinicData';
import { RouteSeo } from './components/seo/RouteSeo';
import { X } from 'lucide-react';

function StudioAppContent() {
  const { isBn } = useLanguage();
  const { path, navigate } = useRouter();
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('smile-design');
  const [activeDetailService, setActiveDetailService] = useState<ServiceItem | null>(null);
  const [showDemoBanner, setShowDemoBanner] = useState<boolean>(true);

  // Match routes
  const renderCurrentRoute = () => {
    // 1. Service Detail Route: /services/:id
    if (path.startsWith('/services/')) {
      const serviceId = path.replace('/services/', '').split('/')[0];
      return <ServiceDetailPage serviceId={serviceId} />;
    }

    // 2. Services Overview Route
    if (path === '/services') {
      return <ServicesPage />;
    }

    // 3. Team & Studio Route
    if (path === '/team') {
      return <TeamPage />;
    }

    // 4. Patient Guide & FAQs Route
    if (path === '/patient-guide' || path === '/faq') {
      return <PatientGuidePage />;
    }

    // 5. Contact & Location Route
    if (path === '/contact') {
      return <ContactPage />;
    }

    // 6. Appointment Request Route
    if (path === '/appointment' || path === '/book') {
      return <AppointmentPage />;
    }

    // Default: Master Production Homepage
    return (
      <>
        {/* Distinctive Muted Blue Hero Section with Authentic Doctor-Patient Photography */}
        <HeroSection onOpenBooking={() => navigate('/appointment')} />

        {/* Clinical Standards & Hygiene Strip */}
        <TrustStrip />

        {/* Featured Dental Services with Filter Bar */}
        <ServicesSection
          onSelectService={(service) => setActiveDetailService(service)}
          onOpenBookingForService={(svcId) => navigate(`/appointment?service=${svcId}`)}
        />

        {/* Patient Journey ("What to Expect") */}
        <PatientJourneySection onOpenBooking={() => navigate('/appointment')} />

        {/* Clinic Atmosphere & 3D Technology */}
        <ClinicExperienceSection />

        {/* Clinical Team & Conservative Dental Ethos */}
        <TeamSection onOpenBooking={() => navigate('/appointment')} />

        {/* Practical FAQs */}
        <FaqSection />

        {/* Contact & Appointment Section */}
        <AppointmentSection onOpenBooking={() => navigate('/appointment')} />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#263746] flex flex-col font-sans selection:bg-[#A9C0D0]/30 selection:text-[#263746] antialiased">
      {/* Route-level SEO for Master Homepage */}
      {path === '/' && (
        <RouteSeo
          titleEn="NOVA Dental Studio | Modern & Gentle Dental Care • Banani, Dhaka"
          titleBn="নোভা ডেন্টাল স্টুডিও | আধুনিক ও আরামদায়ক দন্ত্য চিকিৎসা • বনানী, ঢাকা"
          descriptionEn="Modern, patient-led dental care in Banani, Dhaka. Conservative restorative dentistry, digital smile design, and European Class-B hospital sterilization."
          descriptionBn="বনানী, ঢাকায় আধুনিক ও শান্ত পরিবেশে দন্ত্য সেবা। প্রাকৃতিক দাঁত সংরক্ষণ, ডিজিটাল স্মাইল ডিজাইন এবং আন্তর্জাতিক ক্লাস-বি জীবাণুমুক্তকরণ সুরক্ষা।"
          canonicalPath="/"
          schemaData={{
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            'name': 'NOVA Dental Studio (Sample Demo Prototype)',
            'alternateName': 'নোভা ডেন্টাল স্টুডিও (ডেমো প্রোটোটাইপ)',
            'description': 'Modern and conservative restorative dental clinic in Banani, Dhaka. Agency demonstration prototype with sample clinician profiles and illustrative mock data.',
            'disambiguatingDescription': 'Fictional client presentation prototype. Not a verified or active commercial healthcare entity.',
            'url': window.location.origin,
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': CLINIC_CONFIG.brand.addressEn,
              'addressLocality': 'Dhaka',
              'postalCode': '1213',
              'addressCountry': 'BD',
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 23.7937,
              'longitude': 90.4066,
            },
            'openingHoursSpecification': [
              {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                'opens': '10:00',
                'closes': '20:30',
              },
              {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': 'Friday',
                'opens': '15:00',
                'closes': '20:30',
              },
            ],
            'medicalSpecialty': 'Dentistry',
            'priceRange': '$$',
          }}
        />
      )}

      {/* Top Presentation Demo Banner in Muted Light Blue */}
      {showDemoBanner && (
        <aside aria-label="Demo notice" className="bg-[#E4EEF5] text-[#365469] px-4 py-1.5 text-xs border-b border-[#D7E3EB] flex items-center justify-between z-50">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-[#365469] bg-[#FFFFFF] px-2 py-0.5 rounded border border-[#D7E3EB]">
                CLIENT PRESENTATION DEMO
              </span>
              <span className="text-[#627482] text-xs hidden sm:inline">
                • {isBn ? CLINIC_CONFIG.demoNoticeBn : CLINIC_CONFIG.demoNoticeEn}
              </span>
            </div>
            <button
              onClick={() => setShowDemoBanner(false)}
              className="text-[#65869C] hover:text-[#263746] p-0.5 rounded transition-colors shrink-0 cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Global Header */}
      <Header onOpenBooking={() => navigate('/appointment')} />

      {/* Dynamic Route Canvas with main landmark ID for skip link */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {renderCurrentRoute()}
      </main>

      {/* Global Footer */}
      <Footer onOpenBooking={() => navigate('/appointment')} />

      {/* Mobile-First WhatsApp Quick Action */}
      <WhatsAppFloatingButton />

      {/* Quick Booking Modal Drawer */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedServiceId={selectedServiceId}
      />

      {/* Quick Service Detail Modal */}
      <ServiceDetailModal
        service={activeDetailService}
        onClose={() => setActiveDetailService(null)}
        onBookService={(svcId) => navigate(`/appointment?service=${svcId}`)}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <LanguageProvider>
        <StudioAppContent />
      </LanguageProvider>
    </RouterProvider>
  );
}
