import React from 'react';
import './List.css';

/**
 * List component - A component for displaying lists
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of items to display
 * @param {boolean} props.ordered - Whether to use an ordered list (ol) or unordered list (ul)
 * @param {Function} props.onItemClick - Optional function to call when an item is clicked
 */
const List = ({ items = [], ordered = false, onItemClick }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  
  return (
    <ListTag className="list" data-testid="list">
      {items.length === 0 ? (
        <li className="list-empty" data-testid="empty-message">
          No items to display
        </li>
      ) : (
        items.map((item, index) => (
          <li
            key={index}
            className="list-item"
            onClick={() => onItemClick && onItemClick(item, index)}
            data-testid={`list-item-${index}`}
            style={{ cursor: onItemClick ? 'pointer' : 'default' }}
          >
            {item}
          </li>
        ))
      )}
    </ListTag>
  );
};

export default List;
