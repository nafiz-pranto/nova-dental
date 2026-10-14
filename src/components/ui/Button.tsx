import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-sm gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 rounded-sm gap-2',
    lg: 'text-sm sm:text-base px-7 py-3.5 rounded-sm gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#29483F] text-[#FCFBF8] hover:bg-[#1E3730] active:bg-[#182C26] border border-[#29483F] shadow-xs',
    secondary:
      'bg-[#FCFBF8] text-[#29483F] hover:bg-[#F6F3EC] active:bg-[#E7E2D8] border border-[#E7E2D8] shadow-xs',
    outline:
      'bg-transparent text-[#29483F] hover:bg-[#F6F3EC] active:bg-[#E7E2D8] border border-[#E7E2D8]',
    gold:
      'bg-[#B49A6A] text-[#FCFBF8] hover:bg-[#A38959] active:bg-[#91794A] border border-[#B49A6A] font-semibold shadow-xs',
    ghost:
      'bg-transparent text-[#777D77] hover:text-[#29483F] hover:bg-[#E7E2D8]/50 active:bg-[#E7E2D8]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
