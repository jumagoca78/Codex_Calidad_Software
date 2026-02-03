import React from 'react';
import './Card.css';

/**
 * Card component - A container component for displaying content
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the card
 * @param {React.ReactNode} props.children - Content to display inside the card
 * @param {string} props.footer - Footer text for the card
 */
const Card = ({ title, children, footer }) => {
  return (
    <div className="card" data-testid="card">
      {title && (
        <div className="card-header" data-testid="card-header">
          <h3>{title}</h3>
        </div>
      )}
      <div className="card-body" data-testid="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer" data-testid="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
