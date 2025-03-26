import React, { useState, useEffect } from 'react';

const FaqSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Testimonial data without profile images
  const testimonials = [
    {
      text: "The AI-powered approach to product building at WishCrafty Academy helped me bridge the gap between product vision and implementation. I could finally create without depending on engineers for every small change.",
      author: "Utkarsh Srivastava",
      role: "Product @ HiLabs",
      linkedin: "https://www.linkedin.com/in/utkarsh-srivastava-276812194/"
    },
    {
      text: "As someone with limited technical background, the no-code + AI curriculum gave me exactly what I needed - practical skills to transform ideas into functional products within days rather than months.",
      author: "Kshitij Singh",
      role: "Product @ Attentive",
      linkedin: "https://www.linkedin.com/in/kas-kshitij/"
    },
    {
      text: "The program's emphasis on both product thinking and hands-on building set it apart. I left with not just theoretical knowledge but a working product I built myself using the latest AI tools.",
      author: "Dhivyaa M",
      role: "Product @ Flipkart",
      linkedin: "https://www.linkedin.com/in/dhivyaa-m-9a9671190/"
    },
    {
      text: "WishCrafty Academy's cohort approach created accountability that helped me finish what I started. The combination of community support and cutting-edge tools accelerated my learning journey.",
      author: "Anmol Goyal",
      role: "Product @ Wayo",
      linkedin: "https://www.linkedin.com/in/anmol-goyal-iitbhu/"
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section id="faq" className="content-section">
      <div className="content-section-inner">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-container">
          <div className="faq-item">
            <h3>Who is this program for?</h3>
            <p>This program is designed for non-technical individuals who want to build functional products without traditional coding knowledge. It's perfect for aspiring product managers, entrepreneurs, and professionals looking to add technical skills.</p>
          </div>
          
          <div className="faq-item">
            <h3>Do I need any coding experience?</h3>
            <p>No prior coding experience is required. We've designed the curriculum to be accessible to complete beginners while still being valuable to those with some technical background.</p>
          </div>
          
          <div className="faq-item">
            <h3>How much time commitment is required?</h3>
            <p>The program requires approximately 20-25 hours per week for two weeks. This includes live sessions, self-paced learning, and project work.</p>
          </div>
          
          <div className="faq-item">
            <h3>What will I have built by the end?</h3>
            <p>By the end of the program, you will have built a functional product that demonstrates both your product thinking and implementation skills. This could be a web app, a mobile app prototype, or another digital product.</p>
          </div>
          
          <div className="testimonials-section">
            <h3>What Our Alumni Say</h3>
            <div className="testimonials-carousel">
              <div className="testimonials-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div className="testimonial" key={index}>
                    <div className="testimonial-content">
                      <p>"{testimonial.text}"</p>
                      <div className="testimonial-author-container">
                        <div className="testimonial-author">
                          <div className="author-name">{testimonial.author}</div>
                          <div className="author-role">{testimonial.role}</div>
                          <a href={testimonial.linkedin} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="linkedin-icon"
                             title={`View ${testimonial.author}'s LinkedIn profile`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    className={`testimonial-dot ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
