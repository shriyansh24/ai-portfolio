'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'neural' | 'glow' | 'minimal' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const cardVariants = {
  default: 'bg-gray-900/50 border border-gray-800',
  neural: 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-golden-orange/20 attention-glow',
  glow: 'bg-gray-900/60 border border-gray-700 hover:border-golden-orange/50 hover:shadow-lg hover:shadow-golden-orange/20',
  minimal: 'bg-gray-900/30 border border-gray-800/50',
  gradient: 'bg-gradient-to-br from-golden-orange/10 via-warm-amber/5 to-coral-red/10 border border-golden-orange/30'
};

const cardSizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg'
};

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    children,
    className,
    variant = 'default',
    size,
    interactive = false,
    hover = true,
    padding = 'md',
    ...props
  }, ref) => {
    const baseClasses = cn(
      'rounded-xl backdrop-blur-sm transition-all duration-200',
      cardVariants[variant],
      size && cardSizes[size],
      paddingClasses[padding],
      hover && 'hover:shadow-lg',
      interactive && 'cursor-pointer',
      className
    );

    if (interactive) {
      return (
        <motion.div
          ref={ref}
          className={baseClasses}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={baseClasses} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export function CardHeader({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('space-y-2 mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-lg font-semibold text-warm-white', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-gray-400', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ 
  children, 
  className,
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex items-center justify-between mt-6 pt-4 border-t border-gray-800', className)} {...props}>
      {children}
    </div>
  );
}

// Specialized card variants for specific use cases
export function ProjectCard({ children, ...props }: CardProps) {
  return (
    <Card variant="neural" interactive hover padding="lg" {...props}>
      {children}
    </Card>
  );
}

export function SkillCard({ children, ...props }: CardProps) {
  return (
    <Card variant="glow" interactive hover padding="md" {...props}>
      {children}
    </Card>
  );
}

export function FeatureCard({ children, ...props }: CardProps) {
  return (
    <Card variant="gradient" padding="lg" {...props}>
      {children}
    </Card>
  );
}

// Neural network themed card with connection lines
export function NeuralCard({ children, layer, ...props }: CardProps & { layer?: string }) {
  return (
    <motion.div className="relative">
      <Card variant="neural" interactive {...props}>
        {layer && (
          <div className="absolute -top-2 -left-2 px-2 py-1 bg-golden-orange text-black text-xs font-medium rounded">
            {layer}
          </div>
        )}
        {children}
      </Card>
      
      {/* Neural connection indicator */}
      <motion.div
        className="absolute -right-4 top-1/2 w-4 h-0.5 bg-gradient-to-r from-golden-orange to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
} 