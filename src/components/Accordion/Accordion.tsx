import React, { useState } from 'react';
import './Accordion.scss';

// Tekil akordeon öğesi tipi
export interface AccordionItem {
  id: string | number;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultIndex?: number; // Opsiyonel: Başlangıçta açık gelecek öğe
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultIndex = -1 }) => {
  // Hangi indeksin açık olduğunu tutan state
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  const handleToggle = (index: number) => {
    // Tıklanan zaten açıksan kapat (-1), değilse aç (index)
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const headerId = `accordion-header-${item.id}`;
        const contentId = `accordion-content-${item.id}`;

        return (
          <div 
            key={item.id} 
            className={`accordion__item ${isOpen ? 'accordion__item--active' : ''}`}
          >
            {/* Başlık (Header) - Buton olmalı ki klavye ile erişilebilsin */}
            <button
              id={headerId}
              className="accordion__header"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="accordion__title">{item.title}</span>
              <span className="accordion__icon" aria-hidden="true">
                {/* Basit bir ok işareti (CSS ile de yapılabilir ama SVG daha net) */}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="currentColor"/>
                </svg>
              </span>
            </button>

            {/* İçerik (Content) */}
            <div
              id={contentId}
              className="accordion__content"
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
            >
              <div className="accordion__body">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};