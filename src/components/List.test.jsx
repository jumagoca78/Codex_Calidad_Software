import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';

describe('List Component', () => {
  const sampleItems = ['Item 1', 'Item 2', 'Item 3'];

  it('renders all items', () => {
    render(<List items={sampleItems} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders as unordered list by default', () => {
    render(<List items={sampleItems} />);
    expect(screen.getByTestId('list').tagName).toBe('UL');
  });

  it('renders as ordered list when ordered prop is true', () => {
    render(<List items={sampleItems} ordered={true} />);
    expect(screen.getByTestId('list').tagName).toBe('OL');
  });

  it('displays empty message when items array is empty', () => {
    render(<List items={[]} />);
    expect(screen.getByTestId('empty-message')).toHaveTextContent('No items to display');
  });

  it('calls onItemClick when an item is clicked', () => {
    const handleItemClick = vi.fn();
    render(<List items={sampleItems} onItemClick={handleItemClick} />);
    
    fireEvent.click(screen.getByTestId('list-item-0'));
    expect(handleItemClick).toHaveBeenCalledWith('Item 1', 0);
  });

  it('does not call onItemClick when not provided', () => {
    render(<List items={sampleItems} />);
    const item = screen.getByTestId('list-item-0');
    
    // Should not throw error when clicked
    fireEvent.click(item);
  });
});
