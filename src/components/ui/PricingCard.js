import React from 'react';
import Badge from './Badge';
import Button from './Button';
import '../../styles/components/ui/PricingCard.css';

/**
 * Reusable PricingCard component
 */
const PricingCard = ({
  title,
  price,
  nextPrice,
  features = [],
  highlight = false,
  badge,
  countdownComponent,
  ctaText = "Secure Your Spot",
  ctaUrl, // Add this prop for the URL
  onCtaClick,
  className = '',
}) => {
  return (
    <div className={`pricing-card ${highlight ? 'highlight' : ''} ${className}`}>
      {badge && (
        <Badge 
          text={badge} 
          variant="highlight" 
          position="top-center"
          className="pricing-badge" // For backward compatibility
        />
      )}
      <h3>{title}</h3>
      <div className="pricing-price">{price}</div>
      {nextPrice && <div className="pricing-next">Price increases to {nextPrice} after deadline</div>}
      
      {features.length > 0 && (
        <ul className="pricing-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      
      <div className="pricing-cta">
        {countdownComponent}
        <Button 
          variant="primary" 
          onClick={onCtaClick}
          href={ctaUrl} // Use the URL prop
          className="cta-button primary" // For backward compatibility
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
