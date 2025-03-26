import React, { useState } from 'react';
import overviewContent from '../../data/content/overview.json';

const OverviewSection = () => {
  const [activeWeek, setActiveWeek] = useState('week1');
  
  // Get curriculum data from JSON
  const curriculum = {
    week1: overviewContent.curriculum.week1.days,
    week2: overviewContent.curriculum.week2.days
  };

  return (
    <section id="overview" className="content-section">
      <div className="content-section-inner">
        <h2>{overviewContent.title}</h2>
        <div className="program-overview">
          {overviewContent.cards.map((card, index) => (
            <div className="overview-card" key={index}>
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className="curriculum-overview">
          <h3>{overviewContent.curriculum.title}</h3>
          
          <div className="week-tabs">
            <button 
              className={`week-tab ${activeWeek === 'week1' ? 'active' : ''}`}
              onClick={() => setActiveWeek('week1')}
            >
              {overviewContent.curriculum.week1.title}
            </button>
            <button 
              className={`week-tab ${activeWeek === 'week2' ? 'active' : ''}`}
              onClick={() => setActiveWeek('week2')}
            >
              {overviewContent.curriculum.week2.title}
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
