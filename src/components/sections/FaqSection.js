import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import FaqItem from '../ui/FaqItem';
import TestimonialCarousel from '../ui/TestimonialCarousel';
import faqContent from '../../data/content/faq.json';

const FaqSection = () => {
  return (
    <section id="faq" className="content-section">
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
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
