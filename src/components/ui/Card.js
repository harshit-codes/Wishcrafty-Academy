import React from 'react';
import '../../styles/components/ui/Card.css';

const Card = ({ 
  children, 
  className = '', 
  icon, 
  title, 
  description,
  variant = 'default',
  badge
}) => {
  const baseClass = 'card';
  const variantClass = variant ? `${baseClass}--${variant}` : '';
  
  // If individual props are provided, use the structured card layout
  if (icon || title || description) {
    return (
      <div className={`${baseClass} ${variantClass} ${className}`}>
        {badge && <div className="card__badge">{badge}</div>}
        {icon && <div className="card__icon">{icon}</div>}
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {children}
      </div>
    );
  }
  
  // Otherwise just act as a container
  return (
    <div className={`${baseClass} ${variantClass} ${className}`}>
      {badge && <div className="card__badge">{badge}</div>}
      {children}
    </div>
  );
};

export default Card;
