import React, { useState, useEffect } from 'react';
import HeroSection from './components/sections/HeroSection';
import OverviewSection from './components/sections/OverviewSection';
import TeachingSection from './components/sections/TeachingSection';
import ToolsSection from './components/sections/ToolsSection';
import PricingSection from './components/sections/PricingSection';
import FaqSection from './components/sections/FaqSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import MetaTags from './components/MetaTags';
import { ContentProvider } from './contexts/ContentContext';
import { ToastProvider } from './contexts/ToastContext';
import { OverviewIcon, TeachingIcon, ToolsIcon, PricingIcon, FaqIcon } from './components/SectionIcons';
import './styles/App.css';

// Define sections for navigation
const navigationSections = [
  {
    id: 'overview',
    name: 'Program Overview',
    icon: OverviewIcon,
  },
  {
    id: 'teaching',
    name: 'Teaching Methodology',
    icon: TeachingIcon,
  },
  {
    id: 'tools',
    name: 'Tools & Tech',
    icon: ToolsIcon,
  },
  {
    id: 'pricing',
    name: 'Program Fee',
    icon: PricingIcon,
  },
  {
    id: 'faq',
    name: 'FAQs',
    icon: FaqIcon,
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);
  
  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const offset = 100;
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    
    window.scrollTo({
      top: sectionPosition - offset,
      behavior: 'smooth'
    });
  };
  
  // Track scroll position for navbar appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance based on scroll position
      setScrolled(window.scrollY > 50);
      
      // Get all section IDs including home
      const sections = ['home', 'overview', 'teaching', 'tools', 'pricing', 'faq'];
      
      // Calculate which section is currently visible
      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        
        // Get section position data
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Consider section active if it occupies significant portion of the viewport
        if (rect.top < viewportHeight * 0.5 && rect.bottom > 0) {
          setActiveSection(id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <ContentProvider>
      <ToastProvider>
        <div className="App">
          <MetaTags />
          
          <Navbar 
            sections={navigationSections}
            activeSection={activeSection}
            scrolled={scrolled}
            scrollToSection={scrollToSection}
          />
          
          <div className="content-wrapper">
            <main>
              <HeroSection />
              <OverviewSection />
              <TeachingSection />
              <ToolsSection />
              <PricingSection />
              <FaqSection />
            </main>
            
            <Footer setShowLegalModal={setShowLegalModal} />
          </div>
          
          <LegalModal 
            showLegalModal={showLegalModal}
            setShowLegalModal={setShowLegalModal}
          />
        </div>
      </ToastProvider>
    </ContentProvider>
  );
}

export default App;