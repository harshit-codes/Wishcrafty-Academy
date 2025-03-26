import React, { useState, useEffect } from 'react';
import PricingCard from '../ui/PricingCard';
import Countdown from '../ui/Countdown';
import Timeline from '../ui/Timeline';
import siteConfig from '../../data/siteConfig.json';

const PricingSection = () => {
  // Get pricing data from siteConfig
  const pricingTiers = siteConfig.pricing.tiers;
  
  // Target dates for price changes
  const targetDates = pricingTiers.map(tier => new Date(tier.date));
  const prices = pricingTiers.map(tier => tier.price);
  
  const [currentPrice, setCurrentPrice] = useState(prices[0]);
  const [nextPrice, setNextPrice] = useState(prices[1]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [deadlineText, setDeadlineText] = useState('');
  
  // Calculate time left until next price change
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let targetDate;
      let priceIndex = 0;
      
      // Find the next upcoming deadline
      for (let i = 0; i < targetDates.length; i++) {
        if (now < targetDates[i]) {
          targetDate = targetDates[i];
          priceIndex = i;
          break;
        }
      }
      
      // If all deadlines have passed, use the last price
      if (!targetDate) {
        setCurrentPrice(prices[prices.length - 1]);
        setNextPrice(null);
        setDeadlineText('Final price');
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      // Set current and next prices
      setCurrentPrice(prices[priceIndex]);
      setNextPrice(priceIndex < prices.length - 1 ? prices[priceIndex + 1] : null);
      
      // Format deadline text based on date
      const options = { month: 'short', day: 'numeric' };
      const formattedDate = targetDate.toLocaleDateString('en-US', options);
      const formattedTime = targetDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setDeadlineText(`${formattedDate}, ${formattedTime}`);
      
      // Calculate remaining time
      const difference = targetDate - now;
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format time with leading zeros
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  // Prepare countdown component for the pricing card
  const countdownComponent = (
    <Countdown 
      label="Current price valid until:"
      dateText={deadlineText}
      timeLeft={timeLeft}
      fallbackLabel="Final price"
      formatTime={formatTime}
    />
  );

  // Prepare timeline items from pricing tiers
  const timelineItems = pricingTiers.map(tier => ({
    date: `Until ${new Date(tier.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
    content: tier.price
  }));

  return (
    <section className="content-section" id="pricing">
      <div className="content-section-inner">
        <h2>Program Fee</h2>
        
        <div className="pricing-container single-tier">
          <PricingCard
            title="Cohort Registration"
            price={currentPrice}
            nextPrice={nextPrice}
            badge="Limited Time Offer"
            highlight={true}
            features={[
              `Full ${siteConfig.cohort.duration} program access`,
              "All learning materials",
              "Project feedback & review",
              "Cohort community access",
              "Certificate of completion"
            ]}
            countdownComponent={countdownComponent}
            ctaText={siteConfig.cta.primary}
            ctaUrl={siteConfig.cta.url}
          />
        </div>
        
        <Timeline 
          items={timelineItems}
          direction="horizontal"
          className="pricing-timeline"
        />
        
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
