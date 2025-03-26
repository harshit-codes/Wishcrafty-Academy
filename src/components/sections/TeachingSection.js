import React from 'react';

const TeachingSection = () => {
  return (
    <section id="teaching" className="content-section">
      <div className="content-section-inner">
        <h2>Teaching Methodology</h2>
        <div className="methodology-cards">
          <div className="methodology-card">
            <div className="card-icon-large">🛠️</div>
            <h3>Project-Based Learning</h3>
            <p>Follow the 7P model: Phenomenon, Problem, Plan, Prototype, Product, Presentation, Price to develop critical skills.</p>
          </div>
          <div className="methodology-card">
            <div className="card-icon-large">👥</div>
            <h3>Cohort Accountability</h3>
            <p>Shared start/end dates, peer-to-peer accountability, and structured progress tracking to improve outcomes.</p>
          </div>
          <div className="methodology-card">
            <div className="card-icon-large">📈</div>
            <h3>Progressive Skill Building</h3>
            <p>From foundational concepts to launch preparation, supporting different learning speeds.</p>
          </div>
          <div className="methodology-card">
            <div className="card-icon-large">🔄</div>
            <h3>Reverse Learning</h3>
            <p>Study materials are provided before sessions, allowing class time to focus on reflection, deeper discussion, and practical application rather than basic information transfer.</p>
          </div>
        </div>
        
        <div className="curriculum-tracks">
          <h3 className="track-header">Two Parallel Tracks</h3>
          <div className="tracks-container">
            <div className="track">
              <h4>Product Development Track</h4>
              <ul className="track-list">
                <li>No-Code Landscape</li>
                <li>UI Design</li>
                <li>Database Design</li>
                <li>Workflow Automation</li>
                <li>AI Coding Tools</li>
                <li>Prompt Engineering</li>
              </ul>
            </div>
            <div className="track">
              <h4>Product Management Track</h4>
              <ul className="track-list">
                <li>Product Discovery</li>
                <li>User Research</li>
                <li>Value Proposition Design</li>
                <li>Data Strategy</li>
                <li>UX Optimization</li>
                <li>Go-to-Market Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
