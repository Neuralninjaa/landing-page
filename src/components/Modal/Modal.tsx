import React, { useEffect } from 'react';
import { Button } from '../Button/Button'; // Kapatma butonu için mevcut butonumuzu kullanıyoruz
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode; // Opsiyonel footer alanı
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  // Modal açık değilse hiçbir şey render etme
  if (!isOpen) return null;

  // ESC tuşuna basınca kapatma mantığı
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Temizlik (Cleanup)
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    // Overlay: Arka planı karartan katman
    <div className="modal-overlay" onClick={onClose} aria-hidden="true">
      {/* Modal Container: İçeriğin olduğu kutu. stopPropagation ile overlay tıklamasını engelliyoruz */}
      <div 
        className="modal" 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <h2 id="modal-title" className="modal__title">{title}</h2>
          <button 
            className="modal__close-btn" 
            onClick={onClose}
            aria-label="Kapat"
          >
            &times;
          </button>
        </div>

        <div className="modal__content">
          {children}
        </div>

        {footer && (
          <div className="modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};