import React, { useState, useEffect } from 'react';

const PricingSection = () => {
  // Target dates for price changes
  const targetDates = [
    new Date('2025-03-26T23:49:00+05:30'), // March 26, 2025, 11:49 PM IST
    new Date('2025-03-27T23:59:59+05:30'), // March 27, 2025, 11:59 PM IST
    new Date('2025-03-28T23:59:59+05:30')  // March 28, 2025, 11:59 PM IST
  ];
  
  const prices = ['₹879', '₹1,179', '₹1,679'];
  
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

  return (
    <section id="pricing" className="content-section">
      <div className="content-section-inner">
        <h2>Program Fee</h2>
        
        <div className="pricing-container single-tier">
          <div className="pricing-card highlight">
            <div className="pricing-badge">Limited Time Offer</div>
            <h3>Cohort Registration</h3>
            <div className="pricing-price">{currentPrice}</div>
            {nextPrice && <div className="pricing-next">Price increases to {nextPrice} after deadline</div>}
            <ul className="pricing-features">
              <li>Full 2-week program access</li>
              <li>All learning materials</li>
              <li>Project feedback & review</li>
              <li>Cohort community access</li>
              <li>Certificate of completion</li>
            </ul>
            <div className="pricing-cta">
              {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
                <div className="countdown">
                  <span className="countdown-label">Current price valid until:</span>
                  <span className="countdown-date">{deadlineText}</span>
                  <span className="countdown-timer">
                    {`${formatTime(timeLeft.days)}:${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
                  </span>
                </div>
              ) : (
                <div className="countdown">
                  <span className="countdown-label">Final price</span>
                </div>
              )}
              <button className="cta-button primary">Secure Your Spot</button>
            </div>
          </div>
        </div>
        
        <div className="pricing-timeline">
          <div className="timeline-item">
            <div className="timeline-date">Until Mar 26</div>
            <div className="timeline-price">{prices[0]}</div>
          </div>
          <div className="timeline-divider"></div>
          <div className="timeline-item">
            <div className="timeline-date">Until Mar 27</div>
            <div className="timeline-price">{prices[1]}</div>
          </div>
          <div className="timeline-divider"></div>
          <div className="timeline-item">
            <div className="timeline-date">Until Mar 28</div>
            <div className="timeline-price">{prices[2]}</div>
          </div>
        </div>
        
        <div className="pricing-note">
          <p><span className="highlight">Inclusivity Note:</span> We believe in making education accessible to everyone. Disadvantaged individuals, including students from underprivileged backgrounds, may qualify for significant discounts. <a href="#" className="contact-link">Contact us</a> to learn more about our scholarship opportunities.</p>
        </div>
        
        <div className="payment-methods">
          <p>Flexible payment options available</p>
          <div className="payment-icons">
            <span className="payment-icon">💳</span>
            <span className="payment-icon">🏦</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
