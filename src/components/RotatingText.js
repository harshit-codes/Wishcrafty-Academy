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

  // Simple rotation logic
  useEffect(() => {
    const timer = setInterval(() => {
      setInView(false);
      
      setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
        setInView(true);
      }, 300);
      
    }, rotationInterval);
    
    return () => clearInterval(timer);
  }, [texts.length, rotationInterval]);

  const currentText = texts[currentTextIndex];
  
  return (
    <div className={`rotating-text-container ${mainClassName}`}>
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            key={currentTextIndex}
            className="rotating-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
