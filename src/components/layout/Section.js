import React from 'react';
import '../../styles/components/layout/Section.css';

const Section = ({ 
  id, 
  children, 
  className = '',
  fullHeight = true,
  background = 'default' // default, alternate, gradient, etc.
}) => {
  const baseClass = 'section';
  const heightClass = fullHeight ? `${baseClass}--full-height` : '';
  const bgClass = background !== 'default' ? `${baseClass}--bg-${background}` : '';
  
  return (
    <section 
      id={id} 
      className={`${baseClass} ${heightClass} ${bgClass} ${className}`}
    >
      <div className="section__inner">
        {children}
      </div>
    </section>
  );
};

export default Section;
