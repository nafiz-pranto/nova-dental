import React from 'react';

/**
 * Bespoke Architectural Vector Artworks for NOVA Dental Studio
 * Muted blue, soft white, deep blue and neutral palette
 * Cohesive with modern dental clinic aesthetic
 */

export const AtelierOperatoryArtwork: React.FC<{ className?: string; title?: string }> = ({
  className = 'w-full h-full',
  title = 'NOVA Dental Studio Private Operatory Suite',
}) => (
  <svg
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    <defs>
      <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F7FAFC" />
        <stop offset="100%" stopColor="#E4EEF5" />
      </linearGradient>
      <linearGradient id="windowLight" x1="0%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#F7FAFC" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="floorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E2EAF0" />
        <stop offset="100%" stopColor="#D3DEE6" />
      </linearGradient>
      <linearGradient id="chairLeather" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F0F5F9" />
        <stop offset="100%" stopColor="#DDE7EE" />
      </linearGradient>
      <linearGradient id="blueAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A9C0D0" />
        <stop offset="50%" stopColor="#65869C" />
        <stop offset="100%" stopColor="#365469" />
      </linearGradient>
      <linearGradient id="deepSlate" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#365469" />
        <stop offset="100%" stopColor="#284051" />
      </linearGradient>
    </defs>

    {/* Background Wall Canvas */}
    <rect width="800" height="460" fill="url(#wallGradient)" />

    {/* Architectural Ceiling Beam & Recessed Lighting */}
    <rect width="800" height="34" fill="#E4EEF5" />
    <line x1="0" y1="34" x2="800" y2="34" stroke="#D7E3EB" strokeWidth="1.5" />
    <circle cx="180" cy="17" r="4" fill="#FFFFFF" />
    <circle cx="400" cy="17" r="4" fill="#FFFFFF" />
    <circle cx="620" cy="17" r="4" fill="#FFFFFF" />

    {/* Left Acoustic Slatted Panel */}
    <g opacity="0.95">
      <rect x="30" y="34" width="130" height="426" fill="#D7E3EB" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={36 + i * 8.5} y="44" width="4" height="406" rx="1" fill="#C2D2DE" />
      ))}
    </g>

    {/* Right Floor-to-Ceiling Large Diffused Window Frame */}
    <rect x="560" y="50" width="210" height="390" fill="#FFFFFF" opacity="0.75" stroke="#CBD8E2" strokeWidth="3" />
    <line x1="665" y1="50" x2="665" y2="440" stroke="#D7E3EB" strokeWidth="2" />
    <line x1="560" y1="230" x2="770" y2="230" stroke="#D7E3EB" strokeWidth="2" />
    <polygon points="560,50 800,90 800,460 560,440" fill="url(#windowLight)" opacity="0.3" />

    {/* Architectural Flooring */}
    <rect y="450" width="800" height="150" fill="url(#floorGradient)" />
    <line x1="0" y1="450" x2="800" y2="450" stroke="#B7C9D6" strokeWidth="2" />
    {/* Floor Perspective Tiles */}
    <line x1="120" y1="450" x2="30" y2="600" stroke="#CBD8E2" strokeWidth="1" opacity="0.6" />
    <line x1="320" y1="450" x2="260" y2="600" stroke="#CBD8E2" strokeWidth="1" opacity="0.6" />
    <line x1="520" y1="450" x2="490" y2="600" stroke="#CBD8E2" strokeWidth="1" opacity="0.6" />
    <line x1="700" y1="450" x2="730" y2="600" stroke="#CBD8E2" strokeWidth="1" opacity="0.6" />

    {/* Modern Ergonomic Dental Operatory Chair */}
    <g transform="translate(230, 220)">
      {/* Heavy Cylindrical Base */}
      <ellipse cx="170" cy="245" rx="90" ry="22" fill="#365469" />
      <rect x="156" y="165" width="28" height="80" rx="3" fill="#284051" />
      <rect x="160" y="170" width="20" height="70" fill="url(#blueAccent)" opacity="0.8" />

      {/* Hydraulic Cantilever Arm */}
      <path d="M170 180 L195 130 L220 145" stroke="#365469" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />

      {/* Chair Seat Base */}
      <rect x="120" y="125" width="140" height="38" rx="10" fill="url(#chairLeather)" stroke="#CBD8E2" strokeWidth="1.5" />
      {/* Contoured Leg Rest Cushion */}
      <path d="M245 130 C270 135 295 155 315 190 L285 200 C270 170 250 155 235 150 Z" fill="url(#chairLeather)" stroke="#CBD8E2" strokeWidth="1.5" />

      {/* Reclined Ergonomic Backrest */}
      <rect x="40" y="105" width="105" height="36" rx="9" transform="rotate(-28 40 105)" fill="url(#chairLeather)" stroke="#CBD8E2" strokeWidth="1.5" />

      {/* Articulating Headrest */}
      <rect x="12" y="55" width="42" height="24" rx="7" transform="rotate(-28 12 55)" fill="#F0F5F9" stroke="#65869C" strokeWidth="1.5" />

      {/* Chair Armrest */}
      <rect x="110" y="98" width="85" height="14" rx="7" fill="#365469" />
      <rect x="112" y="100" width="81" height="4" rx="2" fill="url(#blueAccent)" />
    </g>

    {/* Modern Articulating LED Surgical Operating Lamp */}
    <g transform="translate(190, 80)">
      <circle cx="10" cy="10" r="10" fill="#365469" />
      <path d="M10 10 L80 60 L140 40 L160 90" stroke="#365469" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Muted Blue Joints */}
      <circle cx="80" cy="60" r="5" fill="url(#blueAccent)" />
      <circle cx="140" cy="40" r="5" fill="url(#blueAccent)" />
      {/* Minimalist Oval Light Head */}
      <rect x="135" y="86" width="55" height="20" rx="10" fill="#FFFFFF" stroke="#365469" strokeWidth="2.5" />
      <ellipse cx="162" cy="96" rx="20" ry="5" fill="#E4EEF5" opacity="0.9" />
    </g>

    {/* Slim Medical Rolling Console & Instrument Tray */}
    <g transform="translate(480, 310)">
      <rect x="40" y="130" width="5" height="110" fill="#284051" />
      <path d="M20 238 L65 238" stroke="#365469" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="242" r="3" fill="#65869C" />
      <circle cx="61" cy="242" r="3" fill="#65869C" />

      {/* Tray */}
      <rect x="10" y="115" width="85" height="15" rx="3" fill="#FFFFFF" stroke="#D3DEE6" strokeWidth="1.5" />
      {/* Stainless Micro Cassette */}
      <rect x="25" y="108" width="40" height="7" rx="1.5" fill="#E4EEF5" stroke="#CBD8E2" strokeWidth="1" />
    </g>

    {/* Indoor Greenery Accent */}
    <g transform="translate(55, 340)">
      <polygon points="20,110 55,110 50,160 25,160" fill="#E4EEF5" stroke="#CBD8E2" strokeWidth="1.5" />
      <rect x="18" y="107" width="39" height="5" rx="2" fill="url(#blueAccent)" />
      <path d="M37 107 C30 75 10 70 5 60 C18 62 30 75 36 95" fill="#365469" opacity="0.8" />
      <path d="M38 107 C45 65 65 60 75 48 C65 65 52 82 39 100" fill="#65869C" />
      <path d="M37 90 C30 50 18 40 10 25 C25 32 35 50 38 80" fill="#365469" opacity="0.6" />
      <path d="M38 80 C50 40 70 30 80 15 C72 35 58 55 40 75" fill="#65869C" opacity="0.9" />
    </g>

    {/* Studio Badge Watermark */}
    <g transform="translate(640, 520)" opacity="0.9">
      <rect width="130" height="52" rx="4" fill="#365469" />
      <text x="65" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="600" letterSpacing="1.5">
        NOVA STUDIO
      </text>
      <text x="65" y="40" textAnchor="middle" fill="#A9C0D0" fontSize="8" fontFamily="sans-serif" letterSpacing="1">
        OPERATORY SUITE 01
      </text>
    </g>
  </svg>
);

export const AtelierLoungeArtwork: React.FC<{ className?: string; title?: string }> = ({
  className = 'w-full h-full',
  title = 'NOVA Dental Studio Reception Lounge in Banani',
}) => (
  <svg
    viewBox="0 0 900 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    <defs>
      <linearGradient id="loungeWall" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F7FAFC" />
        <stop offset="60%" stopColor="#E4EEF5" />
        <stop offset="100%" stopColor="#DCE7F0" />
      </linearGradient>
      <linearGradient id="warmFloor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E2EAF0" />
        <stop offset="100%" stopColor="#D3DEE6" />
      </linearGradient>
      <linearGradient id="chairLinen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F0F5F9" />
      </linearGradient>
      <linearGradient id="softWood" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#CBD8E2" />
        <stop offset="50%" stopColor="#B8CBD8" />
        <stop offset="100%" stopColor="#A9C0D0" />
      </linearGradient>
    </defs>

    {/* Wall & Ceiling */}
    <rect width="900" height="380" fill="url(#loungeWall)" />
    <rect width="900" height="24" fill="#E4EEF5" />
    <line x1="0" y1="24" x2="900" y2="24" stroke="#D7E3EB" strokeWidth="1" />

    {/* Wall Art / Curated Gallery Frame */}
    <g transform="translate(340, 60)">
      <rect width="220" height="140" fill="#FFFFFF" stroke="#CBD8E2" strokeWidth="2" rx="2" />
      <rect x="18" y="18" width="184" height="104" fill="#F7FAFC" />
      <path d="M40 70 C70 40 120 90 160 50 C140 85 90 85 40 70 Z" fill="#365469" opacity="0.85" />
      <circle cx="150" cy="55" r="8" fill="#65869C" opacity="0.9" />
    </g>

    {/* Built-in Recessed Bookshelf */}
    <g transform="translate(680, 50)">
      <rect width="170" height="310" rx="3" fill="#E4EEF5" stroke="#CBD8E2" strokeWidth="1.5" />
      <line x1="10" y1="120" x2="160" y2="120" stroke="#CBD8E2" strokeWidth="3" />
      <line x1="10" y1="200" x2="160" y2="200" stroke="#CBD8E2" strokeWidth="3" />
      <line x1="10" y1="275" x2="160" y2="275" stroke="#CBD8E2" strokeWidth="3" />

      <path d="M40 120 C35 100 45 80 55 80 C65 80 75 100 70 120 Z" fill="#FFFFFF" stroke="#CBD8E2" />
      <rect x="95" y="90" width="8" height="30" fill="#365469" />
      <rect x="105" y="85" width="10" height="35" fill="#65869C" />
      <rect x="117" y="92" width="7" height="28" fill="#A9C0D0" />

      <circle cx="85" cy="180" r="16" fill="#F7FAFC" stroke="#CBD8E2" />
      <rect x="115" y="172" width="28" height="28" rx="2" fill="#284051" />
    </g>

    {/* Flooring */}
    <rect y="370" width="900" height="130" fill="url(#warmFloor)" />
    <line x1="0" y1="370" x2="900" y2="370" stroke="#B7C9D6" strokeWidth="2" />

    {/* Soft Area Rug */}
    <ellipse cx="440" cy="435" rx="360" ry="50" fill="#F7FAFC" stroke="#D7E3EB" strokeWidth="2" />

    {/* Left Armchair */}
    <g transform="translate(180, 270)">
      <ellipse cx="70" cy="140" rx="60" ry="14" fill="#000000" opacity="0.08" />
      <line x1="25" y1="110" x2="15" y2="145" stroke="#365469" strokeWidth="4" strokeLinecap="round" />
      <line x1="115" y1="110" x2="125" y2="145" stroke="#365469" strokeWidth="4" strokeLinecap="round" />
      <rect x="10" y="80" width="120" height="35" rx="8" fill="url(#chairLinen)" stroke="#CBD8E2" strokeWidth="1.5" />
      <path d="M10 85 C10 30 35 15 70 15 C105 15 130 30 130 85 Z" fill="url(#chairLinen)" stroke="#CBD8E2" strokeWidth="1.5" />
      <rect x="40" y="55" width="60" height="30" rx="6" fill="#E4EEF5" stroke="#CBD8E2" />
    </g>

    {/* Low Coffee Table */}
    <g transform="translate(370, 360)">
      <ellipse cx="75" cy="40" rx="80" ry="24" fill="#365469" opacity="0.08" />
      <ellipse cx="75" cy="22" rx="80" ry="22" fill="url(#softWood)" stroke="#65869C" strokeWidth="1.5" />
      <rect x="25" y="22" width="8" height="24" rx="2" fill="#365469" />
      <rect x="115" y="22" width="8" height="24" rx="2" fill="#365469" />
      <rect x="65" y="2" width="12" height="18" rx="2" fill="#FFFFFF" stroke="#CBD8E2" strokeWidth="1" />
      <rect x="83" y="8" width="8" height="12" rx="1" fill="#E4EEF5" stroke="#CBD8E2" strokeWidth="1" />
    </g>

    {/* Right Armchair */}
    <g transform="translate(540, 270)">
      <ellipse cx="70" cy="140" rx="60" ry="14" fill="#000000" opacity="0.08" />
      <line x1="25" y1="110" x2="15" y2="145" stroke="#365469" strokeWidth="4" strokeLinecap="round" />
      <line x1="115" y1="110" x2="125" y2="145" stroke="#365469" strokeWidth="4" strokeLinecap="round" />
      <rect x="10" y="80" width="120" height="35" rx="8" fill="url(#chairLinen)" stroke="#CBD8E2" strokeWidth="1.5" />
      <path d="M10 85 C10 30 35 15 70 15 C105 15 130 30 130 85 Z" fill="url(#chairLinen)" stroke="#CBD8E2" strokeWidth="1.5" />
      <rect x="40" y="55" width="60" height="30" rx="6" fill="#365469" opacity="0.85" />
    </g>

    {/* Pendant Lamp */}
    <g transform="translate(440, 24)">
      <line x1="0" y1="0" x2="0" y2="90" stroke="#65869C" strokeWidth="1.5" />
      <path d="M-30 115 L30 115 L15 90 L-15 90 Z" fill="#65869C" stroke="#365469" strokeWidth="1" />
      <ellipse cx="0" cy="115" rx="30" ry="7" fill="#E4EEF5" opacity="0.85" />
    </g>
  </svg>
);

export const AtelierAcousticSuiteArtwork: React.FC<{ className?: string; title?: string }> = ({
  className = 'w-full h-full',
  title = 'Acoustically Dampened Consultation Suite at NOVA',
}) => (
  <svg
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    <defs>
      <linearGradient id="suiteDarkBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#284051" />
        <stop offset="100%" stopColor="#1E313E" />
      </linearGradient>
      <linearGradient id="warmSlat" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#CBD8E2" />
        <stop offset="100%" stopColor="#A9C0D0" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#365469" />
        <stop offset="100%" stopColor="#2A4354" />
      </linearGradient>
    </defs>

    {/* Deep Blue Canvas */}
    <rect width="800" height="600" fill="url(#suiteDarkBg)" />

    {/* Acoustic Panelling Slats on Rear Wall */}
    <g opacity="0.85">
      {Array.from({ length: 30 }).map((_, i) => (
        <rect
          key={i}
          x={40 + i * 24}
          y="40"
          width="8"
          height="390"
          rx="2"
          fill="url(#warmSlat)"
          opacity={0.35 + (i % 3) * 0.15}
        />
      ))}
    </g>

    {/* Floating Digital 3D Diagnostic Screen */}
    <g transform="translate(180, 100)">
      <rect width="440" height="260" rx="8" fill="#182732" stroke="#65869C" strokeWidth="2" />
      <rect x="12" y="12" width="416" height="236" rx="4" fill="url(#screenGlow)" />

      {/* 3D Smile Topology Simulation Graphic */}
      <path
        d="M60 170 C120 120 200 110 260 110 C320 110 360 140 380 170"
        stroke="#A9C0D0"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect
          key={i}
          x={90 + i * 26}
          y={118 + Math.sin(i * 0.3) * 12}
          width="18"
          height="28"
          rx="4"
          fill="#FFFFFF"
          opacity="0.9"
          stroke="#65869C"
          strokeWidth="1"
        />
      ))}
      <text x="32" y="40" fill="#E4EEF5" fontSize="12" fontFamily="monospace" letterSpacing="1">
        3D FACIAL HARMONY MODEL • BANANI STUDIO
      </text>
      <text x="32" y="60" fill="#A9C0D0" fontSize="10" fontFamily="sans-serif">
        Enamel Preservation: 98.4% • Biological Symmetry Checked
      </text>
    </g>

    {/* Ergonomic Consultation Table */}
    <rect y="440" width="800" height="160" fill="#1D2F3C" />
    <line x1="0" y1="440" x2="800" y2="440" stroke="#65869C" strokeWidth="2" opacity="0.6" />

    {/* Digital Optical Intraoral Scanner Wand Base */}
    <g transform="translate(340, 390)">
      <ellipse cx="60" cy="55" rx="45" ry="12" fill="#121D24" />
      <rect x="52" y="10" width="16" height="45" rx="3" fill="#E4EEF5" stroke="#CBD8E2" strokeWidth="1" />
      <polygon points="54,10 66,10 64,-15 56,-15" fill="#FFFFFF" />
      <circle cx="60" cy="-18" r="4" fill="#38BDF8" />
      <path d="M60 55 C60 75 110 80 140 85" stroke="#65869C" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>

    {/* Calibration Stamp */}
    <g transform="translate(40, 520)">
      <text x="0" y="0" fill="#A9C0D0" fontSize="11" fontFamily="sans-serif" fontWeight="600" letterSpacing="1.5">
        ACOUSTIC ISOLATION: 38dB DAMPENED
      </text>
      <text x="0" y="16" fill="#65869C" fontSize="10" fontFamily="sans-serif">
        Engineered for stress-free chairside pacing
      </text>
    </g>
  </svg>
);

export const AbstractClinicianShield: React.FC<{
  monogram: string;
  specialtyEn: string;
  specialtyBn: string;
  isBn: boolean;
  className?: string;
}> = ({ monogram, specialtyEn, specialtyBn, isBn, className = 'w-full h-full' }) => (
  <div
    className={`bg-gradient-to-br from-[#365469] via-[#2A4354] to-[#1E313E] p-4 flex flex-col items-center justify-center text-center relative border border-[#65869C]/40 ${className}`}
  >
    {/* Subtle geometric background motif */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A9C0D0_1px,transparent_1px)] [background-size:12px_12px]" />

    {/* Monogram Seal */}
    <div className="relative z-10 w-16 h-16 rounded-xl bg-[#365469] border-2 border-[#A9C0D0] flex items-center justify-center mb-3 shadow-md">
      <span className="font-serif-atelier text-2xl font-bold text-[#FFFFFF]">
        {monogram}
      </span>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#65869C] rounded-full flex items-center justify-center text-[9px] font-bold text-[#FFFFFF]">
        ✓
      </div>
    </div>

    {/* Sample Profile Label */}
    <span className="relative z-10 text-[9px] uppercase tracking-widest font-mono text-[#A9C0D0] mb-1 font-semibold">
      {isBn ? 'নমুনা চিকিৎসক প্রোফাইল' : 'SAMPLE PRACTITIONER'}
    </span>

    <span className="relative z-10 text-[11px] font-medium text-[#E4EEF5] leading-tight">
      {isBn ? specialtyBn : specialtyEn}
    </span>

    <span className="relative z-10 text-[9px] text-[#A9C0D0]/80 mt-1 font-mono">
      BMDC REG: SAMPLE-DEMO
    </span>
  </div>
);

export const AtelierConsultationArtwork: React.FC<{ className?: string; title?: string }> = ({
  className = 'w-full h-full',
  title = 'NOVA Dental Studio Doctor Consultation Suite',
}) => (
  <svg
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={title}
  >
    <defs>
      <linearGradient id="consultWall" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F7FAFC" />
        <stop offset="100%" stopColor="#E4EEF5" />
      </linearGradient>
      <linearGradient id="consultGlow" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#F7FAFC" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="consultFloor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E2EAF0" />
        <stop offset="100%" stopColor="#D3DEE6" />
      </linearGradient>
      <linearGradient id="doctorCoat" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#365469" />
        <stop offset="100%" stopColor="#284051" />
      </linearGradient>
      <linearGradient id="blueAccent2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A9C0D0" />
        <stop offset="100%" stopColor="#65869C" />
      </linearGradient>
    </defs>

    {/* Background Wall Canvas */}
    <rect width="800" height="450" fill="url(#consultWall)" />

    {/* Architectural Vertical Slats on Left */}
    <g opacity="0.85">
      <rect x="40" y="30" width="120" height="420" fill="#E4EEF5" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={45 + i * 9.5} y="40" width="4.5" height="400" rx="1" fill="#CBD8E2" />
      ))}
    </g>

    {/* Warm Ambient Window Light on Right */}
    <rect x="520" y="40" width="240" height="380" rx="4" fill="#FFFFFF" opacity="0.75" stroke="#CBD8E2" strokeWidth="2" />
    <line x1="640" y1="40" x2="640" y2="420" stroke="#D7E3EB" strokeWidth="2" />
    <line x1="520" y1="220" x2="760" y2="220" stroke="#D7E3EB" strokeWidth="2" />
    <polygon points="520,40 800,80 800,450 520,430" fill="url(#consultGlow)" opacity="0.35" />

    {/* Architectural Flooring */}
    <polygon points="0,450 800,450 800,600 0,600" fill="url(#consultFloor)" />
    <line x1="0" y1="450" x2="800" y2="450" stroke="#B7C9D6" strokeWidth="2" />

    {/* Modern Consultation Table */}
    <rect x="220" y="360" width="360" height="18" rx="3" fill="#FFFFFF" stroke="#CBD8E2" strokeWidth="1.5" />
    <rect x="240" y="378" width="16" height="150" fill="#65869C" opacity="0.7" />
    <rect x="544" y="378" width="16" height="150" fill="#65869C" opacity="0.7" />

    {/* Digital 3D Dental Display Screen on Table */}
    <rect x="330" y="240" width="140" height="100" rx="4" fill="#1E313E" stroke="#65869C" strokeWidth="2" />
    <rect x="340" y="250" width="120" height="80" rx="2" fill="#284051" />
    <path d="M 360 305 Q 400 265 440 305" stroke="#A9C0D0" strokeWidth="3" fill="none" strokeDasharray="2,2" />
    <circle cx="400" cy="285" r="8" fill="#38BDF8" opacity="0.9" />
    <text x="400" y="322" textAnchor="middle" fill="#E4EEF5" fontSize="8" fontFamily="monospace">
      DIGITAL 3D SCAN
    </text>
    <rect x="395" y="340" width="10" height="20" fill="#65869C" />
    <ellipse cx="400" cy="360" rx="24" ry="4" fill="#365469" />

    {/* Greenery on Right */}
    <ellipse cx="700" cy="480" rx="26" ry="7" fill="#65869C" opacity="0.6" />
    <path d="M 685 480 L 690 540 L 710 540 L 715 480 Z" fill="#E4EEF5" stroke="#CBD8E2" strokeWidth="1.5" />
    <path d="M 700 480 Q 670 420 660 390 Q 685 410 700 450" fill="#365469" />
    <path d="M 700 480 Q 720 410 740 375 Q 730 420 705 450" fill="#65869C" />
    <path d="M 700 460 Q 700 380 690 350 Q 710 400 700 460" fill="#365469" opacity="0.8" />

    {/* Dentist Figure (Stylized Atelier Minimalist) */}
    <g transform="translate(190, 220)">
      <circle cx="50" cy="35" r="22" fill="#E4EEF5" />
      <path d="M 32 32 Q 50 12 68 28 Q 62 16 42 16 Z" fill="#284051" />
      <path d="M 24 60 C 24 55 76 55 76 60 L 86 160 L 14 160 Z" fill="url(#doctorCoat)" />
      <path d="M 40 58 L 50 90 L 60 58" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      <path d="M 74 80 Q 110 110 135 95" stroke="url(#doctorCoat)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="138" cy="95" r="6" fill="#E4EEF5" />
    </g>

    {/* Patient Figure */}
    <g transform="translate(480, 240)">
      <rect x="35" y="40" width="35" height="120" rx="8" fill="#E4EEF5" stroke="#CBD8E2" strokeWidth="2" />
      <circle cx="52" cy="25" r="20" fill="#E4EEF5" />
      <path d="M 34 22 Q 52 5 70 20 Q 60 10 42 10 Z" fill="#365469" />
      <path d="M 30 50 C 30 46 74 46 74 50 L 80 150 L 24 150 Z" fill="#CBD8E2" />
      <path d="M 32 75 Q 0 95 -30 115" stroke="#CBD8E2" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="-32" cy="115" r="6" fill="#E4EEF5" />
    </g>

    {/* Reassuring Atelier Seal Stamp in Corner */}
    <g transform="translate(40, 500)">
      <rect width="180" height="34" rx="4" fill="#365469" />
      <text x="14" y="21" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="600" letterSpacing="1.2">
        GENTLE CHAIRSIDE PACING
      </text>
    </g>
  </svg>
);
