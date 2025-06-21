'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
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
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-lg transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-golden-orange focus:ring-offset-2 focus:ring-offset-black',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      buttonVariants[variant],
      buttonSizes[size],
      fullWidth && 'w-full',
      className
    );

    const content = loading ? (
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
    );

    if (animation === 'none') {
      return (
        <button
          ref={ref}
          className={baseClasses}
          disabled={disabled || loading}
          {...props}
        >
          {content}
        </button>
      );
    }

    const motionProps = {
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
        },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 }
      }
    }[animation] || {};

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        {...motionProps}
      >
        {content}
      </motion.button>
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

export function IconButton({ children, ...props }: Omit<ButtonProps, 'size'>) {
  return (
    <Button size="icon" {...props}>
      {children}
    </Button>
  );
}

// Neural network themed button with connection animation
export function ConnectionButton({ children, ...props }: ButtonProps) {
  return (
    <motion.div className="relative">
      <Button 
        variant="neural" 
        animation="neural"
        className="relative overflow-hidden"
        {...props}
      >
        {children}
      </Button>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-golden-orange/20 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
} 