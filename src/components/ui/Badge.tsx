import React from 'react';

export const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'blue' | 'neutral' | 'subtle' | 'dark' | 'gold' | 'sage';
  className?: string;
}> = ({ children, variant = 'neutral', className = '' }) => {
  const styles = {
    blue: 'bg-[#E4EEF5] text-[#365469] border-[#D7E3EB]',
    neutral: 'bg-[#F7FAFC] text-[#627482] border-[#D7E3EB]',
    subtle: 'bg-[#FFFFFF] text-[#65869C] border-[#D7E3EB]',
    dark: 'bg-[#365469] text-[#FFFFFF] border-[#65869C]',
    gold: 'bg-[#E4EEF5] text-[#365469] border-[#D7E3EB]',
    sage: 'bg-[#E4EEF5] text-[#65869C] border-[#D7E3EB]',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-[11px] font-medium tracking-wide rounded border ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
