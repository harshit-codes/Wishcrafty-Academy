import React from 'react';
import { useSiteConfig } from '../contexts/ContentContext';

const Navbar = ({ sections, activeSection, scrolled }) => {
  const siteConfig = useSiteConfig();
  
  // Get the title for the active section
  const displayTitle = () => {
    if (!activeSection || activeSection === 'home') {
      return siteConfig.siteName;
    }
    
    const section = sections.find(s => s.id === activeSection);
    return section ? section.name : siteConfig.siteName;
  };
  
  return (
    <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-primary">
            <span className="section-title">{displayTitle()}</span>
          </div>
          
          <div className="navbar-sections">
            <ul className="navbar-links">
              {sections.map((section) => (
                <li 
                  key={section.id} 
                  className={activeSection === section.id ? 'active' : ''}
                >
                  <a 
                    href={`#${section.id}`}
                    className="nav-link"
                    aria-label={`Navigate to ${section.name}`}
                  >
                    {section.icon && <section.icon />}
                  </a>
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
