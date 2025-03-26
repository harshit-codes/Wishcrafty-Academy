import React from 'react';
import '../../styles/components/ui/Countdown.css';

/**
 * Reusable Countdown component
 */
const Countdown = ({
  label = 'Current price valid until:',
  dateText,
  timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 },
  fallbackLabel = 'Final price',
  className = '',
  formatTime = (time) => (time < 10 ? `0${time}` : time),
}) => {
  const hasTimeLeft = timeLeft.days > 0 || timeLeft.hours > 0 || 
                      timeLeft.minutes > 0 || timeLeft.seconds > 0;
  
  if (!hasTimeLeft) {
    return (
      <div className={`countdown ${className}`}>
        <span className="countdown-label">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <div className={`countdown ${className}`}>
      <span className="countdown-label">{label}</span>
      {dateText && <span className="countdown-date">{dateText}</span>}
      <span className="countdown-timer">
        {`${formatTime(timeLeft.days)}:${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
      </span>
    </div>
  );
};

export default Countdown;
