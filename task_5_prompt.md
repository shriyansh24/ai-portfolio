# Task 5: Interactive Features Layer (Attention Mechanisms) - AI Portfolio Website

## Context and Strategic Understanding

You are now implementing the attention mechanisms that will transform your portfolio from a static presentation into an intelligent, interactive experience. Think of this phase as adding the sophisticated attention layers that enable transformers to understand relationships between different parts of input sequences. Just as attention mechanisms in neural networks highlight relevant connections and guide information flow, your interactive features will guide users through your professional story with purposeful, meaningful animations.

This task represents the transition from foundation to sophistication. The theme of modern React and Next.js development in 2025 is "Don't make me wait" - users should never wait for data, pages to render, or layouts to shift. Your interactive features must enhance understanding while maintaining performance and accessibility standards that demonstrate professional-grade development practices.

**Critical Integration Point**: This task specifically prepares your codebase for the Performance Optimization Layer (Task 6) by implementing performance monitoring hooks, lazy loading patterns, and optimization-ready component architecture from the start.

## Learning Objectives and Professional Impact

By completing this task, you will demonstrate mastery of advanced React patterns, animation systems, and state management while creating interactions that showcase your understanding of user experience principles. Your interactive features will serve as evidence of your ability to balance creativity with usability - a crucial skill that distinguishes senior developers from those who prioritize flashy effects over functional design.

## Understanding Modern Interactive Architecture

### The Attention Mechanism Philosophy

Just as transformers use attention to focus on relevant parts of input sequences, your portfolio's interactive features should guide user attention to the most important information at each moment. Modern web interactions in 2025 emphasize:

**Purposeful Animation**: Every animation should serve a clear functional purpose, enhancing comprehension rather than merely decorating
**Performance Optimization**: Interactions must maintain 60fps while respecting user preferences for reduced motion
**Accessibility Integration**: Interactive features must work seamlessly with assistive technologies and keyboard navigation
**Progressive Enhancement**: Core functionality remains available even when advanced features fail to load
**Monitoring Integration**: All interactions should be measurable and optimizable

### State Management for Interactive Systems

State management is a critical aspect of building scalable and performant React applications. In 2025, managing state efficiently is key to React performance optimization, preventing unnecessary re-renders and maintaining responsive interactions across complex component hierarchies.

## Step-by-Step Implementation Guide

### Step 1: Performance-Aware Animation System Foundation

Create a comprehensive animation system that supports the transformer theme while maintaining accessibility and performance monitoring from the start.

**File: `src/lib/animations/index.ts`**

```typescript
import { Variants, MotionProps } from 'framer-motion';

// Performance monitoring for animations
interface AnimationPerformanceMetrics {
  name: string;
  duration: number;
  fps: number;
  timestamp: number;
}

class AnimationPerformanceMonitor {
  private metrics: AnimationPerformanceMetrics[] = [];
  private frameCount = 0;
  private lastTime = performance.now();

  startMonitoring(animationName: string) {
    performance.mark(`animation-${animationName}-start`);
    this.frameCount = 0;
    this.lastTime = performance.now();
  }

  endMonitoring(animationName: string) {
    performance.mark(`animation-${animationName}-end`);
    performance.measure(
      `animation-${animationName}`,
      `animation-${animationName}-start`,
      `animation-${animationName}-end`
    );

    const currentTime = performance.now();
    const duration = currentTime - this.lastTime;
    const fps = Math.round((this.frameCount * 1000) / duration);

    this.metrics.push({
      name: animationName,
      duration,
      fps,
      timestamp: currentTime
    });

    // Log performance warnings for Task 6 optimization
    if (fps < 30) {
      console.warn(`Low FPS detected for ${animationName}: ${fps}fps`);
    }
  }

  getMetrics() {
    return this.metrics;
  }

  clearMetrics() {
    this.metrics = [];
  }
}

export const animationMonitor = new AnimationPerformanceMonitor();

// Neural network themed animation variants with performance optimization
export const neuralAnimations = {
  // Attention mechanism simulation with reduced motion support
  attention: {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.02, 1],
      opacity: [0.7, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },

  // Information flow simulation with hardware acceleration
  connectionFlow: {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: [0, 1, 0.6],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  },

  // Layer activation with spring physics
  layerActivation: {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  },

  // GPU-optimized gradient flow
  gradientFlow: {
    initial: { 
      background: "linear-gradient(90deg, transparent 0%, #FF8C42 50%, transparent 100%)",
      backgroundPosition: "-100% 0"
    },
    animate: {
      backgroundPosition: ["0% 0", "100% 0", "0% 0"],
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
    }
  }
} as const;

// Performance-optimized stagger animations
export const staggerAnimations = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  item: {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }
} as const;

// Hover interaction variants with performance monitoring
export const hoverAnimations = {
  lift: {
    whileHover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },
  
  glow: {
    whileHover: {
      boxShadow: "0 0 30px rgba(255, 140, 66, 0.4)",
      transition: { duration: 0.3 }
    }
  },

  neural: {
    whileHover: {
      scale: 1.02,
      boxShadow: [
        "0 0 20px rgba(255, 140, 66, 0.3)",
        "0 0 40px rgba(255, 140, 66, 0.5)",
        "0 0 20px rgba(255, 140, 66, 0.3)"
      ],
      transition: {
        boxShadow: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: { duration: 0.2 }
      }
    }
  }
} as const;

// Accessibility-aware animation function with performance considerations
export function getAccessibleAnimation(
  animation: Variants, 
  respectMotionPrefs = true,
  performanceMode = false
): Variants {
  if (!respectMotionPrefs && !performanceMode) return animation;
  
  const shouldReduceMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (shouldReduceMotion || performanceMode) {
    return {
      ...animation,
      animate: {
        ...animation.animate,
        transition: {
          ...animation.animate?.transition,
          duration: shouldReduceMotion ? 0.01 : 0.3,
          repeat: shouldReduceMotion ? 0 : animation.animate?.transition?.repeat
        }
      }
    };
  }
  
  return animation;
}

// Animation orchestration for complex sequences with performance tracking
export class AnimationOrchestrator {
  private sequences: Map<string, Promise<void>> = new Map();
  private performanceMode = false;

  setPerformanceMode(enabled: boolean) {
    this.performanceMode = enabled;
  }

  async playSequence(id: string, animations: Array<() => Promise<void>>) {
    // Cancel any existing sequence with this ID
    this.cancelSequence(id);

    animationMonitor.startMonitoring(id);
    
    const sequence = this.executeSequence(animations);
    this.sequences.set(id, sequence);
    
    try {
      await sequence;
    } finally {
      animationMonitor.endMonitoring(id);
      this.sequences.delete(id);
    }
  }

  private async executeSequence(animations: Array<() => Promise<void>>) {
    for (const animation of animations) {
      if (this.performanceMode) {
        // Skip non-essential animations in performance mode
        continue;
      }
      await animation();
    }
  }

  cancelSequence(id: string) {
    const sequence = this.sequences.get(id);
    if (sequence) {
      this.sequences.delete(id);
    }
  }

  cancelAllSequences() {
    this.sequences.clear();
  }
}

export const animationOrchestrator = new AnimationOrchestrator();
```

**Teaching Moment:** Performance monitoring built into your animation system from the start enables the optimization work in Task 6. This proactive approach demonstrates senior-level thinking about system design and maintenance.

### Step 2: Enhanced Navigation with Performance Metrics

Build upon your existing navigation to add transformer-inspired attention mechanisms with built-in performance monitoring.

**File: `src/components/interactive/AttentionNavigation.tsx`**

```typescript
'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Brain, User, Code, BookOpen, Mail, Zap, TrendingUp } from 'lucide-react';
import { neuralAnimations, staggerAnimations, hoverAnimations, animationMonitor } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { usePerformanceStore } from '@/store/performanceStore';

interface NavigationNode {
  id: string;
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  keywords: string[];
  connections: string[];
  priority: 'high' | 'medium' | 'low';
}

const navigationNodes: NavigationNode[] = [
  {
    id: 'home',
    href: '/',
    label: 'Input Layer',
    icon: Brain,
    description: 'Initial data processing and feature extraction',
    keywords: ['overview', 'introduction', 'portfolio'],
    connections: ['about', 'projects'],
    priority: 'high'
  },
  {
    id: 'about',
    href: '/about',
    label: 'Encoding Layer',
    icon: User,
    description: 'Personal and professional background encoding',
    keywords: ['background', 'education', 'journey'],
    connections: ['home', 'experience', 'projects'],
    priority: 'high'
  },
  {
    id: 'projects',
    href: '/projects',
    label: 'Processing Layer',
    icon: Code,
    description: 'Technical implementations and solutions',
    keywords: ['technical', 'development', 'solutions'],
    connections: ['about', 'experience'],
    priority: 'high'
  },
  {
    id: 'experience',
    href: '/experience',
    label: 'Attention Layer',
    icon: BookOpen,
    description: 'Professional experience and skill attention weights',
    keywords: ['career', 'skills', 'professional'],
    connections: ['about', 'projects', 'contact'],
    priority: 'medium'
  },
  {
    id: 'contact',
    href: '/contact',
    label: 'Output Layer',
    icon: Mail,
    description: 'Communication channels and professional connections',
    keywords: ['contact', 'communication', 'networking'],
    connections: ['experience'],
    priority: 'medium'
  }
];

export function AttentionNavigation() {
  const [activeNode, setActiveNode] = useState<string>('home');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [attentionWeights, setAttentionWeights] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const controls = useAnimation();
  
  // Performance store integration
  const { isHighPerformanceMode, recordInteraction } = usePerformanceStore();

  // Optimized attention weight calculation with memoization
  const calculateAttentionWeights = useCallback((currentNodeId: string, targetNodeId: string | null) => {
    const currentNode = navigationNodes.find(n => n.id === currentNodeId);
    if (!currentNode) return {};

    const weights: Record<string, number> = {};
    
    navigationNodes.forEach(node => {
      let weight = 0.1; // Base attention weight
      
      // Priority-based weights
      if (node.priority === 'high') weight += 0.2;
      else if (node.priority === 'medium') weight += 0.1;
      
      // Connection-based weights
      if (currentNode.connections.includes(node.id)) {
        weight = 0.6;
      }
      
      // Hover state maximum weight
      if (targetNodeId === node.id) {
        weight = 1.0;
      }
      
      // Current node high attention
      if (node.id === currentNodeId) {
        weight = 0.8;
      }
      
      weights[node.id] = weight;
    });
    
    return weights;
  }, []);

  // Performance-aware attention weight updates
  const updateAttentionWeights = useMemo(() => {
    if (isHighPerformanceMode) {
      // Simplified calculation in performance mode
      return (currentNodeId: string, targetNodeId: string | null) => {
        const basicWeights: Record<string, number> = {};
        navigationNodes.forEach(node => {
          basicWeights[node.id] = node.id === currentNodeId ? 0.8 : 
                                   node.id === targetNodeId ? 1.0 : 0.1;
        });
        setAttentionWeights(basicWeights);
      };
    }
    
    return (currentNodeId: string, targetNodeId: string | null) => {
      const weights = calculateAttentionWeights(currentNodeId, targetNodeId);
      setAttentionWeights(weights);
    };
  }, [isHighPerformanceMode, calculateAttentionWeights]);

  // Update attention weights when navigation changes
  useEffect(() => {
    const currentNode = navigationNodes.find(node => 
      pathname === node.href || (pathname !== '/' && node.href !== '/' && pathname.startsWith(node.href))
    );
    
    if (currentNode) {
      setActiveNode(currentNode.id);
      updateAttentionWeights(currentNode.id, hoveredNode);
    }
  }, [pathname, hoveredNode, updateAttentionWeights]);

  const handleNodeHover = useCallback((nodeId: string | null) => {
    if (isHighPerformanceMode && nodeId) {
      // Record interaction for performance monitoring
      recordInteraction('navigation_hover', { nodeId });
    }
    
    setHoveredNode(nodeId);
    updateAttentionWeights(activeNode, nodeId);
  }, [activeNode, isHighPerformanceMode, recordInteraction, updateAttentionWeights]);

  const handleNodeClick = useCallback(async (href: string, nodeId: string) => {
    setIsLoading(true);
    recordInteraction('navigation_click', { nodeId, href });
    
    // Start performance monitoring for navigation
    animationMonitor.startMonitoring(`navigation-${nodeId}`);
    
    await controls.start({
      scale: [1, 0.95, 1.05, 1],
      transition: { duration: 0.3 }
    });
    
    router.push(href);
    
    // End monitoring after navigation
    setTimeout(() => {
      animationMonitor.endMonitoring(`navigation-${nodeId}`);
      setIsLoading(false);
    }, 500);
  }, [controls, router, recordInteraction]);

  return (
    <motion.nav 
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="navigation"
      aria-label="Neural network navigation"
    >
      <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-golden-orange/20 p-4">
        <motion.div 
          className="flex items-center space-x-2"
          variants={staggerAnimations.container}
          animate="animate"
        >
          {navigationNodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            const isHovered = hoveredNode === node.id;
            const isConnected = navigationNodes.find(n => n.id === activeNode)?.connections.includes(node.id);
            const attentionWeight = attentionWeights[node.id] || 0.1;
            
            return (
              <React.Fragment key={node.id}>
                <motion.button
                  variants={staggerAnimations.item}
                  className={cn(
                    "relative p-3 rounded-xl transition-all duration-300 group",
                    "focus:outline-none focus:ring-2 focus:ring-golden-orange focus:ring-offset-2 focus:ring-offset-black",
                    isActive && "bg-golden-orange/20 text-golden-orange",
                    !isActive && "text-gray-400 hover:text-warm-white hover:bg-white/5",
                    isLoading && "pointer-events-none opacity-50"
                  )}
                  onMouseEnter={() => handleNodeHover(node.id)}
                  onMouseLeave={() => handleNodeHover(null)}
                  onClick={() => handleNodeClick(node.href, node.id)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={`${node.label}: ${node.description}`}
                  disabled={isLoading}
                  {...(isHighPerformanceMode ? {} : hoverAnimations.neural)}
                >
                  {/* Performance-aware attention weight indicator */}
                  {!isHighPerformanceMode && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-golden-orange/20 to-warm-amber/20"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: attentionWeight,
                        scale: 1 + (attentionWeight * 0.1)
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Neural connection indicators */}
                  {isConnected && !isHighPerformanceMode && (
                    <motion.div
                      className="absolute -inset-1 rounded-xl border border-golden-orange/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  
                  <Icon className="w-6 h-6 relative z-10" aria-hidden="true" />
                  
                  {/* Performance indicator for high-performance mode */}
                  {isHighPerformanceMode && isActive && (
                    <TrendingUp className="absolute -top-1 -right-1 w-3 h-3 text-green-400" />
                  )}
                  
                  {/* Tooltip with neural network terminology */}
                  <AnimatePresence>
                    {isHovered && !isHighPerformanceMode && (
                      <motion.div
                        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64"
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-golden-orange/30 p-3 text-center">
                          <div className="text-sm font-semibold text-golden-orange mb-1">
                            {node.label}
                          </div>
                          <div className="text-xs text-gray-300 mb-2">
                            {node.description}
                          </div>
                          <div className="text-xs text-warm-amber">
                            Attention Weight: {(attentionWeight * 100).toFixed(0)}%
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Priority: {node.priority}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
                
                {/* Performance-aware neural connection lines */}
                {index < navigationNodes.length - 1 && (
                  <motion.div
                    className="relative w-8 h-0.5 bg-gradient-to-r from-golden-orange/30 to-warm-amber/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {!isHighPerformanceMode && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-golden-orange to-warm-amber"
                        variants={neuralAnimations.gradientFlow}
                        animate="animate"
                        style={{ opacity: Math.max(attentionWeights[node.id] || 0, attentionWeights[navigationNodes[index + 1].id] || 0) }}
                      />
                    )}
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
}
```

### Step 3: Performance-Optimized Content Visualization

Create a content relationship visualization that's optimized for performance while maintaining visual impact.

**File: `src/components/interactive/OptimizedContentGraph.tsx`**

```typescript
'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { usePerformanceStore } from '@/store/performanceStore';

interface GraphNode {
  id: string;
  label: string;
  type: 'skill' | 'project' | 'experience';
  position: [number, number];
  connections: string[];
  strength: number;
  priority: 'high' | 'medium' | 'low';
}

interface GraphEdge {
  from: string;
  to: string;
  weight: number;
}

// Optimized node component for performance
function OptimizedGraphNode({ 
  node, 
  isActive, 
  onHover, 
  onClick,
  simplified = false
}: { 
  node: GraphNode; 
  isActive: boolean;
  onHover: (id: string | null) => void;
  onClick: (id: string) => void;
  simplified?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setHovered(true);
    onHover(node.id);
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
    onHover(null);
  };

  const nodeColor = node.type === 'skill' ? '#FF8C42' : 
                   node.type === 'project' ? '#FFD93D' : '#FF6B6B';

  const baseSize = node.priority === 'high' ? 8 : node.priority === 'medium' ? 6 : 4;
  const size = (hovered || isActive) ? baseSize * 1.2 : baseSize;

  if (simplified) {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${node.position[0]}%`,
          top: `${node.position[1]}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: nodeColor,
          borderRadius: '50%',
          opacity: hovered || isActive ? 1 : 0.7,
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(node.id)}
      />
    );
  }

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${node.position[0]}%`,
        top: `${node.position[1]}%`,
        transform: 'translate(-50%, -50%)'
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(node.id)}
      className="cursor-pointer"
    >
      <motion.div
        className="rounded-full border-2"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: nodeColor,
          borderColor: isActive ? '#FEFEFE' : 'transparent',
          boxShadow: hovered || isActive ? `0 0 20px ${nodeColor}` : 'none'
        }}
        animate={{
          scale: isActive ? [1, 1.1, 1] : 1,
          opacity: hovered || isActive ? 1 : 0.8
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.2 }
        }}
      />
      
      {/* Node label */}
      {(hovered || isActive) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-center bg-black/80 rounded px-2 py-1 whitespace-nowrap"
        >
          {node.label}
        </motion.div>
      )}
    </motion.div>
  );
}

// Optimized connection line component
function OptimizedConnectionLine({ 
  from, 
  to, 
  weight, 
  simplified = false 
}: { 
  from: [number, number], 
  to: [number, number], 
  weight: number, 
  simplified?: boolean 
}) {
  if (simplified) {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${from[0]}%`,
          top: `${from[1]}%`,
          width: `${Math.sqrt((to[0] - from[0])**2 + (to[1] - from[1])**2)}%`,
          height: '1px',
          backgroundColor: '#FF8C42',
          opacity: weight * 0.5,
          transformOrigin: '0 0',
          transform: `rotate(${Math.atan2(to[1] - from[1], to[0] - from[0])}rad)`
        }}
      />
    );
  }

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <motion.line
        x1={`${from[0]}%`}
        y1={`${from[1]}%`}
        x2={`${to[0]}%`}
        y2={`${to[1]}%`}
        stroke="#FF8C42"
        strokeWidth="1"
        opacity={weight}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function OptimizedContentGraph() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const { isHighPerformanceMode, recordInteraction } = usePerformanceStore();
  
  // Sample data optimized for performance
  const graphData = useMemo(() => {
    const nodes: GraphNode[] = [
      { 
        id: 'react', 
        label: 'React', 
        type: 'skill', 
        position: [20, 30], 
        connections: ['portfolio', 'dashboard'], 
        strength: 0.9, 
        priority: 'high' 
      },
      { 
        id: 'typescript', 
        label: 'TypeScript', 
        type: 'skill', 
        position: [60, 20], 
        connections: ['portfolio', 'react'], 
        strength: 0.8, 
        priority: 'high' 
      },
      { 
        id: 'portfolio', 
        label: 'Portfolio Website', 
        type: 'project', 
        position: [40, 60], 
        connections: ['react', 'typescript'], 
        strength: 0.7, 
        priority: 'high' 
      },
      { 
        id: 'dashboard', 
        label: 'Analytics Dashboard', 
        type: 'project', 
        position: [80, 70], 
        connections: ['react'], 
        strength: 0.6, 
        priority: 'medium' 
      },
      { 
        id: 'frontend', 
        label: 'Frontend Developer', 
        type: 'experience', 
        position: [70, 40], 
        connections: ['react', 'typescript'], 
        strength: 0.8, 
        priority: 'high' 
      }
    ];

    const edges: GraphEdge[] = [
      { from: 'react', to: 'portfolio', weight: 0.8 },
      { from: 'typescript', to: 'portfolio', weight: 0.7 },
      { from: 'react', to: 'dashboard', weight: 0.6 },
      { from: 'frontend', to: 'react', weight: 0.9 },
      { from: 'frontend', to: 'typescript', weight: 0.7 }
    ];

    return { nodes, edges };
  }, []);

  const handleNodeClick = (nodeId: string) => {
    setActiveNode(activeNode === nodeId ? null : nodeId);
    recordInteraction('graph_node_click', { nodeId });
  };

  const handleNodeHover = (nodeId: string | null) => {
    setHoveredNode(nodeId);
    if (nodeId) {
      recordInteraction('graph_node_hover', { nodeId });
    }
  };

  return (
    <div className="w-full h-96 bg-black/20 rounded-xl overflow-hidden border border-gray-800 relative">
      {/* Render connections */}
      {graphData.edges.map(edge => {
        const fromNode = graphData.nodes.find(n => n.id === edge.from);
        const toNode = graphData.nodes.find(n => n.id === edge.to);
        
        if (!fromNode || !toNode) return null;
        
        return (
          <OptimizedConnectionLine
            key={`${edge.from}-${edge.to}`}
            from={fromNode.position}
            to={toNode.position}
            weight={edge.weight}
            simplified={isHighPerformanceMode}
          />
        );
      })}
      
      {/* Render nodes */}
      {graphData.nodes.map(node => (
        <OptimizedGraphNode
          key={node.id}
          node={node}
          isActive={activeNode === node.id}
          onHover={handleNodeHover}
          onClick={handleNodeClick}
          simplified={isHighPerformanceMode}
        />
      ))}
      
      {/* Legend with performance mode indicator */}
      <div className="absolute bottom-4 left-4 bg-black/80 rounded-lg p-3 text-xs">
        <div className="text-warm-white font-medium mb-2">
          Neural Network Graph
          {isHighPerformanceMode && (
            <span className="ml-2 text-green-400">(Performance Mode)</span>
          )}
        </div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-golden-orange rounded-full"></div>
            <span className="text-gray-300">Skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-warm-amber rounded-full"></div>
            <span className="text-gray-300">Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-coral-red rounded-full"></div>
            <span className="text-gray-300">Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Step 4: Advanced State Management with Performance Monitoring

Implement a scalable state management solution with built-in performance tracking and optimization features.

**File: `src/store/performanceStore.ts`**

```typescript
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface InteractionEvent {
  type: string;
  timestamp: number;
  data: Record<string, any>;
  performance?: {
    memory?: number;
    timing?: number;
  };
}

interface PerformanceMetrics {
  frameRate: number;
  memoryUsage: number;
  interactionLatency: number;
  bundleLoadTime: number;
  lastUpdated: number;
}

interface PerformanceState {
  // Performance monitoring
  metrics: PerformanceMetrics;
  isHighPerformanceMode: boolean;
  interactions: InteractionEvent[];
  
  // Navigation and UI state
  currentSection: string;
  isNavigating: boolean;
  navigationHistory: string[];
  
  // Attention system
  attentionWeights: Record<string, number>;
  focusedElement: string | null;
  
  // Interactive features
  isInteractiveMode: boolean;
  hoveredElements: Set<string>;
  
  // User preferences
  reducedMotion: boolean;
  prefersSimplified: boolean;
}

interface PerformanceActions {
  // Performance actions
  updateMetrics: (metrics: Partial<PerformanceMetrics>) => void;
  toggleHighPerformanceMode: () => void;
  recordInteraction: (type: string, data: Record<string, any>) => void;
  clearInteractionHistory: () => void;
  getPerformanceReport: () => PerformanceReport;
  
  // Navigation actions
  setCurrentSection: (section: string) => void;
  setNavigating: (isNavigating: boolean) => void;
  addToHistory: (section: string) => void;
  
  // Attention actions
  updateAttentionWeights: (weights: Record<string, number>) => void;
  setFocusedElement: (elementId: string | null) => void;
  
  // Interactive actions
  toggleInteractiveMode: () => void;
  addHoveredElement: (elementId: string) => void;
  removeHoveredElement: (elementId: string) => void;
  clearHoveredElements: () => void;
  
  // User preference actions
  setReducedMotion: (enabled: boolean) => void;
  setPrefersSimplified: (enabled: boolean) => void;
  
  // Auto-optimization
  checkAndOptimize: () => void;
}

interface PerformanceReport {
  timestamp: number;
  metrics: PerformanceMetrics;
  interactions: {
    total: number;
    types: Record<string, number>;
    averageLatency: number;
  };
  recommendations: string[];
}

export const usePerformanceStore = create<PerformanceState & PerformanceActions>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    metrics: {
      frameRate: 60,
      memoryUsage: 0,
      interactionLatency: 0,
      bundleLoadTime: 0,
      lastUpdated: Date.now()
    },
    isHighPerformanceMode: false,
    interactions: [],
    currentSection: 'home',
    isNavigating: false,
    navigationHistory: ['home'],
    attentionWeights: {},
    focusedElement: null,
    isInteractiveMode: true,
    hoveredElements: new Set(),
    reducedMotion: false,
    prefersSimplified: false,

    // Performance actions
    updateMetrics: (newMetrics) => {
      set((state) => ({
        metrics: {
          ...state.metrics,
          ...newMetrics,
          lastUpdated: Date.now()
        }
      }));
      
      // Auto-optimization check
      get().checkAndOptimize();
    },

    toggleHighPerformanceMode: () => {
      set((state) => ({ isHighPerformanceMode: !state.isHighPerformanceMode }));
    },

    recordInteraction: (type, data) => {
      const interaction: InteractionEvent = {
        type,
        timestamp: Date.now(),
        data,
        performance: {
          memory: (performance as any).memory?.usedJSHeapSize,
          timing: performance.now()
        }
      };

      set((state) => ({
        interactions: [...state.interactions.slice(-99), interaction] // Keep last 100
      }));
    },

    clearInteractionHistory: () => {
      set({ interactions: [] });
    },

    getPerformanceReport: () => {
      const state = get();
      const interactions = state.interactions;
      
      const typeCount = interactions.reduce((acc, interaction) => {
        acc[interaction.type] = (acc[interaction.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const averageLatency = interactions.length > 0 
        ? interactions.reduce((sum, i) => sum + (i.performance?.timing || 0), 0) / interactions.length
        : 0;

      const recommendations: string[] = [];
      
      if (state.metrics.frameRate < 30) {
        recommendations.push('Enable high performance mode to improve frame rate');
      }
      
      if (state.metrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
        recommendations.push('Consider reducing memory usage by clearing interaction history');
      }
      
      if (averageLatency > 100) {
        recommendations.push('Interaction latency is high - consider simplified mode');
      }

      return {
        timestamp: Date.now(),
        metrics: state.metrics,
        interactions: {
          total: interactions.length,
          types: typeCount,
          averageLatency
        },
        recommendations
      };
    },

    // Navigation actions
    setCurrentSection: (section) => {
      set((state) => ({
        currentSection: section,
        navigationHistory: [...state.navigationHistory.slice(-9), section]
      }));
    },

    setNavigating: (isNavigating) => {
      set({ isNavigating });
    },

    addToHistory: (section) => {
      set((state) => ({
        navigationHistory: [...state.navigationHistory.slice(-9), section]
      }));
    },

    // Attention actions
    updateAttentionWeights: (weights) => {
      set((state) => ({
        attentionWeights: { ...state.attentionWeights, ...weights }
      }));
    },

    setFocusedElement: (elementId) => {
      set({ focusedElement: elementId });
    },

    // Interactive actions
    toggleInteractiveMode: () => {
      set((state) => ({ isInteractiveMode: !state.isInteractiveMode }));
    },

    addHoveredElement: (elementId) => {
      set((state) => ({
        hoveredElements: new Set([...state.hoveredElements, elementId])
      }));
    },

    removeHoveredElement: (elementId) => {
      set((state) => {
        const newSet = new Set(state.hoveredElements);
        newSet.delete(elementId);
        return { hoveredElements: newSet };
      });
    },

    clearHoveredElements: () => {
      set({ hoveredElements: new Set() });
    },

    // User preference actions
    setReducedMotion: (enabled) => {
      set({ reducedMotion: enabled });
    },

    setPrefersSimplified: (enabled) => {
      set({ prefersSimplified: enabled });
    },

    // Auto-optimization
    checkAndOptimize: () => {
      const state = get();
      
      // Auto-enable high performance mode if needed
      if (state.metrics.frameRate < 30 && !state.isHighPerformanceMode) {
        set({ isHighPerformanceMode: true });
        console.log('Auto-enabled high performance mode due to low frame rate');
      }
      
      // Auto-enable simplified mode for low-end devices
      if (state.metrics.memoryUsage > 100 * 1024 * 1024 && !state.prefersSimplified) { // 100MB
        set({ prefersSimplified: true });
        console.log('Auto-enabled simplified mode due to high memory usage');
      }
      
      // Clear old interactions to prevent memory leaks
      if (state.interactions.length > 500) {
        set((state) => ({
          interactions: state.interactions.slice(-100)
        }));
      }
    }
  }))
);

// Performance monitoring hook
export function usePerformanceMonitor() {
  const updateMetrics = usePerformanceStore(state => state.updateMetrics);
  
  React.useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    function measurePerformance() {
      const currentTime = performance.now();
      frameCount++;
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        const memoryInfo = (performance as any).memory;
        
        updateMetrics({
          frameRate: fps,
          memoryUsage: memoryInfo?.usedJSHeapSize || 0,
          lastUpdated: currentTime
        });
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measurePerformance);
    }

    // Start monitoring
    animationId = requestAnimationFrame(measurePerformance);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [updateMetrics]);

  // Detect user preferences
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const setReducedMotion = usePerformanceStore.getState().setReducedMotion;
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      
      setReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setReducedMotion(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);
}

// Hook for performance-aware components
export function usePerformanceAware() {
  const {
    isHighPerformanceMode,
    reducedMotion,
    prefersSimplified,
    recordInteraction
  } = usePerformanceStore();

  const shouldAnimate = !reducedMotion && !isHighPerformanceMode;
  const shouldSimplify = prefersSimplified || isHighPerformanceMode;

  return {
    shouldAnimate,
    shouldSimplify,
    isHighPerformanceMode,
    recordInteraction
  };
}
```

### Step 5: Smart Microinteraction System

Create microinteractions that adapt based on performance conditions and user preferences.

**File: `src/components/interactive/SmartMicrointeractions.tsx`**

```typescript
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePerformanceAware } from '@/store/performanceStore';

// Enhanced button with performance-aware neural feedback
export function SmartNeuralButton({ 
  children, 
  onClick, 
  className,
  variant = 'primary',
  size = 'md',
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const controls = useAnimation();
  const { shouldAnimate, recordInteraction } = usePerformanceAware();
  
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsProcessing(true);
    recordInteraction('button_click', { variant, size });
    
    if (shouldAnimate) {
      // Full neural processing animation
      await controls.start({
        scale: [1, 0.95, 1.05, 1],
        boxShadow: [
          "0 0 0px rgba(255, 140, 66, 0)",
          "0 0 20px rgba(255, 140, 66, 0.4)",
          "0 0 40px rgba(255, 140, 66, 0.6)",
          "0 0 20px rgba(255, 140, 66, 0.2)"
        ],
        transition: { duration: 0.6, ease: "easeInOut" }
      });
    } else {
      // Simplified feedback
      await controls.start({
        scale: [1, 0.98, 1],
        transition: { duration: 0.2 }
      });
    }
    
    setIsProcessing(false);
    
    if (onClick) {
      onClick(e);
    }
  };

  const baseClasses = cn(
    "relative px-6 py-3 rounded-lg font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-golden-orange focus:ring-offset-2 focus:ring-offset-black",
    variant === 'primary' && "bg-golden-orange text-black hover:bg-golden-orange/90",
    variant === 'secondary' && "bg-white/10 text-warm-white border border-white/20 hover:bg-white/20",
    size === 'sm' && "px-4 py-2 text-sm",
    size === 'lg' && "px-8 py-4 text-lg",
    isProcessing && "pointer-events-none",
    className
  );

  if (!shouldAnimate) {
    // Simplified non-animated button for performance mode
    return (
      <button
        className={baseClasses}
        onClick={handleClick}
        disabled={isProcessing}
        {...props}
      >
        <div className="flex items-center justify-center">
          {isProcessing ? 'Processing...' : children}
        </div>
      </button>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      disabled={isProcessing}
      {...props}
    >
      <motion.div
        className="flex items-center justify-center"
        animate={isProcessing ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
        transition={{ duration: 0.5, repeat: isProcessing ? Infinity : 0 }}
      >
        {children}
      </motion.div>
      
      {/* Neural processing indicator */}
      {isProcessing && shouldAnimate && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-golden-orange/20 via-warm-amber/20 to-golden-orange/20"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.button>
  );
}

// Progressive reveal with performance awareness
export function SmartProgressiveReveal({ 
  children, 
  delay = 0,
  className,
  threshold = 0.1
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
  threshold?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { shouldAnimate, recordInteraction } = usePerformanceAware();
  
  useEffect(() => {
    if (isInView) {
      recordInteraction('element_revealed', { delay, threshold });
    }
  }, [isInView, delay, threshold, recordInteraction]);

  if (!shouldAnimate) {
    // Simplified reveal for performance mode
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { 
          duration: 0.8, 
          delay: delay,
          ease: "easeOut" 
        }
      } : {}}
    >
      {children}
    </motion.div>
  );
}

// Performance-aware attention card
export function SmartAttentionCard({ 
  children, 
  title, 
  description,
  attentionLevel = 'medium',
  className,
  interactive = true
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  attentionLevel?: 'low' | 'medium' | 'high';
  className?: string;
  interactive?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { shouldAnimate, shouldSimplify, recordInteraction } = usePerformanceAware();
  
  const rotateX = useTransform(mouseY, [-300, 300], shouldAnimate ? [10, -10] : [0, 0]);
  const rotateY = useTransform(mouseX, [-300, 300], shouldAnimate ? [-10, 10] : [0, 0]);
  
  const attentionIntensity = {
    low: 0.2,
    medium: 0.4,
    high: 0.8
  }[attentionLevel];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!shouldAnimate || !interactive) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }, [shouldAnimate, interactive, mouseX, mouseY]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    recordInteraction('card_hover', { title, attentionLevel });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (shouldAnimate) {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const baseClasses = cn(
    "relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm",
    interactive && "cursor-pointer transition-all duration-300",
    className
  );

  if (shouldSimplify) {
    // Simplified card for performance mode
    return (
      <div 
        className={baseClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-warm-white mb-2">{title}</h3>
          {description && (
            <p className="text-gray-400 text-sm mb-4">{description}</p>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={baseClasses}
      style={shouldAnimate ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={shouldAnimate ? {
        scale: 1.02,
        boxShadow: `0 20px 40px rgba(255, 140, 66, ${attentionIntensity * 0.3})`
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Attention glow effect */}
      {shouldAnimate && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-golden-orange/10 via-transparent to-warm-amber/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? attentionIntensity : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Neural connection indicator */}
      <motion.div
        className="absolute top-2 right-2 w-2 h-2 bg-golden-orange rounded-full"
        animate={shouldAnimate ? {
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        } : {}}
        transition={{
          duration: 2,
          repeat: shouldAnimate ? Infinity : 0,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-warm-white mb-2">{title}</h3>
        {description && (
          <p className="text-gray-400 text-sm mb-4">{description}</p>
        )}
        {children}
      </div>
    </motion.div>
  );
}

// Smart scroll indicator with performance optimization
export function SmartScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [attentionZones, setAttentionZones] = useState<Array<{ start: number; end: number; intensity: number }>>([]);
  const { shouldAnimate, recordInteraction } = usePerformanceAware();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    // Define attention zones based on content sections
    setAttentionZones([
      { start: 0, end: 0.2, intensity: 0.9 }, // Hero section
      { start: 0.2, end: 0.4, intensity: 0.7 }, // About section
      { start: 0.4, end: 0.7, intensity: 0.8 }, // Projects section
      { start: 0.7, end: 0.9, intensity: 0.6 }, // Experience section
      { start: 0.9, end: 1, intensity: 0.5 } // Contact section
    ]);

    const throttledScroll = shouldAnimate ? handleScroll : 
      (() => {
        let ticking = false;
        return () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              handleScroll();
              ticking = false;
            });
            ticking = true;
          }
        };
      })();

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [shouldAnimate]);

  const getCurrentAttentionZone = () => {
    return attentionZones.find(zone => 
      scrollProgress >= zone.start && scrollProgress <= zone.end
    ) || { intensity: 0.3 };
  };

  useEffect(() => {
    const currentZone = getCurrentAttentionZone();
    if (currentZone.intensity > 0.7) {
      recordInteraction('high_attention_zone', { 
        progress: scrollProgress,
        intensity: currentZone.intensity 
      });
    }
  }, [scrollProgress, recordInteraction]);

  if (!shouldAnimate) {
    // Simplified scroll indicator
    return (
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="w-1 h-64 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="w-full bg-golden-orange"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="relative w-1 h-64 bg-gray-800 rounded-full overflow-hidden">
        {/* Attention zones background */}
        {attentionZones.map((zone, index) => (
          <motion.div
            key={index}
            className="absolute w-full bg-golden-orange/20"
            style={{
              top: `${zone.start * 100}%`,
              height: `${(zone.end - zone.start) * 100}%`,
            }}
            animate={{
              opacity: scrollProgress >= zone.start && scrollProgress <= zone.end ? zone.intensity : 0.1
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
        
        {/* Progress indicator */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-golden-orange to-warm-amber"
          style={{
            height: `${scrollProgress * 100}%`,
            boxShadow: `0 0 10px rgba(255, 140, 66, ${getCurrentAttentionZone().intensity})`
          }}
        />
        
        {/* Current attention indicator */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-golden-orange rounded-full border-2 border-black"
          style={{
            top: `${scrollProgress * 100}%`,
            marginTop: '-6px'
          }}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 0px rgba(255, 140, 66, 0)",
              `0 0 15px rgba(255, 140, 66, ${getCurrentAttentionZone().intensity})`,
              "0 0 0px rgba(255, 140, 66, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
```

### Step 6: Performance-Aware Component Integration

Create integration components that tie everything together while preparing for Task 6 optimization.

**File: `src/components/interactive/PerformanceDashboard.tsx`**

```typescript
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Activity, 
  Settings,
  Eye,
  EyeOff
} from 'lucide-react';
import { usePerformanceStore } from '@/store/performanceStore';
import { SmartNeuralButton } from './SmartMicrointeractions';

export function PerformanceDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const {
    metrics,
    isHighPerformanceMode,
    interactions,
    toggleHighPerformanceMode,
    getPerformanceReport,
    clearInteractionHistory
  } = usePerformanceStore();

  const performanceReport = getPerformanceReport();
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (!isDevelopment) return null;

  const getPerformanceColor = (value: number, thresholds: [number, number]) => {
    if (value >= thresholds[1]) return 'text-green-400';
    if (value >= thresholds[0]) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="fixed bottom-4 right-4 z-50 p-3 bg-black/80 backdrop-blur-md rounded-full border border-golden-orange/30 text-golden-orange hover:bg-golden-orange/10 transition-colors"
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Toggle Performance Dashboard"
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </motion.button>

      {/* Dashboard Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            className="fixed top-4 right-4 z-40 w-80 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-4 text-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-warm-white flex items-center">
                <Activity className="w-5 h-5 mr-2 text-golden-orange" />
                Performance Monitor
              </h3>
              <div className="flex space-x-2">
                <SmartNeuralButton
                  size="sm"
                  variant={isHighPerformanceMode ? 'primary' : 'secondary'}
                  onClick={toggleHighPerformanceMode}
                  className="text-xs"
                >
                  {isHighPerformanceMode ? 'Performance' : 'Standard'}
                </SmartNeuralButton>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">FPS</span>
                  <TrendingUp className={cn(
                    "w-4 h-4",
                    getPerformanceColor(metrics.frameRate, [30, 50])
                  )} />
                </div>
                <div className={cn(
                  "text-lg font-bold",
                  getPerformanceColor(metrics.frameRate, [30, 50])
                )}>
                  {metrics.frameRate}
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Memory</span>
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-lg font-bold text-blue-400">
                  {Math.round(metrics.memoryUsage / 1024 / 1024)}MB
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Interactions</span>
                  <Zap className="w-4 h-4 text-warm-amber" />
                </div>
                <div className="text-lg font-bold text-warm-amber">
                  {interactions.length}
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Latency</span>
                  <TrendingDown className={cn(
                    "w-4 h-4",
                    getPerformanceColor(100 - metrics.interactionLatency, [50, 80])
                  )} />
                </div>
                <div className={cn(
                  "text-lg font-bold",
                  getPerformanceColor(100 - metrics.interactionLatency, [50, 80])
                )}>
                  {Math.round(metrics.interactionLatency)}ms
                </div>
              </div>
            </div>

            {/* Interaction Types */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Recent Interactions</h4>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {Object.entries(performanceReport.interactions.types)
                  .slice(0, 5)
                  .map(([type, count]) => (
                    <div key={type} className="flex justify-between text-xs">
                      <span className="text-gray-400 capitalize">
                        {type.replace('_', ' ')}
                      </span>
                      <span className="text-warm-white">{count}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Recommendations */}
            {performanceReport.recommendations.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Recommendations</h4>
                <div className="space-y-1">
                  {performanceReport.recommendations.slice(0, 2).map((rec, index) => (
                    <div key={index} className="text-xs text-yellow-400 bg-yellow-400/10 rounded p-2">
                      {rec}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex space-x-2">
              <SmartNeuralButton
                size="sm"
                variant="secondary"
                onClick={clearInteractionHistory}
                className="flex-1 text-xs"
              >
                Clear History
              </SmartNeuralButton>
              <SmartNeuralButton
                size="sm"
                variant="secondary"
                onClick={() => console.log(performanceReport)}
                className="flex-1 text-xs"
              >
                Export Data
              </SmartNeuralButton>
            </div>

            <div className="mt-3 text-xs text-gray-500 text-center">
              Performance monitoring active
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

**File: `src/components/providers/PerformanceProvider.tsx`**

```typescript
'use client';

import React, { useEffect } from 'react';
import { usePerformanceMonitor } from '@/store/performanceStore';
import { animationOrchestrator } from '@/lib/animations';
import { PerformanceDashboard } from '@/components/interactive/PerformanceDashboard';

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  // Initialize performance monitoring
  usePerformanceMonitor();

  useEffect(() => {
    // Set up performance mode detection
    const checkPerformance = () => {
      const connection = (navigator as any).connection;
      if (connection && connection.effectiveType === '2g') {
        animationOrchestrator.setPerformanceMode(true);
      }
    };

    checkPerformance();
    window.addEventListener('online', checkPerformance);
    
    return () => {
      window.removeEventListener('online', checkPerformance);
    };
  }, []);

  return (
    <>
      {children}
      <PerformanceDashboard />
    </>
  );
}
```

## Integration with Root Layout

Update your root layout to include the new performance providers:

**File: `src/app/layout.tsx` (Update)**

```typescript
import { PerformanceProvider } from '@/components/providers/PerformanceProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-inter bg-black text-warm-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <NavigationProvider>
              <PerformanceProvider>
                <div className="min-h-screen flex flex-col">
                  <main className="flex-1">
                    {children}
                  </main>
                </div>
              </PerformanceProvider>
            </NavigationProvider>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Success Criteria

You have successfully completed Task 5 when:

1. **Performance Integration**: All interactive features include performance monitoring and optimization hooks
2. **Adaptive Behavior**: Components automatically adjust based on device capabilities and user preferences
3. **Animation Quality**: Complex animations maintain 60fps while respecting reduced motion preferences
4. **State Management**: Global state efficiently manages interactions without unnecessary re-renders
5. **Accessibility Compliance**: All features work with keyboard navigation and assistive technologies
6. **Monitoring Infrastructure**: Performance dashboard provides real-time insights for optimization

## Professional Development Insights

**Performance-First Development**: Building performance monitoring into interactive features from the start demonstrates senior-level thinking about scalable systems. This proactive approach enables the optimization work in Task 6 while ensuring user experience remains excellent under varying conditions.

**Adaptive Design Philosophy**: Components that automatically adjust to device capabilities and user preferences show understanding of inclusive design principles and real-world usage patterns.

**Data-Driven Optimization**: The performance monitoring system you've implemented provides the foundation for evidence-based optimization decisions in Task 6.

## Next Steps Preparation

Your interactive features layer is now complete and specifically designed to integrate seamlessly with the Performance Optimization Layer in Task 6. The monitoring hooks, performance-aware components, and adaptive behavior patterns you've implemented provide the foundation for systematic optimization while maintaining the sophisticated transformer theme that sets your portfolio apart.

The combination of creative interactive elements with professional performance monitoring demonstrates both technical innovation and engineering maturity - exactly the balance that distinguishes senior developers in today's competitive market.
