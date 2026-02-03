import React from 'react';
import './Button.css';

/**
 * Button component - A reusable button component
 * @param {Object} props - Component props
 * @param {string} props.label - The text to display on the button
 * @param {Function} props.onClick - Function to call when button is clicked
 * @param {string} props.variant - Button style variant ('primary', 'secondary', 'danger')
 * @param {boolean} props.disabled - Whether the button is disabled
 */
const Button = ({ label, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
    >
      {label}
    </button>
  );
};

export default Button;
