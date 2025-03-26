import React, { createContext, useContext } from 'react';

// Import all content files
import siteConfig from '../data/siteConfig.json';
import heroContent from '../data/content/hero.json';
import overviewContent from '../data/content/overview.json';
import teachingContent from '../data/content/teaching.json';
import toolsContent from '../data/content/tools.json';
import faqContent from '../data/content/faq.json';

// Create context with default values to prevent undefined errors
const ContentContext = createContext({
  site: {},
  hero: {},
  overview: {},
  teaching: {},
  tools: {},
  faq: {}
});

// Create provider
export const ContentProvider = ({ children }) => {
  // Combine all content into a single structure
  const content = {
    site: siteConfig,
    hero: heroContent,
    overview: overviewContent,
    teaching: teachingContent,
    tools: toolsContent,
    faq: faqContent
  };

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the content context with error handling
export const useContent = () => {
  try {
    const context = useContext(ContentContext);
    return context;
  } catch (error) {
    console.error("Error using ContentContext:", error);
    return {
      site: {},
      hero: {},
      overview: {},
      teaching: {},
      tools: {},
      faq: {}
    };
  }
};

// Convenience hooks for specific content sections with error handling
export const useSiteConfig = () => {
  try {
    return useContent().site || {};
  } catch (error) {
    console.error("Error using siteConfig:", error);
    return {};
  }
};

export const useHeroContent = () => {
  try {
    return useContent().hero || {};
  } catch (error) {
    console.error("Error using heroContent:", error);
    return {};
  }
};

export const useOverviewContent = () => {
  try {
    return useContent().overview || {};
  } catch (error) {
    console.error("Error using overviewContent:", error);
    return {};
  }
};

export const useTeachingContent = () => {
  try {
    return useContent().teaching || {};
  } catch (error) {
    console.error("Error using teachingContent:", error);
    return {};
  }
};

export const useToolsContent = () => {
  try {
    return useContent().tools || {};
  } catch (error) {
    console.error("Error using toolsContent:", error);
    return {};
  }
};

export const useFaqContent = () => {
  try {
    return useContent().faq || {};
  } catch (error) {
    console.error("Error using faqContent:", error);
    return {};
  }
};
