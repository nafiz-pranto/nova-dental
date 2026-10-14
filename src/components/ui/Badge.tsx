import React from 'react';

export const Badge: React.FC<{
  children: React.ReactNode;
  variant?: 'gold' | 'neutral' | 'sage' | 'dark';
  className?: string;
}> = ({ children, variant = 'neutral', className = '' }) => {
  const styles = {
    gold: 'bg-[#F6F3EC] text-[#B49A6A] border-[#E7E2D8]',
    neutral: 'bg-[#E7E2D8] text-[#343A36] border-[#D5CEC2]',
    sage: 'bg-[#A5B5A5]/25 text-[#29483F] border-[#A5B5A5]/50',
    dark: 'bg-[#29483F] text-[#FCFBF8] border-[#34584E]',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] uppercase font-medium tracking-wider rounded-sm border ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
