import React from 'react';
import './Input.scss';

// InputProps arayüzü, standart HTML input özelliklerini genişletir
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;          // Label zorunlu olsun, erişilebilirlik için önemli
  error?: string;         // Hata mesajı varsa gösterir
  id: string;             // Label ile input'u bağlamak için ID zorunlu
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  id, 
  className = '', 
  ...props 
}) => {
  return (
    <div className={`input-group ${className}`}>
      {/* Label: for niteliği (htmlFor) ile inputa bağlanır [cite: 31] */}
      <label htmlFor={id} className="input-group__label">
        {label}
      </label>

      <input
        id={id}
        className={`input-group__control ${error ? 'input-group__control--error' : ''}`}
        // Erişilebilirlik: Hata varsa ekran okuyucuya bildirir 
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props} 
      />

      {/* Hata varsa göster */}
      {error && (
        <span id={`${id}-error`} className="input-group__error-text" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};