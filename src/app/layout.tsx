import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { NavigationProvider } from '@/components/providers/NavigationProvider';
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider';

/**
 * Inter font configuration for modern, technical aesthetic
 * Inter provides excellent readability for technical content while maintaining
 * a contemporary feel that aligns with the AI/transformer theme
 */
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

/**
 * Enhanced metadata configuration for AI Portfolio
 * Implements comprehensive SEO strategy with transformer theme branding
 */
export const metadata: Metadata = {
  title: {
    default: 'AI Portfolio - Electronics Engineering & Data Science',
    template: '%s | AI Portfolio'
  },
  description: 'Transformer-themed portfolio showcasing expertise in electronics engineering and data science through innovative interactive design and neural network-inspired navigation.',
  keywords: [
    'electronics engineering', 
    'data science', 
    'ai', 
    'transformer', 
    'portfolio', 
    'machine learning',
    'neural networks',
    'deep learning',
    'interactive design',
    'web development'
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AI Portfolio - Electronics Engineering & Data Science',
    description: 'Transformer-themed portfolio showcasing expertise in electronics engineering and data science through innovative interactive design.',
    siteName: 'AI Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Portfolio - Transformer-themed design showcasing technical expertise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Portfolio - Electronics Engineering & Data Science',
    description: 'Transformer-themed portfolio showcasing expertise in electronics engineering and data science.',
    creator: '@yourusername',
    images: ['/twitter-image.jpg'],
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
  category: 'technology',
};

/**
 * Viewport configuration optimized for transformer visualizations
 * Ensures proper scaling and color scheme detection
 */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF8C42' },
    { media: '(prefers-color-scheme: dark)', color: '#FF8C42' }
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Root Layout Component
 * 
 * Establishes the transformer-themed foundation with:
 * - Neural network-inspired provider architecture
 * - Warm-on-black color foundation
 * - Accessibility-first design principles
 * - SEO optimization for technical portfolio discovery
 * 
 * @param children - Page components that inherit this layout foundation
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-inter bg-black text-warm-white antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <NavigationProvider>
              <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black">
                <main className="flex-1 relative">
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
