/**
 * Utility Functions for AI Portfolio
 * 
 * This file contains reusable utility functions that support the
 * transformer-themed portfolio functionality. Think of these as the
 * "preprocessing functions" that prepare data for the neural network.
 * 
 * @fileoverview Core utility functions for common operations
 */

// ============================================================================
// STYLING UTILITIES
// ============================================================================

/**
 * Utility function for conditionally joining classNames
 * Essential for dynamic styling in the transformer theme
 * 
 * @param classes - Variable number of class name arguments
 * @returns Joined class string
 * 
 * @example
 * cn('base-class', isActive && 'active-class', 'another-class')
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// ============================================================================
// DATE AND TIME UTILITIES
// ============================================================================

/**
 * Format date for display in the portfolio
 * 
 * @param date - Date string or Date object
 * @param format - Format type for different contexts
 * @returns Formatted date string
 */
export function formatDate(
  date: string | Date, 
  format: 'short' | 'long' | 'year' = 'long'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
      });
    case 'year':
      return dateObj.getFullYear().toString();
    case 'long':
    default:
      return dateObj.toLocaleDateString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      });
  }
}

/**
 * Calculate duration between two dates
 * Useful for experience timelines and project durations
 */
export function calculateDuration(
  startDate: string | Date, 
  endDate?: string | Date
): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = endDate 
    ? (typeof endDate === 'string' ? new Date(endDate) : endDate)
    : new Date();

  const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                 (end.getMonth() - start.getMonth());
  
  if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }
  
  return `${years} year${years !== 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
}

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validate email address format
 * Used for contact form validation
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate required form fields
 * Generic validation for contact forms
 */
export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

// ============================================================================
// STRING UTILITIES
// ============================================================================

/**
 * Create URL-friendly slug from string
 * Useful for project IDs and routing
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Truncate text to specified length with ellipsis
 * Useful for project descriptions and previews
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Check if user prefers reduced motion
 * Important for accessibility in the transformer theme
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Generate staggered animation delays for list items
 * Creates the neural network activation effect
 */
export function generateStaggerDelay(index: number, baseDelay: number = 100): number {
  return index * baseDelay;
}

// ============================================================================
// PLACEHOLDER FUNCTIONS (TO BE IMPLEMENTED)
// ============================================================================

// TODO: Add attention weight calculation utilities
// TODO: Add color manipulation utilities for gradient effects
// TODO: Add scroll position utilities for navigation highlighting
// TODO: Add device detection utilities for responsive behavior

/**
 * Placeholder for attention weight calculation
 * Will be used for neural network navigation
 */
export function calculateAttentionWeights(
  currentSection: string, 
  allSections: string[]
): Record<string, number> {
  // Placeholder implementation - will be enhanced with actual attention logic
  const weights: Record<string, number> = {};
  allSections.forEach(section => {
    weights[section] = section === currentSection ? 1.0 : 0.5;
  });
  return weights;
} 