import React from 'react';
import './Button.scss';

// Button'un alabileceği özellikleri (Props) tanımlıyoruz
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // "?" işareti bu özelliklerin zorunlu olmadığını belirtir
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean; // Yükleniyor durumu için ekstra özellik
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary', // Varsayılan değer
  size = 'md',        // Varsayılan değer
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  ...props // Geri kalan tüm standart buton özelliklerini (onClick vs.) al
}) => {
  
  // BEM (Block Element Modifier) isimlendirme standardı
  const baseClass = 'ui-btn';
  
  // Sınıf isimlerini birleştiriyoruz
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    fullWidth ? `${baseClass}--full` : '',
    isLoading ? `${baseClass}--loading` : '',
    className,
  ].join(' ').trim();

  return (
    <button 
      className={classes} 
      disabled={disabled || isLoading} 
      {...props}
    >
      {/* Eğer yükleniyorsa basit bir yazı, değilse içeriği göster */}
      {isLoading ? '...' : children}
    </button>
  );
};