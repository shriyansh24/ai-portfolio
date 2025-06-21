'use client';


import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes';

/**
 * ThemeProvider component for the AI Portfolio
 * 
 * Provides transformer-themed dark/light mode switching with system preference detection.
 * The portfolio primarily uses dark theme but provides accessibility through theme switching.
 * 
 * @param children - Child components that will have access to theme context
 * @param props - Additional ThemeProvider props from next-themes
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
      themes={['light', 'dark']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
} 