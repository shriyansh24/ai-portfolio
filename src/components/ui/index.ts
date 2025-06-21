/**
 * UI Components - Basic Building Blocks
 *
 * This directory contains the fundamental UI components that serve as
 * the "tokens" in our transformer-themed portfolio. These are reusable,
 * atomic components that maintain consistency across the entire site.
 *
 * @fileoverview Basic UI component exports
 */

// TODO: Export UI components as they are created
// export { Button } from './Button';
// export { Card } from './Card';
// export { Input } from './Input';
// export { LoadingSpinner } from './LoadingSpinner';
// export { Badge } from './Badge';
// export { Modal } from './Modal';
// export { Tooltip } from './Tooltip';

// Placeholder export to prevent TypeScript errors
export const UI_COMPONENTS_PLACEHOLDER = 'UI components will be exported here';

// UI Component Exports - Neural Network Interface Elements
export { ErrorBoundary, useErrorBoundary } from './ErrorBoundary';
export { LoadingSkeleton, PageLoading } from './LoadingSkeleton';

// Typography Components
export * from './Typography';

// Interactive Components
export * from './Button';
export * from './Input';

// Layout Components
export * from './Card';

// Status and Feedback Components
export * from './Badge';
export * from './Loading';

// Existing Components
export * from './LoadingSkeleton';
export * from './ErrorBoundary';

// Re-export utilities
export { cn } from '@/lib/utils';
