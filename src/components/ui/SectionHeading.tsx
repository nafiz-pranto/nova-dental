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
        <p
          className={`text-xs font-semibold uppercase tracking-widest ${
            isDark ? 'text-[#B49A6A]' : 'text-[#777D77]'
          } mb-3`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight font-serif-atelier text-balance ${
          isDark ? 'text-[#FCFBF8]' : 'text-[#29483F]'
        } mb-3.5`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed font-light ${
            isDark ? 'text-[#A5B5A5]' : 'text-[#343A36]'
          } ${align === 'center' ? 'max-w-2xl' : 'max-w-xl'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
