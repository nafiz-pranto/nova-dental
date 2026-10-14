import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter, Link } from '../../context/RouterContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { Button } from '../ui/Button';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Info,
  Sparkles 
} from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { language, setLanguage, isBn } = useLanguage();
  const { path, navigate, isActive } = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showDemoWhatsAppNotice, setShowDemoWhatsAppNotice] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);

  const isRealWhatsApp = CLINIC_CONFIG.brand.isRealWhatsAppConfigured && CLINIC_CONFIG.brand.configuredRealWhatsAppNumber;
  const whatsappUrl = isRealWhatsApp
    ? `https://wa.me/${CLINIC_CONFIG.brand.configuredRealWhatsAppNumber}`
    : undefined;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!isRealWhatsApp) {
      e.preventDefault();
      setShowDemoWhatsAppNotice(true);
      setTimeout(() => setShowDemoWhatsAppNotice(false), 5000);
    }
  };

  return (
    <>
      {/* Skip to Content Link for Keyboard and Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#365469] focus:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#65869C] rounded-md font-semibold text-xs shadow-xl"
      >
        {isBn ? 'মূল কনটেন্টে সরাসরি যান' : 'Skip to main content'}
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D7E3EB] shadow-xs py-3'
            : 'bg-[#FFFFFF] border-b border-[#D7E3EB] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Modern Brand Identity */}
          <Link to="/" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
            <span className="w-10 h-10 rounded-lg bg-[#365469] text-[#FFFFFF] flex items-center justify-center font-serif text-lg font-bold border border-[#65869C]/40 shadow-xs group-hover:bg-[#284051] transition-all">
              N
            </span>
            <div className="flex flex-col">
              <span className="font-serif-atelier text-lg sm:text-xl font-semibold text-[#263746] tracking-tight whitespace-nowrap leading-tight group-hover:text-[#365469] transition-colors">
                {isBn ? CLINIC_CONFIG.brand.nameBn : CLINIC_CONFIG.brand.nameEn}
              </span>
              <span className="text-[11px] font-medium text-[#627482] flex items-center gap-1.5">
                <span>{isBn ? 'বনানী ১১, ঢাকা' : 'Banani 11, Dhaka'}</span>
                <span className="inline-block w-1 h-1 rounded-full bg-[#A9C0D0]" aria-hidden="true" />
                <span className="text-[#65869C]">{isBn ? 'প্রাইভেট স্টুডিও' : 'Private Dental Care'}</span>
              </span>
            </div>
          </Link>

          {/* Zone 2: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-medium text-[#627482]">
            {CLINIC_CONFIG.navigation.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`py-1.5 transition-all whitespace-nowrap shrink-0 relative flex flex-col items-center ${
                    active
                      ? 'text-[#365469] font-bold'
                      : 'hover:text-[#263746]'
                  }`}
                >
                  <span>{isBn ? item.labelBn : item.labelEn}</span>
                  {active && (
                    <span className="absolute -bottom-1.5 w-6 h-0.5 bg-[#65869C] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Language Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Language Switcher: বাংলা | EN */}
            <div 
              className="inline-flex items-center p-0.5 bg-[#E4EEF5] border border-[#D7E3EB] rounded-md text-xs font-semibold shadow-2xs"
              role="group"
              aria-label="Language Selector"
            >
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1 rounded transition-all cursor-pointer ${
                  isBn 
                    ? 'bg-[#365469] text-[#FFFFFF] shadow-xs font-bold' 
                    : 'text-[#627482] hover:text-[#263746]'
                }`}
                aria-pressed={isBn}
                title="বাংলা ভাষায় দেখুন"
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition-all cursor-pointer ${
                  !isBn 
                    ? 'bg-[#365469] text-[#FFFFFF] shadow-xs font-bold' 
                    : 'text-[#627482] hover:text-[#263746]'
                }`}
                aria-pressed={!isBn}
                title="View in English"
              >
                EN
              </button>
            </div>

            {/* Subtle WhatsApp Action */}
            <div className="relative">
              {isRealWhatsApp ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#365469] bg-[#FFFFFF] hover:bg-[#E4EEF5] border border-[#D7E3EB] rounded-md transition-colors shadow-2xs"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#65869C]" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#365469] bg-[#FFFFFF] hover:bg-[#E4EEF5] border border-[#D7E3EB] rounded-md transition-colors shadow-2xs cursor-pointer"
                  aria-label="Direct WhatsApp inquiry"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#65869C]" />
                  <span className="font-semibold">WhatsApp</span>
                </button>
              )}

              {/* Demo WhatsApp Note Toast */}
              {showDemoWhatsAppNotice && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-[#FFFFFF] text-[#263746] p-3 rounded-lg border border-[#A9C0D0] shadow-xl text-xs z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <div className="flex items-center gap-1 text-[#365469] font-semibold text-[11px]">
                      <Info className="w-3 h-3 text-[#65869C]" />
                      <span>{isBn ? 'হোয়াটসঅ্যাপ যোগাযোগ' : 'WhatsApp Notice'}</span>
                    </div>
                    <button
                      onClick={() => setShowDemoWhatsAppNotice(false)}
                      className="text-[#627482] hover:text-[#263746] p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#627482] leading-tight font-normal">
                    {isBn ? CLINIC_CONFIG.brand.demoWhatsAppNoticeBn : CLINIC_CONFIG.brand.demoWhatsAppNoticeEn}
                  </p>
                </div>
              )}
            </div>

            {/* Single Primary Action */}
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenBooking}
              className="hidden md:inline-flex"
            >
              {isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Request Visit'}
            </Button>

            {/* Mobile Navigation Trigger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#365469] hover:bg-[#E4EEF5] rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#263746]/50 backdrop-blur-xs lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile Navigation"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#FFFFFF] shadow-2xl border-l border-[#D7E3EB] p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between pb-5 border-b border-[#D7E3EB] mb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-md bg-[#365469] text-[#FFFFFF] flex items-center justify-center font-serif text-sm font-bold border border-[#65869C]/40">
                N
              </span>
              <span className="font-serif-atelier text-base font-semibold text-[#263746]">
                {isBn ? CLINIC_CONFIG.brand.nameBn : CLINIC_CONFIG.brand.nameEn}
              </span>
            </div>
            <button
              onClick={closeMobile}
              className="p-1.5 text-[#627482] hover:text-[#263746] hover:bg-[#E4EEF5] rounded-md"
              aria-label="মেনু বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-1.5">
            {CLINIC_CONFIG.navigation.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={closeMobile}
                  className={`px-3 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-between ${
                    active
                      ? 'bg-[#E4EEF5] text-[#365469] font-bold'
                      : 'text-[#627482] hover:bg-[#F7FAFC] hover:text-[#263746]'
                  }`}
                >
                  <span>{isBn ? item.labelBn : item.labelEn}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#65869C]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-5 border-t border-[#D7E3EB] space-y-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              closeMobile();
              onOpenBooking();
            }}
            className="w-full justify-center"
          >
            {isBn ? 'অ্যাপয়েন্টমেন্ট নিন' : 'Request Consultation'}
          </Button>

          {isRealWhatsApp ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#365469] bg-[#E4EEF5] border border-[#D7E3EB] rounded-md"
            >
              <MessageCircle className="w-4 h-4 text-[#65869C]" />
              <span>WhatsApp</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                handleWhatsAppClick(e);
                closeMobile();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#365469] bg-[#E4EEF5] border border-[#D7E3EB] rounded-md cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#65869C]" />
              <span>WhatsApp ({isBn ? 'ডেমো' : 'Demo'})</span>
            </button>
          )}

          <div className="pt-2 text-center text-[11px] text-[#627482]">
            <span>{isBn ? 'বনানী ১১, ঢাকা • প্রতি ঘণ্টায় ১ জন রোগী' : 'Banani 11, Dhaka • 1 Patient / Hour'}</span>
          </div>
        </div>
      </aside>
    </>
  );
};
