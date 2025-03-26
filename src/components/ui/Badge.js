import React from 'react';
import '../../styles/components/ui/Badge.css';

/**
 * Reusable Badge component
 * @param {Object} props - Component props
 * @param {string} props.text - Text to display
 * @param {string} props.variant - Badge variant (default, coming-soon, highlight, etc.)
 * @param {string} props.className - Additional classes
 * @param {string} props.position - Badge position (top-right, bottom-left, etc.)
 */
const Badge = ({
  text,
  variant = 'default',
  className = '',
  position = 'top-right',
  ...props
}) => {
  const baseClass = 'badge';
  const variantClass = variant ? `${baseClass}--${variant}` : '';
  const positionClass = position ? `${baseClass}--${position}` : '';
  
  return (
    <span 
      className={`${baseClass} ${variantClass} ${positionClass} ${className}`}
      {...props}
    >
      {text}
    </span>
  );
};

export default Badge;
