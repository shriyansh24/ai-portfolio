/**
 * Library Utilities Barrel Exports
 * 
 * This file serves as the main entry point for all utility functions,
 * data structures, and type definitions used throughout the AI portfolio.
 * Think of this as the "preprocessing layer" of our transformer architecture.
 * 
 * @example
 * import { cn, formatDate, type Project } from '@/lib'
 */

// Utility Functions (Helper functions for data processing)
export * from './utils';

// Data Structures (Static content and configuration)
export * from './data';

// Type Definitions (TypeScript interfaces and types)
export * from './types';

// Re-export commonly used utilities for convenience
// TODO: Add specific exports as utilities are created
// export { cn } from './utils/cn';
// export { formatDate } from './utils/formatDate';
// export { validateEmail } from './utils/validation';
// export { projectsData } from './data/projects';
// export { skillsData } from './data/skills';
// export { experienceData } from './data/experience';
// export type { Project, Skill, Experience } from './types'; 