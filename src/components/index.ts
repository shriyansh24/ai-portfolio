/**
 * Component Library Barrel Exports
 * 
 * This file serves as the main entry point for all reusable components
 * in the AI-themed portfolio website. It follows the transformer architecture
 * concept where each component can be seen as a node in the neural network.
 * 
 * @example
 * import { Button, Card, LoadingSpinner } from '@/components'
 */

// UI Components (Basic building blocks - like transformer tokens)
export * from './ui';

// Layout Components (Structural elements - like encoder/decoder layers)
export * from './layout';

// Section Components (Content blocks - like attention heads)
export * from './sections';

// Re-export commonly used components for convenience
// TODO: Add specific exports as components are created
// export { Button } from './ui/Button';
// export { Card } from './ui/Card';
// export { LoadingSpinner } from './ui/LoadingSpinner';
// export { Header } from './layout/Header';
// export { Footer } from './layout/Footer';
// export { AttentionNavigation } from './layout/AttentionNavigation';
// export { AboutSection } from './sections/AboutSection';
// export { ProjectsSection } from './sections/ProjectsSection';
// export { ExperienceSection } from './sections/ExperienceSection'; 