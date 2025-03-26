import React from 'react';
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

// Define HomeIcon inline since it seems to be missing from SectionIcons
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

function App() {
  // Use React's useState for state management
  const [activeSection, setActiveSection] = React.useState('home');
  const [scrolled, setScrolled] = React.useState(false);
  const [showLegalModal, setShowLegalModal] = React.useState(false);
  
  // Define sections - exclude home from navigation display
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
  
  // Simplified scrollToSection function
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
  
  // Track scroll position for navbar appearance
  React.useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance based on scroll position
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['overview', 'teaching', 'tools', 'pricing', 'faq'];
      
      // Default to home section
      let current = 'home';
      
      // Find current section in view
      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          current = id;
          break;
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
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