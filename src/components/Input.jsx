import React from 'react';
import './Input.css';

/**
 * Input component - A reusable input field component
 * @param {Object} props - Component props
 * @param {string} props.type - The type of input (text, email, password, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Current value of the input
 * @param {Function} props.onChange - Function to call when input changes
 * @param {string} props.label - Label for the input
 * @param {boolean} props.required - Whether the input is required
 */
const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  label,
  required = false 
}) => {
  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
        data-testid="input"
      />
    </div>
  );
};

export default Input;
