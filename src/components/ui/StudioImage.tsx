import React, { useState } from 'react';
import { 
  AtelierOperatoryArtwork, 
  AtelierLoungeArtwork, 
  AtelierAcousticSuiteArtwork,
  AtelierConsultationArtwork 
} from './StudioArtwork';

interface StudioImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  artworkType?: 'operatory' | 'lounge' | 'acoustic' | 'consultation';
  category?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const StudioImage: React.FC<StudioImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio,
  artworkType,
  category,
  loading = 'lazy',
  fetchPriority,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedArtwork = artworkType || (category === 'acoustic' ? 'acoustic' : category === 'lounge' ? 'lounge' : category === 'consultation' ? 'consultation' : 'operatory');

  const renderArtwork = () => {
    switch (resolvedArtwork) {
      case 'consultation':
        return <AtelierConsultationArtwork className="w-full h-full object-cover" title={alt} />;
      case 'lounge':
        return <AtelierLoungeArtwork className="w-full h-full object-cover" title={alt} />;
      case 'acoustic':
        return <AtelierAcousticSuiteArtwork className="w-full h-full object-cover" title={alt} />;
      case 'operatory':
      default:
        return <AtelierOperatoryArtwork className="w-full h-full object-cover" title={alt} />;
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#E4EEF5] ${className} ${aspectRatio || ''}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          referrerPolicy="no-referrer"
          fetchPriority={fetchPriority}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      ) : (
        /* Curated Architectural Vector Fallback in muted blue */
        <div className="w-full h-full flex items-center justify-center bg-[#FFFFFF]">
          {renderArtwork()}
        </div>
      )}
    </div>
  );
};
