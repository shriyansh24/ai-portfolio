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

// Neural network themed typography components
export function NeuralHeading({ children, className, ...props }: Omit<TypographyProps, 'variant' | 'as' | 'color'>) {
  return (
    <Typography 
      as="h2" 
      variant="heading" 
      color="gradient" 
      className={cn('animate-neural-pulse', className)} 
      {...props}
    >
      {children}
    </Typography>
  );
}

export function LayerTitle({ children, layer, className, ...props }: Omit<TypographyProps, 'variant' | 'as'> & { layer?: string }) {
  return (
    <div className="space-y-2">
      {layer && (
        <Typography as="span" variant="overline" color="accent" className="text-xs">
          {layer}
        </Typography>
      )}
      <Typography as="h3" variant="title" className={className} {...props}>
        {children}
      </Typography>
    </div>
  );
} 