import React, { useState, useEffect } from 'react';

const Navbar = ({ sections, activeSection, scrolled, scrollToSection }) => {
  const [titleClass, setTitleClass] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [prevSection, setPrevSection] = useState(null);
  
  // Get current section data with smoother transitions
  useEffect(() => {
    // Don't revert to "WishCrafty Academy" between section transitions
    if (activeSection === 'home' || !prevSection || prevSection === 'home') {
      // Only set to WishCrafty Academy when coming from home or first load
      // Start fade out
      setTitleClass('title-fade-out');
      
      // Wait for fade out, then update text and fade in
      const timer = setTimeout(() => {
        const currentSection = activeSection === 'home'
          ? { name: 'WishCrafty Academy' }
          : sections.find(s => s.id === activeSection) || { name: 'WishCrafty Academy' };
        
        setDisplayedTitle(currentSection.name);
        setTitleClass('title-fade-in');
      }, 150); // Short delay for the transition
      
      return () => clearTimeout(timer);
    } else {
      // Direct transition between sections
      setTitleClass('title-fade-out');
      
      const timer = setTimeout(() => {
        const currentSection = sections.find(s => s.id === activeSection);
        if (currentSection) {
          setDisplayedTitle(currentSection.name);
          setTitleClass('title-fade-in');
        }
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [activeSection, sections]);
  
  // Update prevSection when activeSection changes
  useEffect(() => {
    setPrevSection(activeSection);
  }, [activeSection]);
  
  return (
    <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-primary">
            <span className={`section-title flowing-gradient ${titleClass}`}>{displayedTitle}</span>
          </div>
          
          <div className={`navbar-sections ${scrolled ? 'minimized' : ''}`}>
            <ul className="section-icons">
              {sections.map(section => (
                <li 
                  key={section.id} 
                  className={`${activeSection === section.id ? 'active' : ''} ${scrolled && activeSection !== section.id ? 'inactive' : ''}`}
                >
                  <button 
                    onClick={() => scrollToSection(section.id)} 
                    className="section-icon-btn"
                    aria-label={section.name}
                    title={section.name}
                  >
                    <div className="icon-container">
                      <section.icon />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
