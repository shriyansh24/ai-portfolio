import '@testing-library/jest-dom';
import { vi } from 'vitest';
import type React from 'react';

// Global test utilities and mocks for the AI Portfolio project
// This setup file is run before each test suite

// Mock Three.js for testing (since it requires WebGL)
vi.mock('three', () => ({
  Scene: vi.fn(() => ({})),
  PerspectiveCamera: vi.fn(() => ({})),
  WebGLRenderer: vi.fn(() => ({
    setSize: vi.fn(),
    render: vi.fn(),
    domElement: document.createElement('canvas'),
  })),
  // Add other Three.js mocks as needed
}));

// Mock Framer Motion for testing (to avoid animation complexities in tests)
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    span: 'span',
    section: 'section',
    nav: 'nav',
    header: 'header',
    footer: 'footer',
    // Add other HTML elements as needed
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Global test configuration
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver for scroll-based animations
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock ResizeObserver for responsive components
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
