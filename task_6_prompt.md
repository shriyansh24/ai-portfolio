# Task 6: Performance Optimization Layer - AI Portfolio Website

## Context and Strategic Understanding

You are now implementing the neural network's optimization algorithm that ensures efficient information processing throughout your transformer-themed portfolio. Just as transformer models rely on careful optimization to maintain stable training and efficient inference, your website requires systematic performance optimization to deliver the lightning-fast experience that users demand in 2025.

This task represents the critical difference between a portfolio that impresses with features and one that impresses with professional execution. Research shows that users will likely abandon a website if it takes more than 4 seconds to load, and 53% of mobile users will abandon a site that takes more than three seconds to load. In the competitive field of engineering roles, your portfolio's performance directly reflects your understanding of system optimization and attention to user experience.

## Learning Objectives and Professional Impact

By completing this task, you will demonstrate mastery of modern web performance optimization while showcasing your ability to think systematically about efficiency and scalability. Your performance optimizations will serve as evidence of your understanding of both technical constraints and user experience principles - skills that distinguish senior engineers who can build systems that work well at scale.

## Understanding Modern Performance Architecture in 2025

### The Performance Landscape Evolution

Core Web Vitals were released four years ago and continue to evolve with new metrics like Interaction to Next Paint (INP) replacing First Input Delay (FID). The 2025 performance optimization landscape focuses on three critical areas:

1. **Real User Monitoring (RUM)**: Moving beyond synthetic testing to understand actual user experiences
2. **Core Web Vitals Optimization**: Specifically targeting LCP, CLS, and the new INP metric
3. **AI-Powered Performance Tools**: Leveraging intelligent optimization and predictive performance monitoring

### The "Don't Make Me Wait" Philosophy

The theme of modern React and Next.js development in 2025 is "Don't make me wait" - users should never wait for data to come in, a page to render, or layouts to shift. This philosophy drives every optimization decision in your transformer-themed portfolio.

### Next.js Performance Advantages in 2025

Next.js 2025 improvements include enhanced SSR, CSR, ISR, SSG capabilities, server components, and streaming to choose the best rendering approaches for speed and up-to-date content. These features provide the foundation for building high-performance applications that scale effectively.

## Step-by-Step Implementation Guide

### Step 1: Performance Monitoring and Baseline Establishment

Before optimizing anything, establish comprehensive performance monitoring that provides both synthetic and real user data.

**File: `src/lib/performance/monitoring.ts`**

```typescript
'use client';

import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

// Core Web Vitals tracking
export function initPerformanceMonitoring() {
  // Track Core Web Vitals
  getCLS(sendToAnalytics);
  getFCP(sendToAnalytics);
  getFID(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
  
  // Track custom metrics specific to transformer theme
  trackNeuralAnimationPerformance();
  trackInteractionToNextPaint();
}

function sendToAnalytics(metric: any) {
  // Send to your analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      custom_parameter_1: metric.value,
      custom_parameter_2: metric.id,
      custom_parameter_3: metric.name,
    });
  }
  
  // Log performance data for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance Metric - ${metric.name}:`, {
      value: metric.value,
      id: metric.id,
      rating: metric.rating,
      delta: metric.delta,
      navigationType: metric.navigationType,
    });
  }
}

// Track transformer-specific animations performance
function trackNeuralAnimationPerformance() {
  if (typeof window === 'undefined') return;
  
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.name.includes('neural') || entry.name.includes('attention')) {
        console.log(`Neural Animation Performance:`, {
          name: entry.name,
          duration: entry.duration,
          startTime: entry.startTime,
        });
      }
    });
  });
  
  observer.observe({ entryTypes: ['measure', 'mark'] });
}

// Track Interaction to Next Paint (INP) - Critical for 2025
function trackInteractionToNextPaint() {
  if (typeof window === 'undefined') return;
  
  let maxINP = 0;
  
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      if (entry.interactionId) {
        const inp = entry.processingStart - entry.startTime;
        maxINP = Math.max(maxINP, inp);
        
        if (inp > 200) { // Threshold for poor INP
          console.warn(`Poor INP detected: ${inp}ms for interaction:`, entry);
          sendToAnalytics({
            name: 'INP',
            value: inp,
            id: `inp-${Date.now()}`,
            rating: inp > 200 ? 'poor' : inp > 50 ? 'needs-improvement' : 'good'
          });
        }
      }
    });
  });
  
  observer.observe({ type: 'event', buffered: true });
}

// Performance budget monitoring
export function checkPerformanceBudgets() {
  if (typeof window === 'undefined') return;
  
  const budget = {
    maxBundleSize: 250, // KB
    maxImageSize: 500,  // KB
    maxTotalSize: 1000, // KB
    maxLCP: 2500,      // ms
    maxCLS: 0.1,       // score
    maxINP: 200,       // ms
  };
  
  // Monitor bundle size
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    const totalSize = navigationEntry.transferSize / 1024; // Convert to KB
    
    if (totalSize > budget.maxTotalSize) {
      console.warn(`Performance Budget Exceeded: Total size ${totalSize.toFixed(2)}KB > ${budget.maxTotalSize}KB`);
    }
  }
}
```

**Teaching Moment:** Set up RUM to notify you when performance starts deviating. Monitoring your website's performance over time is essential to identify trends and address issues promptly. This monitoring system provides the data-driven foundation for all optimization decisions.

### Step 2: Image Optimization for Neural Network Visualizations

Optimize images specifically for your transformer theme while maintaining visual quality for technical demonstrations.

**File: `src/components/optimized/OptimizedImage.tsx`**

```typescript
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
  neuralTheme?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  placeholder = 'blur',
  quality = 85,
  sizes,
  neuralTheme = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate optimized blur placeholder for neural theme
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    
    if (ctx) {
      // Create neural network pattern for blur
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, '#FF8C42');
      gradient.addColorStop(0.5, '#FFD93D');
      gradient.addColorStop(1, '#FF6B6B');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }
    
    return canvas.toDataURL();
  };

  const defaultBlurDataURL = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF8C42;stop-opacity:0.1" />
          <stop offset="50%" style="stop-color:#FFD93D;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#FF6B6B;stop-opacity:0.1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>`
  ).toString('base64')}`;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes || `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
        placeholder={placeholder}
        blurDataURL={props.blurDataURL || defaultBlurDataURL}
        className={cn(
          'transition-all duration-500',
          isLoading && 'scale-105 blur-sm',
          !isLoading && 'scale-100 blur-0',
          hasError && 'opacity-50',
          neuralTheme && 'hover:scale-105 transition-transform duration-300'
        )}
        onLoad={() => {
          setIsLoading(false);
          // Mark performance for neural image loading
          performance.mark(`neural-image-loaded-${src}`);
        }}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
      
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-golden-orange/20 to-warm-amber/20 animate-pulse" />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
}
```

**File: `next.config.js` (Enhanced)**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization for transformer theme
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    gzipSize: true,
  },
  
  // Compression
  compress: true,
  
  // Bundle analyzer (conditional)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../bundle-analyzer-report.html',
          })
        );
      }
      return config;
    },
  }),
  
  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

**Teaching Moment:** Images are the most popular thing to optimize when it comes to web performance, but once you've done basic image optimization, your problems are probably more likely to be loading priorities, order, and render-blocking resources. This optimization focuses on both image quality and loading strategy.

### Step 3: Advanced Code Splitting and Bundle Optimization

Implement intelligent code splitting that aligns with your transformer theme's modular architecture.

**File: `src/components/optimized/LazyComponents.tsx`**

```typescript
'use client';

import dynamic from 'next/dynamic';
import { Loading } from '@/components/ui/Loading';
import { Suspense } from 'react';

// Lazy load heavy neural network visualizations
export const NeuralNetworkVisualization = dynamic(
  () => import('@/components/visualizations/NeuralNetworkVisualization'),
  {
    loading: () => <Loading variant="neural" text="Loading Neural Network..." />,
    ssr: false, // Client-side only for performance
  }
);

// Lazy load Three.js components
export const ThreeJSScene = dynamic(
  () => import('@/components/three/ThreeJSScene'),
  {
    loading: () => <Loading variant="neural" text="Initializing 3D Environment..." />,
    ssr: false,
  }
);

// Lazy load interactive demos
export const InteractiveDemo = dynamic(
  () => import('@/components/demos/InteractiveDemo'),
  {
    loading: () => <Loading variant="dots" text="Loading Demo..." />,
    ssr: false,
  }
);

// Lazy load contact form with validation
export const ContactForm = dynamic(
  () => import('@/components/forms/ContactForm'),
  {
    loading: () => <Loading variant="minimal" text="Loading Form..." />,
    ssr: false,
  }
);

// Preload critical components
export const preloadCriticalComponents = () => {
  const preload = dynamic(() => import('@/components/sections/HeroSection'));
  const preload2 = dynamic(() => import('@/components/sections/AboutSection'));
  const preload3 = dynamic(() => import('@/components/sections/ProjectsSection'));
};

// Component wrapper with performance tracking
export function PerformanceTrackedComponent({ 
  children, 
  componentName 
}: { 
  children: React.ReactNode;
  componentName: string;
}) {
  React.useEffect(() => {
    performance.mark(`${componentName}-mount-start`);
    
    return () => {
      performance.mark(`${componentName}-mount-end`);
      performance.measure(
        `${componentName}-mount-duration`,
        `${componentName}-mount-start`,
        `${componentName}-mount-end`
      );
    };
  }, [componentName]);

  return <>{children}</>;
}
```

**File: `src/hooks/useIntersectionObserver.ts`**

```typescript
'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        if (isElementIntersecting) {
          setIsIntersecting(true);
          setHasIntersected(true);
          
          // Performance tracking for transformer components
          performance.mark(`component-visible-${element.id || 'unknown'}`);
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isIntersecting, hasIntersected };
}
```

### Step 4: Font Loading Optimization for Neural Theme

Optimize font loading to maintain visual consistency while maximizing performance.

**File: `src/styles/fonts.ts`**

```typescript
import { Inter, JetBrains_Mono } from 'next/font/google';

// Primary font for neural network theme
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  // Optimize for core characters
  weight: ['400', '500', '600', '700'],
});

// Monospace font for code and technical content
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: false, // Lazy load since not critical
  weight: ['400', '500'],
});

// Font loading optimization
export const fontOptimizationCSS = `
  /* Ensure text remains visible during font load */
  .font-inter {
    font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
  }
  
  .font-mono {
    font-family: var(--font-jetbrains-mono), 'SF Mono', Monaco, 'Cascadia Code', monospace;
  }
  
  /* Prevent layout shift during font loading */
  @font-face {
    font-family: 'Inter-fallback';
    size-adjust: 107%;
    ascent-override: 90%;
    src: local('BlinkMacSystemFont'), local('Segoe UI'), local('Helvetica Neue'), local('Arial');
  }
`;
```

**Teaching Moment:** In addition to optimizing images, you need to make sure that text shows immediately after the page starts rendering. Preloading fonts is usually good practice, but preload only the 2-3 most important fonts. This approach ensures typography doesn't block rendering.

### Step 5: Third-Party Script Optimization

Optimize external scripts without compromising transformer theme functionality.

**File: `src/components/optimized/OptimizedScripts.tsx`**

```typescript
'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export function OptimizedScripts() {
  const [scriptsLoaded, setScriptsLoaded] = useState({
    analytics: false,
    performance: false,
  });

  // Critical scripts loaded immediately
  return (
    <>
      {/* Google Analytics - defer until after interaction */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          setScriptsLoaded(prev => ({ ...prev, analytics: true }));
          console.log('Analytics loaded');
        }}
      />
      
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Performance monitoring - lazy load */}
      <Script
        id="performance-monitoring"
        strategy="lazyOnload"
        onLoad={() => {
          setScriptsLoaded(prev => ({ ...prev, performance: true }));
          // Initialize performance monitoring after script loads
          if (typeof window !== 'undefined') {
            import('@/lib/performance/monitoring').then(({ initPerformanceMonitoring }) => {
              initPerformanceMonitoring();
            });
          }
        }}
      >
        {`
          // Performance monitoring initialization
          (function() {
            // Track neural animation performance
            if ('PerformanceObserver' in window) {
              const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                  if (entry.name.includes('neural') || entry.name.includes('transformer')) {
                    console.log('Neural component performance:', entry);
                  }
                });
              });
              observer.observe({entryTypes: ['measure', 'mark']});
            }
          })();
        `}
      </Script>
    </>
  );
}
```

### Step 6: Advanced Caching Strategy

Implement intelligent caching that optimizes both static and dynamic content.

**File: `src/middleware.ts`**

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Cache static assets aggressively
  if (request.nextUrl.pathname.startsWith('/static/') || 
      request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }

  // Cache API responses with shorter TTL
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=300, stale-while-revalidate=60'
    );
  }

  // Performance headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Enable compression hints
  response.headers.set('Vary', 'Accept-Encoding');

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

**File: `src/lib/cache/redis-cache.ts`**

```typescript
// Simple in-memory cache for development, Redis for production
class SimpleCache {
  private cache = new Map<string, { data: any; expiry: number }>();

  set(key: string, value: any, ttlSeconds: number = 300) {
    const expiry = Date.now() + ttlSeconds * 1000;
    this.cache.set(key, { data: value, expiry });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }

  delete(key: string) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }
}

export const cache = new SimpleCache();

// Cache wrapper for API responses
export function withCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  const cached = cache.get(key);
  if (cached) return Promise.resolve(cached);

  return fetcher().then(data => {
    cache.set(key, data, ttlSeconds);
    return data;
  });
}
```

### Step 7: Core Web Vitals Optimization

Implement specific optimizations for the 2025 Core Web Vitals metrics.

**File: `src/components/optimized/CoreWebVitalsOptimizer.tsx`**

```typescript
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function CoreWebVitalsOptimizer() {
  const router = useRouter();

  useEffect(() => {
    // Optimize for Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Preload critical resources
      const criticalImages = document.querySelectorAll('img[data-priority="high"]');
      criticalImages.forEach((img) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = img.getAttribute('src') || '';
        link.as = 'image';
        document.head.appendChild(link);
      });

      // Prioritize hero image loading
      const heroImage = document.querySelector('[data-hero-image]');
      if (heroImage) {
        heroImage.setAttribute('fetchpriority', 'high');
      }
    };

    // Optimize for Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Reserve space for dynamic content
      const dynamicContainers = document.querySelectorAll('[data-dynamic-content]');
      dynamicContainers.forEach((container) => {
        const height = container.getAttribute('data-min-height');
        if (height) {
          (container as HTMLElement).style.minHeight = height;
        }
      });

      // Add size attributes to images without dimensions
      const unsizedImages = document.querySelectorAll('img:not([width]):not([height])');
      unsizedImages.forEach((img) => {
        img.addEventListener('load', () => {
          performance.mark('image-loaded-without-dimensions');
        });
      });
    };

    // Optimize for Interaction to Next Paint (INP)
    const optimizeINP = () => {
      // Debounce rapid interactions
      let interactionTimeout: NodeJS.Timeout;
      
      const handleInteraction = (event: Event) => {
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
          performance.mark(`interaction-${event.type}-${Date.now()}`);
        }, 16); // One frame delay
      };

      // Monitor critical interactions
      ['click', 'touchstart', 'keydown'].forEach(eventType => {
        document.addEventListener(eventType, handleInteraction, { passive: true });
      });

      // Optimize neural animation interactions
      const neuralElements = document.querySelectorAll('[data-neural-interactive]');
      neuralElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          performance.mark('neural-interaction-start');
        }, { passive: true });
      });
    };

    // Initialize optimizations
    optimizeLCP();
    optimizeCLS();
    optimizeINP();

    // Monitor performance budgets
    const checkBudgets = () => {
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        if (memoryInfo.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
          console.warn('Memory usage exceeding budget:', memoryInfo);
        }
      }
    };

    const budgetInterval = setInterval(checkBudgets, 30000); // Check every 30s

    return () => {
      clearInterval(budgetInterval);
    };
  }, []);

  return null; // This component only provides optimization logic
}
```

### Step 8: Performance Testing and Monitoring Setup

Create comprehensive performance testing infrastructure.

**File: `src/lib/testing/performance-tests.ts`**

```typescript
// Performance testing utilities
export class PerformanceTester {
  private metrics: Map<string, number[]> = new Map();

  startTest(testName: string) {
    performance.mark(`${testName}-start`);
  }

  endTest(testName: string) {
    performance.mark(`${testName}-end`);
    performance.measure(testName, `${testName}-start`, `${testName}-end`);
    
    const measure = performance.getEntriesByName(testName, 'measure')[0];
    if (measure) {
      this.recordMetric(testName, measure.duration);
    }
  }

  recordMetric(name: string, value: number) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)!.push(value);
  }

  getAverageMetric(name: string): number {
    const values = this.metrics.get(name) || [];
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  }

  generateReport(): PerformanceReport {
    const report: PerformanceReport = {
      timestamp: Date.now(),
      metrics: {},
      recommendations: [],
    };

    this.metrics.forEach((values, name) => {
      const average = this.getAverageMetric(name);
      report.metrics[name] = {
        average,
        min: Math.min(...values),
        max: Math.max(...values),
        count: values.length,
      };

      // Generate recommendations
      if (name.includes('neural') && average > 100) {
        report.recommendations.push({
          type: 'performance',
          severity: 'medium',
          message: `Neural animation ${name} averaging ${average.toFixed(2)}ms - consider optimization`,
        });
      }
    });

    return report;
  }
}

interface PerformanceReport {
  timestamp: number;
  metrics: Record<string, {
    average: number;
    min: number;
    max: number;
    count: number;
  }>;
  recommendations: Array<{
    type: string;
    severity: 'low' | 'medium' | 'high';
    message: string;
  }>;
}

// Global performance tester instance
export const performanceTester = new PerformanceTester();
```

**File: `src/lib/testing/lighthouse-budget.json`**

```json
{
  "budgets": [
    {
      "path": "/*",
      "timings": [
        {
          "metric": "first-contentful-paint",
          "budget": 2000
        },
        {
          "metric": "largest-contentful-paint",
          "budget": 2500
        },
        {
          "metric": "cumulative-layout-shift",
          "budget": 0.1
        },
        {
          "metric": "total-blocking-time",
          "budget": 300
        }
      ],
      "resourceSizes": [
        {
          "resourceType": "script",
          "budget": 250
        },
        {
          "resourceType": "image",
          "budget": 500
        },
        {
          "resourceType": "stylesheet",
          "budget": 50
        },
        {
          "resourceType": "total",
          "budget": 1000
        }
      ]
    }
  ]
}
```

### Step 9: Performance-Optimized Build Configuration

Configure the build process for maximum optimization.

**File: `package.json` (Enhanced Scripts)**

```json
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "build:analyze": "ANALYZE=true next build",
    "build:profile": "next build --profile",
    "start": "next start",
    "perf:lighthouse": "lighthouse http://localhost:3000 --output=html --output-path=./performance-reports/lighthouse.html --budget-path=./src/lib/testing/lighthouse-budget.json",
    "perf:bundle": "npm run build:analyze && open .next/analyze/client.html",
    "perf:audit": "npm run build && npm run perf:lighthouse",
    "perf:test": "node scripts/performance-test.js"
  }
}
```

**File: `scripts/performance-test.js`**

```javascript
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

async function runPerformanceTest() {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  
  const runnerResult = await lighthouse('http://localhost:3000', options);
  
  // Extract performance metrics
  const report = runnerResult.report;
  const reportJson = JSON.parse(report);
  
  const metrics = {
    'first-contentful-paint': reportJson.audits['first-contentful-paint'].numericValue,
    'largest-contentful-paint': reportJson.audits['largest-contentful-paint'].numericValue,
    'cumulative-layout-shift': reportJson.audits['cumulative-layout-shift'].numericValue,
    'total-blocking-time': reportJson.audits['total-blocking-time'].numericValue,
    'speed-index': reportJson.audits['speed-index'].numericValue,
  };
  
  // Check against budgets
  const budgets = {
    'first-contentful-paint': 2000,
    'largest-contentful-paint': 2500,
    'cumulative-layout-shift': 0.1,
    'total-blocking-time': 300,
    'speed-index': 3000,
  };
  
  console.log('Performance Test Results:');
  console.log('========================');
  
  Object.entries(metrics).forEach(([metric, value]) => {
    const budget = budgets[metric];
    const passed = value <= budget;
    const status = passed ? '✅ PASS' : '❌ FAIL';
    
    console.log(`${metric}: ${value}ms (Budget: ${budget}ms) ${status}`);
  });
  
  // Save detailed report
  fs.writeFileSync(
    './performance-reports/lighthouse-report.json',
    JSON.stringify(reportJson, null, 2)
  );
  
  await chrome.kill();
}

runPerformanceTest().catch(console.error);
```

## Quality Assurance and Performance Testing

### Step 1: Core Web Vitals Validation

Test your optimization against 2025 Core Web Vitals thresholds:

```bash
# Run comprehensive performance audit
npm run perf:audit

# Check bundle size impact
npm run perf:bundle

# Test on mobile devices
npm run lighthouse -- --preset=mobile

# Monitor real user metrics
npm run dev # Then visit /api/analytics/performance
```

### Step 2: Load Testing

Validate performance under various conditions:

```bash
# Test with throttled network
npm run lighthouse -- --throttling-method=devtools --throttling.cpuSlowdownMultiplier=4

# Test on low-end devices
npm run lighthouse -- --preset=mobile --throttling.cpuSlowdownMultiplier=6

# Test with disabled JavaScript (for SSR validation)
npm run lighthouse -- --disable-device-emulation --chrome-flags="--disable-javascript"
```

### Step 3: Continuous Performance Monitoring

Set up ongoing performance tracking:

```typescript
// Add to your CI/CD pipeline
const performanceThresholds = {
  lcp: 2500,
  cls: 0.1,
  inp: 200,
  fcp: 1800,
  tbt: 300,
};

// Fail build if performance budgets exceeded
if (performanceResults.lcp > performanceThresholds.lcp) {
  throw new Error(`LCP budget exceeded: ${performanceResults.lcp}ms > ${performanceThresholds.lcp}ms`);
}
```

## Success Criteria

You have successfully completed Task 6 when:

1. **Core Web Vitals**: All metrics consistently score "Good" (LCP < 2.5s, CLS < 0.1, INP < 200ms)
2. **Performance Score**: Lighthouse performance score consistently above 90
3. **Bundle Size**: JavaScript bundle under 250KB, total page size under 1MB
4. **Loading Speed**: First Contentful Paint under 1.8 seconds
5. **Mobile Performance**: Mobile scores within 10% of desktop performance
6. **Real User Metrics**: 95th percentile loading times meet targets

## Professional Development Insights

**Performance Excellence Demonstrates Senior Thinking**: Users often abandon apps with a load time exceeding three seconds, leading to higher bounce rates and decreased conversions. Your systematic approach to performance optimization shows understanding of business impact beyond just technical metrics.

**Modern Performance Practices**: In 2025, developers face mounting challenges as users demand seamless, lightning-fast web experiences. Key hurdles include improving metrics like INP, reducing third-party dependencies, and leveraging Chrome DevTools' latest features. Your implementation addresses these current challenges.

**Data-Driven Optimization**: Guesswork kills performance. Tools like Lighthouse, WebPageTest, and Chrome DevTools are essential for identifying real bottlenecks. Your monitoring system provides the foundation for informed optimization decisions.

## Next Steps Preparation

With performance optimization complete, your transformer-themed portfolio demonstrates both visual innovation and technical excellence. The optimizations you've implemented ensure that your sophisticated features enhance rather than compromise user experience.

Your portfolio now showcases the complete engineering skillset: creative problem-solving through the transformer theme, systematic architecture through your component design, and professional execution through performance optimization. This combination distinguishes portfolios that secure senior engineering roles.

## Troubleshooting Common Issues

**Issue**: Core Web Vitals scores fluctuating
**Solution**: Implement consistent performance monitoring and check for third-party script interference.

**Issue**: Bundle size growing unexpectedly
**Solution**: Regular bundle analysis and aggressive tree-shaking of unused dependencies.

**Issue**: Mobile performance lagging behind desktop
**Solution**: Focus on image optimization and reduce JavaScript execution for mobile devices.

**Issue**: INP scores inconsistent
**Solution**: Profile interaction handlers and implement debouncing for rapid user interactions.

The performance optimization layer you've implemented demonstrates the same systematic efficiency that characterizes well-optimized neural networks - every resource serves a purpose, loading is prioritized intelligently, and the overall system performs predictably under various conditions.