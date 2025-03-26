import React from 'react';

const ToolsSection = () => {
  return (
    <section id="tools" className="content-section">
      <div className="content-section-inner">
        <h2>Tools & Technologies</h2>
        
        <div className="tools-section">
          <h3>No-Code Platforms</h3>
          <div className="tools-grid">
            <div className="tool-card">
              <h4>Glide</h4>
              <p>Build web apps with databases directly from spreadsheets without coding.</p>
            </div>
            <div className="tool-card">
              <h4>Airtable</h4>
              <p>Create powerful databases with an intuitive spreadsheet interface.</p>
            </div>
            <div className="tool-card">
              <h4>Zapier</h4>
              <p>Connect apps and automate workflows without complex integrations.</p>
            </div>
            <div className="tool-card">
              <h4>ClickUp</h4>
              <p>All-in-one productivity platform for task management, docs, and project tracking.</p>
            </div>
            <div className="tool-card iridescent-bg">
              <h4>Coming Soon</h4>
              <p>We regularly update our curriculum with the latest no-code tools. New additions will be announced soon.</p>
            </div>
          </div>
        </div>
        
        <div className="tools-section">
          <h3>AI Coding Assistants</h3>
          <div className="tools-grid">
            <div className="tool-card">
              <h4>GitHub Copilot</h4>
              <p>Advanced code completion and generation based on natural language prompts.</p>
            </div>
            <div className="tool-card">
              <h4>Perplexity</h4>
              <p>Versatile AI for explaining technical concepts and solving problems.</p>
            </div>
            <div className="tool-card iridescent-bg">
              <h4>Coming Soon</h4>
              <p>Our AI curriculum is constantly evolving to incorporate cutting-edge tools as they become available.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
