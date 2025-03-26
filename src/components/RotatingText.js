import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom,
  initial,
  animate,
  exit,
  staggerDuration,
  splitLevelClassName,
  transition,
  rotationInterval
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [texts.length, rotationInterval]);

  return (
    <div className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex items-center justify-center w-full h-full"
        >
          {texts[index].split("").map((char, charIndex) => {
            const staggerIndex = staggerFrom === "last" 
              ? texts[index].length - charIndex - 1 
              : charIndex;
            
            const staggerDelay = staggerIndex * staggerDuration;
            
            return (
              <div key={charIndex} className={splitLevelClassName}>
                <motion.div
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{
                    ...transition,
                    delay: staggerDelay
                  }}
                  style={{ fontSize: "inherit", lineHeight: 1 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
