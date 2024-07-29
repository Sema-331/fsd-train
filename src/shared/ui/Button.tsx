import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onСlick?: any;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children, onСlick }) => {
  return (
    <button onClick={onСlick} type={type}>
      {children}
    </button>
  );
};
