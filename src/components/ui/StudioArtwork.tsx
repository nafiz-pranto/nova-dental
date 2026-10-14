import React from 'react';

/**
 * Bespoke Architectural Vector Artworks for NOVA Dental Studio
 * Designed to provide resilient, authentic visual assets without external host dependencies
 * Strictly adhering to the approved Atelier palette:
 * Canvas: #FCFBF8, Slate Forest: #29483F, Ochre/Brass: #B49A6A, Soft Linen: #E7E2D8, Sage: #29483F
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
        <stop offset="0%" stopColor="#F6F2E9" />
        <stop offset="100%" stopColor="#EBE3D3" />
      </linearGradient>
      <linearGradient id="windowLight" x1="0%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#FAF7F0" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="floorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#DFD7C7" />
        <stop offset="100%" stopColor="#C8BEAC" />
      </linearGradient>
      <linearGradient id="chairLeather" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stopColor="#FDFBF7" />
        <stop offset="60%" stopColor="#EFE8DA" />
        <stop offset="100%" stopColor="#DDD3BF" />
      </linearGradient>
      <linearGradient id="brassAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4AF7A" />
        <stop offset="50%" stopColor="#B49A6A" />
        <stop offset="100%" stopColor="#9E7947" />
      </linearGradient>
      <linearGradient id="deepSlate" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A33" />
        <stop offset="100%" stopColor="#132521" />
      </linearGradient>
    </defs>

    {/* Background Wall Canvas */}
    <rect width="800" height="460" fill="url(#wallGradient)" />

    {/* Architectural Ceiling Beam & Recessed Lighting */}
    <rect width="800" height="34" fill="#E2DACB" />
    <line x1="0" y1="34" x2="800" y2="34" stroke="#D3C9B8" strokeWidth="1.5" />
    <circle cx="180" cy="17" r="4" fill="#FAF6EE" />
    <circle cx="400" cy="17" r="4" fill="#FAF6EE" />
    <circle cx="620" cy="17" r="4" fill="#FAF6EE" />

    {/* Left Acoustic Slatted Wood Accent Panel */}
    <g opacity="0.95">
      <rect x="30" y="34" width="130" height="426" fill="#D7CABA" />
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={36 + i * 8.5} y="44" width="4" height="406" rx="1" fill="#C4B4A0" />
      ))}
    </g>

    {/* Right Floor-to-Ceiling Large Diffused Window Frame */}
    <rect x="560" y="50" width="210" height="390" fill="#FFFFFF" opacity="0.6" stroke="#D5CBB9" strokeWidth="3" />
    <line x1="665" y1="50" x2="665" y2="440" stroke="#DDD4C4" strokeWidth="2" />
    <line x1="560" y1="230" x2="770" y2="230" stroke="#DDD4C4" strokeWidth="2" />
    <polygon points="560,50 800,90 800,460 560,440" fill="url(#windowLight)" opacity="0.3" />

    {/* Architectural Flooring */}
    <rect y="450" width="800" height="150" fill="url(#floorGradient)" />
    <line x1="0" y1="450" x2="800" y2="450" stroke="#B8AD99" strokeWidth="2" />
    {/* Floor Perspective Tiles */}
    <line x1="120" y1="450" x2="30" y2="600" stroke="#BCB19E" strokeWidth="1" opacity="0.6" />
    <line x1="320" y1="450" x2="260" y2="600" stroke="#BCB19E" strokeWidth="1" opacity="0.6" />
    <line x1="520" y1="450" x2="490" y2="600" stroke="#BCB19E" strokeWidth="1" opacity="0.6" />
    <line x1="700" y1="450" x2="730" y2="600" stroke="#BCB19E" strokeWidth="1" opacity="0.6" />

    {/* Modern Ergonomic Dental Operatory Chair */}
    <g transform="translate(230, 220)">
      {/* Heavy Cylindrical Base */}
      <ellipse cx="170" cy="245" rx="90" ry="22" fill="#29483F" />
      <rect x="156" y="165" width="28" height="80" rx="3" fill="#203E36" />
      <rect x="160" y="170" width="20" height="70" fill="url(#brassAccent)" opacity="0.8" />

      {/* Hydraulic Cantilever Arm */}
      <path d="M170 180 L195 130 L220 145" stroke="#29483F" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />

      {/* Chair Seat Base */}
      <rect x="120" y="125" width="140" height="38" rx="10" fill="url(#chairLeather)" stroke="#D5CABA" strokeWidth="1.5" />
      {/* Contoured Leg Rest Cushion */}
      <path d="M245 130 C270 135 295 155 315 190 L285 200 C270 170 250 155 235 150 Z" fill="url(#chairLeather)" stroke="#D5CABA" strokeWidth="1.5" />

      {/* Reclined Ergonomic Backrest */}
      <rect x="40" y="105" width="105" height="36" rx="9" transform="rotate(-28 40 105)" fill="url(#chairLeather)" stroke="#D5CABA" strokeWidth="1.5" />

      {/* Articulating Headrest */}
      <rect x="12" y="55" width="42" height="24" rx="7" transform="rotate(-28 12 55)" fill="#F0E8D9" stroke="#B49A6A" strokeWidth="1.5" />

      {/* Chair Armrest */}
      <rect x="110" y="98" width="85" height="14" rx="7" fill="#29483F" />
      <rect x="112" y="100" width="81" height="4" rx="2" fill="url(#brassAccent)" />
    </g>

    {/* Modern Articulating LED Surgical Operating Lamp */}
    <g transform="translate(190, 80)">
      <circle cx="10" cy="10" r="10" fill="#29483F" />
      <path d="M10 10 L80 60 L140 40 L160 90" stroke="#29483F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Brass Joints */}
      <circle cx="80" cy="60" r="5" fill="url(#brassAccent)" />
      <circle cx="140" cy="40" r="5" fill="url(#brassAccent)" />
      {/* Minimalist Oval Light Head */}
      <rect x="135" y="86" width="55" height="20" rx="10" fill="#FCFBF8" stroke="#29483F" strokeWidth="2.5" />
      <ellipse cx="162" cy="96" rx="20" ry="5" fill="#FFEEC2" opacity="0.9" />
    </g>

    {/* Slim Medical Rolling Console & Instrument Tray */}
    <g transform="translate(480, 310)">
      <rect x="40" y="130" width="5" height="110" fill="#203E36" />
      <path d="M20 238 L65 238" stroke="#29483F" strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="242" r="3" fill="#8E7F6D" />
      <circle cx="61" cy="242" r="3" fill="#8E7F6D" />

      {/* Travertine-finished Tray */}
      <rect x="10" y="115" width="85" height="15" rx="3" fill="#FCFBF8" stroke="#CFC5B2" strokeWidth="1.5" />
      {/* Stainless Micro Cassette */}
      <rect x="25" y="108" width="40" height="7" rx="1.5" fill="#DDD7CB" stroke="#B4AA98" strokeWidth="1" />
    </g>

    {/* Boutique Corner Plant (Indoor Fiddle Leaf / Olive) */}
    <g transform="translate(55, 340)">
      {/* Ceramic Planter */}
      <polygon points="20,110 55,110 50,160 25,160" fill="#E8E0D2" stroke="#CCC1AE" strokeWidth="1.5" />
      <rect x="18" y="107" width="39" height="5" rx="2" fill="url(#brassAccent)" />
      {/* Organic Leaves */}
      <path d="M37 107 C30 75 10 70 5 60 C18 62 30 75 36 95" fill="#2E4A41" />
      <path d="M38 107 C45 65 65 60 75 48 C65 65 52 82 39 100" fill="#243F37" />
      <path d="M37 90 C30 50 18 40 10 25 C25 32 35 50 38 80" fill="#385B51" />
      <path d="M38 80 C50 40 70 30 80 15 C72 35 58 55 40 75" fill="#2C483F" />
    </g>

    {/* Atelier Studio Badge Watermark */}
    <g transform="translate(640, 520)" opacity="0.85">
      <rect width="130" height="52" rx="2" fill="#29483F" />
      <text x="65" y="24" textAnchor="middle" fill="#B49A6A" fontSize="10" fontFamily="Playfair Display, serif" fontWeight="600" letterSpacing="1.5">
        NOVA STUDIO
      </text>
      <text x="65" y="40" textAnchor="middle" fill="#B3C4BE" fontSize="8" fontFamily="sans-serif" letterSpacing="1">
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
        <stop offset="0%" stopColor="#F9F6F0" />
        <stop offset="60%" stopColor="#E7E2D8" />
        <stop offset="100%" stopColor="#E8DFCE" />
      </linearGradient>
      <linearGradient id="warmFloor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#D9D0BE" />
        <stop offset="100%" stopColor="#C4B9A4" />
      </linearGradient>
      <linearGradient id="chairLinen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBF9F5" />
        <stop offset="100%" stopColor="#ECE4D6" />
      </linearGradient>
      <linearGradient id="oakWood" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#CBBBA2" />
        <stop offset="50%" stopColor="#BFAC91" />
        <stop offset="100%" stopColor="#B39E80" />
      </linearGradient>
    </defs>

    {/* Wall & Ceiling */}
    <rect width="900" height="380" fill="url(#loungeWall)" />
    <rect width="900" height="24" fill="#E2DACB" />
    <line x1="0" y1="24" x2="900" y2="24" stroke="#D3C9B8" strokeWidth="1" />

    {/* Wall Art / Curated Gallery Frame */}
    <g transform="translate(340, 60)">
      <rect width="220" height="140" fill="#FCFBF8" stroke="#D5CBB9" strokeWidth="2" rx="1" />
      <rect x="18" y="18" width="184" height="104" fill="#F0E8DC" />
      {/* Minimalist Organic Brushstroke Motif */}
      <path d="M40 70 C70 40 120 90 160 50 C140 85 90 85 40 70 Z" fill="#29483F" opacity="0.75" />
      <circle cx="150" cy="55" r="8" fill="#B49A6A" opacity="0.9" />
    </g>

    {/* Built-in Recessed Architectural Bookshelf */}
    <g transform="translate(680, 50)">
      <rect width="170" height="310" rx="2" fill="#E4DBCB" stroke="#D3C7B3" strokeWidth="1.5" />
      {/* Shelves */}
      <line x1="10" y1="120" x2="160" y2="120" stroke="#BFB099" strokeWidth="3" />
      <line x1="10" y1="200" x2="160" y2="200" stroke="#BFB099" strokeWidth="3" />
      <line x1="10" y1="275" x2="160" y2="275" stroke="#BFB099" strokeWidth="3" />

      {/* Ceramic Sculptural Objects */}
      <path d="M40 120 C35 100 45 80 55 80 C65 80 75 100 70 120 Z" fill="#FBF9F4" stroke="#D2C7B4" />
      <rect x="95" y="90" width="8" height="30" fill="#29483F" />
      <rect x="105" y="85" width="10" height="35" fill="#B49A6A" />
      <rect x="117" y="92" width="7" height="28" fill="#5E6F69" />

      <circle cx="85" cy="180" r="16" fill="#F4EFE6" stroke="#D5CBB9" />
      <rect x="115" y="172" width="28" height="28" rx="2" fill="#203E36" />
    </g>

    {/* Flooring */}
    <rect y="370" width="900" height="130" fill="url(#warmFloor)" />
    <line x1="0" y1="370" x2="900" y2="370" stroke="#BDB09A" strokeWidth="2" />

    {/* Soft Wool Area Rug */}
    <ellipse cx="440" cy="435" rx="360" ry="50" fill="#F5F0E6" stroke="#E3DACB" strokeWidth="2" />

    {/* Left Armchair */}
    <g transform="translate(180, 270)">
      {/* Shadow */}
      <ellipse cx="70" cy="140" rx="60" ry="14" fill="#000000" opacity="0.1" />
      {/* Chair Wooden Legs */}
      <line x1="25" y1="110" x2="15" y2="145" stroke="#5A4736" strokeWidth="4" strokeLinecap="round" />
      <line x1="115" y1="110" x2="125" y2="145" stroke="#5A4736" strokeWidth="4" strokeLinecap="round" />
      {/* Seat Cushion */}
      <rect x="10" y="80" width="120" height="35" rx="8" fill="url(#chairLinen)" stroke="#D8CEBD" strokeWidth="1.5" />
      {/* Curved Backrest */}
      <path d="M10 85 C10 30 35 15 70 15 C105 15 130 30 130 85 Z" fill="url(#chairLinen)" stroke="#D8CEBD" strokeWidth="1.5" />
      {/* Soft Pillow */}
      <rect x="40" y="55" width="60" height="30" rx="6" fill="#E2DACD" stroke="#C9BFA8" />
    </g>

    {/* Low Architectural Oak Coffee Table */}
    <g transform="translate(370, 360)">
      <ellipse cx="75" cy="40" rx="80" ry="24" fill="#29483F" opacity="0.08" />
      <ellipse cx="75" cy="22" rx="80" ry="22" fill="url(#oakWood)" stroke="#9F8B70" strokeWidth="1.5" />
      {/* Table Legs */}
      <rect x="25" y="22" width="8" height="24" rx="2" fill="#75624B" />
      <rect x="115" y="22" width="8" height="24" rx="2" fill="#75624B" />
      {/* Ceramic Water Carafe and Glass */}
      <rect x="65" y="2" width="12" height="18" rx="2" fill="#FCFBF8" stroke="#CCC1AF" strokeWidth="1" />
      <rect x="83" y="8" width="8" height="12" rx="1" fill="#EAE5DC" stroke="#CCC1AF" strokeWidth="1" />
    </g>

    {/* Right Armchair */}
    <g transform="translate(540, 270)">
      <ellipse cx="70" cy="140" rx="60" ry="14" fill="#000000" opacity="0.1" />
      <line x1="25" y1="110" x2="15" y2="145" stroke="#5A4736" strokeWidth="4" strokeLinecap="round" />
      <line x1="115" y1="110" x2="125" y2="145" stroke="#5A4736" strokeWidth="4" strokeLinecap="round" />
      <rect x="10" y="80" width="120" height="35" rx="8" fill="url(#chairLinen)" stroke="#D8CEBD" strokeWidth="1.5" />
      <path d="M10 85 C10 30 35 15 70 15 C105 15 130 30 130 85 Z" fill="url(#chairLinen)" stroke="#D8CEBD" strokeWidth="1.5" />
      <rect x="40" y="55" width="60" height="30" rx="6" fill="#29483F" opacity="0.85" />
    </g>

    {/* Modern Brass Pendant Lamp */}
    <g transform="translate(440, 24)">
      <line x1="0" y1="0" x2="0" y2="90" stroke="#7A6854" strokeWidth="1.5" />
      <path d="M-30 115 L30 115 L15 90 L-15 90 Z" fill="#B49A6A" stroke="#9E7947" strokeWidth="1" />
      <ellipse cx="0" cy="115" rx="30" ry="7" fill="#FFEEC2" opacity="0.75" />
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
        <stop offset="0%" stopColor="#1E3731" />
        <stop offset="100%" stopColor="#122420" />
      </linearGradient>
      <linearGradient id="warmSlat" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#CDBDA4" />
        <stop offset="100%" stopColor="#A8977D" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2D5A50" />
        <stop offset="100%" stopColor="#1B3832" />
      </linearGradient>
    </defs>

    {/* Deep Forest Canvas */}
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
      {/* Screen Frame */}
      <rect width="440" height="260" rx="8" fill="#0D1A17" stroke="#365C53" strokeWidth="3" />
      {/* Screen Glass */}
      <rect x="12" y="12" width="416" height="236" rx="4" fill="url(#screenGlow)" />

      {/* 3D Smile Topology Simulation Graphic */}
      <path
        d="M60 170 C120 120 200 110 260 110 C320 110 360 140 380 170"
        stroke="#B49A6A"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Teeth Archetype Arches */}
      {Array.from({ length: 10 }).map((_, i) => (
        <rect
          key={i}
          x={90 + i * 26}
          y={118 + Math.sin(i * 0.3) * 12}
          width="18"
          height="28"
          rx="4"
          fill="#FCFBF8"
          opacity="0.9"
          stroke="#B49A6A"
          strokeWidth="1"
        />
      ))}
      <text x="32" y="40" fill="#B49A6A" fontSize="12" fontFamily="monospace" letterSpacing="1">
        3D FACIAL HARMONY MODEL • BANANI STUDIO
      </text>
      <text x="32" y="60" fill="#9FB5AD" fontSize="10" fontFamily="sans-serif">
        Enamel Preservation: 98.4% • Biological Symmetry Checked
      </text>
    </g>

    {/* Ergonomic Consultation Table */}
    <rect y="440" width="800" height="160" fill="#182E27" />
    <line x1="0" y1="440" x2="800" y2="440" stroke="#B49A6A" strokeWidth="2" opacity="0.6" />

    {/* Digital Optical Intraoral Scanner Wand Base */}
    <g transform="translate(340, 390)">
      <ellipse cx="60" cy="55" rx="45" ry="12" fill="#0E1916" />
      <rect x="52" y="10" width="16" height="45" rx="3" fill="#DCD6C8" stroke="#B8AE9D" strokeWidth="1" />
      {/* Optical Scanner Tip with LED */}
      <polygon points="54,10 66,10 64,-15 56,-15" fill="#FCFBF8" />
      <circle cx="60" cy="-18" r="4" fill="#4ADE80" />
      <path d="M60 55 C60 75 110 80 140 85" stroke="#36574F" strokeWidth="4" strokeLinecap="round" fill="none" />
    </g>

    {/* Acoustic Calibration Stamp */}
    <g transform="translate(40, 520)">
      <text x="0" y="0" fill="#B49A6A" fontSize="11" fontFamily="sans-serif" fontWeight="600" letterSpacing="1.5">
        ACOUSTIC ISOLATION: 38dB DAMPENED
      </text>
      <text x="0" y="16" fill="#7C9990" fontSize="10" fontFamily="sans-serif">
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
    className={`bg-gradient-to-br from-[#29483F] via-[#1E3730] to-[#182C26] p-4 flex flex-col items-center justify-center text-center relative border border-[#34584E] ${className}`}
  >
    {/* Subtle geometric background motif */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B49A6A_1px,transparent_1px)] [background-size:12px_12px]" />

    {/* Monogram Seal */}
    <div className="relative z-10 w-16 h-16 rounded-sm bg-[#29483F] border-2 border-[#B49A6A] flex items-center justify-center mb-3 shadow-md">
      <span className="font-serif-atelier text-2xl font-bold text-[#FCFBF8]">
        {monogram}
      </span>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#B49A6A] rounded-xs flex items-center justify-center text-[9px] font-bold text-[#29483F]">
        ✓
      </div>
    </div>

    {/* Sample Profile Label */}
    <span className="relative z-10 text-[9px] uppercase tracking-widest font-mono text-[#B49A6A] mb-1 font-semibold">
      {isBn ? 'নমুনা চিকিৎসক প্রোফাইল' : 'SAMPLE PRACTITIONER'}
    </span>

    <span className="relative z-10 text-[11px] font-medium text-[#E7E2D8] leading-tight">
      {isBn ? specialtyBn : specialtyEn}
    </span>

    <span className="relative z-10 text-[9px] text-[#A5B5A5] mt-1 font-mono">
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
        <stop offset="0%" stopColor="#F9F6F0" />
        <stop offset="100%" stopColor="#EAE3D5" />
      </linearGradient>
      <linearGradient id="consultGlow" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#FCFBF8" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="consultFloor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#DDD5C5" />
        <stop offset="100%" stopColor="#C6BCAB" />
      </linearGradient>
      <linearGradient id="doctorCoat" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3830" />
        <stop offset="100%" stopColor="#142621" />
      </linearGradient>
      <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4AF7A" />
        <stop offset="100%" stopColor="#B49A6A" />
      </linearGradient>
    </defs>

    {/* Background Wall Canvas */}
    <rect width="800" height="450" fill="url(#consultWall)" />

    {/* Architectural Vertical Slats on Left */}
    <g opacity="0.85">
      <rect x="40" y="30" width="120" height="420" fill="#E2DACB" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={45 + i * 9.5} y="40" width="4.5" height="400" rx="1" fill="#CDBFA9" />
      ))}
    </g>

    {/* Warm Ambient Window Light on Right */}
    <rect x="520" y="40" width="240" height="380" rx="4" fill="#FFFFFF" opacity="0.7" stroke="#D3C7B4" strokeWidth="2" />
    <line x1="640" y1="40" x2="640" y2="420" stroke="#DDD3C0" strokeWidth="2" />
    <line x1="520" y1="220" x2="760" y2="220" stroke="#DDD3C0" strokeWidth="2" />
    <polygon points="520,40 800,80 800,450 520,430" fill="url(#consultGlow)" opacity="0.35" />

    {/* Architectural Flooring */}
    <polygon points="0,450 800,450 800,600 0,600" fill="url(#consultFloor)" />
    <line x1="0" y1="450" x2="800" y2="450" stroke="#C3B6A1" strokeWidth="2" />

    {/* Modern Consultation Table */}
    <rect x="220" y="360" width="360" height="18" rx="3" fill="#FCFBF8" stroke="#D0C4AF" strokeWidth="1.5" />
    <rect x="240" y="378" width="16" height="150" fill="#A89B86" />
    <rect x="544" y="378" width="16" height="150" fill="#A89B86" />

    {/* Digital 3D Dental Display Screen on Table */}
    <rect x="330" y="240" width="140" height="100" rx="4" fill="#142621" stroke="#B49A6A" strokeWidth="2" />
    <rect x="340" y="250" width="120" height="80" rx="2" fill="#1C3831" />
    {/* Display Graphic - Tooth Arch Curve */}
    <path d="M 360 305 Q 400 265 440 305" stroke="#B49A6A" strokeWidth="3" fill="none" strokeDasharray="2,2" />
    <circle cx="400" cy="285" r="8" fill="#4ADE80" opacity="0.9" />
    <text x="400" y="322" textAnchor="middle" fill="#C5D9D2" fontSize="8" fontFamily="monospace">
      DIGITAL 3D SCAN
    </text>
    {/* Monitor Stand */}
    <rect x="395" y="340" width="10" height="20" fill="#7C7160" />
    <ellipse cx="400" cy="360" rx="24" ry="4" fill="#585044" />

    {/* Gentle Potted Greenery on Right */}
    <ellipse cx="700" cy="480" rx="26" ry="7" fill="#887E6D" />
    <path d="M 685 480 L 690 540 L 710 540 L 715 480 Z" fill="#D7CEC0" stroke="#A89B86" strokeWidth="1.5" />
    <path d="M 700 480 Q 670 420 660 390 Q 685 410 700 450" fill="#2E5A4D" />
    <path d="M 700 480 Q 720 410 740 375 Q 730 420 705 450" fill="#3A7061" />
    <path d="M 700 460 Q 700 380 690 350 Q 710 400 700 460" fill="#2A5246" />

    {/* Dentist Figure (Stylized Atelier Minimalist) */}
    <g transform="translate(190, 220)">
      {/* Head */}
      <circle cx="50" cy="35" r="22" fill="#DFD2BF" />
      {/* Hair */}
      <path d="M 32 32 Q 50 12 68 28 Q 62 16 42 16 Z" fill="#3D3025" />
      {/* Torso in Forest Green / White Lab Coat */}
      <path d="M 24 60 C 24 55 76 55 76 60 L 86 160 L 14 160 Z" fill="url(#doctorCoat)" />
      {/* Lapel & Stethoscope / Collar */}
      <path d="M 40 58 L 50 90 L 60 58" stroke="#FCFBF8" strokeWidth="2.5" fill="none" />
      {/* Arm Gesturing to Screen */}
      <path d="M 74 80 Q 110 110 135 95" stroke="url(#doctorCoat)" strokeWidth="14" strokeLinecap="round" fill="none" />
      <circle cx="138" cy="95" r="6" fill="#DFD2BF" />
    </g>

    {/* Patient Figure (Stylized Atelier Minimalist on Comfortable Chair) */}
    <g transform="translate(480, 240)">
      {/* Ergonomic Chair Back */}
      <rect x="35" y="40" width="35" height="120" rx="8" fill="#D8CFBD" stroke="#B8AC98" strokeWidth="2" />
      {/* Head */}
      <circle cx="52" cy="25" r="20" fill="#E8DEC9" />
      {/* Hair */}
      <path d="M 34 22 Q 52 5 70 20 Q 60 10 42 10 Z" fill="#5A4739" />
      {/* Torso in Warm Neutral Knit */}
      <path d="M 30 50 C 30 46 74 46 74 50 L 80 150 L 24 150 Z" fill="#C9BDAA" />
      {/* Receptive Posture / Arm on Table */}
      <path d="M 32 75 Q 0 95 -30 115" stroke="#C9BDAA" strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="-32" cy="115" r="6" fill="#E8DEC9" />
    </g>

    {/* Reassuring Atelier Seal Stamp in Corner */}
    <g transform="translate(40, 500)">
      <rect width="180" height="34" rx="2" fill="#142621" />
      <text x="14" y="21" fill="#B49A6A" fontSize="10" fontFamily="sans-serif" fontWeight="600" letterSpacing="1.2">
        GENTLE CHAIRSIDE PACING
      </text>
    </g>
  </svg>
);

