import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn shadow-sm" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        {imageUrl.toLowerCase().endsWith('.pdf') ? (
          <iframe 
            src={imageUrl} 
            title="Certificate Document" 
            className="modal-image shadow-lg"
            style={{ width: '85vw', height: '85vh', backgroundColor: 'white' }} 
          />
        ) : (
          <img src={imageUrl} alt="Certificate Full View" className="modal-image shadow-lg" />
        )}
      </div>
    </div>,
    document.body
  );
};
