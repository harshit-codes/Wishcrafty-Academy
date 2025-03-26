import React from 'react';
import logo from '../../assets/images/logo.png';
import MagnetLines from '../MagnetLines';
import RotatingText from '../RotatingText';
import Button from '../ui/Button';
import ScrollVelocityText from '../animations/ScrollVelocityText';
import { useHeroContent, useSiteConfig } from '../../contexts/ContentContext';

const HeroSection = () => {
  // Safely get content with fallbacks
  const heroContent = useHeroContent() || {
    rotatingWords: ["Creator", "Builder"],
    title: "Learn to build products",
    description: "Empower yourself to create functional products",
    ctaButton: { text: "Join Now", url: "#pricing" }
  };
  
  const siteConfig = useSiteConfig() || {
    cohort: { nextStart: new Date().toISOString(), registrationDeadline: new Date().toISOString() },
    siteName: "WishCrafty Academy"
  };
  
  // Format the cohort start date with error handling
  let formattedStartDate = "Coming Soon";
  let formattedDeadlineDate = "Coming Soon";
  try {
    if (siteConfig.cohort && siteConfig.cohort.nextStart) {
      formattedStartDate = new Date(siteConfig.cohort.nextStart).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
    if (siteConfig.cohort && siteConfig.cohort.registrationDeadline) {
      formattedDeadlineDate = new Date(siteConfig.cohort.registrationDeadline).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }
  } catch (error) {
    console.error("Error formatting date:", error);
  }

  // Create announcement text with HTML for better styling
  const announcementText = `<strong>Registration closes:</strong> ${formattedDeadlineDate} <span class="separator">•</span> <strong>Cohort kicks off:</strong> ${formattedStartDate}`;

  return (
    <>
      {/* Move the ScrollVelocityText outside the section for better positioning */}
      <ScrollVelocityText 
        text={announcementText} 
        className="announcement-banner" 
        repeatCount={3} 
        speed={0.7}
        html={true} /* Enable HTML parsing */
      />
      
      <section id="home" className="hero-section">
        <MagnetLines
          rows={40}
          columns={60}
          containerSize="100%" 
          lineColor="var(--primary-color)"
          lineHeight="1vmin"
          lineWidth="0.15vmin"
          baseAngle={0}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            margin: 0,
            zIndex: 1
          }}
        />
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="logo-container">
            <img 
              src={logo} 
              alt={`${siteConfig.siteName || 'Academy'} Logo`} 
              className="hero-logo" 
            />
          </div>
          
          <h1 className="hero-title">
            <div className="title-wrapper">
              <div className="flex items-center justify-center">
                <span className="product-label">Product</span>
                {heroContent.rotatingWords && heroContent.rotatingWords.length > 0 ? (
                  <RotatingText
                    texts={heroContent.rotatingWords}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-purple-700 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg ml-2 rotating-word-container"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                  />
                ) : (
                  <span>Builder</span>
                )}
              </div>
              <span className="subtitle">{heroContent.title || "Learn to build products"}</span>
            </div>
          </h1>
          <p>{heroContent.description || "Empower yourself to create functional products"}</p>
          <div className="cta-buttons">
            <Button 
              variant="primary" 
              className="cta-button primary"
              href={siteConfig.cta.url || heroContent.ctaButton.url}
            >
              {heroContent.ctaButton.text}
            </Button>
          </div>
          <div className="kickoff-note">Next cohort starts {formattedStartDate}</div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
