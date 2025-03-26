import React, { useState, useEffect, useRef } from 'react';
import { FeaturesIcon, BenefitsIcon, ProcessIcon, ContactIcon, OverviewIcon, TeachingIcon, ToolsIcon, PricingIcon, FaqIcon } from './components/SectionIcons';
import { ToastProvider } from './contexts/ToastContext';
import { ContentProvider } from './contexts/ContentContext';

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

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center', 
          color: 'white',
          backgroundColor: '#121212',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1>Something went wrong</h1>
          <p>There was an error loading the application. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ 
              background: '#9D4EDD', 
              color: 'white', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '20px',
              marginTop: '20px',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
          {this.state.error && (
            <pre style={{ 
              marginTop: '20px', 
              padding: '15px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '8px',
              textAlign: 'left',
              maxWidth: '80%',
              overflow: 'auto'
            }}>
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // State for showing legal modal
  const [showLegalModal, setShowLegalModal] = useState(false);
  
  // Track scrolling for navbar
  const [scrolled, setScrolled] = useState(false);
  
  // Track current active section
  const [activeSection, setActiveSection] = useState('home');
  
  // Reference to main content
  const mainRef = useRef(null);
  
  // Define all sections for navbar
  const sections = [
    { id: 'overview', name: 'Program Overview', icon: OverviewIcon },
    { id: 'teaching', name: 'Teaching Methodology', icon: TeachingIcon },
    { id: 'tools', name: 'Tools & Tech', icon: ToolsIcon },
    { id: 'pricing', name: 'Program Fee', icon: PricingIcon },
    { id: 'faq', name: 'FAQs', icon: FaqIcon }
  ];
  
  // Handle scrolling to section
  const scrollToSection = (sectionId) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  };
  
  // Track scrolling with error handling
  useEffect(() => {
    const handleScroll = () => {
      try {
        setScrolled(window.scrollY > 50);
        
        // Determine active section based on scroll position
        const scrollPosition = window.scrollY + 200; // Offset for better detection
        
        let currentSection = 'home';
        
        // Check position against each section
        const homeSection = document.getElementById('home');
        if (homeSection && scrollPosition < homeSection.offsetTop + homeSection.offsetHeight) {
          currentSection = 'home';
        }
        
        sections.forEach(section => {
          const element = document.getElementById(section.id);
          if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            currentSection = section.id;
          }
        });
        
        setActiveSection(currentSection);
      } catch (error) {
        console.error("Error handling scroll:", error);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  
  return (
    <ErrorBoundary>
      <ContentProvider>
        <ToastProvider>
          <div className="App">
            {/* Added a div to push content below the fixed announcement banner */}
            <div className="announcement-spacer"></div>
            
            <Navbar 
              sections={sections} 
              activeSection={activeSection} 
              scrolled={scrolled} 
              scrollToSection={scrollToSection} 
            />
            
            <main ref={mainRef}>
              {/* Render each section inside its own error boundary */}
              <ErrorBoundary>
                <HeroSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <OverviewSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <TeachingSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <ToolsSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <PricingSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <FaqSection />
              </ErrorBoundary>
              
              <ErrorBoundary>
                <Footer setShowLegalModal={setShowLegalModal} />
              </ErrorBoundary>
            </main>
            
            <LegalModal 
              showLegalModal={showLegalModal} 
              setShowLegalModal={setShowLegalModal} 
            />
          </div>
        </ToastProvider>
      </ContentProvider>
    </ErrorBoundary>
  );
}

export default App;
