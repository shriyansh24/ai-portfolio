'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

/**
 * Error Boundary Component - Neural Network Error Handler
 *
 * This component catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI with transformer-themed styling. It maintains the
 * neural network aesthetic while providing helpful error information.
 *
 * @example
 * <ErrorBoundary fallback={<CustomErrorUI />}>
 *   <YourComponent />
 * </ErrorBoundary>
 */

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error information for debugging
    console.error(
      'Neural Network Error Boundary caught an error:',
      error,
      errorInfo
    );

    // Update state with error details
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false });
  };

  override render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default neural network-themed error UI
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
          <div className="max-w-2xl w-full text-center">
            {/* Neural Network Error Icon */}
            <div className="mb-8 relative">
              <div className="w-24 h-24 mx-auto relative">
                {/* Animated neural network nodes */}
                <div className="absolute inset-0 rounded-full border-2 border-primary-500 opacity-30 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border-2 border-secondary-500 opacity-50 animate-pulse delay-100"></div>
                <div className="absolute inset-4 rounded-full border-2 border-tertiary-500 opacity-70 animate-pulse delay-200"></div>

                {/* Error symbol in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-secondary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-4xl font-bold text-white mb-4">
              Neural Network
              <span className="block text-primary-500">Connection Error</span>
            </h1>

            {/* Error Description */}
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A disruption occurred in the information flow. The transformer
              layers are working to re-establish optimal attention patterns.
            </p>

            {/* Technical Details (Development Mode) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8 text-left">
                <h3 className="text-secondary-500 font-semibold mb-3">
                  Debug Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-tertiary-500 font-medium">
                      Error:
                    </span>
                    <code className="block mt-1 text-gray-300 bg-black p-2 rounded">
                      {this.state.error.message}
                    </code>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <span className="text-tertiary-500 font-medium">
                        Stack Trace:
                      </span>
                      <code className="block mt-1 text-gray-300 bg-black p-2 rounded max-h-40 overflow-y-auto">
                        {this.state.errorInfo.componentStack}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-primary-500 hover:bg-primary-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Reinitialize Network
              </button>

              <button
                onClick={() => window.location.reload()}
                className="border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Full System Reset
              </button>
            </div>

            {/* Neural Network Background Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary-500 rounded-full animate-ping delay-300"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-tertiary-500 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary-500 rounded-full animate-ping delay-700"></div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Hook version of Error Boundary for functional components
 * Note: This is a placeholder - React doesn't currently support error boundaries in hooks
 * Use the class component above for actual error boundary functionality
 */
export function useErrorBoundary() {
  return {
    resetError: () => {
      // This would need to be implemented with a library like react-error-boundary
      console.log('Error boundary reset requested');
    },
  };
}

export default ErrorBoundary;
