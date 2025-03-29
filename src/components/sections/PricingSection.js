import React from 'react';
import PricingCard from '../ui/PricingCard';
import siteConfig from '../../data/siteConfig.json';

// Custom user friends icon component instead of using react-icons
const UserFriendsIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="referral-icon"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// Function to render text with line breaks by splitting on specific markers
const RenderWithLineBreaks = ({ text, splitMarker = "." }) => {
  if (!text) return null;
  
  // Split the text at the split marker followed by a space
  const segments = text.split(`${splitMarker} `).filter(Boolean);
  
  return (
    <>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          {segment}{index < segments.length - 1 ? `${splitMarker}` : ""}
          {index < segments.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

const PricingSection = () => {
  // Get final pricing from siteConfig
  const finalPrice = siteConfig.pricing.tiers[siteConfig.pricing.tiers.length - 1].price;
  
  // Features list for the pricing card
  const features = [
    `Full ${siteConfig.cohort.duration} program access`,
    "All learning materials",
    "Project feedback & review",
    "Cohort community access",
    "Certificate of completion"
  ];

  // Get referral content from siteConfig (with defaults as fallback)
  const referralProgram = siteConfig.referralProgram || {
    enabled: true,
    amountOff: "₹200",
    instruction: "Enter the email of the person who referred you in the 'Referred by' field during checkout.",
    note: "The referral discount is limited to ₹800 per person (maximum of 4 referrals) under our fair-use policy. The reimbursement will be processed within 7 days of the cohort start date."
  };

  return (
    <section className="content-section" id="pricing">
      <div className="content-section-inner">
        <h2>Program Fee</h2>
        
        <div className="pricing-container single-tier">
          <PricingCard
            title="Cohort Registration"
            price={finalPrice}
            badge="Join Now"
            highlight={true}
            features={features}
            ctaText={siteConfig.cta.primary}
            ctaUrl={siteConfig.cta.url}
          />
        </div>
        
        {referralProgram.enabled && (
          <div className="referral-program">
            <div className="referral-header">
              <UserFriendsIcon />
              <h3>Referral Program</h3>
            </div>
            
            <div className="referral-content">
              <div className="referral-details">
                <div className="referral-benefit">
                  <div className="benefit-amount">{referralProgram.amountOff} OFF</div>
                  <div className="benefit-text">for your friend</div>
                </div>
                
                <div className="referral-plus">+</div>
                
                <div className="referral-benefit">
                  <div className="benefit-amount">{referralProgram.amountOff} OFF</div>
                  <div className="benefit-text">for you</div>
                </div>
              </div>
              
              <div className="referral-instructions">
                <p className="instruction-text">
                  <RenderWithLineBreaks text={referralProgram.instruction} />
                </p>
              </div>
              
              <div className="referral-note">
                <p>
                  <RenderWithLineBreaks text={referralProgram.note} />
                </p>
              </div>
            </div>
          </div>
        )}
        
        {siteConfig.pricing.hasScholarships && (
          <div className="pricing-note">
            <p><span className="highlight">Inclusivity Note:</span> We believe in making education accessible to everyone. Disadvantaged individuals, including students from underprivileged backgrounds, may qualify for significant discounts.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
