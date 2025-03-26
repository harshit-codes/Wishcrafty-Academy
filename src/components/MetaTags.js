import React, { useEffect } from 'react';
import { useSiteConfig } from '../contexts/ContentContext';

/**
 * A simple MetaTags component that updates the document title
 * without requiring the react-helmet dependency
 */
const MetaTags = ({ 
  title, 
  description,
  path = '',
  image,
}) => {
  const siteConfig = useSiteConfig();
  const meta = siteConfig.meta || {};
  
  // Use provided values or fall back to site config
  const pageTitle = title || meta.title || 'WishCrafty Academy';
  const pageDescription = description || meta.description || 'Learn to build and manage products in 2 weeks using AI + No-Code';
  
  // Update document title on component mount
  useEffect(() => {
    // Set page title
    document.title = `${pageTitle} - ${siteConfig.siteTagline || 'Learn, Build, Grow'}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
    
    // No need to update other meta tags as they're set in index.html
    
    return () => {
      // Restore default title on unmount
      document.title = siteConfig.siteName || 'WishCrafty Academy';
    };
  }, [pageTitle, pageDescription, siteConfig]);
  
  // This component doesn't render anything
  return null;
};

export default MetaTags;
