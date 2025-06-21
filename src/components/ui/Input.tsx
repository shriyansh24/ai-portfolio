'use client';

import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, AlertCircle, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  success?: string;
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
    success,
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
    const hasSuccess = !!success;

    const inputId = props.id || props.name || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <motion.div 
        className={cn('space-y-2', fullWidth && 'w-full')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {label && (
          <label 
            htmlFor={inputId} 
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
            id={inputId}
            type={inputType}
            className={cn(
              'block w-full px-3 py-2 text-warm-white placeholder:text-gray-500',
              'border rounded-lg backdrop-blur-sm transition-all duration-200',
              'focus:outline-none focus:ring-2',
              leftIcon && 'pl-10',
              (rightIcon || isPassword || hasError || hasSuccess) && 'pr-10',
              hasError 
                ? 'border-coral-red focus:border-coral-red focus:ring-coral-red/20' 
                : hasSuccess
                ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
                : inputVariants[variant],
              disabled && 'opacity-50 cursor-not-allowed',
              className
            )}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            disabled={disabled}
            aria-invalid={hasError ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : 
              success ? `${inputId}-success` :
              helper ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          
          {/* Right side icons */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            {hasSuccess && (
              <Check className="w-4 h-4 text-green-500" />
            )}
            
            {hasError && (
              <AlertCircle className="w-4 h-4 text-coral-red" />
            )}
            
            {isPassword && (
              <button
                type="button"
                className="text-gray-400 hover:text-golden-orange transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            )}
            
            {rightIcon && !isPassword && !hasError && !hasSuccess && (
              <div className="text-gray-400">
                {rightIcon}
              </div>
            )}
          </div>
        </div>
        
        {/* Messages */}
        {error && (
          <motion.p
            id={`${inputId}-error`}
            className="text-sm text-coral-red flex items-center space-x-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            role="alert"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </motion.p>
        )}
        
        {success && !error && (
          <motion.p
            id={`${inputId}-success`}
            className="text-sm text-green-500 flex items-center space-x-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <Check className="w-4 h-4 flex-shrink-0" />
            <span>{success}</span>
          </motion.p>
        )}
        
        {helper && !error && !success && (
          <p 
            id={`${inputId}-helper`}
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

// Specialized input variants
export function NeuralInput(props: Omit<InputProps, 'variant'>) {
  return <Input variant="neural" {...props} />;
}

export function SearchInput(props: Omit<InputProps, 'leftIcon' | 'type'>) {
  return (
    <Input 
      type="search" 
      leftIcon={<div className="w-4 h-4 border border-gray-400 rounded-full" />}
      placeholder="Search..."
      {...props} 
    />
  );
}

// Textarea component with similar styling
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
  variant?: 'default' | 'neural' | 'minimal';
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    label,
    error,
    helper,
    variant = 'default',
    fullWidth = true,
    disabled,
    ...props
  }, ref) => {
    const hasError = !!error;
    const textareaId = props.id || props.name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <motion.div 
        className={cn('space-y-2', fullWidth && 'w-full')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {label && (
          <label 
            htmlFor={textareaId} 
            className="block text-sm font-medium text-warm-white"
          >
            {label}
            {props.required && <span className="text-coral-red ml-1">*</span>}
          </label>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'block w-full px-3 py-2 text-warm-white placeholder:text-gray-500',
            'border rounded-lg backdrop-blur-sm transition-all duration-200',
            'focus:outline-none focus:ring-2 resize-vertical min-h-[80px]',
            hasError 
              ? 'border-coral-red focus:border-coral-red focus:ring-coral-red/20' 
              : inputVariants[variant],
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
                     disabled={disabled}
           aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : 
            helper ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        
        {error && (
          <motion.p
            id={`${textareaId}-error`}
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
            id={`${textareaId}-helper`}
            className="text-sm text-gray-400"
          >
            {helper}
          </p>
        )}
      </motion.div>
    );
  }
);

Textarea.displayName = 'Textarea'; 