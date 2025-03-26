import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LegalModal from '../LegalModal';
import { OverviewIcon, TeachingIcon, ToolsIcon, PricingIcon, FaqIcon } from '../SectionIcons';

const MainLayout = ({ children }) => {
  const [showLegalModal, setShowLegalModal] = useState(false);
  
  // Define navigation sections directly here for simplicity
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
  
  return (
    <div className="App">
      <Navbar sections={navigationSections} />
      
      <main>
        {children}
      </main>
      
      <Footer 
        setShowLegalModal={setShowLegalModal}
        navigationSections={navigationSections}
      />
      
      <LegalModal 
        showLegalModal={showLegalModal}
        setShowLegalModal={setShowLegalModal}
      />
    </div>
  );
};

export default MainLayout;
