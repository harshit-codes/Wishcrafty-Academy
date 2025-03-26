import React from 'react';
import { useSiteConfig } from '../contexts/ContentContext';

const Navbar = ({ sections }) => {
  const siteConfig = useSiteConfig();
  
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-primary">
            <span className="section-title">{siteConfig.siteName || 'WishCrafty Academy'}</span>
          </div>
          
          <div className="navbar-sections">
            <ul className="navbar-links">
              {sections.map((section) => (
                <li key={section.id}>
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
