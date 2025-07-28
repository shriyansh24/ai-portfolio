import Link from 'next/link';
import { Brain, ArrowLeft } from 'lucide-react';

/**
 * 404 Not Found Page - Transformer Theme
 * 
 * This page provides a user-friendly 404 experience while maintaining
 * the neural network aesthetic. It helps users navigate back to the
 * main portfolio sections.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        {/* Neural Network Icon */}
        <div className="flex justify-center">
          <Brain className="w-16 h-16 text-primary animate-neural-pulse" />
        </div>
        
        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gradient-neural">404</h1>
          <h2 className="text-2xl font-bold text-warm-white">
            Neural Path Not Found
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The attention mechanism couldn&apos;t locate the requested page. 
            This neural pathway may have been pruned or never existed in the network.
          </p>
        </div>
        
        {/* Navigation Back */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Return to Input Layer</span>
          </Link>
          
          <div className="text-sm text-gray-500">
            Navigate back to the main neural network
          </div>
        </div>
      </div>
    </div>
  );
} 