import React, { useRef, useEffect } from 'react';
import '../../styles/animations/ScrollVelocityText.css';

const ScrollVelocityText = ({ text, repeatCount = 4, className = '', speed = 1, html = false }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let position = 0;
    const textElement = container.querySelector('.scroll-text');
    
    const animate = () => {
      // Update position based on speed
      position -= 0.5 * speed;
      
      // Reset position when text has scrolled far enough
      if (Math.abs(position) >= 500) {
        position = 0;
      }
      
      // Apply position update
      const innerElement = container.querySelector('.scroll-text-inner');
      if (innerElement) {
        innerElement.style.transform = `translateX(${position}px)`;
      }
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);
  
  // Create repeated text elements
  const repeatedText = Array(repeatCount).fill(text).join(' • ');
  
  return (
    <div ref={containerRef} className={`scroll-velocity-container ${className}`}>
      <div className="scroll-text">
        {html ? (
          <div 
            className="scroll-text-inner"
            dangerouslySetInnerHTML={{ __html: repeatedText }}
          />
        ) : (
          <div className="scroll-text-inner">
            {repeatedText}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollVelocityText;
