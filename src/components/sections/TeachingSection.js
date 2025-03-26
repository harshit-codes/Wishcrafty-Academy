import React from 'react';
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import teachingContent from '../../data/content/teaching.json';

const TeachingSection = () => {
  // Add null checks to avoid "Cannot read properties of undefined" errors
  const methodologies = teachingContent?.methodologies || [];
  const sessionFlow = teachingContent?.sessionFlow || { title: "Daily Session Flow", steps: [] };
  const tracks = teachingContent?.tracks || { title: "Two Parallel Tracks", tracksList: [] };

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
            <div className="session-flow-diagram">
              {sessionFlow.steps.map((step, index) => (
                <div className="session-flow-step" key={index}>
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
        
        {tracks.tracksList && tracks.tracksList.length > 0 && (
          <div className="curriculum-tracks">
            <h3 className="track-header">{tracks.title}</h3>
            <div className="tracks-container">
              {tracks.tracksList.map((track, index) => (
                <div className="track" key={index}>
                  <h4>{track.title}</h4>
                  <ul className="track-list">
                    {track.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
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
