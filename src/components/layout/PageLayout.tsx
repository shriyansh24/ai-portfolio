'use client';

import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

/**
 * Page layout configuration interface
 * Defines the structure and behavior of different page layouts
 */
interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  showFooter?: boolean;
  variant?: 'default' | 'centered' | 'wide' | 'minimal';
  background?: 'default' | 'neural' | 'solid';
}

/**
 * Page transition variants for transformer-themed animations
 * These simulate neural network activation patterns
 */
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1
  },
  out: { 
    opacity: 0, 
    y: -20,
    scale: 1.02
  }
};

/**
 * Transformer-themed page transitions
 * Smooth animations that mimic information flow through neural networks
 */
const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.5
};

/**
 * Background variants for different page types
 * Each variant represents a different neural network state
 */
const backgroundVariants = {
  default: 'bg-gradient-to-br from-black via-gray-900 to-black',
  neural: 'bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden',
  solid: 'bg-black'
};

/**
 * Layout variants for different content types
 * Optimizes presentation based on content requirements
 */
const layoutVariants = {
  default: 'container-lg',
  centered: 'container-md mx-auto text-center',
  wide: 'container-xl',
  minimal: 'container-sm mx-auto'
};

/**
 * PageLayout Component
 * 
 * Provides consistent page structure with:
 * - Transformer-themed animations and transitions
 * - Flexible layout variants for different content types
 * - Integrated navigation and footer components
 * - Neural network-inspired background effects
 * - Accessibility-first design principles
 * 
 * @param children - Page content that inherits the layout structure
 * @param className - Additional CSS classes for customization
 * @param showNavigation - Whether to display the navigation header
 * @param showFooter - Whether to display the footer
 * @param variant - Layout variant for different content presentation needs
 * @param background - Background style variant
 */
export function PageLayout({ 
  children, 
  className = '', 
  showNavigation = true, 
  showFooter = true,
  variant = 'default',
  background = 'default'
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${backgroundVariants[background]}`}>
      {/* Neural network background effects for enhanced variants */}
      {background === 'neural' && (
        <>
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -inset-10 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 80%, rgba(255, 140, 66, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 40% 40%, rgba(255, 217, 61, 0.1) 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
          
          {/* Neural connection lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                style={{
                  top: `${20 + i * 30}%`,
                  width: '100%',
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Navigation Header */}
      {showNavigation && <Navigation />}
      
      {/* Main Content Area with Page Transitions */}
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={`
          flex-1 relative z-10
          ${showNavigation ? 'pt-20' : 'pt-0'}
          ${className}
        `}
        role="main"
      >
        {/* Content wrapper with layout variant */}
        <div className={layoutVariants[variant]}>
          {children}
        </div>
      </motion.main>
      
      {/* Footer */}
      {showFooter && <Footer />}
      
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-black px-4 py-2 rounded-lg font-medium z-50"
      >
        Skip to main content
      </a>
    </div>
  );
}

/**
 * Specialized layout components for common page types
 * These provide pre-configured layouts for specific use cases
 */

/**
 * Hero Layout - For landing pages and major sections
 */
export function HeroLayout({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <PageLayout
      variant="wide"
      background="neural"
      className={`min-h-screen flex items-center justify-center ${className}`}
    >
      {children}
    </PageLayout>
  );
}

/**
 * Content Layout - For text-heavy pages like About
 */
export function ContentLayout({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <PageLayout
      variant="centered"
      background="default"
      className={`py-16 ${className}`}
    >
      {children}
    </PageLayout>
  );
}

/**
 * Grid Layout - For projects and portfolio items
 */
export function GridLayout({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <PageLayout
      variant="wide"
      background="default"
      className={`py-12 ${className}`}
    >
      {children}
    </PageLayout>
  );
} 