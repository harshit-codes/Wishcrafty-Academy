import React, { useEffect } from 'react';
import '../../styles/components/ui/Modal.css';

/**
 * Reusable Modal component
 */
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  closeOnOverlayClick = true,
  closeOnEsc = true,
}) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (closeOnEsc && isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      
      // Restore body scrolling when modal is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, closeOnEsc]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="modal-overlay"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div 
        className={`modal ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        {title && <h3 className="modal-title">{title}</h3>}
        
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
