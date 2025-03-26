import React from 'react';
import '../../styles/components/ui/SectionHeader.css';

const SectionHeader = ({ 
  title, 
  subtitle,
  className = '',
  align = 'center'
}) => {
  return (
    <div className={`section-header section-header--${align} ${className}`}>
      {title && <h2 className="section-header__title">{title}</h2>}
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
