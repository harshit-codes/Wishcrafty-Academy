import React from 'react';
import '../../styles/components/ui/Timeline.css';

/**
 * Reusable Timeline component
 */
const Timeline = ({
  items,
  className = '',
  direction = 'horizontal',
  note,
}) => {
  return (
    <div className={`timeline timeline--${direction} ${className}`}>
      <div className="timeline__container">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="timeline__item">
              <div className="timeline__date">{item.date}</div>
              <div className="timeline__content">{item.content}</div>
            </div>
            
            {index < items.length - 1 && (
              <div className="timeline__divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {note && (
        <div className="timeline__note">
          <p>{note}</p>
        </div>
      )}
    </div>
  );
};

export default Timeline;
