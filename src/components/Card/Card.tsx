import React from 'react';
import './Card.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  isInteractive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  isInteractive = false,
  className = '',
  ...props
}) => {
  // BEM Sınıf İsimlendirmesi
  const baseClass = 'ui-card';
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--p-${padding}`,
    isInteractive ? `${baseClass}--interactive` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};