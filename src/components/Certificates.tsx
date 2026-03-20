import { useState } from 'react';
import { ImageModal } from './ImageModal';

interface Certificate {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  linkUrl?: string;
  iconUrl?: string;
}

interface CertificatesProps {
  items: Certificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ items }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <div className="certificates-container">
      <h2 className="section-title">CERTIFICATES</h2>
      <div className="certificates-grid">
        {items.map((cert) => (
          <div 
            key={cert.id} 
            className="certificate-card shadow-sm flex-col-center"
            onClick={() => {
              if (cert.linkUrl) {
                window.open(cert.linkUrl, '_blank', 'noreferrer');
              } else if (cert.imageUrl) {
                setSelectedImage(cert.imageUrl);
              }
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                if (cert.linkUrl) {
                  window.open(cert.linkUrl, '_blank', 'noreferrer');
                } else if (cert.imageUrl) {
                  setSelectedImage(cert.imageUrl);
                }
              }
            }}
          >
             <div className="certificate-icon">
              {cert.iconUrl ? (
                <img src={cert.iconUrl} alt="Institution Logo" className="cert-icon-img" />
              ) : (
                "📄"
              )}
            </div>
            <div className="cert-text-layout">
              <span className="certificate-title">{cert.title}</span>
              {cert.subtitle && <span className="certificate-subtitle">{cert.subtitle}</span>}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};
