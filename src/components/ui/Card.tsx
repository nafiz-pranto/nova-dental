import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'subtle' | 'dark' | 'outline';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'light',
  hoverEffect = false,
  onClick,
}) => {
  const variantStyles = {
    light: 'bg-[#FFFFFF] border border-[#D7E3EB] text-[#263746]',
    subtle: 'bg-[#E4EEF5] border border-[#D7E3EB] text-[#263746]',
    dark: 'bg-[#365469] border border-[#65869C]/40 text-[#FFFFFF]',
    outline: 'bg-transparent border border-[#D7E3EB] text-[#263746]',
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-[#A9C0D0] cursor-pointer'
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-lg p-6 ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export const CardBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'neutral' | 'subtle';
  className?: string;
}> = ({ children, variant = 'neutral', className = '' }) => {
  const styles = {
    primary: 'bg-[#E4EEF5] text-[#365469] border border-[#D7E3EB]',
    neutral: 'bg-[#F7FAFC] text-[#627482] border border-[#D7E3EB]',
    subtle: 'bg-[#FFFFFF] text-[#65869C] border border-[#D7E3EB]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium rounded-full ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
