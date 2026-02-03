import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders children content', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByTestId('card-header')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(<Card footer="Card footer">Content</Card>);
    expect(screen.getByText('Card footer')).toBeInTheDocument();
    expect(screen.getByTestId('card-footer')).toBeInTheDocument();
  });

  it('renders without header when title is not provided', () => {
    render(<Card>Content</Card>);
    expect(screen.queryByTestId('card-header')).not.toBeInTheDocument();
  });

  it('renders without footer when footer is not provided', () => {
    render(<Card>Content</Card>);
    expect(screen.queryByTestId('card-footer')).not.toBeInTheDocument();
  });

  it('renders with all sections', () => {
    render(
      <Card title="Title" footer="Footer">
        <p>Body content</p>
      </Card>
    );
    expect(screen.getByTestId('card-header')).toBeInTheDocument();
    expect(screen.getByTestId('card-body')).toBeInTheDocument();
    expect(screen.getByTestId('card-footer')).toBeInTheDocument();
  });
});
