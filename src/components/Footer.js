import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = ({ setShowLegalModal }) => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="WishCrafty Academy Logo" className="footer-logo-img" />
          </div>
          <div className="footer-social">
            <a href="https://linkedin.com/in/harshitchoudhary" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <span className="social-link coming-soon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="coming-soon-badge">Soon</span>
            </span>
            <span className="social-link coming-soon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              <span className="coming-soon-badge">Soon</span>
            </span>
          </div>
        </div>
        
        <div className="footer-middle">
          <p className="footer-text">Join our learning community and transform your product development journey.</p>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 WishCrafty Academy. All rights reserved.</p>
          <button className="legal-link" onClick={() => setShowLegalModal(true)}>Legal</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
