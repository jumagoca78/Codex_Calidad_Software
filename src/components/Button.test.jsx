import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByTestId('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct variant class', () => {
    render(<Button label="Primary" variant="primary" />);
    expect(screen.getByTestId('button')).toHaveClass('btn-primary');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button label="Disabled" disabled={true} />);
    expect(screen.getByTestId('button')).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button label="Disabled" onClick={handleClick} disabled={true} />);
    
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
