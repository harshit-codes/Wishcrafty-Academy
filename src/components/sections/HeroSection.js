import React from 'react';
import logo from '../../assets/images/logo.png';
import MagnetLines from '../MagnetLines';
import RotatingText from '../RotatingText';

const HeroSection = ({ rotatingWords }) => {
  return (
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
          <img src={logo} alt="WishCrafty Academy Logo" className="hero-logo" />
        </div>
        
        <h1 className="hero-title">
          <div className="title-wrapper">
            <div className="flex items-center justify-center">
              <span className="product-label">Product</span>
              <RotatingText
                texts={rotatingWords}
                mainClassName="px-2 sm:px-2 md:px-3 bg-purple-700 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg ml-2"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>
            <span className="subtitle">In 2 Weeks Using AI + No-Code</span>
          </div>
        </h1>
        <p>Empower yourself to create functional products without writing code. Our cohort-based program bridges product strategy with AI-powered implementation.</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Join the Cohort Today</button>
          <button className="cta-button secondary">View Curriculum</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
