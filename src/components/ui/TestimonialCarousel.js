import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import '../../styles/components/ui/TestimonialCarousel.css';

/**
 * Carousel component for displaying testimonials
 */
const TestimonialCarousel = ({
  testimonials,
  autoRotateInterval = 5000,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (autoRotateInterval > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, autoRotateInterval);
      
      return () => clearInterval(interval);
    }
  }, [testimonials.length, autoRotateInterval]);

  return (
    <div className={`testimonial-carousel ${className}`}>
      <div 
        className="testimonial-track" 
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-slide" key={index}>
            <Testimonial {...testimonial} />
          </div>
        ))}
      </div>
      
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button 
            key={index} 
            className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
