import React from 'react';
import Link from 'next/link';

/**
 * Footer Component - Neural Network Output Layer
 * 
 * This component serves as the conclusion of the portfolio experience,
 * providing contact information and social links with transformer-themed
 * design elements that suggest information output and connectivity.
 * 
 * @example
 * <Footer />
 */

interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'hover:text-white',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'hover:text-blue-400',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:your.email@example.com',
    color: 'hover:text-primary-400',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    label: 'Twitter',
    href: 'https://twitter.com/yourusername',
    color: 'hover:text-blue-400',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Neural Network Background Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-secondary-500 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-tertiary-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary-500 rounded-full animate-ping delay-700"></div>
        
        {/* Connection lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-500/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {/* Neural Network Logo */}
              <div className="relative">
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-primary-500 opacity-60"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-xl">AI Portfolio</h3>
                <p className="text-gray-400 text-sm">Neural Networks & Engineering Excellence</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Exploring the intersection of electronics engineering and artificial intelligence 
              through innovative projects and transformer-inspired design patterns. 
              Every connection matters in the neural network of innovation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`
                    text-gray-400 ${link.color} transition-all duration-200 
                    p-2 rounded-lg hover:bg-gray-800/50 hover:scale-110
                    relative group
                  `}
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.icon}
                  
                  {/* Neural activation indicator */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-1 h-1 bg-tertiary-500 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded border border-gray-700 whitespace-nowrap">
                      {link.label}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span>Navigation</span>
              <div className="ml-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <span className="relative">
                    {link.label}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-primary-500 group-hover:w-full transition-all duration-300"></div>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <span>Connect</span>
              <div className="ml-2 w-2 h-2 bg-secondary-500 rounded-full animate-pulse delay-100"></div>
            </h4>
            <div className="space-y-3 text-sm">
              <div className="text-gray-400">
                <p>Open to opportunities in:</p>
                <ul className="mt-1 space-y-1 text-gray-500">
                  <li>• Electronics Engineering</li>
                  <li>• Data Science & AI</li>
                  <li>• Research Collaboration</li>
                </ul>
              </div>
              
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200 group"
                >
                  <span>Get in touch</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} AI Portfolio. Crafted with neural network precision.
          </div>
          
          <div className="flex items-center space-x-4 text-gray-500 text-xs">
            <span className="flex items-center">
              <div className="w-1 h-1 bg-primary-500 rounded-full mr-2 animate-pulse"></div>
              Next.js & TypeScript
            </span>
            <span className="flex items-center">
              <div className="w-1 h-1 bg-secondary-500 rounded-full mr-2 animate-pulse delay-100"></div>
              Tailwind CSS
            </span>
            <span className="flex items-center">
              <div className="w-1 h-1 bg-tertiary-500 rounded-full mr-2 animate-pulse delay-200"></div>
              Transformer Theme
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 