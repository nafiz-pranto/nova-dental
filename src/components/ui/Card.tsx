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
  hoverEffect = true,
  onClick,
}) => {
  const variantStyles = {
    light: 'bg-[#FCFBF8] border border-[#E7E2D8] text-[#343A36]',
    subtle: 'bg-[#F6F3EC] border border-[#E7E2D8] text-[#343A36]',
    dark: 'bg-[#29483F] text-[#FCFBF8] border border-[#34584E]',
    outline: 'bg-transparent border border-[#E7E2D8] text-[#343A36]',
  };

  const hoverClass = hoverEffect
    ? 'hover:border-[#B49A6A] hover:shadow-md transition-all duration-300'
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-sm p-6 sm:p-7 ${variantStyles[variant]} ${hoverClass} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

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
