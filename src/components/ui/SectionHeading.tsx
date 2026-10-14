import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  isDark = false,
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-2.5">
          <span className={`w-4 h-[1.5px] ${isDark ? 'bg-[#A9C0D0]' : 'bg-[#65869C]'}`} aria-hidden="true" />
          <p
            className={`text-xs font-semibold uppercase tracking-wider ${
              isDark ? 'text-[#A9C0D0]' : 'text-[#65869C]'
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight font-serif-atelier text-balance ${
          isDark ? 'text-[#FFFFFF]' : 'text-[#263746]'
        } mb-3`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-[#E4EEF5]' : 'text-[#627482]'
          } ${align === 'center' ? 'max-w-2xl' : 'max-w-xl'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
