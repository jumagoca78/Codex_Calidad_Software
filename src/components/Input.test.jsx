import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByTestId('input')).toHaveAttribute('placeholder', 'Enter text');
  });

  it('renders with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('shows required indicator when required is true', () => {
    render(<Input label="Email" required={true} />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('updates value when typed', () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with correct type', () => {
    render(<Input type="email" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');
  });

  it('displays the current value', () => {
    render(<Input value="Hello World" onChange={() => {}} />);
    expect(screen.getByTestId('input')).toHaveValue('Hello World');
  });
});
