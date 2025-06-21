import React from 'react';
import Link from 'next/link';

/**
 * Header Component - Neural Network Navigation Layer
 *
 * This component serves as the primary navigation interface for the AI portfolio,
 * featuring transformer-themed design elements and attention-based interaction patterns.
 *
 * @example
 * <Header />
 */

interface NavItem {
  id: string;
  label: string;
  href: string;
  description: string;
}

const navigationItems: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    href: '#about',
    description: 'Personal background and philosophy',
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '#projects',
    description: 'Technical achievements and innovations',
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '#experience',
    description: 'Professional and academic journey',
  },
  {
    id: 'skills',
    label: 'Skills',
    href: '#skills',
    description: 'Technical competencies and expertise',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    description: 'Connect and collaborate',
  },
];

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Neural Network Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 relative">
                  {/* Outer neural ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary-500 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"></div>

                  {/* Inner processing node */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 opacity-80 group-hover:opacity-100 transition-all duration-300"></div>

                  {/* Center core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  {/* Connection indicators */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-tertiary-500 rounded-full opacity-70 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-secondary-500 rounded-full opacity-70 group-hover:opacity-100 animate-pulse delay-200"></div>
                </div>
              </div>

              {/* Brand Text */}
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg">AI Portfolio</div>
                <div className="text-xs text-gray-400 -mt-1">
                  Neural Networks & Engineering
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map(item => (
              <Link
                key={item.id}
                href={item.href}
                className="group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800/50"
              >
                {/* Nav item text */}
                <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-200">
                  {item.label}
                </span>

                {/* Neural connection indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></div>

                {/* Attention weight indicator */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-2 h-2 bg-tertiary-500 rounded-full animate-ping"></div>
                </div>

                {/* Tooltip on hover */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg border border-gray-700 whitespace-nowrap">
                    {item.description}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45"></div>
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
              aria-label="Open navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Neural Network Background Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
            <div className="absolute top-2 left-1/4 w-1 h-1 bg-primary-500 rounded-full animate-ping"></div>
            <div className="absolute top-4 right-1/3 w-1 h-1 bg-secondary-500 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-2 left-1/3 w-1 h-1 bg-tertiary-500 rounded-full animate-ping delay-500"></div>
            <div className="absolute bottom-4 right-1/4 w-1 h-1 bg-primary-500 rounded-full animate-ping delay-700"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
