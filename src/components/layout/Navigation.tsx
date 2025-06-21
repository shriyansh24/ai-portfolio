'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, Code, User, BookOpen, Mail, Zap } from 'lucide-react';
import { useNavigation } from '@/components/providers/NavigationProvider';

/**
 * Navigation item interface defining the neural network structure
 * Each item represents a node in the transformer attention mechanism
 */
interface NavigationItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  layer: string; // Neural network layer designation
}

/**
 * Navigation items representing the transformer architecture layers
 * Each item maps to a different layer in the neural network metaphor
 */
const navigationItems: NavigationItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: Brain,
    description: 'Input Layer - Introduction and Overview',
    layer: 'input'
  },
  {
    href: '/about',
    label: 'About',
    icon: User,
    description: 'Encoding Layer - Background and Journey',
    layer: 'encoder'
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: Code,
    description: 'Processing Layer - Technical Implementations',
    layer: 'attention'
  },
  {
    href: '/experience',
    label: 'Experience',
    icon: BookOpen,
    description: 'Attention Layer - Professional Growth',
    layer: 'decoder'
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    description: 'Output Layer - Professional Connections',
    layer: 'output'
  }
];

/**
 * Primary Navigation Component
 * 
 * Implements transformer attention mechanisms through:
 * - Interactive attention weight visualization
 * - Neural connection effects between related sections
 * - Responsive design with mobile-first approach
 * - Comprehensive accessibility support
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { focusedSection, setFocusedSection, updateAttentionWeights } = useNavigation();

  // Handle scroll effect for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /**
   * Handle attention mechanism activation
   * Simulates transformer attention weights between navigation items
   */
  const handleAttentionFocus = (item: NavigationItem) => {
    setFocusedSection(item.href);
    
    // Calculate attention weights based on layer relationships
    const weights: Record<string, number> = {};
    navigationItems.forEach(navItem => {
      if (navItem.href === item.href) {
        weights[navItem.href] = 1.0; // Full attention to current item
      } else if (navItem.layer === item.layer) {
        weights[navItem.href] = 0.8; // High attention to same layer
      } else {
        // Attention based on layer proximity in transformer architecture
        const layerOrder = ['input', 'encoder', 'attention', 'decoder', 'output'];
        const currentIndex = layerOrder.indexOf(item.layer);
        const targetIndex = layerOrder.indexOf(navItem.layer);
        const distance = Math.abs(currentIndex - targetIndex);
        weights[navItem.href] = Math.max(0.2, 1.0 - (distance * 0.25));
      }
    });
    
    updateAttentionWeights(weights);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-lg py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo/Brand with Neural Network Theme */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 attention-glow rounded-lg p-2 -m-2 group"
            aria-label="AI Portfolio - Return to homepage"
            onMouseEnter={() => navigationItems[0] && handleAttentionFocus(navigationItems[0])}
            onMouseLeave={() => setFocusedSection(null)}
          >
            <Brain className="w-8 h-8 text-primary group-hover:animate-neural-pulse" aria-hidden="true" />
            <span className="text-xl font-bold text-gradient-neural hidden sm:inline">
              AI Portfolio
            </span>
            <Zap className="w-4 h-4 text-tertiary ml-1 group-hover:animate-neural-pulse" aria-hidden="true" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const attentionWeight = focusedSection ? 
                (focusedSection === item.href ? 1.0 : 0.3) : 1.0;
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ 
                    opacity: attentionWeight,
                    y: 0,
                    scale: isActive ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'bg-primary/20 text-primary border border-primary/30' 
                        : 'text-warm-white hover:text-primary hover:bg-white/5'
                      }
                      attention-glow focus:outline-none focus:ring-2 focus:ring-primary
                      relative overflow-hidden
                    `}
                    aria-current={isActive ? 'page' : undefined}
                    title={item.description}
                    onMouseEnter={() => handleAttentionFocus(item)}
                    onMouseLeave={() => setFocusedSection(null)}
                  >
                    {/* Neural connection flow effect */}
                    {focusedSection === item.href && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span className="font-medium">{item.label}</span>
                    {/* Neural layer indicator */}
                    <div className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-primary' : 'bg-gray-600'
                    } transition-colors`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 -m-2 text-warm-white hover:text-primary transition-colors attention-glow rounded-lg"
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation with Neural Network Theme */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800 p-4">
                <div className="space-y-2">
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`
                            flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 w-full
                            ${isActive 
                              ? 'bg-primary/20 text-primary border border-primary/30' 
                              : 'text-warm-white hover:text-primary hover:bg-white/5'
                            }
                            attention-glow focus:outline-none focus:ring-2 focus:ring-primary
                          `}
                          aria-current={isActive ? 'page' : undefined}
                          onTouchStart={() => handleAttentionFocus(item)}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                          <div className="flex-1">
                            <div className="font-medium flex items-center space-x-2">
                              <span>{item.label}</span>
                              <div className={`w-2 h-2 rounded-full ${
                                isActive ? 'bg-primary' : 'bg-gray-600'
                              }`} />
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Neural Network Status in Mobile Menu */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <Zap className="w-4 h-4 text-primary animate-neural-pulse" />
                    <span>Neural Network Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
} 