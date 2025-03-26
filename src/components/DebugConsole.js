import React, { useState, useEffect } from 'react';

const DebugConsole = ({ visible = false }) => {
  const [sections, setSections] = useState([]);
  const [consoleVisible, setConsoleVisible] = useState(visible);
  
  // Find all section IDs on mount
  useEffect(() => {
    const sectionElements = document.querySelectorAll('section[id]');
    const sectionsData = Array.from(sectionElements).map(section => ({
      id: section.id,
      offsetTop: section.offsetTop,
      height: section.offsetHeight,
      visible: isInViewport(section)
    }));
    
    setSections(sectionsData);
    
    // Update on scroll
    const handleScroll = () => {
      const updatedSections = Array.from(sectionElements).map(section => ({
        id: section.id,
        offsetTop: section.offsetTop,
        height: section.offsetHeight,
        visible: isInViewport(section)
      }));
      setSections(updatedSections);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Helper to check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  if (!consoleVisible) {
    return (
      <button 
        onClick={() => setConsoleVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          padding: '5px 10px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Debug
      </button>
    );
  }
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '300px',
      maxHeight: '400px',
      overflowY: 'auto',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '15px',
      borderRadius: '5px',
      zIndex: 9999,
      fontSize: '12px',
      fontFamily: 'monospace'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h3 style={{ margin: 0 }}>Debug: Sections</h3>
        <button 
          onClick={() => setConsoleVisible(false)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          ✕
        </button>
      </div>
      <div>
        <div style={{ marginBottom: '10px' }}>
          <strong>Scroll Position:</strong> {window.pageYOffset}px
        </div>
        <div>
          <strong>Sections ({sections.length}):</strong>
          <ul style={{ padding: '0 0 0 20px', margin: '5px 0' }}>
            {sections.map(section => (
              <li key={section.id} style={{ marginBottom: '5px' }}>
                <div>
                  <strong style={{ color: section.visible ? '#4CAF50' : 'inherit' }}>
                    {section.id}
                  </strong>
                </div>
                <div>Top: {section.offsetTop}px</div>
                <div>Height: {section.height}px</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DebugConsole;
