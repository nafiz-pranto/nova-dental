import React from 'react';
import { Link } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  labelEn: string;
  labelBn: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  const { isBn } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-xs text-[#777D77] ${className}`}>
      <Link to="/" className="inline-flex items-center gap-1 hover:text-[#29483F] transition-colors">
        <Home className="w-3.5 h-3.5 text-[#B49A6A]" />
        <span>{isBn ? 'নীড়' : 'Home'}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-[#A5B5A5] shrink-0" />
            {isLast || !item.to ? (
              <span className="text-[#29483F] font-medium truncate max-w-[200px] sm:max-w-none">
                {isBn ? item.labelBn : item.labelEn}
              </span>
            ) : (
              <Link
                to={item.to}
                className="hover:text-[#29483F] transition-colors truncate max-w-[150px] sm:max-w-none"
              >
                {isBn ? item.labelBn : item.labelEn}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
