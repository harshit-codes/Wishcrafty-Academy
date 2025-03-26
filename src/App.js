import React, { useState, useEffect, useRef } from 'react';
import { FeaturesIcon, BenefitsIcon, ProcessIcon, ContactIcon } from './components/SectionIcons';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import OverviewSection from './components/sections/OverviewSection';
import TeachingSection from './components/sections/TeachingSection';
import ToolsSection from './components/sections/ToolsSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLegalModal, setShowLegalModal] = useState(false);
  const mainRef = useRef(null);
  
  // Section data with names and icons - 5 for menu navigation
  const sections = [
    { id: 'overview', name: 'Overview', icon: FeaturesIcon },
    { id: 'teaching', name: 'Teaching', icon: BenefitsIcon },
    { id: 'tools', name: 'Tools & Tech', icon: ProcessIcon },
    { id: 'pricing', name: 'Pricing', icon: ContactIcon },
    { id: 'faq', name: 'FAQs', icon: ContactIcon }
  ];
  
  // Handle scroll events - updated for scroll snapping
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      if (!mainRef.current) return;
      
      // Determine active section based on scroll position
      const mainRect = mainRef.current.getBoundingClientRect();
      const viewportMiddle = window.innerHeight / 2;
      
      const sectionIds = ['home', ...sections.map(s => s.id)];
      const currentSection = sectionIds.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport's center area
          const sectionTop = rect.top - mainRect.top;
          const sectionBottom = rect.bottom - mainRect.top;
          const sectionMiddle = (sectionTop + sectionBottom) / 2;
          
          // Determine active section by checking which section's middle is closest to viewport middle
          return Math.abs(sectionMiddle - viewportMiddle) < window.innerHeight * 0.3;
        }
        return false;
      }) || 'home';
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Add scroll event listener to main element instead of window
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      
      // Initial check
      handleScroll();
    }
    
    // Also keep window scroll listener for navbar styling
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, sections, activeSection]);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const rotatingWords = [
    "Ideation",
    "Discovery",
    "Planning",
    "Designing",
    "Prototyping",
    "Building",
    "Testing",
    "Launching",
    "Marketing",
    "Selling",
    "Scaling",
    "Optimizing"
  ];
  
  return (
    <div className="App">
      <Navbar 
        sections={sections} 
        activeSection={activeSection} 
        scrolled={scrolled} 
        scrollToSection={scrollToSection} 
      />
      
      <main ref={mainRef}>
        <HeroSection rotatingWords={rotatingWords} />
        <OverviewSection />
        <TeachingSection />
        <ToolsSection />
        <PricingSection />
        <FaqSection />
        <Footer setShowLegalModal={setShowLegalModal} />
      </main>
      
      <LegalModal 
        showLegalModal={showLegalModal} 
        setShowLegalModal={setShowLegalModal} 
      />
    </div>
  );
}

export default App;
