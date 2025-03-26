import React from 'react';
import '../../styles/components/ui/Testimonial.css';

/**
 * Reusable Testimonial component
 */
const Testimonial = ({
  text,
  author,
  role,
  linkedin,
  image,
  className = '',
}) => {
  return (
    <div className={`testimonial ${className}`}>
      <div className="testimonial-content">
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-author-container">
          {image && (
            <div className="testimonial-profile">
              <img src={image} alt={author} className="profile-image" />
            </div>
          )}
          <div className="testimonial-author">
            <div className="author-name">{author}</div>
            {role && <div className="author-role">{role}</div>}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-icon"
                title={`View ${author}'s LinkedIn profile`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
