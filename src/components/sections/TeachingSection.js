import React from 'react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import teachingContent from '../../data/content/teaching.json';

const TeachingSection = () => {
  // Add null checks to avoid "Cannot read properties of undefined" errors
  const methodologies = teachingContent?.methodologies || [];
  const sessionFlow = teachingContent?.sessionFlow || { title: "Daily Session Flow", steps: [] };
  
  // Add time blocks for each step
  // Note: These should ideally come from your data file
  const timeBlocks = [
    "8:00 AM, via Portal",
    "8:00 AM - 8:00 PM, Async",
    "8:00 PM - 9:00 PM, Live",
  ];

  return (
    <section className="content-section" id="teaching">
      <div className="content-section-inner">
        <SectionHeader title={teachingContent?.title || "Teaching Methodology"} />
        
        <div className="methodology-cards">
          {methodologies.map((method, index) => (
            <Card 
              key={index}
              icon={<div className="card-icon-large">{method.icon}</div>}
              title={method.title}
              description={method.description}
            />
          ))}
        </div>
        
        {sessionFlow.steps && sessionFlow.steps.length > 0 && (
          <div className="session-flow">
            <h3 className="session-flow-header">{sessionFlow.title}</h3>
            <p className="session-flow-subheader">Live Interactive Sessions • Every Day 8:00 PM to 9:00 PM • 100% Online</p>
            <div className="session-flow-diagram">
              {sessionFlow.steps.map((step, index) => (
                <div className="session-flow-step" key={index}>
                  <div className="time-block">{timeBlocks[index] || "8:00 PM - 9:00 PM"}</div>
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                  {index < sessionFlow.steps.length - 1 && (
                    <div className="step-arrow">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeachingSection;
