import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Test component to verify basic rendering
const TestComponent: React.FC = () => (
  <div>
    <h1>Testing Infrastructure Works</h1>
    <p>All dependencies are properly configured</p>
  </div>
);

describe('Task 2 Infrastructure Tests', () => {
  it('renders components correctly', () => {
    render(<TestComponent />);
    const heading = screen.getByText('Testing Infrastructure Works');
    const paragraph = screen.getByText(
      'All dependencies are properly configured'
    );

    expect(heading).toBeTruthy();
    expect(paragraph).toBeTruthy();
  });

  it('verifies TypeScript integration', () => {
    const value: number = 42;
    const text: string = 'transformer-theme';

    expect(typeof value).toBe('number');
    expect(typeof text).toBe('string');
    expect(value).toBe(42);
  });

  it('verifies testing library utilities work', () => {
    render(<TestComponent />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toBe('Testing Infrastructure Works');
  });

  it('validates environment setup', () => {
    // Test that our mocks from setup.ts are working
    expect(window.matchMedia).toBeDefined();
    expect(global.IntersectionObserver).toBeDefined();
    expect(global.ResizeObserver).toBeDefined();
  });
});
