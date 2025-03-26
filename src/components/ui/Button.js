import React from 'react';
import '../../styles/components/ui/Button.css';

/**
 * Reusable Button component
 */
const Button = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  href,
  type = 'button'
}) => {
  const baseClass = 'button';
  const variantClass = variant ? `${baseClass}--${variant}` : '';
  const sizeClass = size ? `${baseClass}--${size}` : '';
  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`;
  
  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render a button
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
