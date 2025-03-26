import React from 'react';

const LegalModal = ({ showLegalModal, setShowLegalModal }) => {
  if (!showLegalModal) return null;
  
  return (
    <div className="legal-modal-overlay" onClick={() => setShowLegalModal(false)}>
      <div className="legal-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setShowLegalModal(false)}>×</button>
        <h3>Legal Disclaimer</h3>
        <p>WishCrafty Academy currently operates as a sole proprietorship of <a href="https://harshit.page" target="_blank" rel="noopener noreferrer">Harshit Choudhary</a>, with the formal business registration process currently underway.</p>
        <p>All services, content, and intellectual property presented on this platform are provided by WishCrafty Academy with the intent to deliver educational value to our users.</p>
        <p>For any inquiries regarding our legal status or operations, please contact us directly.</p>
      </div>
    </div>
  );
};

export default LegalModal;
