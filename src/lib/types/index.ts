/**
 * Type Definitions for AI Portfolio
 * 
 * This file contains all TypeScript interfaces and types used throughout
 * the AI-themed portfolio. Types are organized using transformer terminology
 * to maintain consistency with the neural network theme.
 * 
 * @fileoverview Core type definitions for portfolio data structures
 */

// ============================================================================
// CORE PORTFOLIO TYPES
// ============================================================================

/**
 * Project interface - represents a technical project or achievement
 * Think of each project as a "token" in our portfolio sequence
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  startDate: string;
  endDate?: string;
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
}

export type ProjectCategory = 
  | 'electronics'
  | 'data-science'
  | 'web-development'
  | 'machine-learning'
  | 'research'
  | 'academic';

export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'planning'
  | 'archived';

/**
 * Skill interface - represents technical competencies
 * Skills form the "vocabulary" of our technical capabilities
 */
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: SkillLevel;
  yearsOfExperience: number;
  relatedSkills: string[]; // IDs of related skills for attention mapping
  projects: string[]; // Project IDs where this skill was used
}

export type SkillCategory = 
  | 'programming'
  | 'electronics'
  | 'data-science'
  | 'tools'
  | 'frameworks'
  | 'soft-skills';

export type SkillLevel = 
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

/**
 * Experience interface - represents professional and academic experience
 * Each experience is like a "layer" in our professional development
 */
export interface Experience {
  id: string;
  title: string;
  organization: string;
  type: ExperienceType;
  description: string;
  achievements: string[];
  technologies: string[];
  startDate: string;
  endDate?: string;
  location: string;
  current: boolean;
}

export type ExperienceType = 
  | 'work'
  | 'education'
  | 'research'
  | 'volunteer'
  | 'project';

// ============================================================================
// ATTENTION MECHANISM TYPES (For Neural Network Navigation)
// ============================================================================

/**
 * Attention weight mapping for neural network navigation
 * Represents how different portfolio sections relate to each other
 */
export interface AttentionMatrix {
  [sectionId: string]: {
    [relatedSectionId: string]: number; // Attention weight (0-1)
  };
}

/**
 * Interactive state for attention-based navigation
 */
export interface AttentionState {
  currentFocus: string; // Currently focused section ID
  attentionWeights: AttentionMatrix;
  isTransitioning: boolean;
  lastInteraction: number; // Timestamp
}

// ============================================================================
// UI AND COMPONENT TYPES
// ============================================================================

/**
 * Animation configuration for transformer-themed interactions
 */
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
  stagger?: number;
}

/**
 * Theme configuration matching the warm-on-black color palette
 */
export interface ThemeConfig {
  colors: {
    primary: string;    // Golden orange
    secondary: string;  // Coral red  
    tertiary: string;   // Warm amber
    background: string; // Pure black
    text: string;       // Warm white
  };
  animations: {
    enabled: boolean;
    reducedMotion: boolean;
  };
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Generic response type for API calls
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Loading state type for async operations
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/**
 * Contact form data structure
 */
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Anti-spam field
}

// ============================================================================
// EXPORTS
// ============================================================================

// All types are already exported inline above
// This file serves as the main entry point for type definitions 