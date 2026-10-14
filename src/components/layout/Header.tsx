import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useRouter, Link } from '../../context/RouterContext';
import { CLINIC_CONFIG } from '../../config/clinicData';
import { Button } from '../ui/Button';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Calendar, 
  Globe,
  Info 
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
      setIsScrolled(window.scrollY > 20);
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#29483F] focus:text-[#FCFBF8] focus:outline-none focus:ring-2 focus:ring-[#B49A6A] rounded-sm font-semibold text-xs shadow-xl"
      >
        {isBn ? 'মূল কনটেন্টে সরাসরি যান' : 'Skip to main content'}
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F3EC]/95 backdrop-blur-md border-b border-[#E7E2D8] shadow-xs py-3'
            : 'bg-[#F6F3EC] border-b border-[#E7E2D8] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Architectural Atelier Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3.5 whitespace-nowrap shrink-0 group">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center font-serif text-lg font-bold border border-[#B49A6A]/50 shadow-xs group-hover:bg-[#1E3730] transition-all">
              N
            </span>
            <div className="flex flex-col">
              <span className="font-serif-atelier text-lg sm:text-xl font-medium text-[#29483F] tracking-tight whitespace-nowrap leading-tight group-hover:text-[#1E3730] transition-colors">
                {isBn ? CLINIC_CONFIG.brand.nameBn : CLINIC_CONFIG.brand.nameEn}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#777D77] flex items-center gap-1.5">
                <span>{isBn ? 'বনানী ১১ • প্রাইভেট ক্লিনিক' : 'Banani 11 • Private Atelier'}</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A5B5A5]" aria-hidden="true"></span>
              </span>
            </div>
          </Link>

          {/* Zone 2: Desktop Navigation with Refined Editorial States */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium text-[#777D77]">
            {CLINIC_CONFIG.navigation.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`py-1.5 transition-all whitespace-nowrap shrink-0 relative flex flex-col items-center ${
                    active
                      ? 'text-[#29483F] font-bold'
                      : 'hover:text-[#29483F]'
                  }`}
                >
                  <span>{isBn ? item.labelBn : item.labelEn}</span>
                  {active && (
                    <span className="absolute -bottom-1 w-5 h-0.5 bg-[#B49A6A] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Actions & 1 Primary Action */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Sculpted Language Switcher: বাংলা | EN */}
            <div 
              className="inline-flex items-center p-0.5 bg-[#E7E2D8] border border-[#D5CEC2] rounded-xs text-[11px] font-semibold shadow-2xs"
              role="group"
              aria-label="Language Selector"
            >
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                className={`px-2.5 py-1 rounded-2xs transition-all cursor-pointer ${
                  isBn 
                    ? 'bg-[#29483F] text-[#FCFBF8] shadow-xs font-bold' 
                    : 'text-[#777D77] hover:text-[#29483F]'
                }`}
                aria-pressed={isBn}
                title="বাংলা ভাষায় দেখুন"
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-2xs transition-all cursor-pointer ${
                  !isBn 
                    ? 'bg-[#29483F] text-[#FCFBF8] shadow-xs font-bold' 
                    : 'text-[#777D77] hover:text-[#29483F]'
                }`}
                aria-pressed={!isBn}
                title="View in English"
              >
                EN
              </button>
            </div>

            {/* Subtle WhatsApp Icon Action */}
            <div className="relative">
              {isRealWhatsApp ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#29483F] bg-[#FCFBF8] hover:bg-[#E7E2D8] border border-[#E7E2D8] rounded-xs transition-colors shadow-2xs"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#29483F]" />
                  <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#29483F] bg-[#FCFBF8] hover:bg-[#E7E2D8] border border-[#E7E2D8] rounded-xs transition-colors shadow-2xs cursor-pointer"
                  aria-label="Direct WhatsApp inquiry"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#29483F]" />
                  <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
                </button>
              )}

              {/* Demo WhatsApp Note Toast */}
              {showDemoWhatsAppNotice && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-[#29483F] text-[#FCFBF8] p-3 rounded-xs border border-[#B49A6A]/50 shadow-xl text-xs z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <div className="flex items-center gap-1 text-[#B49A6A] font-semibold text-[11px]">
                      <Info className="w-3 h-3" />
                      <span>{isBn ? 'হোয়াটসঅ্যাপ সংযোগ' : 'WhatsApp Note'}</span>
                    </div>
                    <button
                      onClick={() => setShowDemoWhatsAppNotice(false)}
                      className="text-[#A5B5A5] hover:text-white p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-[11px] text-[#E7E2D8] leading-tight font-light">
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
              className="lg:hidden p-2 text-[#29483F] hover:bg-[#E7E2D8] rounded-xs transition-colors"
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
          className="fixed inset-0 z-40 bg-[#29483F]/60 backdrop-blur-xs lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile Navigation"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#FCFBF8] shadow-2xl border-l border-[#E7E2D8] p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E2D8] mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-2xs bg-[#29483F] text-[#B49A6A] flex items-center justify-center font-serif text-sm font-bold border border-[#B49A6A]/40">
                N
              </span>
              <span className="font-serif-atelier text-base font-semibold text-[#29483F]">
                {isBn ? CLINIC_CONFIG.brand.nameBn : CLINIC_CONFIG.brand.nameEn}
              </span>
            </div>
            <button
              onClick={closeMobile}
              className="p-1.5 text-[#777D77] hover:text-[#29483F] hover:bg-[#E7E2D8] rounded-xs"
              aria-label="মেনু বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-1">
            {CLINIC_CONFIG.navigation.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={closeMobile}
                  className={`px-3 py-2.5 rounded-xs text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-between ${
                    active
                      ? 'bg-[#E7E2D8] text-[#29483F] font-bold'
                      : 'text-[#777D77] hover:bg-[#F6F3EC] hover:text-[#29483F]'
                  }`}
                >
                  <span>{isBn ? item.labelBn : item.labelEn}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#B49A6A]"></span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-[#E7E2D8] space-y-3">
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
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#29483F] bg-[#F6F3EC] border border-[#E7E2D8] rounded-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#29483F]" />
              <span>WhatsApp</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                handleWhatsAppClick(e);
                closeMobile();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#29483F] bg-[#F6F3EC] border border-[#E7E2D8] rounded-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#29483F]" />
              <span>WhatsApp ({isBn ? 'ডেমো' : 'Demo'})</span>
            </button>
          )}

          <div className="pt-2 text-center text-[10px] text-[#777D77]">
            <span>{isBn ? 'বনানী ১১, ঢাকা • প্রতি ঘণ্টায় ১ জন রোগী' : 'Banani 11, Dhaka • 1 Patient / Hour'}</span>
          </div>
        </div>
      </aside>
    </>
  );
};
