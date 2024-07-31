import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
