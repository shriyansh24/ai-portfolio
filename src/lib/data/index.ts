/**
 * Data Structures for AI Portfolio
 * 
 * This file contains static data and configuration used throughout
 * the portfolio. Think of this as the "training data" for our
 * transformer-themed website.
 * 
 * @fileoverview Static content and configuration data
 */

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

/**
 * Main site configuration
 * Contains metadata and settings for the portfolio
 */
export const siteConfig = {
  name: 'AI Portfolio',
  title: 'Your Name | Electronics Engineer & Data Scientist',
  description: 'Transformer-themed portfolio showcasing expertise in electronics engineering and data science through innovative AI-inspired design',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile',
    twitter: 'https://twitter.com/yourusername', // Optional
  },
  keywords: [
    'electronics engineering',
    'data science',
    'machine learning',
    'portfolio',
    'AI',
    'transformer',
    'neural networks',
    'web development'
  ],
};

// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================

/**
 * Main navigation structure
 * Defines the neural network "layers" of the site
 */
export const navigationConfig = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
    description: 'Personal background and philosophy',
    attentionWeight: 1.0, // Base attention weight for neural nav
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    description: 'Technical projects and achievements',
    attentionWeight: 0.9,
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '#experience',
    description: 'Professional and academic journey',
    attentionWeight: 0.8,
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills',
    description: 'Technical competencies and tools',
    attentionWeight: 0.7,
  },
  {
    id: 'publications',
    label: 'Publications',
    href: '#publications',
    description: 'Research and learning highlights',
    attentionWeight: 0.6,
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    description: 'Get in touch and connect',
    attentionWeight: 0.5,
  },
];

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

/**
 * Color palette for the transformer theme
 * Warm colors on black background for professional yet approachable feel
 */
export const themeConfig = {
  colors: {
    // Primary warm palette
    primary: '#FF8C42',    // Golden orange
    secondary: '#FF6B6B',  // Coral red
    tertiary: '#FFD93D',   // Warm amber
    
    // Base colors
    background: '#000000', // Pure black
    surface: '#1a1a1a',   // Dark gray for cards/sections
    text: '#FEFEFE',      // Warm white
    textSecondary: '#CCCCCC', // Muted text
    
    // State colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    
    // Gradient definitions for neural network effects
    gradients: {
      primary: 'linear-gradient(135deg, #FF8C42 0%, #FF6B6B 100%)',
      secondary: 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
      neural: 'linear-gradient(90deg, #FF8C42 0%, #FF6B6B 50%, #FFD93D 100%)',
    },
  },
  
  animation: {
    // Timing functions for transformer-themed animations
    easing: {
      default: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      neural: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    
    // Duration presets
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
      neural: 800, // For attention mechanism animations
    },
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// ============================================================================
// PLACEHOLDER DATA (TO BE REPLACED WITH ACTUAL CONTENT)
// ============================================================================

/**
 * Placeholder project data
 * TODO: Replace with actual project information
 */
export const placeholderProjects = [
  {
    id: 'neural-circuit-analyzer',
    title: 'Neural Circuit Analyzer',
    description: 'AI-powered tool for analyzing electronic circuit behavior using transformer networks',
    category: 'electronics' as const,
    status: 'completed' as const,
         technologies: ['Python', 'TensorFlow', 'Circuit Simulation', 'React'],
     startDate: '2024-01-01',
     endDate: '2024-06-01',
     featured: true,
     tags: ['AI', 'Electronics', 'Analysis'],
     longDescription: 'Detailed description of the project...',
    relatedSkills: ['python', 'machine-learning', 'electronics'],
    projects: [], // Will be populated with related project IDs
  },
  // Add more placeholder projects...
];

/**
 * Placeholder skills data
 * TODO: Replace with actual skill assessments
 */
export const placeholderSkills = [
  {
    id: 'python',
    name: 'Python',
    category: 'programming' as const,
    proficiency: 'advanced' as const,
    yearsOfExperience: 5,
    relatedSkills: ['machine-learning', 'data-science'],
    projects: ['neural-circuit-analyzer'],
  },
  // Add more placeholder skills...
];

/**
 * Placeholder experience data
 * TODO: Replace with actual experience information
 */
export const placeholderExperience = [
  {
    id: 'current-role',
    title: 'Electronics Engineer',
    organization: 'Your Current Company',
    type: 'work' as const,
    description: 'Description of current role and responsibilities',
    achievements: [
      'Key achievement 1',
      'Key achievement 2',
      'Key achievement 3',
    ],
    technologies: ['Python', 'MATLAB', 'Circuit Design'],
    startDate: '2023-01-01',
    location: 'City, Country',
    current: true,
  },
  // Add more placeholder experience...
];

// ============================================================================
// ATTENTION WEIGHT MATRIX (FOR NEURAL NAVIGATION)
// ============================================================================

/**
 * Pre-calculated attention weights between different portfolio sections
 * This creates the "neural pathway" connections in the navigation
 */
export const attentionMatrix = {
  about: {
    projects: 0.8,
    experience: 0.9,
    skills: 0.7,
    publications: 0.6,
    contact: 0.5,
  },
  projects: {
    about: 0.8,
    experience: 0.7,
    skills: 0.9,
    publications: 0.6,
    contact: 0.4,
  },
  experience: {
    about: 0.9,
    projects: 0.7,
    skills: 0.8,
    publications: 0.5,
    contact: 0.4,
  },
  skills: {
    about: 0.7,
    projects: 0.9,
    experience: 0.8,
    publications: 0.4,
    contact: 0.3,
  },
  publications: {
    about: 0.6,
    projects: 0.6,
    experience: 0.5,
    skills: 0.4,
    contact: 0.3,
  },
  contact: {
    about: 0.5,
    projects: 0.4,
    experience: 0.4,
    skills: 0.3,
    publications: 0.3,
  },
};

// ============================================================================
// EXPORT CONFIGURATION
// ============================================================================

// Export all configuration for easy importing
export default {
  site: siteConfig,
  navigation: navigationConfig,
  theme: themeConfig,
  attention: attentionMatrix,
}; 