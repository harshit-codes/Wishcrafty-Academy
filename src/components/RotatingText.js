import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Fixed RotatingText component with reliable animation
const RotatingText = ({
  texts,
  mainClassName = '',
  staggerFrom = 'first',
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0 },
  staggerDuration = 0.025,
  splitLevelClassName = '',
  transition = {},
  rotationInterval = 2000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [inView, setInView] = useState(true);

  // Ensure text rotation works properly
  useEffect(() => {
    const timer = setInterval(() => {
      setInView(false);
      
      // Use timeout to ensure exit animation completes before changing text
      setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
        setInView(true);
      }, 500); // This value should match exit animation duration
      
    }, rotationInterval);
    
    return () => clearInterval(timer);
  }, [texts.length, rotationInterval]);

  // Current text to display
  const currentText = texts[currentTextIndex];
  
  // Split text into characters for animation
  const characters = useMemo(() => {
    return currentText.split('');
  }, [currentText]);

  return (
    <div className={`rotating-text-container ${mainClassName}`}>
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            key={currentTextIndex}
            className="rotating-text"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {characters.map((char, index) => {
              const staggerIndex = staggerFrom === 'first' ? index : characters.length - 1 - index;
              
              return (
                <span
                  key={`${currentTextIndex}-${index}`}
                  className={`char-wrapper ${splitLevelClassName}`}
                >
                  <motion.span
                    className="char"
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: staggerDuration * staggerIndex,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </span>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
