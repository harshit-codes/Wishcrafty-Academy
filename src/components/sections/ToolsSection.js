import React from 'react';
import toolsContent from '../../data/content/tools.json';

const ToolsSection = () => {
  return (
    <section className="content-section" id="tools">
      <div className="content-section-inner">
        <h2>{toolsContent.title}</h2>
        
        {toolsContent.sections.map((section, sectionIndex) => (
          <div className="tools-section" key={sectionIndex}>
            <h3>{section.title}</h3>
            <div className="tools-grid">
              {section.tools.map((tool, toolIndex) => (
                <div 
                  className={`tool-card ${tool.special ? tool.special + '-bg' : ''}`} 
                  key={toolIndex}
                >
                  <h4>{tool.name}</h4>
                  <p>{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
