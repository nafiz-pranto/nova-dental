import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  // Architectural design: Deep blue (#365469), Muted blue (#A9C0D0), Soft white (#FFFFFF)
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65869C] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.99] rounded-md';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[50px]',
  };

  const variantStyles = {
    primary: 'bg-[#365469] text-[#FFFFFF] hover:bg-[#284051] shadow-sm hover:shadow active:bg-[#1E313E] border border-transparent',
    secondary: 'bg-[#FFFFFF] text-[#365469] border border-[#D7E3EB] hover:bg-[#E4EEF5] hover:border-[#A9C0D0] hover:text-[#263746] shadow-2xs',
    outline: 'bg-transparent border border-[#65869C] text-[#365469] hover:bg-[#E4EEF5] hover:border-[#365469] active:bg-[#D7E3EB]',
    accent: 'bg-[#E4EEF5] text-[#365469] border border-[#D7E3EB] hover:bg-[#D7E3EB] hover:text-[#263746] font-semibold',
    ghost: 'bg-transparent text-[#365469] hover:bg-[#E4EEF5] hover:text-[#263746]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
