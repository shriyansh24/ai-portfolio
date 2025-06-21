'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neural';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  icon?: React.ReactNode;
}

const badgeVariants = {
  primary: 'bg-golden-orange/20 text-golden-orange border-golden-orange/30',
  secondary: 'bg-gray-700/50 text-gray-300 border-gray-600',
  accent: 'bg-warm-amber/20 text-warm-amber border-warm-amber/30',
  success: 'bg-green-900/50 text-green-400 border-green-700',
  warning: 'bg-yellow-900/50 text-yellow-400 border-yellow-700',
  error: 'bg-red-900/50 text-red-400 border-red-700',
  neural: 'bg-gradient-to-r from-golden-orange/20 to-warm-amber/20 text-warm-white border-golden-orange/40 attention-glow'
};

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base'
};

export function Badge({
  children,
  className,
  variant = 'primary',
  size = 'md',
  interactive = false,
  icon,
  ...props
}: BadgeProps) {
  const badgeClasses = cn(
    'inline-flex items-center rounded-full border backdrop-blur-sm font-medium transition-all duration-200',
    badgeVariants[variant],
    badgeSizes[size],
    interactive && 'cursor-pointer hover:scale-105',
    className
  );

  if (interactive) {
    return (
      <motion.span
        className={badgeClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon && (
          <span className="mr-1 flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </motion.span>
    );
  }

  return (
    <span className={badgeClasses} {...props}>
      {icon && (
        <span className="mr-1 flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

// Specialized badge components
export function SkillBadge({ 
  children, 
  level, 
  ...props 
}: BadgeProps & { level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' }) {
  const levelColors = {
    beginner: 'secondary',
    intermediate: 'accent',
    advanced: 'primary',
    expert: 'neural'
  } as const;

  const levelDots = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4
  };

  const dots = level ? levelDots[level] : 3;

  return (
    <Badge 
      variant={level ? levelColors[level] : 'primary'} 
      interactive 
      {...props}
    >
      <div className="flex items-center space-x-2">
        <span>{children}</span>
        <div className="flex space-x-0.5">
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={cn(
                'w-1 h-1 rounded-full',
                i < dots ? 'bg-current' : 'bg-current/30'
              )}
            />
          ))}
        </div>
      </div>
    </Badge>
  );
}

export function StatusBadge({ 
  children, 
  status, 
  ...props 
}: BadgeProps & { status?: 'active' | 'inactive' | 'pending' | 'completed' }) {
  const statusColors = {
    active: 'success',
    inactive: 'secondary',
    pending: 'warning',
    completed: 'primary'
  } as const;

  const statusIcons = {
    active: <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />,
    inactive: <div className="w-2 h-2 bg-gray-400 rounded-full" />,
    pending: <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" />,
    completed: <div className="w-2 h-2 bg-golden-orange rounded-full" />
  };

  return (
    <Badge 
      variant={status ? statusColors[status] : 'secondary'} 
      size="sm"
      icon={status ? statusIcons[status] : undefined}
      {...props}
    >
      {children}
    </Badge>
  );
}

export function TechBadge({ 
  children, 
  category,
  ...props 
}: BadgeProps & { category?: 'frontend' | 'backend' | 'ai' | 'tools' }) {
  const categoryColors = {
    frontend: 'accent',
    backend: 'primary',
    ai: 'neural',
    tools: 'secondary'
  } as const;

  return (
    <Badge 
      variant={category ? categoryColors[category] : 'primary'} 
      interactive
      {...props}
    >
      {children}
    </Badge>
  );
}

// Neural network themed badge with pulse animation
export function NeuralBadge({ children, ...props }: BadgeProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 0 0 rgba(255, 140, 66, 0)',
          '0 0 20px rgba(255, 140, 66, 0.3)',
          '0 0 0 rgba(255, 140, 66, 0)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Badge variant="neural" interactive {...props}>
        {children}
      </Badge>
    </motion.div>
  );
}

// Project stage badge
export function StageBadge({ 
  stage, 
  ...props 
}: Omit<BadgeProps, 'children'> & { stage: 'planning' | 'development' | 'testing' | 'deployed' }) {
  const stageData = {
    planning: { label: 'Planning', variant: 'warning' as const },
    development: { label: 'In Development', variant: 'primary' as const },
    testing: { label: 'Testing', variant: 'accent' as const },
    deployed: { label: 'Deployed', variant: 'success' as const }
  };

  const { label, variant } = stageData[stage];

  return (
    <Badge variant={variant} size="sm" {...props}>
      {label}
    </Badge>
  );
} 