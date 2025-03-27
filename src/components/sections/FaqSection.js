import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import FaqItem from '../ui/FaqItem';
import TestimonialCarousel from '../ui/TestimonialCarousel';
import faqContent from '../../data/content/faq.json';
// Try to import the image - we'll handle failure gracefully
let instructorImage;
try {
  instructorImage = require('../../assets/images/harshit.jpg');
} catch (e) {
  console.warn('Instructor image not found, using placeholder');
  instructorImage = null;
}

const FaqSection = () => {
  return (
    <section className="content-section" id="faq">
      <div className="content-section-inner">
        <SectionHeader title={faqContent.title} />
        
        <div className="faq-container">
          {faqContent.items.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
          
          <div className="testimonials-section">
            <h3>{faqContent.testimonials.title}</h3>
            <TestimonialCarousel
              testimonials={faqContent.testimonials.items}
              autoRotateInterval={5000}
            />
          </div>
          
          {/* Instructor Message Section */}
          <div className="instructor-message-section">
            <h3>A Message From Instructor</h3>
            <div className="instructor-message-container">
              <div className="instructor-image-container">
                {instructorImage ? (
                  <img 
                    src={instructorImage} 
                    alt="Harshit Choudhary" 
                    className="instructor-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.querySelector('.instructor-avatar-inner').style.display = 'flex';
                    }}
                  />
                ) : (
                  <div className="instructor-avatar-inner">
                    <span>HC</span>
                  </div>
                )}
              </div>
              
              <div className="instructor-message-content">
                <h4 className="instructor-name">Hi, I'm Harshit</h4>
                <p className="instructor-title">Solo-founder of WishCrafty Studio</p>
                
                <div className="instructor-message">
                  <p>For the last few years, I've been collaborating with numerous entrepreneurs in the ideation phase, helping them build production-ready prototypes.</p>
                  
                  <p>With the recent rise of 'Vibe Coding', the barrier to entry for building production-ready applications from your ideas has significantly decreased.</p>
                  
                  <p>However, as product building becomes more accessible, the need for effective product <span className="highlight">management</span> has become even more critical.</p>
                  
                  <p>I'm thrilled to share this structured cohort that synthesizes my learnings on both product building and product management!</p>
                </div>
                
                <div className="instructor-links">
                  <a href="https://ishcrafty.studio" target="_blank" rel="noopener noreferrer" className="instructor-link">
                    Wishcrafty.Studio <span className="arrow-icon">→</span>
                  </a>
                  <a href="https://harshit.page" target="_blank" rel="noopener noreferrer" className="instructor-link">
                    More about Harshit <span className="arrow-icon">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
