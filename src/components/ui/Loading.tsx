'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Loader2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  variant?: 'default' | 'neural' | 'minimal' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullscreen?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

export function Loading({ 
  variant = 'default', 
  size = 'md', 
  text, 
  fullscreen = false 
}: LoadingProps) {
  const containerClasses = fullscreen 
    ? 'fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4';

  const renderLoadingVariant = () => {
    switch (variant) {
      case 'neural':
        return (
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative"
            >
              <Brain className={cn(sizeClasses[size], 'text-golden-orange')} />
              <motion.div
                className="absolute inset-0 border border-golden-orange/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.div>
            {text && (
              <span className="text-warm-white font-medium">{text}</span>
            )}
          </motion.div>
        );

      case 'dots':
        return (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-golden-orange rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
            {text && (
              <span className="text-warm-white font-medium">{text}</span>
            )}
          </div>
        );

      case 'pulse':
        return (
          <div className="flex items-center space-x-3">
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className={cn(sizeClasses[size], 'text-warm-amber')} />
              <motion.div
                className="absolute inset-0 bg-warm-amber/20 rounded-full blur-md"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.8, 0.3, 0.8]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            {text && (
              <span className="text-warm-white font-medium">{text}</span>
            )}
          </div>
        );

      case 'minimal':
        return (
          <div className="flex items-center space-x-3">
            <div className={cn(sizeClasses[size], 'border-2 border-gray-600 border-t-golden-orange rounded-full animate-spin')} />
            {text && (
              <span className="text-warm-white font-medium">{text}</span>
            )}
          </div>
        );

      default:
        return (
          <div className="flex items-center space-x-3">
            <Loader2 className={cn(sizeClasses[size], 'text-golden-orange animate-spin')} />
            {text && (
              <span className="text-warm-white font-medium">{text}</span>
            )}
          </div>
        );
    }
  };

  return (
    <div className={containerClasses} role="status" aria-live="polite">
      {renderLoadingVariant()}
      <span className="sr-only">{text || 'Loading'}</span>
    </div>
  );
}

// Skeleton loading component for content placeholders
export function Skeleton({ 
  className, 
  animate = true,
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & { animate?: boolean }) {
  return (
    <div
      className={cn(
        'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded',
        animate && 'animate-pulse',
        className
      )}
      style={{
        backgroundSize: animate ? '200% 100%' : undefined,
        animation: animate ? 'skeleton-shimmer 1.5s infinite' : undefined,
      }}
      {...props}
    />
  );
}

// Loading screen component for full page loading
export function LoadingScreen({ 
  text = 'Initializing Neural Network...',
  subtitle
}: { 
  text?: string;
  subtitle?: string;
}) {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <Loading variant="neural" size="lg" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-2"
        >
          <h2 className="text-xl font-semibold text-warm-white">{text}</h2>
          {subtitle && (
            <p className="text-gray-400">{subtitle}</p>
          )}
        </motion.div>

        {/* Neural network visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-12 bg-gradient-to-t from-golden-orange/20 to-golden-orange rounded-full"
              animate={{
                scaleY: [0.3, 1, 0.3],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Progress bar component
export function ProgressBar({ 
  progress, 
  text,
  variant = 'default',
  className 
}: { 
  progress: number;
  text?: string;
  variant?: 'default' | 'neural';
  className?: string;
}) {
  const progressValue = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn('space-y-2', className)}>
      {text && (
        <div className="flex justify-between text-sm">
          <span className="text-warm-white">{text}</span>
          <span className="text-gray-400">{progressValue}%</span>
        </div>
      )}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className={cn(
            'h-full rounded-full',
            variant === 'neural' 
              ? 'bg-gradient-to-r from-golden-orange to-warm-amber shadow-lg shadow-golden-orange/20'
              : 'bg-golden-orange'
          )}
          initial={{ width: '0%' }}
          animate={{ width: `${progressValue}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// Spinner component for inline loading
export function Spinner({ 
  size = 'md',
  className 
}: { 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <Loader2 
      className={cn(
        sizeClasses[size], 
        'text-golden-orange animate-spin',
        className
      )} 
    />
  );
} 