# Task 4: Design System Foundation - AI Portfolio Website

## Context and Strategic Understanding

You are now creating the design system that will serve as the visual and functional language of your transformer-themed portfolio. Think of this as defining the mathematical operations and activation functions that will be consistently applied throughout your neural network. Just as transformers rely on standardized attention mechanisms and layer normalization to maintain stability and performance, your design system provides the reusable components and patterns that ensure visual consistency and development efficiency.

This task represents the transition from structure to sophisticated interaction. While Task 3 established your layout architecture, Task 4 creates the component vocabulary that will enable rapid feature development while maintaining professional polish. Modern design systems in 2025 are more than component libraries - they're living documentation that facilitates scalability, improves collaboration, and serves as an educational resource for team members.

## Learning Objectives and Professional Impact

By completing this task, you will demonstrate mastery of component-driven development while showcasing your ability to create systematic, reusable solutions. Your design system will serve as evidence of your understanding of scalable architecture patterns and attention to detail - crucial skills that distinguish senior engineers from junior developers.

## Understanding Modern Design System Architecture

### The Component-Based Philosophy

Component-Based Architecture organizes software into reusable parts, each serving a specific function, promoting modularity and making systems easier to develop, modify, and scale. Your design system should follow these principles:

**Modularity**: Each component encapsulates specific functionality with well-defined interfaces
**Reusability**: Components can be used across different parts of your portfolio
**Consistency**: Visual and behavioral patterns remain predictable throughout the application
**Scalability**: New features can be built using existing components with minimal custom code

### 2025 Design System Best Practices

Design systems provide a single source of components, patterns, and styles and unify disjointed experiences so that they are visually cohesive and appear to be part of the same ecosystem. Key principles for 2025 include:

1. **Accessibility by Default**: Accessibility ensures inclusivity, compliance with legal requirements, and a broader reach for businesses aiming to serve diverse audiences
2. **Performance Optimization**: The theme is "Don't make me wait" - users should never wait for pages to render or layouts to shift
3. **Mobile-First Design**: Mobile-first applications will be crucial since mobile traffic will dominate the web
4. **Dark Mode Support**: Dark and anti-light modes are no longer just optional—they're becoming an expected feature

## Step-by-Step Implementation Guide

### Step 1: Typography System Implementation

Create a comprehensive typography system that reflects your transformer theme while maintaining readability and accessibility.

**File: `src/components/ui/Typography.tsx`**

```typescript
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?: 'display' | 'heading' | 'title' | 'subtitle' | 'body' | 'caption' | 'overline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'gradient';
  align?: 'left' | 'center' | 'right';
}

const variantClasses = {
  display: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
  heading: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
  title: 'text-2xl md:text-3xl font-semibold tracking-tight',
  subtitle: 'text-xl md:text-2xl font-medium',
  body: 'text-base leading-relaxed',
  caption: 'text-sm text-gray-400',
  overline: 'text-xs uppercase tracking-wider font-medium'
};

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl'
};

const weightClasses = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold'
};

const colorClasses = {
  primary: 'text-warm-white',
  secondary: 'text-gray-300',
  accent: 'text-golden-orange',
  muted: 'text-gray-400',
  gradient: 'text-gradient-warm'
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

export function Typography({
  children,
  className,
  as = 'p',
  variant = 'body',
  size,
  weight,
  color = 'primary',
  align = 'left',
  ...props
}: TypographyProps) {
  const Component = as;
  
  const classes = cn(
    variantClasses[variant],
    size && sizeClasses[size],
    weight && weightClasses[weight],
    colorClasses[color],
    alignClasses[align],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

// Predefined typography components for common use cases
export function DisplayText({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'as'>) {
  return (
    <Typography as="h1" variant="display" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function HeadingText({ children, className, as = 'h2', ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography as={as} variant="heading" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function TitleText({ children, className, as = 'h3', ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography as={as} variant="title" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function BodyText({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'as'>) {
  return (
    <Typography as="p" variant="body" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function CaptionText({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'as'>) {
  return (
    <Typography as="span" variant="caption" className={className} {...props}>
      {children}
    </Typography>
  );
}
```

**Teaching Moment:** Typography plays a significant role in user experience, impacting readability and visual appeal. This typography system provides consistent text styling while supporting the transformer theme through gradient text options and semantic naming that reflects neural network concepts.

### Step 2: Button Component System

Create a comprehensive button system that supports various interaction patterns while maintaining accessibility.

**File: `src/components/ui/Button.tsx`**

```typescript
'use client';

import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'neural' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  animation?: 'none' | 'scale' | 'glow' | 'neural';
}

const buttonVariants = {
  primary: 'bg-golden-orange hover:bg-golden-orange/90 text-black font-medium border border-golden-orange',
  secondary: 'bg-white/10 hover:bg-white/20 text-warm-white border border-white/20 hover:border-white/40',
  accent: 'bg-coral-red hover:bg-coral-red/90 text-black font-medium border border-coral-red',
  ghost: 'hover:bg-white/10 text-warm-white border border-transparent hover:border-white/20',
  neural: 'bg-gradient-to-r from-golden-orange/20 to-warm-amber/20 hover:from-golden-orange/30 hover:to-warm-amber/30 text-warm-white border border-golden-orange/50 attention-glow',
  gradient: 'bg-gradient-to-r from-golden-orange via-warm-amber to-coral-red text-black font-medium border-0'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  icon: 'p-2'
};

const animationVariants = {
  none: {},
  scale: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  },
  glow: {
    whileHover: { boxShadow: '0 0 20px rgba(255, 140, 66, 0.5)' },
    whileTap: { scale: 0.98 }
  },
  neural: {
    whileHover: { 
      scale: 1.02,
      boxShadow: '0 0 30px rgba(255, 140, 66, 0.6)',
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.98 }
  }
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    animation = 'scale',
    disabled,
    ...props
  }, ref) => {
    const MotionButton = motion.button;
    const animationProps = animationVariants[animation] as MotionProps;

    return (
      <MotionButton
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-golden-orange focus:ring-offset-2 focus:ring-offset-black',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          buttonVariants[variant],
          buttonSizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...animationProps}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" aria-hidden="true" />
            Loading...
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="mr-2 flex-shrink-0" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="ml-2 flex-shrink-0" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';

// Specialized button variants for common use cases
export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="primary" animation="glow" {...props} />;
}

export function NeuralButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="neural" animation="neural" {...props} />;
}

export function GhostButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button variant="ghost" animation="scale" {...props} />;
}
```

**Teaching Moment:** Microinteractions are those subtle animations and feedback mechanisms that guide user behaviour, providing instant feedback to user actions and enhancing user satisfaction. This button system includes multiple animation patterns that reinforce the transformer theme while maintaining accessibility through proper focus management.

### Step 3: Card Component System

Create flexible card components that can display various types of content while maintaining visual consistency.

**File: `src/components/ui/Card.tsx`**

```typescript
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
    const Component = interactive ? motion.div : 'div';
    const motionProps = interactive ? {
      whileHover: { y: -4, transition: { duration: 0.2 } },
      whileTap: { scale: 0.98 }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          'rounded-xl backdrop-blur-sm transition-all duration-200',
          cardVariants[variant],
          size && cardSizes[size],
          paddingClasses[padding],
          hover && 'hover:shadow-lg',
          interactive && 'cursor-pointer',
          className
        )}
        {...(interactive ? motionProps : {})}
        {...props}
      >
        {children}
      </Component>
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

// Specialized card variants
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
```

### Step 4: Input and Form Components

Create accessible form components that support the transformer theme while maintaining usability.

**File: `src/components/ui/Input.tsx`**

```typescript
'use client';

import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'neural' | 'minimal';
  fullWidth?: boolean;
}

const inputVariants = {
  default: 'border-gray-700 bg-gray-900/50 focus:border-golden-orange focus:ring-golden-orange/20',
  neural: 'border-golden-orange/30 bg-gradient-to-r from-gray-900/80 to-gray-800/80 focus:border-golden-orange focus:ring-golden-orange/30 attention-glow',
  minimal: 'border-gray-800 bg-gray-900/30 focus:border-warm-amber focus:ring-warm-amber/20'
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type = 'text',
    label,
    error,
    helper,
    leftIcon,
    rightIcon,
    variant = 'default',
    fullWidth = true,
    disabled,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
    const hasError = !!error;

    return (
      <motion.div 
        className={cn('space-y-2', fullWidth && 'w-full')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {label && (
          <label 
            htmlFor={props.id || props.name} 
            className="block text-sm font-medium text-warm-white"
          >
            {label}
            {props.required && <span className="text-coral-red ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            type={inputType}
            className={cn(
              'block w-full px-3 py-2 text-warm-white placeholder:text-gray-500',
              'border rounded-lg backdrop-blur-sm transition-all duration-200',
              'focus:outline-none focus:ring-2',
              leftIcon && 'pl-10',
              (rightIcon || isPassword) && 'pr-10',
              hasError 
                ? 'border-coral-red focus:border-coral-red focus:ring-coral-red/20' 
                : inputVariants[variant],
              disabled && 'opacity-50 cursor-not-allowed',
              className
            )}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${props.name}-error` : 
              helper ? `${props.name}-helper` : undefined
            }
            {...props}
          />
          
          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-golden-orange transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}
          
          {rightIcon && !isPassword && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
          
          {hasError && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-coral-red">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
        </div>
        
        {error && (
          <motion.p
            id={`${props.name}-error`}
            className="text-sm text-coral-red flex items-center space-x-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            role="alert"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </motion.p>
        )}
        
        {helper && !error && (
          <p 
            id={`${props.name}-helper`}
            className="text-sm text-gray-400"
          >
            {helper}
          </p>
        )}
      </motion.div>
    );
  }
);

Input.displayName = 'Input';
```

### Step 5: Badge and Status Components

Create components for displaying status, skills, and categorical information.

**File: `src/components/ui/Badge.tsx`**

```typescript
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
  const Component = interactive ? motion.span : 'span';
  const motionProps = interactive ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  } : {};

  return (
    <Component
      className={cn(
        'inline-flex items-center rounded-full border backdrop-blur-sm font-medium transition-all duration-200',
        badgeVariants[variant],
        badgeSizes[size],
        interactive && 'cursor-pointer hover:scale-105',
        className
      )}
      {...(interactive ? motionProps : {})}
      {...props}
    >
      {icon && (
        <span className="mr-1 flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </Component>
  );
}

// Specialized badge components
export function SkillBadge({ children, level, ...props }: BadgeProps & { level?: 'beginner' | 'intermediate' | 'advanced' | 'expert' }) {
  const levelColors = {
    beginner: 'secondary',
    intermediate: 'accent',
    advanced: 'primary',
    expert: 'neural'
  } as const;

  return (
    <Badge 
      variant={level ? levelColors[level] : 'primary'} 
      interactive 
      {...props}
    >
      {children}
    </Badge>
  );
}

export function StatusBadge({ children, status, ...props }: BadgeProps & { status?: 'active' | 'inactive' | 'pending' | 'completed' }) {
  const statusColors = {
    active: 'success',
    inactive: 'secondary',
    pending: 'warning',
    completed: 'primary'
  } as const;

  return (
    <Badge 
      variant={status ? statusColors[status] : 'secondary'} 
      size="sm"
      {...props}
    >
      {children}
    </Badge>
  );
}
```

### Step 6: Loading and State Components

Create loading indicators and state management components that maintain the transformer theme.

**File: `src/components/ui/Loading.tsx`**

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  variant?: 'default' | 'neural' | 'minimal' | 'dots';
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
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Brain className={cn(sizeClasses[size], 'text-golden-orange')} />
            </motion.div>
            {text && (
              <span className="text-warm-white font-medium">{text}</span>
            )}
          </motion.div>
        );

      case 'dots':
        return (
          <div className="flex items-center space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-golden-orange rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
            {text && (
              <span className="ml-3 text-warm-white font-medium">{text}</span>
            )}
          </div>
        );

      case 'minimal':
        return (
          <div className="flex items-center space-x-2">
            <div className={cn(sizeClasses[size], 'border-2 border-gray-600 border-t-golden-orange rounded-full animate-spin')} />
            {text && (
              <span className="text-warm-white font-medium">{text}</span>
            )}
          </div>
        );

      default:
        return (
          <div className="flex items-center space-x-2">
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

// Skeleton loading component
export function Skeleton({ 
  className, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('skeleton rounded-md', className)}
      {...props}
    />
  );
}

// Loading screen component
export function LoadingScreen({ text = 'Initializing Neural Network...' }: { text?: string }) {
  return (
    <Loading 
      variant="neural" 
      size="lg" 
      text={text} 
      fullscreen 
    />
  );
}
```

### Step 7: Utility Functions

Create utility functions that support your design system components.

**File: `src/lib/utils.ts`**

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Animation utilities
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Neural network themed animations
export const neuralPulse = {
  initial: { scale: 0.8, opacity: 0.5 },
  animate: { 
    scale: [0.8, 1.1, 1],
    opacity: [0.5, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const connectionFlow = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};
```

### Step 8: Component Index Files

Create index files that make importing components clean and organized.

**File: `src/components/ui/index.ts`**

```typescript
// Export all UI components
export * from './Typography';
export * from './Button';
export * from './Card';
export * from './Input';
export * from './Badge';
export * from './Loading';

// Re-export utilities
export { cn } from '@/lib/utils';
```

**File: `src/components/index.ts`**

```typescript
// Layout components
export * from './layout/Navigation';
export * from './layout/PageLayout';
export * from './layout/Footer';

// UI components
export * from './ui';

// Provider components
export * from './providers/ThemeProvider';
export * from './providers/NavigationProvider';
export * from './providers/AnalyticsProvider';
```

### Step 9: Design System Documentation

Create documentation that explains how to use your design system effectively.

**File: `src/components/ui/DesignSystemShowcase.tsx`**

```typescript
'use client';

import React from 'react';
import { 
  Typography, DisplayText, HeadingText, TitleText, BodyText, CaptionText,
  Button, PrimaryButton, NeuralButton, GhostButton,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Input, Badge, SkillBadge, StatusBadge, Loading, Skeleton
} from '@/components/ui';
import { Brain, Code, Star } from 'lucide-react';

export function DesignSystemShowcase() {
  return (
    <div className="container-lg py-16 space-y-16">
      <div>
        <DisplayText className="mb-4">Design System Showcase</DisplayText>
        <BodyText color="secondary">
          Demonstrating the transformer-themed component library that powers this portfolio.
        </BodyText>
      </div>

      {/* Typography */}
      <section className="space-y-8">
        <HeadingText>Typography System</HeadingText>
        <div className="space-y-4">
          <DisplayText>Display Text - Neural Network Architecture</DisplayText>
          <HeadingText>Heading Text - Transformer Models</HeadingText>
          <TitleText>Title Text - Attention Mechanisms</TitleText>
          <BodyText>Body text provides clear, readable content that maintains accessibility while supporting the transformer theme.</BodyText>
          <CaptionText>Caption text for secondary information</CaptionText>
          <Typography variant="body" color="gradient">Gradient text for special emphasis</Typography>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-8">
        <HeadingText>Button Components</HeadingText>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton>Primary Action</PrimaryButton>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <NeuralButton>Neural Theme</NeuralButton>
          <GhostButton>Ghost Button</GhostButton>
          <Button variant="gradient">Gradient</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button loading>Loading</Button>
          <Button leftIcon={<Brain className="w-4 h-4" />}>With Icon</Button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-8">
        <HeadingText>Card Components</HeadingText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard card component for general content</CardDescription>
            </CardHeader>
            <CardContent>
              <BodyText>Card content goes here with proper spacing and typography.</BodyText>
            </CardContent>
          </Card>

          <Card variant="neural" interactive>
            <CardHeader>
              <CardTitle>Neural Card</CardTitle>
              <CardDescription>Transformer-themed interactive card</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <SkillBadge level="expert">Expert</SkillBadge>
                <StatusBadge status="active">Active</StatusBadge>
              </div>
            </CardContent>
          </Card>

          <Card variant="glow">
            <CardHeader>
              <CardTitle>Glow Card</CardTitle>
              <CardDescription>Card with hover glow effect</CardDescription>
            </CardHeader>
            <CardContent>
              <Loading variant="dots" text="Processing..." />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Components */}
      <section className="space-y-8">
        <HeadingText>Form Components</HeadingText>
        <div className="max-w-md space-y-4">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="your@email.com"
            helper="We'll never share your email"
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="Enter password"
            variant="neural"
          />
          <Input 
            label="Project Name" 
            placeholder="Neural Network Classifier"
            leftIcon={<Code className="w-4 h-4" />}
            variant="minimal"
          />
        </div>
      </section>

      {/* Badges and Status */}
      <section className="space-y-8">
        <HeadingText>Badges and Status</HeadingText>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="neural" icon={<Brain className="w-3 h-3" />}>Neural</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <SkillBadge level="beginner">React</SkillBadge>
            <SkillBadge level="intermediate">TypeScript</SkillBadge>
            <SkillBadge level="advanced">Python</SkillBadge>
            <SkillBadge level="expert">Machine Learning</SkillBadge>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatusBadge status="active">Active Project</StatusBadge>
            <StatusBadge status="pending">Pending Review</StatusBadge>
            <StatusBadge status="completed">Completed</StatusBadge>
            <StatusBadge status="inactive">Archived</StatusBadge>
          </div>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-8">
        <HeadingText>Loading States</HeadingText>
        <div className="space-y-4">
          <div className="flex items-center space-x-8">
            <Loading variant="default" text="Loading..." />
            <Loading variant="neural" text="Processing..." />
            <Loading variant="dots" />
            <Loading variant="minimal" size="lg" />
          </div>
          
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
```

## Quality Assurance and Accessibility Testing

### Step 1: Component Accessibility Audit

Test each component with accessibility tools:

```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/react

# Run accessibility tests
npm run test -- --testNamePattern="accessibility"
```

### Step 2: Design System Consistency Check

Create automated tests to ensure design consistency:

**File: `src/components/ui/__tests__/DesignSystem.test.tsx`**

```typescript
import { render, screen } from '@testing-library/react';
import { Button, Card, Input, Badge } from '@/components/ui';

describe('Design System Consistency', () => {
  it('applies consistent focus styles across components', () => {
    render(
      <div>
        <Button>Test Button</Button>
        <Input placeholder="Test Input" />
        <Card>Test Card</Card>
      </div>
    );

    // Test that focus styles are consistent
    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');
    
    expect(button).toHaveClass('focus:ring-golden-orange');
    expect(input).toHaveClass('focus:ring-2');
  });

  it('maintains color consistency across variants', () => {
    render(
      <div>
        <Button variant="primary">Primary</Button>
        <Badge variant="primary">Primary</Badge>
      </div>
    );

    // Both should use consistent primary colors
    const button = screen.getByRole('button');
    const badge = screen.getByText('Primary');
    
    expect(button).toHaveClass('bg-golden-orange');
    expect(badge).toHaveClass('text-golden-orange');
  });
});
```

### Step 3: Performance Testing

Ensure components perform well under various conditions:

```bash
# Bundle size analysis
npm run analyze

# Performance testing
npm run build
npm run start
# Test with Lighthouse for performance metrics
```

## Success Criteria

You have successfully completed Task 4 when:

1. **Component Library**: All UI components are functional and accessible
2. **Visual Consistency**: Components maintain consistent styling and behavior
3. **Theme Integration**: Transformer theme is evident throughout all components
4. **Accessibility Compliance**: All components meet WCAG accessibility standards
5. **Performance Standards**: Components load quickly and animate smoothly
6. **Developer Experience**: Components are easy to use and well-documented

## Professional Development Insights

**Design System Architecture**: When implemented well, design systems can educate team members, streamline work, and enable designers to tackle complex UX problems. Your component library demonstrates systematic thinking and attention to reusability that employers highly value.

**Accessibility Leadership**: Digital accessibility is more than a best practice for inclusion—for many organizations, it's a legal requirement. Building accessibility into your components from the ground up shows understanding of inclusive design principles.

**Performance Awareness**: Microinteractions enhance user satisfaction and make interfaces feel more intuitive. Your animation system balances visual appeal with performance, demonstrating technical judgment.

## Next Steps Preparation

With your design system foundation complete, you're ready to proceed to Phase 4 (Interactive Features Layer). The components you've created provide the building blocks for sophisticated transformer-themed interactions while maintaining accessibility and performance standards.

Your design system already demonstrates the kind of systematic thinking that separates senior engineers from junior developers. Every component serves a clear purpose, accessibility is built-in rather than retrofitted, and the transformer theme enhances rather than compromises usability.

## Troubleshooting Common Issues

**Issue**: Components not maintaining consistent styling
**Solution**: Verify that all components are using the `cn` utility function and that Tailwind classes are being applied correctly.

**Issue**: Animations causing performance problems
**Solution**: Check that animations respect `prefers-reduced-motion` settings and use hardware-accelerated properties where possible.

**Issue**: Accessibility warnings in testing
**Solution**: Ensure all interactive components have proper ARIA labels and that keyboard navigation works correctly.

**Issue**: TypeScript errors with component props
**Solution**: Verify that all prop interfaces extend the correct HTML element attributes and that generic types are properly constrained.

Your design system foundation establishes the visual and functional vocabulary that will enable rapid development of sophisticated features while maintaining the professional quality and accessibility standards that modern web applications require.