import React from 'react';
import Modal from './ui/Modal';
import siteConfig from '../data/siteConfig.json';

const LegalModal = ({ showLegalModal, setShowLegalModal }) => {
  return (
    <Modal
      isOpen={showLegalModal}
      onClose={() => setShowLegalModal(false)}
      title="Legal Disclaimer"
      closeOnOverlayClick={true}
      closeOnEsc={true}
    >
      <p>{siteConfig.siteName} currently operates as a {siteConfig.legalInfo.companyType} of <a href={siteConfig.legalInfo.founderWebsite} target="_blank" rel="noopener noreferrer">{siteConfig.legalInfo.founder}</a>, with the formal business registration process {siteConfig.legalInfo.registrationStatus}.</p>
      <p>All services, content, and intellectual property presented on this platform are provided by {siteConfig.siteName} with the intent to deliver educational value to our users.</p>
      <p>For any inquiries regarding our legal status or operations, please contact us at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</p>
    </Modal>
  );
};

export default LegalModal;
