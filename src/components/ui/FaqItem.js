import React, { useState } from 'react';
import '../../styles/components/ui/FaqItem.css';

/**
 * Reusable FAQ Item component with optional expandable functionality
 */
const FaqItem = ({
  question,
  answer,
  isExpanded = false,
  toggleExpand = null,
  className = '',
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  
  // Use either the external or internal state
  const expanded = toggleExpand ? isExpanded : internalExpanded;
  const handleToggle = toggleExpand || (() => setInternalExpanded(!internalExpanded));
  
  return (
    <div className={`faq-item ${expanded ? 'expanded' : ''} ${className}`}>
      <div className="faq-item__header" onClick={handleToggle}>
        <h3 className="faq-item__question">{question}</h3>
        <button className="faq-item__toggle" aria-label={expanded ? "Collapse answer" : "Expand answer"}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1={expanded ? "18" : "6"} x2="12" y2={expanded ? "6" : "18"}></line>
            {!expanded && <line x1="6" y1="12" x2="18" y2="12"></line>}
          </svg>
        </button>
      </div>
      
      <div className="faq-item__body" style={{ maxHeight: expanded ? '1000px' : '0' }}>
        <div className="faq-item__answer">{answer}</div>
      </div>
    </div>
  );
};

export default FaqItem;
