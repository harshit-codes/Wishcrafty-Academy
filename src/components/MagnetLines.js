import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MagnetLines = ({
  rows = 40,
  columns = 60,
  containerSize = "100%",
  lineColor = "var(--primary-color)",
  lineWidth = "0.15vmin",
  lineHeight = "1vmin",
  baseAngle = 0,
  style = {}
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Initialize grid lines
  useEffect(() => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    setDimensions({ width, height });
    
    // Calculate cell size
    const cellWidth = width / columns;
    const cellHeight = height / rows;
    
    // Create grid of lines - using a sparser grid for performance
    // but keeping character-sized lines
    const initialLines = [];
    for (let r = 0; r < rows; r += 2) {
      for (let c = 0; c < columns; c += 2) {
        initialLines.push({
          id: `${r}-${c}`,
          x: cellWidth * c + cellWidth / 2,
          y: cellHeight * r + cellHeight / 2,
          angle: baseAngle + Math.random() * 20 - 10, // slight random variation
          originAngle: baseAngle,
          // Parse as pixels to maintain character size across devices
          height: Math.max(8, Math.min(12, height / rows / 2)), // character height (8-12px)
          width: Math.max(1, Math.min(2, width / columns / 10)) // line width (1-2px)
        });
      }
    }
    
    setLines(initialLines);
    setIsInitialized(true);
    
    // Track mouse movement
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - left, 
          y: e.clientY - top 
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [rows, columns, baseAngle]);
  
  // Update line rotations based on mouse position
  useEffect(() => {
    if (!isInitialized || lines.length === 0 || !dimensions.width) return;
    
    // Use requestAnimationFrame for smoother animation
    const animationId = requestAnimationFrame(() => {
      setLines(lines.map(line => {
        // Calculate distance from mouse to line
        const dx = mousePosition.x - line.x;
        const dy = mousePosition.y - line.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Calculate influence radius (smaller for character-sized lines)
        const influenceRadius = dimensions.width / 6;
        
        // Calculate angle only if mouse is within influence radius
        if (distance < influenceRadius) {
          // Calculate angle to mouse
          const mouseAngle = Math.atan2(dy, dx) * (180 / Math.PI);
          
          // Calculate influence based on distance
          const influence = Math.pow(1 - Math.min(1, distance / influenceRadius), 2);
          
          // Smooth interpolation between original and target angle
          return {
            ...line,
            angle: line.originAngle * (1 - influence) + mouseAngle * influence
          };
        }
        
        // Gradually return to original angle when mouse is far away
        return {
          ...line,
          angle: line.angle + (line.originAngle - line.angle) * 0.05
        };
      }));
    });
    
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, dimensions, isInitialized]);
  
  return (
    <div 
      ref={containerRef}
      className="magnet-lines-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: containerSize,
        height: containerSize,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style
      }}
    >
      {lines.map(line => (
        <motion.div
          key={line.id}
          className="magnet-line"
          style={{
            position: 'absolute',
            left: line.x,
            top: line.y,
            width: `${line.width}px`,
            height: `${line.height}px`,
            backgroundColor: lineColor,
            opacity: 0.6,
            transformOrigin: 'center top',
            transform: `translate(-50%, -50%) rotate(${line.angle}deg)`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1,
            rotate: line.angle 
          }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        />
      ))}
    </div>
  );
};

export default MagnetLines;
