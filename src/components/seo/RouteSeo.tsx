import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface RouteSeoProps {
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  canonicalPath: string;
  schemaData?: Record<string, any>;
}

export const RouteSeo: React.FC<RouteSeoProps> = ({
  titleEn,
  titleBn,
  descriptionEn,
  descriptionBn,
  canonicalPath,
  schemaData,
}) => {
  const { isBn } = useLanguage();

  useEffect(() => {
    const activeTitle = isBn ? titleBn : titleEn;
    const activeDescription = isBn ? descriptionBn : descriptionEn;

    // 1. Dynamic Page Title
    document.title = activeTitle;

    // 2. Dynamic Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', activeDescription);

    // 3. OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', activeTitle);

    // 4. OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', activeDescription);

    // 5. OpenGraph URL
    const fullUrl = window.location.origin + canonicalPath;
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', fullUrl);

    // 6. Twitter Title & Description
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', activeTitle);

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', activeDescription);

    // 7. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 8. Structured Data (JSON-LD)
    const scriptId = 'route-specific-schema-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up route-specific script on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isBn, titleEn, titleBn, descriptionEn, descriptionBn, canonicalPath, schemaData]);

  return null;
};
