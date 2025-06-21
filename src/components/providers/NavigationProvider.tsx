'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * Navigation context interface representing the attention mechanism state
 * This mimics how transformers maintain attention weights across layers
 */
interface NavigationContextType {
  /** Current navigation state - whether we're transitioning between pages */
  isNavigating: boolean;
  /** Function to set navigation state */
  setIsNavigating: (navigating: boolean) => void;
  
  /** Current focused section - represents attention focus */
  focusedSection: string | null;
  /** Function to set the focused section */
  setFocusedSection: (section: string | null) => void;
  
  /** Attention weights for related sections - maps section to relevance score */
  attentionWeights: Record<string, number>;
  /** Function to update attention weights based on user interaction */
  updateAttentionWeights: (weights: Record<string, number>) => void;
  
  /** Navigation transition state for coordinated animations */
  transitionState: 'idle' | 'entering' | 'exiting';
  /** Function to set transition state */
  setTransitionState: (state: 'idle' | 'entering' | 'exiting') => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

/**
 * NavigationProvider component that manages global navigation state
 * 
 * This provider implements the attention mechanism concept from transformers,
 * where different sections can "attend" to each other based on user interactions.
 * It coordinates page transitions and maintains attention weights between sections.
 * 
 * @param children - Child components that need access to navigation state
 */
export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [focusedSection, setFocusedSection] = useState<string | null>(null);
  const [attentionWeights, setAttentionWeights] = useState<Record<string, number>>({});
  const [transitionState, setTransitionState] = useState<'idle' | 'entering' | 'exiting'>('idle');

  /**
   * Updates attention weights for related sections
   * This simulates how attention mechanisms in transformers assign weights to different inputs
   */
  const updateAttentionWeights = useCallback((weights: Record<string, number>) => {
    setAttentionWeights(prev => ({
      ...prev,
      ...weights
    }));
  }, []);

  const value: NavigationContextType = {
    isNavigating,
    setIsNavigating,
    focusedSection,
    setFocusedSection,
    attentionWeights,
    updateAttentionWeights,
    transitionState,
    setTransitionState,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

/**
 * Custom hook to access navigation context
 * 
 * This hook provides access to the navigation state and attention mechanisms
 * throughout the application, similar to how attention weights are shared
 * across transformer layers.
 * 
 * @returns NavigationContextType - The navigation context with state and actions
 * @throws Error if used outside NavigationProvider
 */
export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

/**
 * Hook for managing attention weights in specific components
 * 
 * This provides a convenient way for components to interact with the attention system
 * 
 * @param sectionId - The ID of the current section
 * @returns Object with attention utilities for the section
 */
export function useAttention(sectionId: string) {
  const { focusedSection, setFocusedSection, attentionWeights, updateAttentionWeights } = useNavigation();
  
  const isActive = focusedSection === sectionId;
  const attentionWeight = attentionWeights[sectionId] || 0;
  
  const focus = useCallback(() => {
    setFocusedSection(sectionId);
  }, [sectionId, setFocusedSection]);
  
  const blur = useCallback(() => {
    if (focusedSection === sectionId) {
      setFocusedSection(null);
    }
  }, [sectionId, focusedSection, setFocusedSection]);
  
  const setWeight = useCallback((weight: number) => {
    updateAttentionWeights({ [sectionId]: weight });
  }, [sectionId, updateAttentionWeights]);
  
  return {
    isActive,
    attentionWeight,
    focus,
    blur,
    setWeight,
  };
} 