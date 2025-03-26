import React from 'react';
import Badge from './Badge';
import '../../styles/components/ui/SocialIcon.css';

/**
 * Social media icon with optional coming soon badge
 */
const SocialIcon = ({
  url,
  icon: Icon,
  label,
  comingSoon = false,
  className = '',
  size = 20,
}) => {
  const baseClass = 'social-icon';
  const stateClass = comingSoon ? `${baseClass}--coming-soon` : '';
  
  const renderIcon = () => (
    <div className={`${baseClass}__container ${stateClass} ${className}`}>
      {typeof Icon === 'function' ? (
        <Icon width={size} height={size} />
      ) : (
        Icon
      )}
      {comingSoon && <Badge text="Soon" variant="coming-soon" position="bottom-center" />}
    </div>
  );
  
  if (comingSoon) {
    return (
      <span className={`${baseClass} ${stateClass}`} title={label}>
        {renderIcon()}
      </span>
    );
  }
  
  return (
    <a 
      href={url} 
      className={`${baseClass} ${stateClass}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      title={label}
    >
      {renderIcon()}
    </a>
  );
};

export default SocialIcon;
