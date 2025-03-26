import React, { useState } from 'react';

const OverviewSection = () => {
  const [activeWeek, setActiveWeek] = useState('week1');
  
  // Program curriculum data
  const curriculum = {
    week1: [
      {
        day: 'Sunday',
        date: 'Mar 30',
        dev: 'No-Code Landscape',
        pm: 'Product Discovery',
        assignment: 'Identify a problem and select appropriate no-code tools to address it'
      },
      {
        day: 'Monday',
        date: 'Mar 31',
        dev: 'UI Design',
        pm: 'User Research',
        assignment: 'Create user personas and journey maps with corresponding UI mockups'
      },
      {
        day: 'Tuesday',
        date: 'Apr 1',
        dev: 'No-Code Frontend',
        pm: 'Value Proposition Design',
        assignment: 'Build a landing page that clearly communicates core value proposition'
      },
      {
        day: 'Wednesday',
        date: 'Apr 2',
        dev: 'Database Design',
        pm: 'Data Strategy',
        assignment: 'Design database schema and define metrics'
      },
      {
        day: 'Thursday',
        date: 'Apr 3',
        dev: 'Workflow Automation',
        pm: 'User Experience Optimization',
        assignment: 'Create automated workflows that optimize key user journeys'
      },
      {
        day: 'Friday',
        date: 'Apr 4',
        dev: 'Deployment Best Practices',
        pm: 'Monetization Strategy',
        assignment: 'Design pricing tiers with strategy documentation'
      },
      {
        day: 'Saturday',
        date: 'Apr 5',
        dev: 'MVP Showcase',
        pm: 'Hypothesis Validation',
        assignment: 'Present MVP with documented validation plan and early metrics'
      }
    ],
    week2: [
      {
        day: 'Sunday',
        date: 'Apr 6',
        dev: 'AI Coding Landscape',
        pm: 'Product Roadmapping',
        assignment: 'Plan AI feature implementation with business justification'
      },
      {
        day: 'Monday',
        date: 'Apr 7',
        dev: 'Open-Source Tools',
        pm: 'Competitive Analysis',
        assignment: 'Create competitive landscape analysis and differentiation strategy'
      },
      {
        day: 'Tuesday',
        date: 'Apr 8',
        dev: 'Codebase Setup',
        pm: 'Technical Product Management',
        assignment: 'Document technical requirements and create decision log with rationale'
      },
      {
        day: 'Wednesday',
        date: 'Apr 9',
        dev: 'Prompt Engineering',
        pm: 'Go-to-Market Strategy',
        assignment: 'Design and implement AI feature with documented prompt strategy'
      },
      {
        day: 'Thursday',
        date: 'Apr 10',
        dev: 'Debugging No-Code Apps',
        pm: 'Quality Assurance',
        assignment: 'Create QA test plan with error scenarios and performance metrics'
      },
      {
        day: 'Friday',
        date: 'Apr 11',
        dev: 'Business OS Tools',
        pm: 'Post Launch Evaluation',
        assignment: 'Build a product roadmap with prioritized features and resource requirements'
      },
      {
        day: 'Saturday',
        date: 'Apr 12',
        dev: 'Demo Day',
        pm: 'Real World PM',
        assignment: 'Present final product with GTM strategy and growth projections'
      }
    ]
  };

  return (
    <section id="overview" className="content-section">
      <div className="content-section-inner">
        <h2>Program Overview</h2>
        <div className="program-overview">
          <div className="overview-card">
            <div className="card-icon">⏱️</div>
            <h3>2-Week Intensive</h3>
            <p>A comprehensive program designed for non-technical individuals looking to build real products rapidly.</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🧠</div>
            <h3>Our Philosophy</h3>
            <p>Learning by doing, PM-first approach, and AI-augmented creation to overcome technical barriers.</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">🎯</div>
            <h3>Outcomes</h3>
            <p>Graduate with a functional product, portfolio piece, and the ability to build without coding.</p>
          </div>
          <div className="overview-card">
            <div className="card-icon">✨</div>
            <h3>Expectations</h3>
            <p>All you need is curiosity, a laptop, and an internet connection to create magic. No prior technical experience required.</p>
          </div>
        </div>

        <div className="curriculum-overview">
          <h3>Program Journey</h3>
          
          <div className="week-tabs">
            <button 
              className={`week-tab ${activeWeek === 'week1' ? 'active' : ''}`}
              onClick={() => setActiveWeek('week1')}
            >
              Week 1: Foundations
            </button>
            <button 
              className={`week-tab ${activeWeek === 'week2' ? 'active' : ''}`}
              onClick={() => setActiveWeek('week2')}
            >
              Week 2: Advanced Implementation
            </button>
          </div>
          
          <div className="curriculum-table-container">
            <div className="curriculum-headers">
              <div className="header-day">Day</div>
              <div className="header-dev">Product Development</div>
              <div className="header-pm">Product Management</div>
              <div className="header-assignment">Daily Assignment</div>
            </div>
            
            <div className="curriculum-days">
              {curriculum[activeWeek].map((day, index) => (
                <div className="curriculum-day" key={index}>
                  <div className="day-info">
                    <div className="day-name">{day.day.substring(0, 3)}</div>
                    <div className="day-date">{day.date}</div>
                  </div>
                  <div className="day-dev">{day.dev}</div>
                  <div className="day-pm">{day.pm}</div>
                  <div className="day-assignment">{day.assignment}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="curriculum-legend">
            <div className="legend-item">
              <div className="legend-color dev-color"></div>
              <div>Product Development Track</div>
            </div>
            <div className="legend-item">
              <div className="legend-color pm-color"></div>
              <div>Product Management Track</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
