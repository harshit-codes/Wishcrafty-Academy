import React from 'react';
import logo from '../assets/images/logo.png';
import Badge from './ui/Badge';
import SocialIcon from './ui/SocialIcon';
import siteConfig from '../data/siteConfig.json';

// Define social media icons
const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 20} height={props.height || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 20} height={props.height || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 20} height={props.height || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const DiscordIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 20} height={props.height || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 18a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9z"></path>
    <path d="M15 14c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
    <path d="M9 14c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"></path>
    <path d="M10 18s-1-1-3-1-3 1-3 1"></path>
    <path d="M14 18s1-1 3-1 3 1 3 1"></path>
  </svg>
);

const YouTubeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 20} height={props.height || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

// Map platform names to icon components
const SocialIcons = {
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  discord: DiscordIcon,
  youtube: YouTubeIcon
};

// Modify the component declaration to accept the scrollToSection prop
const Footer = ({ setShowLegalModal, navigationSections }) => {
  const currentYear = new Date().getFullYear();
  
  // Create WhatsApp link
  const whatsappNumber = siteConfig.contact.whatsapp;
  const whatsappMessage = encodeURIComponent(siteConfig.contact.whatsappMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={logo} alt={`${siteConfig.siteName} Logo`} className="footer-logo-img" />
            <p className="footer-tagline">{siteConfig.siteDescription}</p>
            <p className="footer-slogan">{siteConfig.siteTagline}</p>
            <div className="footer-social">
              {/* Generate social icons from config */}
              {Object.entries(siteConfig.social).map(([platform, data]) => (
                <SocialIcon 
                  key={platform}
                  url={data.active ? data.url : undefined}
                  icon={SocialIcons[platform]}
                  label={data.displayName}
                  comingSoon={!data.active}
                  className="social-link" // For backward compatibility
                />
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Program</h4>
              <ul>
                <li>
                  <a 
                    href="#overview"
                    className="footer-nav-button"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a 
                    href="#teaching"
                    className="footer-nav-button"
                  >
                    Methodology
                  </a>
                </li>
                <li>
                  <a 
                    href="#tools"
                    className="footer-nav-button"
                  >
                    Tools & Tech
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing"
                    className="footer-nav-button"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#faq"
                    className="footer-nav-button"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
                <li><a href={whatsappLink} target="_blank" rel="noopener noreferrer">Send a Message</a></li>
                {/* "Book a Call" link removed */}
              </ul>
              <div className="footer-newsletter">
                <h4>Stay Updated</h4>
                <p>Join our newsletter for program updates and no-code tips</p>
                <div className="newsletter-form">
                  <div className="newsletter-coming-soon">
                    <Badge text="Soon" variant="coming-soon" position="bottom-center" />
                    <button className="newsletter-button" disabled>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} {siteConfig.siteName}. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button className="legal-link" onClick={() => setShowLegalModal(true)}>Terms & Conditions</button>
            <button className="legal-link" onClick={() => setShowLegalModal(true)}>Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
