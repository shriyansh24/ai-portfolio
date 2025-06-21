# Task 3: Layout System Creation - AI Portfolio Website

## Context and Strategic Understanding

You are now creating the fundamental page structure that will host all your content - think of this as building the encoder-decoder architecture of your transformer portfolio. Just as transformer models have a consistent structure that processes information through predictable patterns, your layout system provides the scaffolding that users navigate through to understand your professional story.

This task represents a crucial inflection point in your development process. The layout decisions you make here will either enable or constrain every interactive feature you add later. Modern Next.js layouts preserve state and remain interactive during navigation through partial rendering, meaning your layout choices directly impact user experience quality.

## Learning Objectives and Professional Impact

By completing this task, you will demonstrate mastery of modern Next.js layout architecture while creating a foundation that showcases your understanding of information hierarchy and user experience principles. Your layout system will serve as evidence of your ability to think systematically about complex problems - a crucial skill for senior engineering roles.

## Understanding Modern Layout Architecture

### The Transformer Layout Metaphor

Just as transformers process sequences through attention mechanisms that highlight relevant connections, your portfolio layout should guide user attention through your professional story. Enhanced file-based routing and layouts in Next.js 2025 provide better organization and scalability with less redundant code.

**Key Concepts:**
- **Root Layout**: Acts as the base transformer layer that processes all information
- **Nested Layouts**: Function like specialized attention heads focusing on specific content areas
- **Page Components**: Represent the final output layer where information is presented to users
- **Shared Navigation**: Mimics the persistent context that attention mechanisms maintain across transformer layers

### Performance and User Experience Principles

The theme of modern React and Next.js development in 2025 is "Don't make me wait" - users should never wait for data, pages to render, or layouts to shift. Your layout system must prioritize:

1. **Instant Feedback**: Visual responses to user interactions
2. **Progressive Loading**: Content appears in meaningful chunks
3. **Layout Stability**: No unexpected shifts that disorient users
4. **Attention Guidance**: Clear hierarchy that leads users through your story

## Step-by-Step Implementation Guide

### Step 1: Root Layout Architecture Implementation

Create the foundation that all pages will inherit, incorporating transformer-themed design elements while maintaining professional credibility.

**File: `src/app/layout.tsx`**

```typescript
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { NavigationProvider } from '@/components/providers/NavigationProvider';
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'AI Portfolio - Electronics Engineering & Data Science',
    template: '%s | AI Portfolio'
  },
  description: 'Transformer-themed portfolio showcasing expertise in electronics engineering and data science through innovative interactive design.',
  keywords: ['electronics engineering', 'data science', 'ai', 'transformer', 'portfolio', 'machine learning'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AI Portfolio - Electronics Engineering & Data Science',
    description: 'Transformer-themed portfolio showcasing expertise in electronics engineering and data science.',
    siteName: 'AI Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Portfolio - Electronics Engineering & Data Science',
    description: 'Transformer-themed portfolio showcasing expertise in electronics engineering and data science.',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF8C42' },
    { media: '(prefers-color-scheme: dark)', color: '#FF8C42' }
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

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
              <div className="min-h-screen flex flex-col">
                <main className="flex-1">
                  {children}
                </main>
              </div>
            </NavigationProvider>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Teaching Moment:** Next.js 14+ separates blocking and non-blocking metadata, with new viewport configuration replacing deprecated options. Notice how we use the new `viewport` export instead of including viewport settings in metadata. This approach prevents blocking during partial prerendering and demonstrates awareness of modern Next.js patterns.

### Step 2: Global Styling Foundation

Create the CSS foundation that supports your transformer theme while maintaining accessibility and performance.

**File: `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom CSS Properties for Transformer Theme */
:root {
  /* Warm Color Palette */
  --golden-orange: #FF8C42;
  --coral-red: #FF6B6B;
  --warm-amber: #FFD93D;
  --warm-white: #FEFEFE;
  --soft-gray: #8B8B8B;
  
  /* Neural Network Animation Variables */
  --attention-glow: 0 0 20px var(--golden-orange);
  --connection-flow: linear-gradient(90deg, transparent, var(--warm-amber), transparent);
  
  /* Typography Scale */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  
  /* Spacing System */
  --space-unit: 0.25rem;
  --space-xs: calc(var(--space-unit) * 2);
  --space-sm: calc(var(--space-unit) * 3);
  --space-md: calc(var(--space-unit) * 4);
  --space-lg: calc(var(--space-unit) * 6);
  --space-xl: calc(var(--space-unit) * 8);
  --space-2xl: calc(var(--space-unit) * 12);
  
  /* Animation Timing */
  --transition-fast: 150ms ease-out;
  --transition-medium: 300ms ease-out;
  --transition-slow: 600ms ease-out;
}

/* Base Layer Styles */
@layer base {
  * {
    @apply border-gray-200;
  }
  
  body {
    @apply text-warm-white bg-black;
    font-feature-settings: 'rlig' 1, 'calt' 1;
  }
  
  /* Smooth scrolling behavior */
  html {
    scroll-behavior: smooth;
  }
  
  /* Focus styles for accessibility */
  :focus-visible {
    @apply outline-none ring-2 ring-golden-orange ring-offset-2 ring-offset-black;
  }
  
  /* Typography base styles */
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold tracking-tight;
  }
  
  h1 { @apply text-4xl md:text-5xl; }
  h2 { @apply text-3xl md:text-4xl; }
  h3 { @apply text-2xl md:text-3xl; }
  h4 { @apply text-xl md:text-2xl; }
  h5 { @apply text-lg md:text-xl; }
  h6 { @apply text-base md:text-lg; }
  
  p {
    @apply text-base leading-relaxed;
  }
  
  /* Selection styles */
  ::selection {
    @apply bg-golden-orange bg-opacity-20 text-warm-white;
  }
}

/* Component Layer Styles */
@layer components {
  /* Neural Network Connection Effect */
  .neural-connection {
    position: relative;
    overflow: hidden;
  }
  
  .neural-connection::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: var(--connection-flow);
    animation: connectionFlow 2s infinite;
  }
  
  @keyframes connectionFlow {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  /* Attention Glow Effect */
  .attention-glow {
    transition: box-shadow var(--transition-medium);
  }
  
  .attention-glow:hover {
    box-shadow: var(--attention-glow);
  }
  
  /* Responsive Container System */
  .container-xs { @apply max-w-screen-sm mx-auto px-4; }
  .container-sm { @apply max-w-screen-md mx-auto px-4; }
  .container-md { @apply max-w-screen-lg mx-auto px-4; }
  .container-lg { @apply max-w-screen-xl mx-auto px-4; }
  .container-xl { @apply max-w-screen-2xl mx-auto px-4; }
  
  /* Loading states */
  .skeleton {
    @apply animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800;
    background-size: 200% 100%;
    animation: skeleton-loading 1.5s infinite;
  }
  
  @keyframes skeleton-loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
}

/* Utility Layer Styles */
@layer utilities {
  /* Neural Network Theme Utilities */
  .text-gradient-warm {
    @apply bg-gradient-to-r from-golden-orange via-warm-amber to-coral-red bg-clip-text text-transparent;
  }
  
  .bg-gradient-neural {
    @apply bg-gradient-to-br from-black via-gray-900 to-black;
  }
  
  /* Accessibility utilities */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .neural-connection::before {
      animation: none;
    }
    
    .attention-glow {
      transition: none;
    }
    
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

/* Print styles */
@media print {
  .neural-connection::before {
    display: none;
  }
  
  .attention-glow {
    box-shadow: none;
  }
  
  body {
    @apply text-black bg-white;
  }
}
```

**Teaching Moment:** Modern UI/UX design in 2025 prioritizes accessibility, dark mode support, and reduced motion preferences as fundamental requirements rather than optional features. Notice how our CSS includes comprehensive accessibility support, print styles, and respects user motion preferences while maintaining the transformer aesthetic.

### Step 3: Navigation Layout Component

Create the primary navigation that demonstrates your understanding of information architecture and user experience.

**File: `src/components/layout/Navigation.tsx`**

```typescript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, Code, User, BookOpen, Mail } from 'lucide-react';

interface NavigationItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const navigationItems: NavigationItem[] = [
  {
    href: '/',
    label: 'Home',
    icon: Brain,
    description: 'Input Layer - Introduction and Overview'
  },
  {
    href: '/about',
    label: 'About',
    icon: User,
    description: 'Encoding Layer - Background and Journey'
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: Code,
    description: 'Processing Layer - Technical Implementations'
  },
  {
    href: '/experience',
    label: 'Experience',
    icon: BookOpen,
    description: 'Attention Layer - Professional Growth'
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Mail,
    description: 'Output Layer - Professional Connections'
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 attention-glow rounded-lg p-2 -m-2"
            aria-label="AI Portfolio - Return to homepage"
          >
            <Brain className="w-8 h-8 text-golden-orange" aria-hidden="true" />
            <span className="text-xl font-bold text-gradient-warm hidden sm:inline">
              AI Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-golden-orange/20 text-golden-orange' 
                      : 'text-warm-white hover:text-golden-orange hover:bg-white/5'
                    }
                    attention-glow focus:outline-none focus:ring-2 focus:ring-golden-orange
                  `}
                  aria-current={isActive ? 'page' : undefined}
                  title={item.description}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 -m-2 text-warm-white hover:text-golden-orange transition-colors attention-glow rounded-lg"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-800 p-4">
                <div className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`
                          flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 w-full
                          ${isActive 
                            ? 'bg-golden-orange/20 text-golden-orange' 
                            : 'text-warm-white hover:text-golden-orange hover:bg-white/5'
                          }
                          attention-glow focus:outline-none focus:ring-2 focus:ring-golden-orange
                        `}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        <div className="flex-1">
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
```

**Teaching Moment:** Accessibility in 2025 requires proper ARIA labels, keyboard navigation support, and logical tab order as fundamental requirements. Notice how this navigation includes comprehensive accessibility features: proper ARIA labels, keyboard focus management, and screen reader support while maintaining the transformer theme through meaningful metaphors.

### Step 4: Page Layout Wrapper Component

Create a reusable page wrapper that provides consistent spacing and structure while supporting the transformer theme.

**File: `src/components/layout/PageLayout.tsx`**

```typescript
'use client';

import { motion } from 'framer-motion';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  showFooter?: boolean;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

export function PageLayout({ 
  children, 
  className = '', 
  showNavigation = true, 
  showFooter = true 
}: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-neural">
      {showNavigation && <Navigation />}
      
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={`flex-1 ${showNavigation ? 'pt-20' : ''} ${className}`}
        role="main"
      >
        {children}
      </motion.main>
      
      {showFooter && <Footer />}
    </div>
  );
}
```

### Step 5: Footer Component Implementation

Create a footer that reinforces your professional brand while providing essential information and links.

**File: `src/components/layout/Footer.tsx`**

```typescript
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://github.com/yourusername',
    icon: Github,
    label: 'GitHub',
    description: 'View code repositories and open source contributions'
  },
  {
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    label: 'LinkedIn',
    description: 'Connect for professional opportunities'
  },
  {
    href: 'mailto:your.email@example.com',
    icon: Mail,
    label: 'Email',
    description: 'Send a direct message'
  }
];

const quickLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 mt-auto">
      <div className="container-lg py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-2 attention-glow rounded-lg p-2 -m-2 w-fit"
              aria-label="AI Portfolio - Return to homepage"
            >
              <Brain className="w-6 h-6 text-golden-orange" aria-hidden="true" />
              <span className="text-lg font-bold text-gradient-warm">
                AI Portfolio
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A transformer-themed portfolio showcasing the intersection of electronics 
              engineering and data science through innovative interactive design.
            </p>
            <div className="text-xs text-gray-500">
              Built with Next.js, TypeScript, and Framer Motion
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-warm-white font-semibold">Quick Links</h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-golden-orange transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-warm-white font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-golden-orange transition-colors attention-glow rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.description}
                    aria-label={`${social.label} - ${social.description}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
            <div className="text-xs text-gray-500">
              Available for collaboration and opportunities
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-xs text-gray-500">
            © {currentYear} Your Name. All rights reserved.
          </div>
          <div className="flex space-x-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-golden-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-golden-orange transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### Step 6: Provider Components Setup

Create the context providers that will manage global state and theming throughout your application.

**File: `src/components/providers/ThemeProvider.tsx`**

```typescript
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**File: `src/components/providers/NavigationProvider.tsx`**

```typescript
'use client';

import React, { createContext, useContext, useState } from 'react';

interface NavigationContextType {
  isNavigating: boolean;
  setIsNavigating: (navigating: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <NavigationContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
```

**File: `src/components/providers/AnalyticsProvider.tsx`**

```typescript
'use client';

import React from 'react';

// Placeholder for analytics integration
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  // In a real implementation, you would initialize analytics here
  // For now, this is a placeholder that can be enhanced later
  
  return <>{children}</>;
}
```

### Step 7: Page Structure Scaffolding

Create the basic page templates where your content will live, establishing the information flow architecture.

**File: `src/app/page.tsx`**

```typescript
import { PageLayout } from '@/components/layout/PageLayout';
import { HeroSection } from '@/components/sections/HeroSection';

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      {/* Additional sections will be added in later tasks */}
    </PageLayout>
  );
}
```

**File: `src/app/about/page.tsx`**

```typescript
import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about my journey in electronics engineering and data science, from academic foundations to professional expertise.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container-lg py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-warm mb-8">
            About Me
          </h1>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Welcome to the encoding layer of my professional journey. Here, raw experiences 
              are transformed into meaningful insights about electronics engineering and data science.
            </p>
            {/* Content will be added in Task 4 */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
```

**File: `src/app/projects/page.tsx`**

```typescript
import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore technical projects that demonstrate expertise in electronics engineering, data science, and innovative problem-solving.',
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="container-lg py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-warm mb-8">
            Projects
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Processing layer - Where ideas transform into technical implementations.
          </p>
          {/* Project grid will be added in Task 4 */}
        </div>
      </div>
    </PageLayout>
  );
}
```

**File: `src/app/experience/page.tsx`**

```typescript
import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience timeline showcasing growth in electronics engineering and data science roles.',
};

export default function ExperiencePage() {
  return (
    <PageLayout>
      <div className="container-lg py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-warm mb-8">
            Experience
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Attention layer - Highlighting the most relevant experiences that shaped my expertise.
          </p>
          {/* Experience timeline will be added in Task 4 */}
        </div>
      </div>
    </PageLayout>
  );
}
```

**File: `src/app/contact/page.tsx`**

```typescript
import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with me for collaboration opportunities, technical discussions, or professional inquiries.',
};

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container-lg py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-warm mb-8">
            Contact
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Output layer - Where professional connections and collaborations begin.
          </p>
          {/* Contact form and information will be added in Task 4 */}
        </div>
      </div>
    </PageLayout>
  );
}
```

### Step 8: Tailwind Configuration Enhancement

Update your Tailwind configuration to support the transformer theme colors and utilities.

**File: `tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'golden-orange': '#FF8C42',
        'coral-red': '#FF6B6B',
        'warm-amber': '#FFD93D',
        'warm-white': '#FEFEFE',
        'soft-gray': '#8B8B8B',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'connection-flow': 'connectionFlow 2s infinite',
        'neural-pulse': 'neuralPulse 2s ease-in-out infinite',
        'attention-glow': 'attentionGlow 3s ease-in-out infinite',
      },
      keyframes: {
        connectionFlow: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' }
        },
        neuralPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' }
        },
        attentionGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 140, 66, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 140, 66, 0.6)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#FEFEFE',
            h1: { color: '#FEFEFE' },
            h2: { color: '#FEFEFE' },
            h3: { color: '#FEFEFE' },
            h4: { color: '#FEFEFE' },
            p: { color: '#FEFEFE' },
            strong: { color: '#FF8C42' },
            code: { color: '#FFD93D' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## Quality Assurance and Testing

### Step 1: Layout Accessibility Testing

Test your navigation with keyboard-only interaction:

```bash
# Test these key interactions:
# - Tab through all navigation items
# - Press Enter/Space to activate links
# - Verify focus indicators are visible
# - Test mobile menu keyboard operation
```

### Step 2: Responsive Design Validation

Test your layout across different viewport sizes:

```bash
# Check these breakpoints:
# - Mobile: 320px - 768px
# - Tablet: 768px - 1024px
# - Desktop: 1024px+
# - Large screens: 1440px+
```

### Step 3: Performance Metrics

Verify loading performance:

```bash
npm run build
npm run start

# Check Lighthouse scores for:
# - Performance: >90
# - Accessibility: >95
# - SEO: >90
# - Best Practices: >90
```

## Success Criteria

You have successfully completed Task 3 when:

1. **Navigation Functions**: All navigation links work correctly and maintain state
2. **Responsive Design**: Layout adapts smoothly across all device sizes
3. **Accessibility Compliance**: Keyboard navigation and screen readers work properly
4. **Performance Standards**: Page loads quickly with no layout shift
5. **Visual Consistency**: Transformer theme is evident but professional
6. **SEO Optimization**: Meta tags and structured data are properly implemented

## Professional Development Insights

**Layout Architecture Demonstrates Planning**: Organizing components by feature and separating presentational from container components shows understanding of scalable architecture patterns. Your layout structure reveals your ability to think systematically about information hierarchy.

**Accessibility Shows Inclusion**: Accessibility in 2025 is not just compliance - it's a defining characteristic of successful digital platforms that reach diverse audiences. Your comprehensive accessibility implementation demonstrates social responsibility and technical thoroughness.

**Performance Focus Shows Expertise**: Following the "Don't make me wait" principle through optimized layouts and smooth transitions demonstrates understanding of user experience fundamentals.

## Next Steps Preparation

With your layout system in place, you're ready to proceed to Task 4 (Design System Foundation). The navigation structure and page layouts you've created provide the framework for the sophisticated design components and interactive elements that will make your portfolio truly distinctive.

Your layout architecture already tells a story of thoughtful engineering - every component has a clear purpose, accessibility is built-in rather than retrofitted, and the transformer theme enhances rather than interferes with usability. This foundation supports both rapid feature development and long-term maintainability.

## Troubleshooting Common Issues

**Issue**: Navigation state not persisting correctly
**Solution**: Verify that the NavigationProvider is wrapping all components that need navigation state access.

**Issue**: Mobile menu not closing on navigation
**Solution**: Check that the `useEffect` hook in Navigation.tsx is properly listening to pathname changes.

**Issue**: Layout shift during page transitions
**Solution**: Ensure consistent spacing in PageLayout and verify that Framer Motion animations don't affect layout flow.

**Issue**: Accessibility warnings about missing ARIA labels
**Solution**: Review all interactive elements and ensure proper `aria-label` or `aria-labelledby` attributes are present.

The layout system you've built demonstrates the same attention to structure and flow that characterizes well-designed neural networks - every component serves a purpose, information flows logically through the system, and the overall architecture scales gracefully as complexity increases.